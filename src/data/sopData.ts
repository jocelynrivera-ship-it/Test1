export interface SOPSection {
  id: string;
  title: string;
  content: string;
  icon?: string;
  subsections?: SOPSection[];
}

export const sopData: SOPSection[] = [
  {
    id: "introduction",
    title: "Introduction",
    icon: "Info",
    content: "Welcome to the BRAINEFFECT Supply Chain Management (SCM) SOP Portal. This interactive document serves as the single source of truth for all SCM processes, responsibilities, and tools.",
    subsections: [
      {
        id: "scm-team",
        title: "SCM Team",
        content: "The SCM team is composed of specialists dedicated to ensuring a seamless supply chain flow.\n\n- **Mateo Ariza**: Teamlead SCM (Inventory Management System, OOS Report)\n- **Julia Hönow**: SCM Manager (PO Overview, Xentral Backup)\n- **Chenye Liu**: SCM Manager (PO Overview)\n- **Saphira Pitka**: Sourcing Manager (Sourcing, PO Overview)"
      },
      {
        id: "scm-meetings",
        title: "SCM Meetings",
        content: "Regular alignment is key to our success:\n\n- **Daily (10:00)**: SCM Daily Standup\n- **Monday (14:30)**: SCM JF & Week Kick-off\n- **Tuesday (10:30)**: Weekly JF BHI / BRAINEFFECT\n- **Thursday (13:00)**: Inventory Planning in IMS\n- **Friday (15:00)**: SCM Week Check-out"
      }
    ]
  },
  {
    id: "xentral-erp",
    title: "Xentral ERP",
    icon: "Database",
    content: "Xentral is our core ERP software used for article management, purchase orders, and stock synchronization.",
    subsections: [
      {
        id: "add-article",
        title: "How to add a new article",
        content: "1. Log in to Xentral.\n2. Go to 'Verkaufen' -> 'Artikel'.\n3. Check if SKU exists using the search bar.\n4. Click 'Neu Anlegen'.\n5. Fill mandatory fields: Article Name, SKU (BEXXXXX), Project (BRAINEFFECT), Category, Supplier.\n6. Set Master Carton details (units, EAN, weight).\n7. Set Warehouse (Alaiko_Main) and Tax (7% for powder/capsules, 19% for liquid/food)."
      },
      {
        id: "create-po",
        title: "How to create a PO",
        content: "1. Go to 'Einkauf' -> 'Bestellungen'.\n2. Click '+New Anlegen'.\n3. Fill 'Lieferant', 'Projekt' (BE_EINKAUF), and 'Bestellungsdatum'.\n4. Add 'Abweichende Lieferadresse' for 3PL Zen if needed.\n5. Add items in 'Positionen' tab with correct quantities and prices.\n6. Review in 'Vorschau' and release the PO."
      }
    ]
  },
  {
    id: "inventory-management",
    title: "Inventory Management",
    icon: "BarChart3",
    content: "We use the IMS (Inventory Management System) spreadsheet to track stock across all warehouses and plan future orders.",
    subsections: [
      {
        id: "ims-overview",
        title: "IMS Spreadsheet",
        content: "The IMS is our primary tool for inventory planning. It combines data from Xentral, Amazon, and Alaiko to provide a holistic view of our stock coverage and sales velocity."
      },
      {
        id: "stock-update",
        title: "Stock Update Process",
        content: "Weekly updates (usually Mondays):\n\n- **Amazon**: Download 'Manage FBA Inventory' report from Seller Central.\n- **Alaiko (Zen)**: Export 'Basic stock level' from Zen portal.\n- **Sync**: Use the Converter tool to format and paste data into the IMS [i] tabs."
      }
    ]
  },
  {
    id: "fulfillment",
    title: "Fulfillment & 3PL",
    icon: "Truck",
    content: "Our fulfillment is primarily handled by Zenfulfillment (Alaiko) and Amazon FBA.",
    subsections: [
      {
        id: "zen-fulfillment",
        title: "Zenfulfillment (Alaiko)",
        content: "Main warehouse address:\nZenfulfillment GmbH c/o Fiege\nTor 19/20/21, Sülzenbrücker Str. 7\n99192 Apfelstädt\n\nDelivery hours: Mon-Fri 6:00 - 14:00."
      },
      {
        id: "amazon-fba",
        title: "Amazon FBA Shipments",
        content: "Process for shipping from Alaiko to FBA:\n1. Create B2B order in Alaiko as 'FBA Shipment'.\n2. Request packing details (box size, weight) from Zen support.\n3. Create shipment in Amazon Seller Central using 'Send to Amazon'.\n4. Download FBA box labels and attach them to the Zen support ticket."
      }
    ]
  },
  {
    id: "quality-management",
    title: "Quality Management",
    icon: "ShieldCheck",
    content: "Ensuring product quality through Goods Inward Inspection (Gii) and BBD management.",
    subsections: [
      {
        id: "gii-process",
        title: "Goods Inward Inspection (Gii)",
        content: "1. Supplier finishes production.\n2. SCM requests 5 samples to be sent to Berlin office.\n3. SCM shares tracking in Gii chat.\n4. Product Manager conducts check.\n5. If passed, SCM informs supplier to ship the full order."
      },
      {
        id: "bbd-rules",
        title: "BBD Rules",
        content: "- **Shop Display**: Show BBD alert when 3 months remaining.\n- **Discounting**: Apply discounts for products close to BBD.\n- **Offline**: Take products offline 4 weeks before BBD.\n- **FBA Limit**: Cannot ship to FBA if BBD < 105 days."
      }
    ]
  },
  {
    id: "b2b-processes",
    title: "B2B Processes",
    icon: "Briefcase",
    content: "Managing retail partners and large-scale orders.",
    subsections: [
      {
        id: "retail-partners",
        title: "Key Retail Partners",
        content: "- **DM**: 4 months BBD requirement.\n- **Rossmann**: 4 months BBD requirement.\n- **Müller**: 5 months BBD requirement.\n- **Budni**: 4 months BBD requirement."
      },
      {
        id: "pallet-handling",
        title: "Pallet Handling",
        content: "Standard Euro pallets (120x80cm). Max height 180cm (including pallet). Max weight 850kg. Mixed pallets allowed for DM Online under specific labeling conditions."
      }
    ]
  },
  {
    id: "compliance",
    title: "Compliance & Taxes",
    icon: "ShieldCheck",
    content: "Annual reports and packaging taxes for Germany, France, and Austria.",
    subsections: [
      {
        id: "packaging-taxes",
        title: "Packaging Taxes",
        content: "Every company is obliged to report packaging units sold. Categories include: Glass, Paper/Cardboard, Aluminum, Iron/Metals, Composite, and Plastics.\n\n- **Germany**: Report to Grüner Punkt and LUCID portal.\n- **France**: Report to CITEO portal.\n- **Austria**: Report to get-e-right Austria GmbH portal."
      }
    ]
  },
  {
    id: "it-security",
    title: "IT Security",
    icon: "ShieldCheck",
    content: "Guidelines for secure data sharing and IT best practices.",
    subsections: [
      {
        id: "private-bin",
        title: "PrivateBin Guide",
        content: "PrivateBin is used for secure text sharing. Contents are encrypted on the client side.\n\n1. Open privatebin.forbrains.com.\n2. Enter text.\n3. Set options (Expiration, Burn after reading).\n4. Publish and share the unique link."
      }
    ]
  }
];
