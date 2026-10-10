import { neon } from '@neondatabase/serverless';

export interface InquiryRecord {
  id?: number;
  name: string;
  phone: string;
  email?: string;
  service_type: string;
  guest_count?: number;
  event_date?: string;
  notes?: string;
  created_at?: string;
}

// In-memory fallback for instant local preview if DATABASE_URL is not yet provided
const demoInquiries: InquiryRecord[] = [
  {
    id: 1,
    name: "Eleanor Vance",
    phone: "0428 512 890",
    email: "eleanor.tours@highcountryvic.com.au",
    service_type: "Tour Bus Morning Tea & Scone Platter",
    guest_count: 36,
    event_date: "2026-10-24",
    notes: "Heritage tour bus group arriving at 10:15 AM. 36 fresh Devonshire scones with house strawberry jam & King Valley double cream, plus barista coffees.",
    created_at: new Date(Date.now() - 3600000 * 24).toISOString(),
  },
  {
    id: 2,
    name: "Marcus Davies",
    phone: "0439 618 204",
    email: "marcus.d@railtrailriders.org",
    service_type: "Gourmet Milawa Picnic Hamper Boxes",
    guest_count: 14,
    event_date: "2026-11-02",
    notes: "Rail Trail cycling group pre-order. 14 picnic hampers with artisan baguettes, local Milawa cheeses, cured meats, and berry tartlets ready for midday collection.",
    created_at: new Date(Date.now() - 3600000 * 8).toISOString(),
  },
  {
    id: 3,
    name: "Clara Hughes",
    phone: "0412 876 345",
    email: "clara.hughes@kingvalleydining.com.au",
    service_type: "Hot Bakery Pie & Savoury Platters",
    guest_count: 22,
    event_date: "2026-10-18",
    notes: "Private winery harvest lunch. Platter of warm beef & burgundy party pies, gourmet sausage rolls, and pumpkin feta tartlets.",
    created_at: new Date(Date.now() - 3600000 * 2).toISOString(),
  }
];

export function getDb() {
  const connectionString = process.env.DATABASE_URL;
  if (!connectionString || connectionString.includes('your_password') || connectionString.includes('placeholder')) {
    return null;
  }
  return neon(connectionString);
}

export async function initDb() {
  const sql = getDb();
  if (!sql) return false;

  try {
    await sql`
      CREATE TABLE IF NOT EXISTS milawa_inquiries (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        phone VARCHAR(50) NOT NULL,
        email VARCHAR(255),
        service_type VARCHAR(100) NOT NULL,
        guest_count INT,
        event_date VARCHAR(50),
        notes TEXT,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `;
    return true;
  } catch (err) {
    console.error('Failed to initialize Neon database table:', err);
    return false;
  }
}

export async function saveInquiry(inquiry: Omit<InquiryRecord, 'id' | 'created_at'>): Promise<InquiryRecord> {
  const sql = getDb();

  if (!sql) {
    const newRecord: InquiryRecord = {
      ...inquiry,
      id: demoInquiries.length + 1,
      created_at: new Date().toISOString()
    };
    demoInquiries.unshift(newRecord);
    return newRecord;
  }

  await initDb();

  const result = await sql`
    INSERT INTO milawa_inquiries (name, phone, email, service_type, guest_count, event_date, notes)
    VALUES (
      ${inquiry.name},
      ${inquiry.phone},
      ${inquiry.email || null},
      ${inquiry.service_type},
      ${inquiry.guest_count || null},
      ${inquiry.event_date || null},
      ${inquiry.notes || null}
    )
    RETURNING id, name, phone, email, service_type, guest_count, event_date, notes, created_at;
  `;

  return result[0] as unknown as InquiryRecord;
}

export async function getInquiries(): Promise<{ inquiries: InquiryRecord[]; isLiveDb: boolean }> {
  const sql = getDb();

  if (!sql) {
    return { inquiries: demoInquiries, isLiveDb: false };
  }

  try {
    await initDb();
    const rows = await sql`
      SELECT id, name, phone, email, service_type, guest_count, event_date, notes, created_at
      FROM milawa_inquiries
      ORDER BY created_at DESC
      LIMIT 50;
    `;
    return { inquiries: rows as unknown as InquiryRecord[], isLiveDb: true };
  } catch (err) {
    console.error('Error fetching from Neon database:', err);
    return { inquiries: demoInquiries, isLiveDb: false };
  }
}
