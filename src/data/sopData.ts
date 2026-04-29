export interface SOPSubsection {
  id: string;
  title: string;
  content: string;
}

export interface SOPSection {
  id: string;
  title: string;
  icon: string;
  content: string;
  subsections: SOPSubsection[];
}

export const sopData: SOPSection[] = [
  {
    id: "intro",
    title: "Introduction",
    icon: "Info",
    content: "# Supply Chain Management SOP\n**BRAINEFFECT SCM Team**\n\nLast update: Jan 2026\n\n________________\n\n### Introduction to the SCM processes\n________________\n\n**SCM Team**\nMateo Ariza - Teamlead Supply Chain Management - mateo.ariza@brain-effect.com\nJulia Hönow - Supply Chain Manager - julia.hoenow@brain-effect.com\nChenye Liu - Supply Chain Manager - chenye.liu@brain-effect.com\nSaphira Pitka - Sourcing Manager - saphira.pitka@brain-effect.com\n\n### Main responsibilities of SCM team\n* Inventory Management System - Mateo\n* PO Overview - Karolina & Julia & Chenye & Saphira\n* Xentral & Byrd/Alaiko SKU creation and maintenance - Karolina (Main) & Julia (Backup)\n* Out-of-Stock report - Mateo\n* MHD report - Karolina\n* SCM Transparency - Karolina & Mateo\n* Amazon/Influencer team support/ Adhoc requests - Karolina & Chen\n* Sourcing - Saphira\n\n### SCM Meetings\n[Asana - General SCM Knowledge](https://asana.com/)\n\nDaily: 10:00 - SCM - Daily Standup\n\nMonday: 14:30 - SCM JF & Week Kick-off\n\nTuesday: 10:30 - NEW weekly Jour fixe BHI / BRAINEFFECT\n            15:30 - JF B2B - SCM\n\nThursday: 13:00 - Inventory Planning in IMS\n              17:00 - JF: BI - SCM\n\nFriday:     15:00 - SCM Week Check-out",
    subsections: [
      {
        id: "addresses",
        title: "Important Addresses",
        content: "[Asana - General SCM Knowledge](https://asana.com/)\n\n**New delivery address as CW28-2025**\nZenfulfillment GmbH\nc/o Fiege\nTor 19/20/21\nSülzenbrücker Str. 7\nD-99192 Apfelstädt\n\nDie Warenannahme erfolgt arbeitstäglich von Montag bis Freitag 6:00 – 14:00 Uhr\nPaletten/Ladungsträger dürfen eine Gesamthöhe von max. 1800 mm (inkl. Palette)\nDas Gesamtgewicht je Palette darf max. 850 kg betragen\nFor the Master Cartons: Eine Maximalgröße von 600x400x400mm sollte nicht überschritten werden\nBooking delivery slot: [https://webslot-fly.fiege.com/Login.aspx?ReturnUrl=%2f](https://webslot-fly.fiege.com/Login.aspx?ReturnUrl=%2f)\n\n**Shipment to BRANDPACKAGING:**\nAPACK Sp. Z.o.o.\nc/o Brandpackaging GmbH\nPatrycja Barełkowska\nKowanowo 22\n64-600 Oborniki, Poland\n\n**Delivery address for Gii samples / Office address as of Jan. 2023:**\nWhitewall GmbH\nProduct Team / Gii\nRevaler Straße 30 - 31\n10245 Berlin\nDeutschland\n\n**Fahrner / Previous 3PL**\nAnlieferadresse:\nFahrner Logistics Services GmbH\nc/o Whitewall GmbH\nSeedorfer Str. 80\n78713 Waldmössingen\n \nWarenannahmezeiten: Mo – Do 8:00 – 16:00 Uhr Fr. 8:00 – 14:00 Uhr\nPalettenhöhe und max. Überstand: Im besten Fall bitte die Europaletten nicht überbauen. Max. 1.60 m hoch"
      },
      {
        id: "backup",
        title: "SCM Back-up structure and guidelines",
        content: "In order to ensure the continuity of all SCM processes, a back-up structure has been established.\nThe back-up matrix as well as the responsibilities list can be found in [SCM team back up structure](#)\n\nBefore leaving for planned holidays or absences, the [Handover sheet - SCM Team](#) should be filled and shared with the team and all other relevant parties.\n\nAfter returning from the holidays, the handover sheet should be marked with the tasks that have and have not been completed, as well as other relevant comments, in order to limit the time and effort needed to return back to daily operations for the person returning from the holidays.\n\nIn case of a sudden absence, the main guide should be the responsibility list included in the [SCM team back up structure](#)."
      },
      {
        id: "links",
        title: "Important Links",
        content: "* [Table Booking 2025](#)\n* [SCM Team // Holiday Tracker](#)\n* [Report - Gii - Goods Inward Inspection](#)\n* [Product Team - Responsibilites - 2022-11](#)\n* [OKR Spreadsheet 2022/23](#)\n* [Brain_Plan_2023_Team EN](#)\n* [SCM team back up structure](#)\n* [Xentral MDT](#)\n* [IMS V4_CW47](#)"
      }
    ]
  },
  {
    id: "xentral",
    title: "Xentral - ERP Software",
    icon: "Database",
    content: "### Credentials\nURL: [https://whitewall.xentral.biz/new/login](https://whitewall.xentral.biz/new/login)\nUsername: mariza\nPW: m@Mp5AOxbzR3",
    subsections: [
      {
        id: "add-article",
        title: "How to add a new article",
        content: "[How to create a new product in Xentral.mp4](#)\n\nNaming rules for products BE → naming owned by Product Team\n\n1. Log in to Xentral.\n2. Go to \"Verkaufen\" -> \"Artikel\"\n\n![Screenshot: Xentral Verkaufen -> Artikel Navigation](xentral_navigation.png)\n\n3. Make sure to check if the SKU is not existing already. In order to do so, use the search bar.\n4. Click on \"Neu Anlegen\" on the top right corner\n\n![Screenshot: Xentral Search and Filter Bar](xentral_filter.png)\n\n5. Proceed with the product data input as below. Keep in mind that the fields that have not been mentioned should not be filled in.\n\n![Screenshot: Article Basic Data Form Part 1]\n\n* **Artikel**: article name\n* **Artikel Nr**: BEXXXXX\n* **Projekt**: BRAINEFFECT\n* **Artikelkategorie**: For most of our products is “Supplement”. If unsure, check with SCM Team Lead\n* **Standardlieferant**: input the supplier- if not found/does not exist, create the corresponding supplier entry\n\n![Screenshot: Article Basic Data Form Part 2]\n\n* **Artikelbeschreibung (DE)**: Left empty unless we need that info to be displayed on the LS\n* **Kurztext (DE)**: Left empty unless we need that info to be displayed on the LS\n* **Interner Kommentar**: Info for the SCM Team (e.g pallet schema, specific about the product, etc)\n\n![Screenshot: Article Basic Data Form Part 3]\n\n* **Quick Stock Sync**: Please DON’T set the check mark here.\n* **Status**: Check with SCM Manager\n* **From Packaging material ordered by BE until Master Carton Total Weight (kg) are MANDATORY fields.**\n\n* **Master Carton (units)**:\n    * input the units per carton\n* **Master Carton (EAN)**:\n    * input the EAN number of the Master Carton\n\n![Screenshot: Master Carton and SKU mapping]\n\n* **Old SKU**: either “None” if it is a new product. Otherwise check which SKU is being replaced by this one\n* **New SKU**: either “None” if it is a new product. Otherwise check which by which SKU it is being replaced\n* **Nettogewicht (für B2B)**: input the weight in grams, as shown on the example\n* **Alaiko Artikel**: “Alaiko” \n* **Product, Category, Flavour, Sizing, Category 2, Category 3** are **MANDATORY**. If in doubt, check with SCM Team Lead. Use [this Link](#) for guideline of Category2.\n\n* **For Category 3**: If cocreation = use cocreation. If new product/flavor (also for new market) and marketing agreed = use limited edition. All other = Main Line\n* **Shopify Import, Base Price, Content, Shop Apotheke** are left empty\n\n![Screenshot: Manufacturer and Customs details]\n\n* **Hersteller**: Needs to match the Standardlieferant without the number\n* **Herstellerlink**: Left empty\n* **Hersteller Nr.**: no need to fill out (automatic)\n* **EAN**: MANDATORY and it has to be unique\n* **Zolltarifnummer**: Obtained from Product Manager\n* in the **Herkunftsland** input the origin country code (ISO code)\n* **Ursprungsregion**: Left empty if unknown\n\n![Screenshot: Lager and Weight settings]\n\n* **Min. Lagermenge, Min. Bestellmenge, XVP, Kategorie** are left empty\n* **Standardlager**: “Alaiko_Main”\n* **Einheit**: “unit” or “kg” or “g” or “tonne”\n* **Gewicht (in kg) and Nettogewicht (in kg)**: have to be written using a decimal separator. Example: Weight 0.091, Net Weight 0.0309\n* **Dimensions (LxBxH)** have to be written with a comma.\n\n![Screenshot: Article Options and Taxes]\n\n**Artikel optionen:**\n* tick the field **Lagerartikel**\n**Sonstige Einstellungen:**\n* **Umsatzsteuer**: ermäßigt (7%) if it is a powder or a capsule or normal (19%) if it is liquid/Food (Gut Limo)\n* All other fields in Artikel Optionen / Varianten / Sonstige Einstellungen are left untouched\n\n![Screenshot: Saving Article and Sales Price Navigation](xentral_save_buttons.png)\n\n6. Click on **Save**, and go to the tab **\"Verkauf\"**\n7. Then, click on **\"Neuer Verkaufspreis\"**\n\n![Screenshot: Sales Price Configuration](xentral_save_buttons.png)\n\n* **Menge**: 1,00\n* **Preis**: input the brutto price, then click on -7 or -19 (according to MDT) to calculate netto price\n* **Gültig ab/bis**: 00.00.0000\n\n8. Don’t forget to save your changes.\n\n(If new product, must upload the Handover from BPD to SCM sheet in DATEIEN)\n\n[Doypack Sizing Sheet](#) - See sheet here. Owner: Saphira"
      },
      {
        id: "delete-article",
        title: "How to delete an article",
        content: "Deletion of an article is only possible if the article was never sold. As soon as the article is sold, we can only deactivate it (set status to inactive + activate checkbox Sperre)\n\n1. Log in to Xentral\n2. Select the classic layout\n\n![Screenshot: Classic Design Selection Dropdown](xentral_classic_design.png)\n\n3. Go to Stammdaten -> Artikel\n\n![Screenshot: Sidebar Navigation - Stammdaten Artikel](xentral_navigation.png)\n\n4. Find the article that should be deleted. If necessary, clear the filters.\n\n![Screenshot: Article Search and Filter Bar](xentral_filter.png)\n\n5. Click on the \"X\" next to the article that should be deleted.\n\n![Screenshot: Action Icons - Delete Article Button](xentral_actions.png)\n\n6. A dialogue window will pop up. Confirm the deletion by clicking \"Ok\"."
      },
      {
        id: "modify-article",
        title: "How to modify an article",
        content: "1. Log in to Xentral\n2. Select the classic layout or also the latest UI. Editing an article works in both UIs\n\n![Screenshot: Sidebar Navigation Dropdown](xentral_navigation.png)\n\n3. Go to Stammdaten -> Artikel\n\n![Screenshot: Sidebar Navigation - Stammdaten Artikel](xentral_navigation.png)\n\n4. Find the article that should be modified. If necessary, clear the filters.\n5. Click on the article position.\n6. Modify the article accordingly.\n7. Click on “Speichern” to save your changes.\n\n![Screenshot: Save and Cancel Action Buttons](xentral_save_buttons.png)\n\nAfter product launches, one has to adjust the SKU status accordingly."
      },
      {
        id: "statuses",
        title: "Product Status Definitions",
        content: "To ensure clarity and consistency in product lifecycle management, the following statuses are used to classify products:\n\n1. **Upcoming – New Product**\nRefers to a completely new product launch that has not previously existed in the portfolio. This is not an update or modification of an existing item, but an entirely new introduction to the market.\n2. **Upcoming – New SKU**\nRefers to an update of an existing product. This may include changes such as new packaging, an updated recipe, or a switch to a new supplier (while maintaining the same recipe). The core product remains the same, but the SKU is refreshed or improved.\n3. **Active**\nA product that is currently available and actively being sold in the market. There are no indications of the product being discontinued or replaced. Reorders should be placed as needed to maintain stock availability.\n4. **Discontinue – New SKU**\nIndicates that the current SKU will be phased out and replaced with a new version. Typical reasons include packaging redesign, recipe adjustments, or a change in supplier with the same recipe. The product continues in the portfolio but under a new SKU.\n5. **Discontinue**\nRefers to a product that will no longer be reordered and will not be replaced by a new SKU. Remaining stock will be sold off until depletion, after which the product will no longer be available.\n6. **Inactive**\nA status for products that are no longer being sold in shops. Any leftover units will be returned to the Berlin office for internal use, or, if necessary, destroyed in compliance with company policy."
      },
      {
        id: "block-sku",
        title: "How to Block an SKU in Xentral",
        content: "1. **Look up SKU**: Search for the specific SKU in Xentral.\n2. **Navigate to Sperre Section**: Scroll to the bottom of the article details page until you find the section titled Sperre (Lock/Block).\n3. **Activate the Block**: Tick the checkbox labeled Sperre aktiv:. This prevents the article from being added to new orders.\n4. **Document the Reason**: In the Meldung (Message) box, enter the date and the specific reason for the block.\n    * Example: 30.03.2024 - End of product life cycle\n\n![Screenshot: Sperre Lock/Block Configuration Section](xentral_sperre.png)\n\n5. **Save Changes**: Scroll back to the top (or bottom) of the page and click the Speichern (Save) button to finalize the block."
      }
    ]
  },
  {
    id: "gs1",
    title: "GS1 Labels",
    icon: "Truck",
    content: "### Label Requirements\n[\"How to create a GS1 GS1-DataBar Expanded code\"](#)\n[Tool to create GS1 GS1- DataBar Expanded Code.](https://barcode-generator.org/)\n\nThe label should have the following information:\n* Product Name\n* GS1-Databar-Expanded barcode containing:\n    * (01) EAN\n    * (15) Best Before Date in format YYMMDD\n    * (10) Batch number\n* Units per carton\n* Number of Cartons\n\n**Example:**\n---\nGUT CARE KAPSELN 60 Caps DE/EN/FR\nUnits per carton: 60 (example)\nNumber of Cartons: 6/30 (example)\n---\n\n**Carton dimensions for each shipment:**\n* Height, Width, Length\n* Net weight, Gross weight\n\n**For Retail Products:**\n→ Trays need to be labeled on the short ends of the cartons (see below)\n\n![Screenshot: Retail Tray Labeling Diagram]",
    subsections: []
  },
  {
    id: "ims",
    title: "IMS - Inventory Management System",
    icon: "BarChart3",
    content: "### Introduction\n[How to IMS? (Video)](#)\n[How to update IMS (Feb 2026)](#)\n\nIMS is the inventory management system in the form of a spreadsheet: [IMS V4_CW17](#)\n\n**Tab Walkthrough:**\n* **Instructions**: instructions for the file\n* **IMS**: main part, contains stock in 3PL and AMZ, sales velocity, actions...\n* **Sales All**: combined sales data\n* **[i] AMZ Stock**: stock of the Amazon warehouse\n* **[i] 3PL Stock**: stock of the 3PL\n* **[i] POs**: import from the PO Overview file\n\n### Stock update process - retrieve AMZ Report\n1. Log in to **Amazon Seller Central**.\n2. Go to Reports -> Fulfillment by Amazon -> **Manage FBA Inventory**.\n\n![Screenshot: AMZ Seller Central Navigation]\n\n3. Select **“Request .csv Download”**.\n4. Save file: **FBA_Stock_DDMMYYYY**.\n5. Paste into IMS tab **[i] AMZ Stock**.\n\n### Stock update process - retrieve Alaiko report\n1. Log in to **Alaiko**.\n2. Go to “Inventory” -> Products.\n3. Select **“Basic stock level export”**.\n4. Click **Download** once ready.\n5. Open **Converter_IMS_Alaiko_stock.xlsx**.\n6. Copy content to tab **Rawdata_Alaiko_Report**.\n7. Refresh pivot and paste into IMS tab **[i] 3PL Stock**.",
    subsections: []
  },
  {
    id: "po-overview",
    title: "PO Overview Spreadsheet",
    icon: "FileText",
    content: "### Introduction\nPO Overview is our main file to keep track of all purchase orders placed in the past and planned to be placed.\n\n[PO_Overview](#)\n\n**Tab Walkthrough:**\n* **PO_Overview**: statuses and details of BE products POs\n* **PO_Packaging**: statuses on packaging POs\n* **[i] Master Data**: import from Masterdata_v2\n\n### Statuses Overview\n* **Planned**: Initial status\n* **Quote in Discussion**: Discussing with supplier\n* **Waiting for Approval**: TL/CFO approval pending\n* **Approved**: Ready to order\n* **Waiting for Confirmation (S)**: Sent to supplier, awaiting OC\n* **Confirmed**: Production starting\n* **Gii done**: Samples approved\n* **On the way**: Left supplier warehouse\n* **Partial Delivery**: Part delivered\n* **Closed**: Order completed\n\n### Approval Process\nReceive approval from Mateo (TL) and Robert (CFO).\n\n**Adobe Acrobat Template Contents:**\n* SKU number and article name\n* Supplier name\n* Quantity approved by Mateo\n* Payment Terms\n* Arrival date and justification\n\n### Goods inward inspection (Gii)\n[Report - Gii - Goods Inward Inspection](#)\n\n1. Supplier informs SCM about finished production.\n2. SCM asks for **5 samples** to Berlin office.\n3. SCM Manager tags Product Manager in Gii chat with tracking link.\n4. PM conducts check and informs chat of results.\n5. Measure and weigh sample; verify vs Masterdata.\n6. Update PO Overview status to **Gii done**.\n7. Inform supplier that Gii passed; ask for shipping config.",
    subsections: []
  }
];
