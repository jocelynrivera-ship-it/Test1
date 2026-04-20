export interface SOPLink {
  label: string;
  url: string;
  type?: 'tool' | 'video' | 'doc' | 'link';
}

export interface SOPSubsection {
  id: string;
  title: string;
  content: string;
  imageLabel?: string; // Descriptive label for the image missing from text paste
  links?: SOPLink[];
}

export interface SOPSection {
  id: string;
  title: string;
  icon: string;
  content: string;
  subsections: SOPSubsection[];
  links?: SOPLink[];
}

export const sopData: SOPSection[] = [
  {
    id: "introduction",
    title: "Introduction",
    icon: "Info",
    content: "Introduction to the SCM processes",
    subsections: [
      {
        id: "scm-team",
        title: "SCM Team",
        content: "Mateo Ariza - Teamlead Supply Chain Management - mateo.ariza@brain-effect.com\nJulia Hönow - Supply Chain Manager - julia.hoenow@brain-effect.com\nChenye Liu - Supply Chain Manager - chenye.liu@brain-effect.com\nSaphira Pitka - Sourcing Manager - saphira.pitka@brain-effect.com\n\n### Main responsibilities of SCM team\n* Inventory Management System - Mateo\n* PO Overview - Karolina & Julia & Chenye & Saphira\n* Xentral & Byrd/Alaiko SKU creation and maintenance - Karolina (Main) & Julia (Backup)\n* Out-of-Stock report - Mateo\n* MHD report - Karolina\n* SCM Transparency - Karolina & Mateo\n* Amazon/Influencer team support/ Adhoc requests - Karolina & Chen\n* Sourcing - Saphira"
      },
      {
        id: "scm-meetings",
        title: "SCM Meetings",
        content: "Daily: 10:00 - SCM - Daily Standup\nMonday: 14:30 - SCM JF & Week Kick-off\nTuesday: 10:30 - NEW weekly Jour fixe BHI / BRAINEFFECT\n    11:00 - Weekly JF Bio Pak / BRAINEFFECT\n            15:30 - JF B2B - SCM\nThursday: 13:00 - Inventory Planning in IMS\n              17:00 - JF: BI - SCM\nFriday:     15:00 - SCM Week Check-out",
        links: [{ label: "Asana - General SCM Knowledge", url: "#", type: "tool" }]
      },
      {
        id: "important-addresses",
        title: "Important addresses",
        content: "### New delivery address as CW28-2025\nZenfulfillment GmbH\nc/o Fiege\nTor 19/20/21\nSülzenbrücker Str. 7\nD-99192 Apfelstädt\n\n* Die Warenannahme erfolgt arbeitstäglich von Montag bis Freitag 6:00 – 14:00 Uhr\n* Paletten/Ladungsträger dürfen eine Gesamthöhe von max. 1800 mm (inkl. Palette)\n* Das Gesamtgewicht je Palette darf max. 850 kg betragen\n* For the Master Cartons: Eine Maximalgröße von 600x400x400mm sollte nicht überschritten werden\n\n### Shipment to BRANDPACKAGING:\nAPACK Sp. Z.o.o.\nc/o Brandpackaging GmbH\nPatrycja Barełkowska\nKowanowo 22\n64-600 Oborniki, Poland\n\n### Office address as of Jan. 2023:\nWhitewall GmbH\nProduct Team / Gii\nRevaler Straße 30 - 31\n10245 Berlin, Deutschland",
        links: [{ label: "Booking delivery slot", url: "https://webslot-fly.fiege.com/Login.aspx?ReturnUrl=%2f", type: "tool" }]
      }
    ],
    links: [
      { label: "Table Booking 2025", url: "#", type: "doc" },
      { label: "Holiday Tracker", url: "#", type: "doc" },
      { label: "Gii Report", url: "#", type: "doc" },
      { label: "Brain Plan", url: "#", type: "doc" }
    ]
  },
  {
    id: "xentral-erp",
    title: "Xentral - ERP software",
    icon: "Database",
    content: "### Credentials\nURL: https://whitewall.xentral.biz/new/login\nUsername: mariza\nPW: m@Mp5AOxbzR3",
    subsections: [
      {
        id: "add-article",
        title: "How to add a new article",
        imageLabel: "Screenshot: Xentral Article Overview & Search",
        content: "1. Log in to Xentral.\n2. Go to \"Verkaufen\" -> \"Artikel\"\n3. Check if the SKU is not existing already using the search bar.\n4. Click on \"Neu Anlegen\" on the top right corner\n5. Proceed with product data input (Artikel, SKU BEXXXXX, Projekt: BRAINEFFECT).\n6. Set VAT (7% or 19%) and Lagerartikel checkbox.",
        links: [{ label: "Video: Create Article", url: "#", type: "video" }]
      },
      {
        id: "product-status",
        title: "Product Status Definitions",
        content: "1. **Upcoming – New Product**: Completely new launch.\n2. **Upcoming – New SKU**: Update of existing product.\n3. **Active**: Currently available and actively being sold.\n4. **Discontinue – New SKU**: Phased out for a new version.\n5. **Discontinue**: No longer reordered.\n6. **Inactive**: No longer sold in shops."
      },
      {
        id: "create-po",
        title: "How to create a PO",
        imageLabel: "Visual: PO Template elements",
        content: "1. Log in to Xentral -> ‘Einkauf’ -> ‘Bestellungen’\n2. Click ‘+New Anlegen’\n3. Fill Allgemein section (Lieferant, Projekt BE_EINKAUF, Dates).\n4. In ‘Freitext’ add materials provide by Whitewall (Labels, Design, etc).\n5. Release PO to generate ID.",
        links: [
          { label: "Loom 1: PO Creation", url: "#", type: "video" },
          { label: "Loom 2: PO Details", url: "#", type: "video" }
        ]
      }
    ]
  },
  {
    id: "inventory",
    title: "IMS & Stock Updates",
    icon: "BarChart3",
    content: "IMS is the inventory management system in the form of a spreadsheet.",
    subsections: [
      {
        id: "amz-stock",
        title: "Stock update process - AMZ",
        imageLabel: "Screenshot: AMZ Seller Central Navigation",
        content: "1. Amazon Seller Central -> Reports -> Fulfillment by Amazon -> Manage FBA Inventory.\n2. Request .csv Download.\n3. Format in Excel (Data -> Text in Spalten -> getrennt -> comma).\n4. Paste into IMS tab **[i] AMZ Stock**.",
        links: [{ label: "Amazon Seller Central", url: "https://sellercentral.amazon.de", type: "tool" }]
      },
      {
        id: "alaiko-stock",
        title: "Stock update process - Alaiko",
        content: "1. Log in to Alaiko -> Inventory -> Products.\n2. Select “Basic stock level export”.\n3. Use Converter_IMS_Alaiko_stock.xlsx.\n4. Refresh pivot table and paste values to IMS.",
        links: [{ label: "Alaiko Portal", url: "https://alaiko.com", type: "tool" }]
      }
    ],
    links: [
      { label: "IMS V4_CW17", url: "#", type: "doc" },
      { label: "Video: How to IMS?", url: "#", type: "video" }
    ]
  },
  {
    id: "gs1-labels",
    title: "GS1 Labels",
    icon: "ShieldCheck",
    content: "Barcode and Labeling Requirements",
    subsections: [
      {
        id: "barcode-req",
        title: "Barcode Requirements",
        content: "The label should have the following information:\n* Product Name\n* GS1-Databar-Expanded barcode containing:\n   * (01) EAN\n   * (15) Best Before Date (YYMMDD)\n   * (10) Batch number\n* Units per carton\n* Number of Cartons",
        imageLabel: "Visual Example: GS1-Databar-Expanded Label",
        links: [{ label: "GS1 Code Generator Tool", url: "https://barcode-generator.org/", type: "tool" }]
      },
      {
        id: "retail-labels",
        title: "Retail Products",
        content: "Trays need to be labeled on the short ends of the cartons.",
        imageLabel: "Diagram: Carton Label Placement (Short Ends)"
      }
    ]
  },
  {
    id: "compliance",
    title: "Compliance & Security",
    icon: "ShieldCheck",
    content: "Legal reporting and IT security protocols.",
    subsections: [
      {
        id: "packaging-taxes",
        title: "Annual Packaging Taxes",
        content: "Mandatory reporting for sold packaging (Glass, Paper, Aluminum, etc.):\n* **Germany**: Grüner Punkt (LUCID)\n* **France**: CITEO (Criterio)\n* **Austria**: get-e-right",
        links: [
          { label: "LUCID Portal", url: "https://lucid.verpackungsregister.org", type: "tool" },
          { label: "CITEO France", url: "https://www.citeo.com", type: "tool" }
        ]
      },
      {
        id: "privatebin",
        title: "IT Security: PrivateBin",
        content: "Secure text sharing via privatebin.forbrains.com.\n1. Open [privatebin.forbrains.com](https://privatebin.forbrains.com).\n2. Enter text (encrypted client-side).\n3. Set options (Burn after reading, Expiration).\n4. Share unique link.",
        links: [{ label: "PrivateBin for Brains", url: "https://privatebin.forbrains.com", type: "tool" }]
      }
    ]
  }
];
