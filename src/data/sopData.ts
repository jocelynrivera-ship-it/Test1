export interface SOPSection {
  id: string;
  title: string;
  content: string;
  icon?: string;
  subsections?: SOPSection[];
  links?: { label: string; url: string }[];
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
        content: "Mateo Ariza - Teamlead Supply Chain Management - mateo.ariza@brain-effect.com\nJulia Hönow - Supply Chain Manager - julia.hoenow@brain-effect.com\nChenye Liu - Supply Chain Manager - chenye.liu@brain-effect.com\nSaphira Pitka - Sourcing Manager - saphira.pitka@brain-effect.com\n\nMain responsibilities of SCM team\n* Inventory Management System - Mateo\n* PO Overview - Karolina & Julia & Chenye & Saphira\n* Xentral & Byrd/Alaiko SKU creation and maintenance - Karolina (Main) & Julia (Backup)\n* Out-of-Stock report - Mateo\n* MHD report - Karolina\n* SCM Transparency - Karolina & Mateo\n* Amazon/Influencer team support/ Adhoc requests - Karolina & Chen\n* Sourcing - Saphira"
      },
      {
        id: "scm-meetings",
        title: "SCM Meetings",
        content: "Daily: 10:00 - SCM - Daily Standup\n\nMonday: 14:30 - SCM JF & Week Kick-off\n\nTuesday: 10:30 - NEW weekly Jour fixe BHI / BRAINEFFECT\n    11:00 - Weekly JF Bio Pak / BRAINEFFECT\n            15:30 - JF B2B - SCM\n\nThursday: 13:00 - Inventory Planning in IMS\n              17:00 - JF: BI - SCM\n\nFriday:     15:00 - SCM Week Check-out"
      },
      {
        id: "important-addresses",
        title: "Important addresses",
        content: "New delivery address as CW28-2025\nZenfulfillment GmbH\nc/o Fiege\nTor 19/20/21\nSülzenbrücker Str. 7\nD-99192 Apfelstädt\n\nDie Warenannahme erfolgt arbeitstäglich von Montag bis Freitag 6:00 – 14:00 Uhr\nPaletten/Ladungsträger dürfen eine Gesamthöhe von max. 1800 mm (inkl. Palette)\nDas Gesamtgewicht je Palette darf max. 850 kg betragen\nFor the Master Cartons: Eine Maximalgröße von 600x400x400mm sollte nicht überschritten werden\nBooking delivery slot: https://webslot-fly.fiege.com/Login.aspx?ReturnUrl=%2f\n\nShipment to BRANDPACKAGING:\nAPACK Sp. Z.o.o.\nc/o Brandpackaging GmbH\nPatrycja Barełkowska\nKowanowo 22\n64-600 Oborniki, Poland\n\nDelivery address for Gii samples / Office address as of Jan. 2023:\nWhitewall GmbH\nProduct Team / Gii\nRevaler Straße 30 - 31\n10245 Berlin\nDeutschland\n\nFahrner / Previous 3PL\nAnlieferadresse:\nFahrner Logistics Services GmbH\nc/o Whitewall GmbH\nSeedorfer Str. 80\n78713 Waldmössingen\nWarenannahmezeiten: Mo – Do 8:00 – 16:00 Uhr Fr. 8:00 – 14:00 Uhr"
      },
      {
        id: "backup-structure",
        title: "SCM Back-up structure and guidelines",
        content: "In order to ensure the continuity of all SCM processes, a back-up structure has been established.\nThe back-up matrix as well as the responsibilities list can be found in SCM team back up structure\n\nBefore leaving for planned holidays or absences, the Handover sheet - SCM Teamshould be filled and shared with the team and all other relevant parties.\n\nAfter returning from the holidays, the handover sheet should be marked with the tasks that have and have not been completed, as well as other relevant comments, in order to limit the time and effort needed to return back to daily operations for the person returning from the holidays.\n\nIn case of a sudden absence, the main guide should be the responsibility list included in the SCM team back up structure."
      }
    ],
    links: [
      { label: "Asana - General SCM Knowledge", url: "#" },
      { label: "Table Booking 2025", url: "#" },
      { label: "SCM Team // Holiday Tracker", url: "#" },
      { label: "Report - Gii - Goods Inward Inspection", url: "#" },
      { label: "Product Team - Responsibilites - 2022-11", url: "#" },
      { label: "OKR Spreadsheet 2022/23", url: "#" },
      { label: "Brain_Plan_2023_Team EN", url: "#" },
      { label: "SCM team back up structure", url: "#" },
      { label: "Xentral MDT", url: "#" },
      { label: "IMS V4_CW47", url: "#" }
    ]
  },
  {
    id: "xentral-erp",
    title: "Xentral - ERP software",
    icon: "Database",
    content: "Credentials\nURL: https://whitewall.xentral.biz/new/login\nUsername: mariza\nPW: m@Mp5AOxbzR3",
    subsections: [
      {
        id: "add-article",
        title: "How to add a new article",
        content: "How to create a new product in Xentral.mp4\n\nNaming rules for products BE → naming owned by Product Team\n\n1. Log in to Xentral.\n2. Go to \"Verkaufen\" -> \"Artikel\"\n3. Make sure to check if the SKU is not existing already. In order to do so, use the search bar.\n4. Click on \"Neu Anlegen\" on the top right corner\n5. Proceed with the product data input as below. Keep in mind that the fields that have not been mentioned should not be filled in.\n\nArtikel: article name\nArtikel Nr: BEXXXXX\nProjekt: BRAINEFFECT\nArtikelkategorie: For most of our products is “Supplement”. If unsure, check with SCM Team Lead\nStandardlieferant: input the supplier- if not found/does not exist, create the corresponding supplier entry\n\nArtikelbeschreibung (DE): Left empty unless we need that info to be displayed on the LS\nKurztext (DE): Left empty unless we need that info to be displayed on the LS\nInterner Kommentar: Info for the SCM Team (e.g pallet schema, specific about the product, etc)\n\nQuick Stock Sync: Please DON’T set the check mark here.\nStatus: Check with SCM Manager\n\nMaster Carton (units):\n* input the units per carton\nMaster Carton (EAN):\n* input the EAN number of the Master Carton\n\nOld SKU: either “None” if it is a new product. Otherwise check which SKU is being replaced by this one\nNew SKU: either “None” if it is a new product. Otherwise check which by which SKU it is being replaced\n\nNettogewicht (für B2B): input the weight in grams, as shown on the example\nAlaiko Artikel: “Alaiko”\nProduct, Category, Flavour, Sizing, Category 2, Category 3 are MANDATORY.\nUse this Link for guideline of Category2\n\nFor Category 3: If cocreation = use cocreation, If limited edition = use limited edition, All other = Main Line\n\nHersteller: Needs to match the Standardlieferant without the number\nEAN: MANDATORY and it has to be unique\nZolltarifnummer: Obtained from Product Manager\nStandardlager: “Alaiko_Main”\nEinheit: “unit” or “kg” or “g” or “tonne”\nUmsatzsteuer: ermäßigt (7%) if it is a powder or a capsule or normal (19%) if it is liquid/Food (Gut Limo)\n\n6. Click on Save, and go to the tab \"Verkauf\" -> \"Neuer Verkaufspreis\". Fill Menge: 1,00 and Price."
      },
      {
        id: "product-status",
        title: "Product Status Definitions",
        content: "1. Upcoming – New Product: New product launch that has not previously existed.\n2. Upcoming – New SKU: Update of existing product (packaging/recipe/supplier).\n3. Active: Currently available and actively being sold.\n4. Discontinue – New SKU: Phased out and replaced with a new version.\n5. Discontinue: Will no longer be reordered and will not be replaced.\n6. Inactive: No longer being sold in shops."
      },
      {
        id: "create-po",
        title: "How to create a PO",
        content: "Loom 1 / Loom 2\n\n1. Log in to Xentral\n2. Go to ‘Einkauf’ on the left side bar and select ‘Bestellungen’\n3. Click ‘+New Anlegen’ on the top right corner\n4. Allgemein section: Lieferant, Projekt (BE_EINKAUF), Bestellungsdatum (today), Wunsch Liefertermin.\n5. Use ‘Abweichende Lieferadresse’ for e.g. 3PL Zen Apfelstädt.\n6. In ‘Freitext’ section, add materials provided by Whitewall GmbH (Labels, Doypacks, etc) and BBD Format.\n7. Bestellung section: Bezahlung per (Rechnung), Bearbeiter, Lieferbedingung (DAP, DDP, EXW), select ‘Eigene Artikelnummer in erste Spalte’.\n8. Positionen: Search SKU, insert Menge and Preis. Press ‘einfügen’.\n9. Vorschau: Review document.\n10. Protokoll: Overview and Release."
      },
      {
        id: "sync-amz",
        title: "How to Sync AMZ (FBA) stock with Xentral",
        content: "On this page you find the Amazon Seller App: https://whitewall.xentral.biz/app/amazon-seller-app\n1. Filter for SKU Amazon\n2. Click on right hand side button on “Mapping”\n3. Enter the SKU this Amazon listing should address in Xentral\n4. Save → automatically matches for all stock locations."
      }
    ]
  },
  {
    id: "ims-system",
    title: "IMS - inventory management system",
    icon: "BarChart3",
    content: "IMS is the inventory management system in the form of a spreadsheet. It is reviewed on a weekly basis during the Inventory Planning in IMS meeting.",
    subsections: [
      {
        id: "ims-intro",
        title: "Introduction",
        content: "How to IMS? (Video)\nHow to update IMS (Feb 2026)\n\nIMS V4_CW17 walkthrough:\n- Instructions\n- IMS (main part, stock, sales velocity, actions)\n- Sales All / Shop Sales / AMZ Sales / B2B Sales\n- Shipments_FBA\n- [i] Masterdata / [i] B2B Sales / [i] AMZ Stock / [i] 3PL Stock / [i] POs\n- Helper / Macro_Historic"
      },
      {
        id: "update-amz-stock",
        title: "Stock update process - retrieve AMZ Report",
        content: "1. Log in to Amazon Seller Central -> Reports -> Fulfillment by Amazon -> Manage FBA Inventory\n2. Select “Request .csv Download”\n3. Format column A in Excel (Text in Spalten -> getrennt -> comma -> standard).\n4. Save as FBA_Stock_DDMMYYYY.\n5. Paste into IMS -> Tab [i] AMZ Stock pink cell.\n6. Update Daily Stock Overview in Brain Plan."
      },
      {
        id: "update-alaiko-stock",
        title: "Stock update process - retrieve Alaiko report",
        content: "1. Log in to Alaiko -> “Inventory” -> Products\n2. Three dots -> “Basic stock level export”\n3. Use Converter_IMS_Alaiko_stock.xlsx\n4. Paste Alaiko export into Converter (tab Rawdata_Alaiko_Report)\n5. Refresh pivot table and copy to IMS -> Tab [i] 3PL Stock as values."
      }
    ]
  },
  {
    id: "po-management",
    title: "PO Overview & Process",
    icon: "Briefcase",
    content: "PO Overview is our main file to keep track of all purchase orders placed in the past and planned to be placed.",
    subsections: [
      {
        id: "po-statuses",
        title: "Statuses overview",
        content: "- Planned: Initial decision\n- Quote in Discussion: Negotiating with supplier\n- Waiting for Approval: Awaiting SCM TL and CFO\n- Approved: Approved by both\n- Waiting for Confirmation (S): Supplier informed\n- Confirmed: Production starting\n- Gii done: Samples checked and approved\n- On the way: Shipped to warehouse\n- Closed: Completed"
      },
      {
        id: "approval-process",
        title: "Approval process",
        content: "Requirements for Robert (CFO) via Adobe Acrobat:\n- SKU and article name\n- Supplier name\n- Units & Unit Price\n- Approved quantity by Mateo\n- Price difference from previous PO\n- Total Net Price\n- Payment Terms\n- WoC (weeks of coverage) info\n- Arrival date reason"
      },
      {
        id: "gii-inspection",
        title: "Goods inward inspection (Gii)",
        content: "Report - Gii - Goods Inward Inspection\n\n1. Supplier informs production finishing.\n2. SCM requests 5 samples to Berlin office (wait for Gii results before shipping full order).\n3. SCM Manager tags PM in Gii chat with tracking link.\n4. PM conducts check and informs Pass/Fail.\n5. SCM measures, weighs, and updates Masterdata/Xentral.\n6. Update PO Overview status to 'Gii done'."
      }
    ]
  },
  {
    id: "logistics-fulfillment",
    title: "Logistics & Fulfillment",
    icon: "Truck",
    content: "Processes for Zen (Alaiko), DHL, and Amazon Seller Central.",
    subsections: [
      {
        id: "dhl-shipping",
        title: "DHL Labels",
        content: "Creating a DHL Label / Creating many DHL Labels\n\nStandard procedure for creating labels in the DHL Business Customer Portal, including weight classes and pickup procedure (Mo-Fr)."
      },
      {
        id: "amazon-fba-shipment",
        title: "Creating a shipment from Alaiko to AMZ FBA",
        content: "1. Create B2B order in Alaiko as ‘FBA Shipment’.\n2. Request packing details via Support ticket.\n3. Create shipment in Amazon Seller Central (‘Send to Amazon’).\n4. Download labels and attach to Zen support ticket."
      },
      {
        id: "gs1-labels",
        title: "GS1 Labels",
        content: "Requirements:\n* Product Name\n* GS1-Databar-Expanded barcode: (01) EAN, (15) BBD YYMMDD, (10) Batch number\n* Units per carton / Number of Cartons\n\nExample Header:\nGUT CARE KAPSELN 60 Caps\nUnits per carton: 60\nNumber of Cartons: 6/30"
      }
    ]
  },
  {
    id: "b2b-quality",
    title: "B2B & Quality",
    icon: "Briefcase",
    content: "B2B processes, retail partner rules, and quality management.",
    subsections: [
      {
        id: "b2b-bbd-rules",
        title: "BBD rules for Key Accounts",
        content: "Retail Partner Requirements:\n- DM: 4 months BBD requirement.\n- Rossmann: 4 months BBD requirement.\n- Müller: 5 months BBD requirement.\n- Budni: 4 months BBD requirement."
      },
      {
        id: "b2b-pallets",
        title: "B2B Pallets",
        content: "Standard Euro pallets (120x80cm). Max height 180cm (including pallet). Max weight 850kg. Mixed pallets allowed for DM Online under specific labeling conditions."
      },
      {
        id: "quality-rules",
        title: "Quality Management & BBD",
        content: "- Shop Display: Alert at 3 months remaining.\n- Discounting: Products close to BBD.\n- Offline: Take offline 4 weeks before BBD.\n- FBA Limit: No ship if BBD < 105 days.\n- BBD Extension process for expired items."
      }
    ]
  },
  {
    id: "compliance-security",
    title: "Compliance & IT Security",
    icon: "ShieldCheck",
    content: "Reporting and secure operations.",
    subsections: [
      {
        id: "packaging-taxes",
        title: "Annual reports of packaging taxes",
        content: "Every company is obliged to report packaging units sold (Glass, Paper, Aluminum, Metals, Composite, Plastics).\n- Germany: Grüner Punkt and LUCID.\n- France: CITEO.\n- Austria: get-e-right Austria GmbH."
      },
      {
        id: "it-security",
        title: "IT Security: PrivateBin",
        content: "What is PrivateBin?\nPrivateBin allows you to securely share text online with client-side encryption.\n\nGuide:\n1. Open privatebin.forbrains.com.\n2. Enter text.\n3. Configure options (Expiration, Burn after reading).\n4. Publish and share unique link.\n5. Recipient decrypts with link (and password if set)."
      }
    ]
  }
];
