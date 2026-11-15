/* Kings & Kingdoms. Each dynasty: id, name, te, years, capital, hook, kings [[name, years, fact]] */
const AP_ORDER_HOOK = '“Sita Is Very Clever, Krishna Reads Very Quietly, Not Bored” — Satavahana, Ikshvaku, Vishnukundin, Chalukya (Eastern), Kakatiya, Reddi, Vijayanagara, Qutb Shahi, Nizam (Asaf Jahi), British.';

const DYN_AP = [
 {id:'sata',name:'Satavahanas',te:'శాతవాహనులు',years:'c. 1st century BCE – early 3rd century CE (some date the start to the 3rd century BCE)',capital:'Pratishthana (Paithan); Dhanyakataka (Amaravati)',
  hook:'“S-K-S-H-G-V-Y”: “Simuka Kept Satakarni’s Hala Giving Very Young” — learn just the four bold ones: Simuka, Hala, Gautamiputra, Yajna Sri.',
  kings:[['Simuka','founder','Founded the dynasty after Mauryan decline'],['Krishna (Kanha)','','Brother of Simuka'],['Satakarni I','','Naneghat inscription of his queen Naganika; performed Ashvamedha'],['Hala','','Compiled Gathasaptasati in Prakrit'],['Gautamiputra Satakarni','c. 106–130 CE','Greatest king; defeated Nahapana; Nasik inscription'],['Vasishthiputra Pulumavi','c. 130–154 CE','Son of Gautamiputra; Amaravati linked to him'],['Yajna Sri Satakarni','c. 165–194 CE','Last strong ruler; ship coins']]},
 {id:'iksh',name:'Ikshvakus',te:'ఇక్ష్వాకులు',years:'3rd – 4th century CE',capital:'Vijayapuri (Nagarjunakonda)',
  hook:'“Santa, Vira, Ehu, Rudra” — S-V-E-R, like “SaVER”.',
  kings:[['Vasishthiputra Santamula','founder','Vedic sacrifices, Ashvamedha'],['Virapurushadatta','','Buddhism at its height; royal women donate'],['Ehuvala Chantamula','','Hindu temples also built'],['Rudrapurushadatta','last','Last known ruler']]},
 {id:'small',name:'Brihatphalayanas, Anandagotrikas, Salankayanas',te:'బృహత్పలాయనులు, ఆనందగోత్రికులు, శాలంకాయనులు',years:'c. 4th – 5th century CE',capital:'Kodur; Kandarapura; Vengi (Pedavegi)',
  hook:'“B-A-S” before V: “Brave Andhras Stay” … then Vishnukundins.',
  kings:[['Jayavarma','Brihatphalayana','Known from the Kodur grant'],['Kandara','Anandagotrika','Ruled the Guntur area'],['Hastivarma, Nandivarma','Salankayana','Ruled from Vengi near Eluru']]},
 {id:'vishnu',name:'Vishnukundins',te:'విష్ణుకుండినులు',years:'c. 5th century – 624 CE',capital:'Indrapalanagara, later towards the coast',
  hook:'“Indra Began, Madhava Best.” (The order of the middle kings is debated.)',
  kings:[['Indra Varma','founder','Founded the dynasty'],['Govinda Varma','','Supported Buddhist viharas too'],['Madhava Varma II','greatest','Many Ashvamedhas; widest kingdom'],['Vikramendra Varma, Indra Bhattaraka Varma','later','Wars with neighbours; ended by Pulakesin II’s conquest']]},
 {id:'echal',name:'Eastern Chalukyas of Vengi',te:'వేంగి తూర్పు చాళుక్యులు',years:'624 – c. 1070 CE',capital:'Vengi; later Rajamahendravaram',
  hook:'“Kubja Began, Gunaga Fought, Raja Wrote, Kulottunga Merged.”',
  kings:[['Kubja Vishnuvardhana','624–641','Founder; brother of Pulakesin II'],['Jayasimha I','','Consolidated the kingdom'],['Vijayaditya II (Narendra Mrigaraja)','','Fought the Rashtrakutas; built temples'],['Gunaga Vijayaditya III','9th century','Greatest warrior king'],['Chalukya Bhima I','','Linked to the Draksharama and Samarlakota (Kumararama) temples'],['Danarnava','','After him came a period of Telugu Choda interruption'],['Saktivarma I, Vimaladitya','','Restored with Chola help; Chola marriages'],['Rajaraja Narendra','1019–1061','Nannaya’s Telugu Mahabharatam; capital Rajahmundry'],['Kulottunga I (Rajendra Chalukya)','1070','Merged Vengi into the Chola empire']]},
 {id:'kaka',name:'Kakatiyas',te:'కాకతీయులు',years:'c. 1000 (as feudatories); independent 1158/1163 – 1323',capital:'Hanumakonda, then Orugallu (Warangal)',
  hook:'Feudatories “B-P-B-P”: Beta, Prola, Beta, Prola. Then “Rudra Made Ganapati’s Rudrama Proud.”',
  kings:[['Beta I','feudatory','Early chief under the Kalyani Chalukyas'],['Prola I','feudatory',''],['Beta II','feudatory',''],['Prola II','died 1158','Last feudatory; laid ground for independence'],['Rudradeva (Prataparudra I)','1158–1195','Independence; Thousand Pillar temple (1163)'],['Mahadeva','1195–1199','Brief rule; died in war'],['Ganapatideva','1199–1262','Moved capital to Orugallu; Motupalli; Ramappa (1213) built by his general'],['Rudramadevi','1262–1289','Woman ruler; Marco Polo’s visit'],['Prataparudra II','1289–1323','Last; defeated by Ulugh Khan in 1323']]},
 {id:'musu',name:'Musunuri Nayakas',te:'ముసునూరి నాయకులు',years:'1325 – 1368',capital:'Warangal (after recapture)',
  hook:'“Prolaya Planned, Kapaya Captured Warangal.”',
  kings:[['Prolaya Nayaka','1325–c. 1333','United Nayaka chiefs against the Tughlaqs'],['Kapaya Nayaka','c. 1333–1368','Recaptured Warangal; killed by Recharla Velamas at Bhimavaram (1368)']]},
 {id:'reddi',name:'Reddi Kingdom (Kondaveedu)',te:'రెడ్డి రాజ్యం (కొండవీడు)',years:'1325 – 1424 (Rajahmundry branch to c. 1448)',capital:'Addanki, then Kondaveedu',
  hook:'“Prolaya, Anavota, Anavema, Kumaragiri, Pedakomati, Racha” — “Pretty Ants Always Keep Peanuts Ready.”',
  kings:[['Prolaya Vema Reddi','1325–1353','Founder; capital Addanki'],['Anavota Reddi','1353–1364','Moved capital to Kondaveedu'],['Anavema Reddi','1364–1386','Expanded kingdom'],['Kumaragiri Reddi','1386–1402','Patron of dance and the arts'],['Pedakomati Vema Reddi','1402–1420','Srinatha was his court poet'],['Racha Vema Reddi','1420–1424','Last; kingdom absorbed']]},
 {id:'velama',name:'Recharla Velamas',te:'రేచర్ల వెలమలు',years:'14th – 15th century',capital:'Rachakonda and Devarakonda',
  hook:'“Rachakonda Rivals of Reddis.”',
  kings:[['Singama Nayaka I','','Founder of Velama power'],['Anapota Nayaka','','Defeated Kapaya Nayaka (1368)'],['Sarvajna Singabhupala','','Scholar-king; wrote Rasarnava Sudhakara']]},
 {id:'vijay',name:'Vijayanagara Empire',te:'విజయనగర సామ్రాజ్యం',years:'1336 – c. 1646',capital:'Vijayanagara (Hampi); after 1565 Penukonda, then Chandragiri',
  hook:'Four dynasties “Some Sweet Tasty Apples” — Sangama, Saluva, Tuluva, Aravidu.',
  kings:[['Harihara I','1336–1356','Sangama; founder with brother Bukka'],['Bukka I','1356–1377','Sangama; expanded the empire'],['Harihara II','1377–1404','Sangama; expanded the empire further'],['Devaraya I','1406–1422','Sangama; Nicolo Conti visited'],['Devaraya II','c. 1424–1446','Sangama; greatest of the line; Abdur Razzaq visited'],['Saluva Narasimha','1485–1491','Saluva; saved the empire'],['Vira Narasimha','1505–1509','Tuluva; founder of Tuluva line'],['Krishnadevaraya','1509–1529','Tuluva; Amuktamalyada; Ashtadiggajas; Paes and Nuniz'],['Achyuta Deva Raya','1529–1542','Tuluva'],['Sadasiva Raya','1542–1570','Tuluva; Aliya Rama Raya held real power; Talikota 1565'],['Tirumala','1570–1572','Aravidu; capital Penukonda'],['Venkata II (Venkatapati Raya)','1586–1614','Aravidu; Penukonda and Chandragiri'],['Sriranga III','to c. 1646','Aravidu; last ruler']]},
 {id:'qutb',name:'Qutb Shahis of Golconda',te:'గోల్కొండ కుతుబ్ షాహీలు',years:'1518 – 1687',capital:'Golconda; Hyderabad from 1591',
  hook:'“Sultan Jumped, Subhan Slipped, Ibrahim Inspired, Muhammad Made Hyderabad, Muhammad, Abdullah, Abul lost.”',
  kings:[['Sultan Quli Qutb Shah','1518–1543','Founder'],['Jamshid','1543–1550',''],['Subhan Quli','1550','Child ruler, brief'],['Ibrahim Qutb Shah','1550–1580','“Malki Bharama”; patron of Telugu poets'],['Muhammad Quli Qutb Shah','1580–1612','Founded Hyderabad; Charminar (1591); Urdu poet'],['Muhammad Qutb Shah','1612–1626','Mecca Masjid begun'],['Abdullah Qutb Shah','1626–1672','Accepted Mughal overlordship'],['Abul Hasan Tana Shah','1672–1687','Last; ministers Madanna and Akkanna; Aurangzeb annexed']]},
 {id:'asaf',name:'Asaf Jahis (Nizams)',te:'అసఫ్ జాహీలు (నిజాంలు)',years:'1724 – 1948',capital:'Aurangabad, then Hyderabad',
  hook:'Seven numbered Nizams (Asaf Jah I to VII). Learn: I founded, II subsidiary, VI Mahbub, VII Osman last.',
  kings:[['Nizam-ul-Mulk (Asaf Jah I)','1724–1748','Founder'],['Nasir Jung, Muzaffar Jung','1748–1751','Succession war with French and British involvement'],['Salabat Jung','1751–1762','Gave Northern Circars to the French (1753)'],['Nizam Ali Khan (Asaf Jah II)','1762–1803','Subsidiary Alliance (1798); Ceded Districts (1800)'],['Sikandar Jah (III)','1803–1829',''],['Nasir-ud-Daulah (IV)','1829–1857',''],['Afzal-ud-Daulah (V)','1857–1869','Salar Jung I as reforming minister'],['Mir Mahbub Ali Khan (VI)','1869–1911',''],['Mir Osman Ali Khan (VII)','1911–1948','Osmania University; Operation Polo ended his rule']]},
 {id:'modern',name:'Modern Andhra (states)',te:'ఆధునిక ఆంధ్ర',years:'1953 – today',capital:'Kurnool (1953); Hyderabad (1956–2014); Amaravati (residual AP)',
  hook:'“53 Kurnool, 56 Hyderabad, 2014 two states.”',
  kings:[['Andhra State','1 Oct 1953','CM Tanguturi Prakasam; capital Kurnool'],['Andhra Pradesh','1 Nov 1956','CM Neelam Sanjiva Reddy; capital Hyderabad'],['Article 371D','1973','After Jai Andhra and Telangana agitations'],['Telangana formed','2 Jun 2014','AP Reorganisation Act 2014']]}
];

const AP_SIDE = [
 ['c. 1st c. BCE – 3rd c. CE','Satavahanas','Whole Deccan'],
 ['3rd – 4th c. CE','Ikshvakus','Krishna valley'],
 ['4th – 5th c.','Brihatphalayanas, Anandagotrikas, Salankayanas','Coastal Andhra'],
 ['5th c. – 624','Vishnukundins','Coastal Andhra and Telangana'],
 ['6th – 8th c.','Renati Cholas (alongside)','Rayalaseema'],
 ['624 – 1070','Eastern Chalukyas','Vengi (coast)'],
 ['1158 – 1323','Kakatiyas','Telangana and most Telugu land'],
 ['1325 – 1368','Musunuri Nayakas','Telangana'],
 ['1325 – 1448','Reddis','Coastal Andhra'],
 ['14th – 15th c.','Recharla Velamas','Rachakonda'],
 ['1336 – 1646','Vijayanagara','Rayalaseema and south'],
 ['1347 – 1518','Bahmanis (alongside)','Telangana'],
 ['1518 – 1687','Qutb Shahis','Golconda'],
 ['1687 – 1724','Mughals','Deccan subah'],
 ['1724 – 1948','Asaf Jahis','Hyderabad State'],
 ['1766 / 1800 – 1947','British','Circars and Ceded Districts'],
 ['1953 / 1956 / 2014','Andhra State / AP / two states','Telugu states']
];

const DYN_IN = [
 {id:'maurya',name:'Mauryas',te:'మౌర్యులు',years:'c. 322 – 185 BCE',capital:'Pataliputra',hook:'“C-B-A”: Chandragupta, Bindusara, Ashoka.',
  kings:[['Chandragupta Maurya','c. 322–298 BCE','Founder; Kautilya; Megasthenes'],['Bindusara','c. 298–273 BCE','Called Amitraghata'],['Ashoka','c. 268–232 BCE','Kalinga war; Dhamma'],['Brihadratha','to c. 185 BCE','Last; killed by Pushyamitra Shunga']]},
 {id:'gupta',name:'Guptas',te:'గుప్తులు',years:'c. 320 – 550 CE',capital:'Pataliputra; Ujjain',hook:'“Clever Samudra Chose Kind Skanda.”',
  kings:[['Chandragupta I','c. 320–335','Founder of imperial line; Gupta era 320 CE'],['Samudragupta','c. 335–375','Allahabad pillar; Napoleon of India'],['Chandragupta II','c. 375–415','Vikramaditya; Fa-Hien'],['Kumaragupta I','c. 415–455','Nalanda'],['Skandagupta','c. 455–467','Fought the Huns']]},
 {id:'sultan',name:'Delhi Sultanate',te:'ఢిల్లీ సుల్తానులు',years:'1206 – 1526',capital:'Delhi; Agra (Lodis)',hook:'“Some Kings Took Sweet Lassi” — Slave, Khalji, Tughlaq, Sayyid, Lodi.',
  kings:[['Slave (Mamluk)','1206–1290','Aibak, Iltutmish, Razia, Balban'],['Khalji','1290–1320','Jalaluddin, Alauddin'],['Tughlaq','1320–1414','Ghiyasuddin, Muhammad bin Tughlaq, Firoz Shah'],['Sayyid','1414–1451','Khizr Khan'],['Lodi','1451–1526','Bahlul, Sikandar, Ibrahim']]},
 {id:'mughal',name:'Mughals',te:'మొఘలులు',years:'1526 – 1857',capital:'Agra; Fatehpur Sikri; Delhi',hook:'“Black Horse Ate Juicy Sweet Apples.”',
  kings:[['Babur','1526–1530','Panipat I, Khanwa'],['Humayun','1530–1540; 1555–1556','Lost to Sher Shah; returned'],['Akbar','1556–1605','Mansabdari; Din-i-Ilahi'],['Jahangir','1605–1627','Nur Jahan; Thomas Roe'],['Shah Jahan','1628–1658','Taj Mahal'],['Aurangzeb','1658–1707','Annexed Golconda 1687'],['Bahadur Shah Zafar','1837–1857','Last; exiled after 1857']]},
 {id:'sikh',name:'Sikh Gurus',te:'సిక్కు గురువులు',years:'1469 – 1708',capital:'—',hook:'“Nanak Angad Amar Ram, Arjan Hargobind Har Rai, Har Krishan Tegh Gobind.”',
  kings:[['Guru Nanak','1st','Founder'],['Guru Angad','2nd','Gurmukhi'],['Guru Amar Das','3rd','Manji system; strengthened langar'],['Guru Ram Das','4th','Founded Amritsar'],['Guru Arjan','5th','Adi Granth 1604; executed 1606'],['Guru Hargobind','6th','Akal Takht'],['Guru Har Rai','7th',''],['Guru Har Krishan','8th','Child guru'],['Guru Tegh Bahadur','9th','Executed 1675'],['Guru Gobind Singh','10th','Khalsa 1699']]},
 {id:'gg',name:'Governors-General and Viceroys',te:'గవర్నర్ జనరల్స్, వైస్రాయ్‌లు',years:'1773 – 1947',capital:'Calcutta; Delhi from 1911',hook:'Pick 12 to remember: Hastings, Cornwallis, Wellesley, Bentinck, Dalhousie, Canning, Lytton, Ripon, Curzon, Irwin, Linlithgow, Mountbatten — “Hot Coffee With Biscuits Delights Children, Little Ravi Can’t Ignore Lovely Mangoes.”',
  kings:[['Warren Hastings','1773–1785','First GG of Bengal; Regulating Act'],['Cornwallis','1786–1793','Permanent Settlement; civil services'],['Wellesley','1798–1805','Subsidiary Alliance'],['Bentinck','1828–1835','Sati abolished; first GG of India (1833)'],['Dalhousie','1848–1856','Doctrine of Lapse; railways, telegraph'],['Canning','1856–1862','1857 revolt; first Viceroy (1858)'],['Lytton','1876–1880','Vernacular Press Act; Delhi Durbar 1877'],['Ripon','1880–1884','Local self-government; Ilbert Bill'],['Dufferin','1884–1888','INC founded 1885'],['Curzon','1899–1905','Partition of Bengal'],['Minto II','1905–1910','Morley–Minto reforms'],['Hardinge II','1910–1916','Capital to Delhi (1911)'],['Chelmsford','1916–1921','Rowlatt Act; Jallianwala'],['Reading','1921–1926','Chauri Chaura'],['Irwin','1926–1931','Simon Commission; Gandhi–Irwin Pact'],['Willingdon','1931–1936','Communal Award; Poona Pact'],['Linlithgow','1936–1943','Cripps Mission; Quit India'],['Wavell','1943–1947','Simla Conference; Cabinet Mission'],['Mountbatten','1947','Last Viceroy; partition plan']]}
];

const BOOKS = {
 ap:[
  ['History and Culture of Andhra Pradesh (Earliest Times to 2019)','P. Raghunatha Rao','Main single-volume AP book; Sterling'],
  ['History of Modern Andhra Pradesh','P. Raghunatha Rao','Modern period, movements and state formation'],
  ['Ancient and Medieval History of Andhra Pradesh','P. Raghunatha Rao','Satavahanas to Asaf Jahis'],
  ['Social and Cultural History of Andhra Pradesh','I. Seenayya','Social and cultural focus for Group 2 and Group 1'],
  ['Andhrula Charitra (Telugu)','Dr. B.S.L. Hanumantha Rao','Classic Telugu-medium history'],
  ['Andhrula Sanghika Charitra (Telugu)','Suravaram Pratap Reddy','Social history of the Telugu people'],
  ['Andhra Pradesh Samagra Charitra','P.V.K. Prasada Rao','Comprehensive history'],
  ['Andhra Pradesh History','Jogi Naidu','Exam-oriented'],
  ['Early History of the Andhra Country','K. Gopalachari','Satavahanas and early dynasties'],
  ['Early Dynasties of Andhradesa','B.V. Krishna Rao','Early dynasties in depth'],
  ['The Kakatiyas','P.V. Parabrahma Sastry','Standard book on the Kakatiyas'],
  ['Comprehensive History and Culture of AP (Vol. III, Early Medieval AD 624–1000; Late Medieval AD 1324–1724)','Telugu University / various editors','Scholarly volumes for depth'],
  ['Telugu Akademi books on AP History and Culture','Telugu Akademi','Widely used; cross-check facts with the standard books above']
 ],
 india:[
  ['Indian History','K. Krishna Reddy (McGraw Hill)','All periods in one book; many practice questions'],
  ['Courseware on Indian History','Abhishek Mishra and Subhangini Priya (McGraw Hill)','Five themes; this app follows its chapter list'],
  ['Indian Art and Culture','Nitin Singhania (McGraw Hill)','Art and culture chapters'],
  ['India’s Ancient Past','R.S. Sharma','Old NCERT-based ancient history'],
  ['History of Medieval India','Satish Chandra','Medieval history'],
  ['A Brief History of Modern India','Rajiv Ahir (Spectrum)','Modern India for Prelims'],
  ['India’s Struggle for Independence','Bipan Chandra and others','National movement in depth (Mains)'],
  ['India After Independence','Bipan Chandra and others','Post-1947 history'],
  ['NCERT textbooks (Class 6–12 history)','NCERT','Basics; read first']
 ]
};
