export interface SOPLink {
  label: string;
  url: string;
  type?: 'tool' | 'video' | 'doc' | 'link';
}

export interface SOPSubsection {
  id: string;
  title: string;
  content: string;
  imageLabel?: string;
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
    id: "intro",
    title: "Introduction",
    icon: "Info",
    content: "Introduction to the SCM processes, team responsibilities, and meeting schedules.",
    subsections: [
      {
        id: "scm-team",
        title: "SCM Team",
        content: "Mateo Ariza - Teamlead Supply Chain Management - mateo.ariza@brain-effect.com\nJulia Hönow - Supply Chain Manager - julia.hoenow@brain-effect.com\nChenye Liu - Supply Chain Manager - chenye.liu@brain-effect.com\nSaphira Pitka - Sourcing Manager - saphira.pitka@brain-effect.com\n\n### Main responsibilities of SCM team\n* Inventory Management System - Mateo\n* PO Overview - Karolina & Julia & Chenye & Saphira\n* Xentral & Byrd/Alaiko SKU creation and maintenance - Karolina (Main) & Julia (Backup)\n* Out-of-Stock report - Mateo\n* MHD report - Karolina\n* SCM Transparency - Karolina & Mateo\n* Amazon/Influencer team support/ Adhoc requests - Karolina & Chen\n* Sourcing - Saphira"
      },
      {
        id: "scm-meetings",
        title: "SCM Meetings",
        content: "Asana - General SCM Knowledge\n\nDaily: 10:00 - SCM - Daily Standup\nMonday: 14:30 - SCM JF & Week Kick-off\nTuesday: 10:30 - NEW weekly Jour fixe BHI / BRAINEFFECT\n    11:00 - Weekly JF Bio Pak / BRAINEFFECT\n            15:30 - JF B2B - SCM\nThursday: 13:00 - Inventory Planning in IMS\n              17:00 - JF: BI - SCM\nFriday:     15:00 - SCM Week Check-out"
      },
      {
        id: "important-addresses",
        title: "Important addresses",
        content: "### New delivery address as CW28-2025\nZenfulfillment GmbH\nc/o Fiege\nTor 19/20/21\nSülzenbrücker Str. 7\nD-99192 Apfelstädt\n\nDie Warenannahme erfolgt arbeitstäglich von Montag bis Freitag 6:00 – 14:00 Uhr\nPaletten/Ladungsträger dürfen eine Gesamthöhe von max. 1800 mm (inkl. Palette)\nDas Gesamtgewicht je Palette darf max. 850 kg betragen\nFor the Master Cartons: Eine Maximalgröße von 600x400x400mm sollte nicht überschritten werden\nBooking delivery slot: https://webslot-fly.fiege.com/Login.aspx?ReturnUrl=%2f \n\n### Shipment to BRANDPACKAGING:\nAPACK Sp. Z.o.o.\nc/o Brandpackaging GmbH\nPatrycja Barełkowska\nKowanowo 22\n64-600 Oborniki, Poland\n\n### Office address as of Jan. 2023:\nWhitewall GmbH\nProduct Team / Gii\nRevaler Straße 30 - 31\n10245 Berlin\nDeutschland\n\n### Fahrner / Previous 3PL\nFahrner Logistics Services GmbH\nc/o Whitewall GmbH\nSeedorfer Str. 80\n78713 Waldmössingen\nWarenannahmezeiten: Mo – Do 8:00 – 16:00 Uhr Fr. 8:00 – 14:00 Uhr"
      },
      {
        id: "backup-structure",
        title: "SCM Back-up structure",
        content: "In order to ensure the continuity of all SCM processes, a back-up structure has been established. \n\nBefore leaving for planned holidays or absences, the Handover sheet should be filled and shared with the team. After returning, the handover sheet should be marked with completed/incomplete tasks to limit effort for the person returning."
      }
    ]
  },
  {
    id: "xentral",
    title: "Xentral Guide",
    icon: "Database",
    content: "Detailed procedures for article management and purchase orders in Xentral ERP.",
    subsections: [
      {
        id: "xentral-credentials",
        title: "Credentials",
        content: "URL: https://whitewall.xentral.biz/new/login\nUsername: mariza\nPW: m@Mp5AOxbzR3"
      },
      {
        id: "add-article",
        title: "How to add a new article",
        imageLabel: "Xentral Article Creation Workflow Screenshots",
        content: "1. Log in to Xentral.\n2. Go to \"Verkaufen\" -> \"Artikel\"\n3. Check if the SKU is not existing already using search bar.\n4. Click on \"Neu Anlegen\" on top right.\n5. Fill MANDATORY fields: Master Carton (units), Master Carton (EAN), Old SKU, New SKU, Nettogewicht (für B2B), Alaiko Artikel, Product, Category, Flavour, Sizing.\n6. Standardlager: “Alaiko_Main”, Einheit: “unit” or “kg”.\n7. Article options: tick Lagerartikel.\n8. VAT: 7% (powder/capsules) or 19% (liquid/food).",
        links: [{ label: "Video: How to create a new product", url: "#", type: "video" }]
      },
      {
        id: "delete-modify",
        title: "Delete / Modify Article",
        imageLabel: "Xentral Article Actions (Delete/Edit)",
        content: "### Delete\nOnly possible if never sold. Otherwise, deactivate (status inactive + Sperre).\n\n### Modify\nStammdaten -> Artikel -> Find article -> Modify -> Speichern."
      },
      {
        id: "product-status-def",
        title: "Product Status Definitions",
        content: "1. **Upcoming – New Product**: Completely new launch.\n2. **Upcoming – New SKU**: Update of existing product (packaging/recipe).\n3. **Active**: Currently available and actively being sold.\n4. **Discontinue – New SKU**: Phased out and replaced.\n5. **Discontinue**: No longer reordered, selling remaining stock.\n6. **Inactive**: No longer sold, leftover returned to office."
      },
      {
        id: "block-sku",
        title: "How to Block an SKU",
        content: "1. Search for SKU in Xentral.\n2. Find 'Sperre' section at bottom.\n3. Tick 'Sperre aktiv'.\n4. Document reason (date + reason).\n5. Save."
      },
      {
        id: "create-po",
        title: "How to create a PO",
        imageLabel: "Xentral PO Creation Screen & Template",
        content: "1. Einkauf -> Bestellungen -> +New Anlegen.\n2. General section: Lieferant, Projekt BE_EINKAUF, Dates.\n3. Positionen tab: Insert SKU, Quantity, Price.\n4. Use ‘Abweichende Lieferadresse’ for 3PL Zenfulfillment.\n5. Kopftext/Freitext: Add instructions for supplier (Labels, MHD, Samples for Gii).",
        links: [
          { label: "Loom 1: PO Creation", url: "#", type: "video" },
          { label: "Loom 2: PO Creation Part 2", url: "#", type: "video" }
        ]
      },
      {
        id: "sync-amz",
        title: "Sync AMZ (FBA) stock",
        content: "URL: https://whitewall.xentral.biz/app/amazon-seller-app\n1. Filter for SKU Amazon.\n2. Click “Mapping”.\n3. Enter the corresponding SKU in Xentral.\n4. Save."
      }
    ]
  },
  {
    id: "labels",
    title: "Labels & GS1",
    icon: "ShieldCheck",
    content: "Barcode requirements and labeling standards for warehouse and retail.",
    subsections: [
      {
        id: "gs1-labels",
        title: "GS1 Labels",
        imageLabel: "GS1 Label Example (GUT CARE KAPSELN)",
        content: "The label should have the following information:\n* Product Name\n* GS1-Databar-Expanded barcode containing: (01) EAN, (15) BBD YYMMDD, (10) Batch number\n* Units per carton\n* Number of Cartons\n\n### Provide for each shipment:\n* Height, Width, Length\n* Net weight, Gross weight",
        links: [{ label: "Tool: Create GS1-DataBar Expanded", url: "#", type: "tool" }]
      },
      {
        id: "retail-labeling",
        title: "Retail Products",
        imageLabel: "Retail Tray Labeling Diagram",
        content: "Trays need to be labeled on the short ends of the cartons."
      }
    ]
  },
  {
    id: "ims",
    title: "IMS (Inventory Management)",
    icon: "BarChart3",
    content: "Mastering the Inventory Management System spreadsheet.",
    subsections: [
      {
        id: "ims-intro",
        title: "Introduction",
        content: "IMS is reviewed on a weekly basis during the Inventory Planning meeting. SCM update 3PL and AMZ stock usually on Mondays.",
        links: [
          { label: "Video: How to IMS?", url: "#", type: "video" },
          { label: "Video: How to update IMS (Feb 2026)", url: "#", type: "video" }
        ]
      },
      {
        id: "amz-report",
        title: "Amazon Report Retrieval",
        imageLabel: "Amazon Seller Central Reports Workflow",
        content: "1. Seller Central -> Reports -> Fulfillment by Amazon -> Manage FBA Inventory.\n2. Request .csv Download.\n3. Format Column A (Text in Spalten -> comma).\n4. Save as FBA_Stock_DDMMYYYY.\n5. Paste into IMS tab [i] AMZ Stock."
      },
      {
        id: "alaiko-report",
        title: "Alaiko/Zen Report Retrieval",
        imageLabel: "Alaiko Inventory Export Screen",
        content: "1. Alaiko -> Inventory -> Products -> Basic stock level export.\n2. Open Converter_IMS_Alaiko_stock.xlsx.\n3. Refresh pivot table and paste values to IMS tab [i] 3PL Stock."
      }
    ]
  },
  {
    id: "po-overview",
    title: "PO Overview & Approval",
    icon: "Truck",
    content: "The main file tracking all purchase orders and the formal approval workflow.",
    subsections: [
      {
        id: "approval-process",
        title: "Approval process",
        content: "1. Receive approval from Team Lead (Mateo).\n2. Send request to CFO (Robert) via Adobe Acrobat, cc Lisa.\n3. Include: SKU, Supplier, Units/Price, Total Price, Payment Terms, Weeks of Coverage, Arrival Date logic.\n4. Robert signs e-signature block, copy sent to scm@brain-effect.com."
      },
      {
        id: "gii",
        title: "Goods Inward Inspection (Gii)",
        content: "1. Supplier informs production end.\n2. SCM asks for 5 samples to Berlin office.\n3. Share tracking in Gii chat, tag PM.\n4. PM checks samples. If failed, contact PM/TL/QM.\n5. If passed: weigh/measure, update Masterdata/Xentral, tell supplier to ship."
      },
      {
        id: "transport-costs",
        title: "Transport costs per PO",
        content: "Check Payhawk on a monthly basis. If 'Separate position', find supplier invoice in Payhawk (Team: SCM) and add costs to PO Overview."
      }
    ]
  },
  {
    id: "fulfillment",
    title: "Fulfillment & DHL",
    icon: "Truck",
    content: "Managing 3PL operations and shipping label creation.",
    subsections: [
      {
        id: "dhl-labels",
        title: "DHL Procedures",
        content: "### Creating a DHL Label\nFollow the standard procedure in DHL portal (Credentials in PrivateBin).\n\n### Pickup Procedure\nDHL Pickup is scheduled for specific days. Ensure documents are ready."
      },
      {
        id: "cargoboard",
        title: "Cargoboard Guide",
        content: "Introduction to Cargoboard for shipment creation. Used for pallet shipments across Europe."
      }
    ]
  },
  {
    id: "amazon",
    title: "Amazon Seller Central",
    icon: "Briefcase",
    content: "FBA reports and various listing tasks.",
    subsections: [
      {
        id: "fba-ledger",
        title: "Inventory Ledger Report",
        content: "How to Download: Reports -> Fulfillment by Amazon -> Inventory Ledger. Select 'Summary' and 'Daily' view for reconciliations."
      },
      {
        id: "connect-fbm",
        title: "Connect FBM to Billbee/Alaiko",
        content: "Process for ensuring FBM (Fulfilled by Merchant) orders are correctly routed from Amazon to our 3PL via Billbee.",
        links: [{ label: "Watch this Loom", url: "#", type: "video" }]
      }
    ]
  },
  {
    id: "b2b",
    title: "Quality & B2B",
    icon: "Briefcase",
    content: "Managing B2B accounts, pricing, and quality standards.",
    subsections: [
      {
        id: "b2b-rundown",
        title: "B2B Processes",
        content: "Fulfilment Logic: Shopify-Xentral-Zen environment.\n\n### BBD rules for Key Accounts\n* **DM**: 12 months minimum.\n* **Rossmann**: 9 months minimum.\n* **Müller**: 8 months minimum.\n* **Budni**: 6 months minimum."
      },
      {
        id: "packaging-taxes",
        title: "Annual reports of packaging taxes",
        content: "Preparation and reporting for Germany (LUCID), France (CITEO), and Austria (get-e-right). Usually due Q1 each year."
      }
    ]
  },
  {
    id: "it-security",
    title: "IT Security",
    icon: "ShieldCheck",
    content: "Procedures for secure communication and tool usage.",
    subsections: [
      {
        id: "privatebin",
        title: "What is PrivateBin?",
        content: "Open-source tool to securely share text online. Contents are encrypted on the client side.\n\n### Step-by-Step\n1. Open privatebin.forbrains.com.\n2. Enter text.\n3. Set 'Burn after reading' or expiration.\n4. Share link."
      }
    ]
  },
  {
    id: "archive",
    title: "Archive (Fahrner)",
    icon: "Database",
    content: "Documentation for legacy systems and previous 3PL partners.",
    subsections: [
      {
        id: "fahrner-dashboard",
        title: "Fahrner (Previous 3PL)",
        content: "Credentials & Procedures for the internal dashboard. Use ONLY for legacy stock reconciliation or historic data research."
      }
    ]
  }
];
