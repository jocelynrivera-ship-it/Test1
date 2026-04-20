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
        content: "Mateo Ariza - Teamlead Supply Chain Management - mateo.ariza@brain-effect.com\nJulia Hönow - Supply Chain Manager - julia.hoenow@brain-effect.com\nChenye Liu - Supply Chain Manager - chenye.liu@brain-effect.com\nSaphira Pitka - Sourcing Manager - saphira.pitka@brain-effect.com\n\nMain responsibilities of SCM team:\n* Inventory Management System - Mateo\n* PO Overview - Karolina & Julia & Chenye & Saphira\n* Xentral & Byrd/Alaiko SKU creation and maintenance - Karolina (Main) & Julia (Backup)\n* Out-of-Stock report - Mateo\n* MHD report - Karolina\n* SCM Transparency - Karolina & Mateo\n* Amazon/Influencer team support/ Adhoc requests - Karolina & Chen\n* Sourcing - Saphira"
      },
      {
        id: "scm-meetings",
        title: "SCM Meetings",
        content: "Daily: 10:00 - SCM - Daily Standup\n\nMonday: 14:30 - SCM JF & Week Kick-off\n\nTuesday: 10:30 - NEW weekly Jour fixe BHI / BRAINEFFECT\n11:00 - Weekly JF Bio Pak / BRAINEFFECT\n15:30 - JF B2B - SCM\n\nThursday: 13:00 - Inventory Planning in IMS\n17:00 - JF: BI - SCM\n\nFriday: 15:00 - SCM Week Check-out"
      },
      {
        id: "important-addresses",
        title: "Important Addresses",
        content: "New delivery address as CW28-2025:\nZenfulfillment GmbH c/o Fiege, Tor 19/20/21, Sülzenbrücker Str. 7, D-99192 Apfelstädt\n\nDie Warenannahme erfolgt arbeitstäglich von Montag bis Freitag 6:00 – 14:00 Uhr\nPaletten/Ladungsträger dürfen eine Gesamthöhe von max. 1800 mm (inkl. Palette). Das Gesamtgewicht je Palette darf max. 850 kg betragen. Eine Maximalgröße von 600x400x400mm sollte nicht überschritten werden.\nBooking delivery slot: https://webslot-fly.fiege.com/Login.aspx?ReturnUrl=%2f\n\nShipment to BRANDPACKAGING:\nAPACK Sp. Z.o.o. c/o Brandpackaging GmbH, Patrycja Barełkowska, Kowanowo 22, 64-600 Oborniki, Poland\n\nOffice Address (Gii samples):\nWhitewall GmbH, Product Team / Gii, Revaler Straße 30 - 31, 10245 Berlin, Deutschland\n\nFahrner / Previous 3PL:\nFahrner Logistics Services GmbH c/o Whitewall GmbH, Seedorfer Str. 80, 78713 Waldmössingen"
      }
    ],
    links: [
      { label: "Asana - General SCM Knowledge", url: "#" },
      { label: "Table Booking 2025", url: "#" },
      { label: "SCM Team // Holiday Tracker", url: "#" },
      { label: "Report - Gii", url: "#" },
      { label: "SCM team back up structure", url: "#" }
    ]
  },
  {
    id: "xentral-erp",
    title: "Xentral ERP",
    icon: "Database",
    content: "Xentral - ERP software\n\nCredentials:\nURL: https://whitewall.xentral.biz/new/login\nUsername: mariza\nPW: m@Mp5AOxbzR3",
    subsections: [
      {
        id: "add-article",
        title: "How to add a new article",
        content: "1. Log in to Xentral.\n2. Go to 'Verkaufen' -> 'Artikel'\n3. Make sure to check if the SKU is not existing already. In order to do so, use the search bar.\n4. Click on 'Neu Anlegen' on the top right corner\n5. Proceed with product data input:\n   - Artikel: article name\n   - Artikel Nr: BEXXXXX\n   - Projekt: BRAINEFFECT\n   - Artikelkategorie: For most of our products is 'Supplement'\n   - Standardlieferant: input the supplier\n   - Nettogewicht (für B2B): weight in grams\n   - Alaiko Artikel: 'Alaiko'\n   - EAN: MANDATORY and it has to be unique\n   - Standardlager: 'Alaiko_Main'\n   - Einheit: 'unit'\n   - Artikel optionen: tick field Lagerartikel\n   - Umsatzsteuer: ermäßigt (7%) or normal (19%)\n6. Save and go to 'Verkauf' tab -> 'Neuer Verkaufspreis'. Price calculation -7/-19."
      },
      {
        id: "product-status",
        title: "Product Status Definitions",
        content: "1. Upcoming – New Product: New launch.\n2. Upcoming – New SKU: Update of existing product.\n3. Active: Currently available.\n4. Discontinue – New SKU: Phased out for new version.\n5. Discontinue: Sold off until depletion.\n6. Inactive: No longer sold."
      },
      {
        id: "create-po",
        title: "How to create a PO",
        content: "1. Log in to Xentral.\n2. Go to 'Einkauf' -> 'Bestellungen'.\n3. Click '+New Anlegen'.\n4. Allgemein: Fill Lieferant, Projekt (BE_EINKAUF), Bestellungsdatum, Wunsch Liefertermin.\n5. Abweichende Lieferadresse: Use for 3PL Zen (Apfelstädt).\n6. Positionen: Insert SKU, Menge, Preis. Press 'einfügen'.\n7. Release: Press 'release' (Order ID generated automatically)."
      }
    ]
  },
  {
    id: "inventory-management",
    title: "IMS Spreadsheet",
    icon: "BarChart3",
    content: "IMS - inventory management system spreadsheet\n\nIntroduction: IMS is reviewed on a weekly basis during the Inventory Planning in IMS meeting.",
    subsections: [
      {
        id: "ims-tabs",
        title: "Tab Overview",
        content: "- Instructions: instructions for the file\n- IMS: main part, current stock, sales velocity, actions\n- Shipments_FBA: Amazon shipment info\n- [i] Masterdata: import from Masterdata file\n- [i] AMZ Stock: Amazon warehouse stock\n- [i] 3PL Stock: 3PL stock\n- [i] POs: import from PO Overview file"
      },
      {
        id: "stock-update-amz",
        title: "Stock Update Process - Amazon",
        content: "1. Amazon Seller Central -> Reports -> Fulfillment by Amazon -> Manage FBA Inventory.\n2. Request .csv Download.\n3. Open in Excel -> Data -> Text in Spalten -> getrennt -> comma -> standard.\n4. Paste whole table into IMS -> Tab [i] AMZ Stock."
      },
      {
        id: "stock-update-alaiko",
        title: "Stock Update Process - Alaiko",
        content: "1. Log in to Alaiko -> Inventory -> Products.\n2. Three dots -> 'Basic stock level export'.\n3. Use Converter_IMS_Alaiko_stock.xlsx -> copy export to Converter -> refresh pivot -> paste in IMS [i] 3PL Stock."
      }
    ]
  },
  {
    id: "po-overview-management",
    title: "PO Overview",
    icon: "Briefcase",
    content: "PO Overview is our main file to keep track of all purchase orders placed in the past and planned to be placed.",
    subsections: [
      {
        id: "po-statuses",
        title: "Statuses Overview",
        content: "- Planned: Initial decision\n- Quote in Discussion: Negotiating details\n- Waiting for Approval: Awaiting SCM TL/CFO\n- Approved: Ready to place\n- Confirmed: Production starting\n- Gii done: Samples approved\n- Closed: Completed"
      },
      {
        id: "approval-process",
        title: "Approval Process",
        content: "1. Receive offer from supplier.\n2. Approval TL SCM (Mateo).\n3. Approval CFO (Robert) via Adobe Acrobat. Template: SKU, Supplier, Units/Price, Coverage, Arrival date reason."
      },
      {
        id: "gii-inspection",
        title: "Goods Inward Inspection (Gii)",
        content: "1. Supplier finishes production.\n2. SCM requests 5 samples to Berlin office.\n3. Share tracking in Gii chat.\n4. PM conducts check (Pass/Fail).\n5. Measure/weigh -> update Masterdata/Xentral."
	  }
    ]
  },
  {
    id: "fulfillment-gs1",
    title: "Fulfillment & GS1",
    icon: "Truck",
    content: "Shipping workflows for Alaiko, Amazon, and GS1 labels.",
    subsections: [
      {
        id: "dhl-process",
        title: "Creating a DHL Label",
        content: "Process for standard and manual DHL label creation. Includes pickup procedure and multiple label generation."
      },
      {
        id: "amazon-fba-shipment",
        title: "FBA Shipment creation",
        content: "1. Create B2B order in Alaiko as 'FBA Shipment'.\n2. Request packing details via ticket.\n3. Create shipment in Amazon Seller Central.\n4. Download labels and attach to Zen support ticket."
      },
      {
        id: "gs1-labels",
        title: "GS1 Labels",
        content: "Requirements:\n* Product Name\n* GS1-Databar-Expanded (Barcode): (01) EAN, (15) BBD YYMMDD, (10) Batch\n* Units per carton\n* Number of Cartons\n\nExample Header:\nGUT CARE KAPSELN 60 Caps\nUnits per carton: 60\nNumber of Cartons: 6/30"
      }
    ]
  },
  {
    id: "b2b-quality",
    title: "B2B & Quality Rules",
    icon: "ShieldCheck",
    content: "Quality management and retail partner requirements.",
    subsections: [
      {
        id: "doypack-sizing",
        title: "Doypack Sizing",
        content: "Sizing details owned by Saphira. Standard Euro pallets (120x80cm). Max height 180cm (including pallet). Max weight 850kg."
      },
      {
        id: "bbd-logic",
        title: "BBD Rules for Partners",
        content: "Partner Requirements:\n- DM: 4 months BBD remaining.\n- Rossmann: 4 months BBD remaining.\n- Müller: 5 months BBD remaining.\n- Budni: 4 months BBD remaining."
      },
      {
        id: "bbd-general",
        title: "BBD Management",
        content: "- Shop Display: Alert at 3 months.\n- Discounting: Close to BBD.\n- Offline: 4 weeks before BBD.\n- FBA: No ship if BBD < 105 days."
      }
    ]
  },
  {
    id: "compliance-security",
    title: "Compliance & Security",
    icon: "ShieldCheck",
    content: "Packaging reporting and IT security protocols.",
    subsections: [
      {
        id: "packaging-taxes",
        title: "Packaging Taxes",
        content: "Obligatory reporting: Glass, Paper, Aluminum, Metals, Composite, Plastics.\n- Germany: Grüner Punkt/LUCID.\n- France: CITEO.\n- Austria: get-e-right."
      },
      {
        id: "it-security-privatebin",
        title: "IT Security: PrivateBin",
        content: "1. Open privatebin.forbrains.com.\n2. Enter text (encrypted client-side).\n3. Set options.\n4. Share unique link (Burn after reading)."
      }
    ]
  }
];
