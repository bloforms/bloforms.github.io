/* Art and architecture per chapter: AR(id,{style, features[], monuments:[[name, place, patron/date, why it matters]], sculpture[], analysis[]}) */
const ARTD = {};
function AR(id,o){ARTD[id]=o;}

AR('prehistory',{style:'Rock art (paintings and engravings) in caves and shelters.',
features:['Paintings in red ochre and white on rock walls','Scenes of hunting, dancing, animals and group life','Later layers show riders and weapons, showing change over time','Engravings (petroglyphs) as well as paintings'],
monuments:[['Bhimbetka rock shelters','Madhya Pradesh','Upper Palaeolithic to historic','Over 700 shelters; UNESCO site; continuous art for thousands of years'],['Kurnool caves','Andhra Pradesh','Palaeolithic','Tools and bone remains; early cave use'],['Edakkal caves','Kerala','Neolithic–Mesolithic','Engravings of human and animal figures']],
sculpture:['Mother goddess figures appear in later Neolithic–Chalcolithic times','Bone and stone ornaments'],
analysis:['Rock art is the first record of Indian aesthetic life and belief, showing hunting magic, community dances and ritual.','Superimposed layers at Bhimbetka give a visual timeline from hunters to herders and riders.','Natural pigments (haematite, kaolin) show early technical knowledge.']});

AR('chalco',{style:'Rural painted pottery and Megalithic burial architecture.',
features:['Painted pottery with black designs on red (Malwa, Jorwe)','Megalithic stone circles, dolmens, cists and menhirs','Terracotta and copper figurines'],
monuments:[['Inamgaon','Maharashtra','Jorwe culture','Large houses, granaries, burial urns'],['Brahmagiri megaliths','Karnataka','Megalithic','Stone-circle graves'],['Daimabad','Maharashtra','Late Harappan/Chalcolithic','Bronze chariot, rhinoceros and elephant figures']],
sculpture:['Daimabad bronzes are among the finest metal sculptures of the period','Clay bulls and mother goddess figures'],
analysis:['Chalcolithic art is regional and rural, unlike the standardised Harappan crafts.','Megaliths show monumental architecture for the dead, requiring organised labour.','The Daimabad bronzes link Harappan metal craft with Deccan cultures.']});

AR('indus',{style:'Urban, functional architecture of burnt brick; small, refined art objects.',
features:['Grid-plan cities, citadel and lower town','Standard burnt bricks (ratio 1:2:4)','Covered drains, wells, bathrooms','No temples or palaces identified; public buildings like the Great Bath and granaries','Art on a small scale: seals, figurines, beads, pottery'],
monuments:[['Great Bath','Mohenjodaro','Mature Harappan','Waterproofed with bitumen; possibly ritual bathing'],['Granaries','Harappa, Mohenjodaro','Mature Harappan','Storage of grain, civic control'],['Dockyard','Lothal','Mature Harappan','Maritime trade'],['Reservoirs and signboard','Dholavira','Mature Harappan','Water management; UNESCO']],
sculpture:['Bronze “dancing girl” (lost-wax casting)','Steatite “priest-king” bust','Pashupati seal and unicorn seals','Red sandstone male torso (Harappa)','Terracotta mother goddess, toys, carts'],
analysis:['Harappan architecture is civic rather than religious or royal: it reflects concern for planning, hygiene and order.','Uniform bricks and town plans across a vast area suggest common standards and authority.','The lost-wax bronze casting of the dancing girl shows advanced metallurgy; the technique continues in Indian bronze art (Chola bronzes, Dhokra).','Seals combine art, writing and trade, revealing beliefs (proto-Shiva) and animals of the region.']});

AR('vedic',{style:'Little surviving architecture; perishable materials (wood, thatch).',
features:['Houses of wood, bamboo and mud','Fire altars (vedi) built to precise geometric shapes','Painted Grey Ware pottery in the Later Vedic period'],
monuments:[['Fire altars (described in Sulba Sutras)','Vedic sites','Later Vedic','Geometry of altars (e.g. falcon-shaped altar)'],['Hastinapur, Kaushambi settlements','Ganga plains','Later Vedic','Early fortified settlements']],
sculpture:['No temples or images; worship through fire sacrifices'],
analysis:['Vedic religion was aniconic, which explains the absence of temples and sculpture.','Altar geometry in the Sulba Sutras links ritual with mathematics.','The lack of durable art shows that Vedic society’s achievements were mainly literary and oral.']});

AR('sixth',{style:'Early urban fortifications; beginnings of Buddhist and Jain sacred architecture.',
features:['Fortified cities with ramparts and moats (Rajagriha, Kaushambi)','Stupa as a burial mound for relics','Northern Black Polished Ware (NBPW) pottery'],
monuments:[['Rajagriha cyclopean wall','Bihar','6th c. BC','Early stone fortification'],['Piprahwa stupa','Uttar Pradesh','5th c. BC','Relic casket linked to the Buddha'],['Vaishali stupa','Bihar','5th c. BC','Relic stupa']],
sculpture:['Few sculptures survive; NBPW is the luxury pottery of the age'],
analysis:['Fortifications reflect warfare between Mahajanapadas.','The stupa, a relic mound, became the starting point of Buddhist architecture.','NBPW’s glossy finish shows skilled pottery and urban taste.']});

AR('maurya',{style:'Court art (pillars, palaces, rock-cut caves) and popular art (yaksha, yakshi figures).',
features:['Monolithic polished sandstone pillars with animal capitals','Mirror-like Mauryan polish','Rock-cut caves with polished interiors (Barabar)','Stupas built or enlarged by Ashoka','Persian (Achaemenid) influence on capitals'],
monuments:[['Lion Capital','Sarnath','Ashoka','National emblem; four lions, dharma chakra'],['Barabar caves (Lomas Rishi)','Bihar','Ashoka, Dasharatha','Earliest rock-cut caves; carved entrance imitating wood'],['Pataliputra palace (Kumrahar)','Patna','Chandragupta','80-pillared hall'],['Sanchi stupa (core)','Madhya Pradesh','Ashoka','Later enlarged'],['Dhauli elephant','Odisha','Ashoka','Rock-cut elephant above edicts']],
sculpture:['Didarganj Yakshi (polished sandstone)','Parkham Yaksha','Rampurva bull capital','Lauriya Nandangarh lion capital'],
analysis:['Mauryan court art was imperial propaganda: pillars carried edicts and royal symbols across the empire.','Foreign influence (bell-shaped capitals, polish) was adapted to Indian themes like the dharma chakra.','Popular art (yakshas) shows a parallel folk tradition beside court art.','The Barabar caves started the Indian tradition of rock-cut architecture, which culminated at Ajanta and Ellora.']});

AR('postmaurya',{style:'Buddhist stupas and chaityas; three sculptural schools (Gandhara, Mathura, Amaravati).',
features:['Stupas with railings (vedika) and gateways (toranas)','Rock-cut chaitya halls and viharas in the western Deccan','First anthropomorphic images of the Buddha','Narrative reliefs of Jataka stories'],
monuments:[['Sanchi Stupa 1 gateways','Madhya Pradesh','Shungas, Satavahanas','Carved toranas with Jataka scenes'],['Bharhut stupa railing','Madhya Pradesh','Shunga','Labelled narrative reliefs'],['Karle chaitya','Maharashtra','Satavahana period','Largest rock-cut chaitya hall'],['Amaravati stupa','Andhra Pradesh','Satavahanas','Marble-like limestone reliefs'],['Udayagiri–Khandagiri caves','Odisha','Kharavela','Jain caves']],
sculpture:['Gandhara Buddha (Greek-Roman style)','Mathura Buddha and Kushana king statues (Kanishka headless statue)','Amaravati narrative medallions'],
analysis:['The shift from symbols (stupa, footprints, wheel) to human images of the Buddha reflects Mahayana devotion.','Trade wealth and guild donations funded monuments, as donor inscriptions show.','Gandhara shows foreign influence; Mathura and Amaravati show Indian roots; together they show cultural synthesis.','Andhra’s Amaravati school influenced Sri Lanka and South-East Asia.']});

AR('gupta',{style:'Classical age: first structural temples, refined sculpture, Ajanta painting.',
features:['Early temples: flat-roofed square sanctum with porch (Sanchi Temple 17)','Later shikhara on temples (Deogarh)','Garbhagriha (sanctum) concept','Calm, spiritual expressions; transparent drapery (Sarnath school)','Ajanta murals (Vakataka patronage)'],
monuments:[['Dashavatara temple','Deogarh','6th c.','Early shikhara; Vishnu reliefs'],['Temple 17','Sanchi','5th c.','Earliest structural temple type'],['Udayagiri caves (Varaha)','Vidisha','Chandragupta II','Monumental Varaha relief'],['Bhitargaon brick temple','Kanpur','5th c.','Brick temple with terracotta'],['Ajanta caves 16, 17, 1, 2','Maharashtra','Vakatakas (Harishena)','Murals of Jatakas'],['Iron pillar','Mehrauli','Chandragupta II','Rust-free metallurgy']],
sculpture:['Sarnath seated Buddha (preaching)','Sultanganj copper Buddha','Mathura standing Buddha','Gupta gold coins as art'],
analysis:['Gupta art set classical standards of proportion and calm that shaped later Indian and South-East Asian art.','The temple form born here (sanctum, porch, shikhara) became the base of Nagara architecture.','Royal and Brahmanical patronage marks a shift from Buddhist to Hindu monuments.','Ajanta paintings show courtly life, emotions and colour mastery, a high point of Indian painting.']});

AR('postgupta',{style:'Experimental temple building by Chalukyas and Pallavas; rock-cut and structural temples.',
features:['Chalukyas: experiments at Aihole, Badami, Pattadakal','Pallavas: rock-cut mandapas, monolithic rathas, then structural temples','Narrative reliefs in stone'],
monuments:[['Lad Khan temple','Aihole','Chalukya, c. 5th–6th c.','Early temple experiment'],['Badami cave temples','Karnataka','Chalukyas','Rock-cut Vishnu, Shiva, Jain caves'],['Pancha Rathas','Mahabalipuram','Narasimhavarman I','Monolithic temple models'],['Arjuna’s Penance (Descent of the Ganga)','Mahabalipuram','Pallavas','Huge open-air relief'],['Shore Temple','Mahabalipuram','Rajasimha (8th c.)','Early structural Dravida temple'],['Kailasanatha','Kanchipuram','Rajasimha','Dravida temple with enclosure']],
sculpture:['Mahishasuramardini panel (Mahabalipuram)','Badami Nataraja'],
analysis:['Aihole is called the “cradle of Indian temple architecture” because of its many experiments.','Pallava art shows the evolution from rock-cut to structural temples, the foundation of Dravida style.','Chalukya–Pallava rivalry spurred artistic competition.']});

AR('earlymed',{style:'Mature regional temple styles: Nagara, Dravida, Vesara; Chola bronzes.',
features:['Huge temple complexes as centres of economy and culture','Nagara sub-styles: Odisha (rekha deul), Khajuraho (cluster of shikharas)','Dravida: towering vimana (Thanjavur), later gopurams','Chola bronze casting','Rock-cut monolith (Kailasa, Ellora)'],
monuments:[['Kailasa temple','Ellora','Rashtrakuta Krishna I','Carved top-down from a single rock'],['Brihadeeswara','Thanjavur','Rajaraja I (1010)','Vimana about 66 m; UNESCO'],['Gangaikondacholapuram','Tamil Nadu','Rajendra I','Chola capital temple'],['Khajuraho group (Kandariya Mahadeva)','Madhya Pradesh','Chandelas','Nagara style; sculpture'],['Lingaraja','Bhubaneswar','11th c.','Odisha Nagara'],['Dilwara temples','Mount Abu','Solankis (11th–13th c.)','Marble Jain temples'],['Pattadakal','Karnataka','Chalukyas','Nagara and Dravida side by side; UNESCO']],
sculpture:['Chola Nataraja bronzes','Khajuraho sculptures','Pala bronzes and Buddhist manuscript painting'],
analysis:['Temples became economic hubs with land, staff, banking and education, reflecting feudal agrarian society.','Regional styles show the growth of regional kingdoms and identities.','Chola bronzes (lost-wax) carry forward the Harappan technique and reach artistic perfection.','Indian temple forms spread to South-East Asia (Angkor, Prambanan).']});

AR('c13',{style:'Indo-Islamic architecture begins: arches, domes, minarets, calligraphy.',
features:['True arch and dome (keystone principle)','Use of lime mortar','Calligraphy and geometric/arabesque decoration (no human images)','Early mosques used material from older temples','Red sandstone with marble inlay (Khalji)'],
monuments:[['Quwwat-ul-Islam mosque','Delhi','Aibak (1193 onwards)','First mosque in Delhi'],['Qutb Minar','Delhi','Aibak, Iltutmish (completed)','UNESCO; tallest brick-and-stone minaret of its time'],['Adhai Din ka Jhonpra','Ajmer','Aibak','Early mosque'],['Tomb of Iltutmish','Delhi','Iltutmish','Early Sultanate tomb'],['Alai Darwaza','Delhi','Alauddin Khalji (1311)','First true arch and dome'],['Tughlaqabad fort; tomb of Ghiyasuddin','Delhi','Tughlaqs','Sloping (battered) walls'],['Firoz Shah Kotla','Delhi','Firuz Shah','Placed Ashokan pillar on top']],
sculpture:['Figurative sculpture avoided in religious buildings; decorative stone carving by Indian craftsmen'],
analysis:['Indo-Islamic architecture was a synthesis: Islamic forms built by Indian craftsmen who added lotus, bell and creeper motifs.','The arch and dome replaced the trabeate (beam) system, allowing large covered spaces.','Tughlaq buildings are austere and fort-like, reflecting financial strain and military needs.','Monuments projected the new rulers’ power and faith.']});

AR('c14',{style:'Regional Indo-Islamic and Hindu styles (Jaunpur, Gujarat, Bengal, Malwa, Deccan, Mewar).',
features:['Jaunpur: massive propylons (gateways)','Gujarat: Hindu–Jain carving in mosques','Bengal: brick, curved roofs (chala)','Malwa: Mandu palaces','Deccan: Persian influence (Bidar, Gulbarga)','Mewar: Vijay Stambha'],
monuments:[['Atala Masjid','Jaunpur','Sharqis (1408)','Jaunpur style'],['Jama Masjid','Ahmedabad','Ahmad Shah (1424)','Gujarat style'],['Adina Mosque','Pandua (Bengal)','Sikandar Shah','Large Bengal mosque'],['Jahaz Mahal','Mandu','Malwa Sultans','Palace between lakes'],['Mahmud Gawan madrasa','Bidar','1472','Persian tilework'],['Gol Gumbaz','Bijapur','Muhammad Adil Shah (1656)','Huge dome; whispering gallery'],['Vijay Stambha','Chittorgarh','Rana Kumbha','Victory tower']],
sculpture:['Hindu sculpture continued in temples; Jain manuscript painting in Gujarat'],
analysis:['Regional styles reflect local materials, climate and traditions (brick in Bengal, stone carving in Gujarat).','Deccan buildings show Persian links through Afaqi nobles.','Regional courts used architecture to claim independence from Delhi.']});

AR('mughal',{style:'Mughal architecture and painting: synthesis of Persian, Central Asian and Indian styles.',
features:['Char-bagh gardens; tomb in garden','Double dome, bulbous dome','Red sandstone (Akbar) to white marble (Shah Jahan)','Pietra dura inlay','Symmetry and axial plans','Miniature painting in karkhanas'],
monuments:[['Humayun’s Tomb','Delhi','Built under Akbar (1570)','First garden tomb; double dome; UNESCO'],['Agra Fort','Agra','Akbar','Red sandstone fort; UNESCO'],['Fatehpur Sikri (Buland Darwaza, Panch Mahal)','Agra','Akbar','Synthesis of styles; UNESCO'],['Akbar’s Tomb','Sikandara','Jahangir','Five-storey design'],['Itmad-ud-Daula','Agra','Nur Jahan','First full marble with pietra dura'],['Taj Mahal','Agra','Shah Jahan (1632–43)','Peak of Mughal architecture; UNESCO'],['Red Fort, Jama Masjid','Delhi','Shah Jahan','Shahjahanabad'],['Badshahi Mosque','Lahore','Aurangzeb','Large mosque'],['Bibi ka Maqbara','Aurangabad','Azam Shah (1660)','“Deccan Taj”']],
sculpture:['Painting: Hamzanama (Akbar), Mansur’s animal and bird studies (Jahangir), Bichitr’s portraits (Shah Jahan)','Painters: Abd-us-Samad, Mir Sayyid Ali, Daswanth, Basawan, Mansur'],
analysis:['Mughal architecture symbolised imperial power and divine kingship (Taj as paradise garden).','Akbar’s buildings show deliberate cultural synthesis, matching his political policy of sulh-i-kul.','Jahangir’s reign marks the peak of painting (naturalism, portraits); Shah Jahan’s marks the peak of architecture.','Decline of patronage under Aurangzeb led artists to regional courts, giving rise to Rajput and Pahari styles.']});

AR('maratha',{style:'Hill forts, temples in Maratha style, wadas (mansions); Sikh architecture.',
features:['Hill and sea forts (Raigad, Sindhudurg)','Maratha temples with Mughal-influenced domes','Wadas: courtyard mansions (Shaniwar Wada)','Sikh: gurdwaras with gilded domes'],
monuments:[['Raigad fort','Maharashtra','Shivaji','Capital; coronation site'],['Sindhudurg','Konkan coast','Shivaji (1664)','Sea fort'],['Shaniwar Wada','Pune','Baji Rao I (1732)','Peshwa palace'],['Harmandir Sahib (Golden Temple)','Amritsar','Guru Arjan; gilded by Ranjit Singh','Sikh centre'],['Akal Takht','Amritsar','Guru Hargobind','Temporal seat']],
sculpture:['Maratha painting and murals in wadas; Sikh frescoes'],
analysis:['Forts reflect a guerrilla, defensive strategy and naval awareness.','Maratha and Sikh buildings borrowed Mughal forms, showing cultural continuity even among rivals.','The Golden Temple’s four doors symbolise openness to all.']});

AR('bhakti',{style:'Temples and dargahs as centres of devotion; devotional art.',
features:['Sufi dargahs with domed tombs and open courtyards','Temple expansion for congregational worship (mandapas, kirtan halls)','Devotional painting (Krishna themes: Rajput, Pahari, Pichhwai)'],
monuments:[['Ajmer Sharif dargah','Ajmer','Muinuddin Chishti','Major Sufi shrine'],['Nizamuddin dargah','Delhi','Nizamuddin Auliya','Sufi centre'],['Salim Chishti’s tomb','Fatehpur Sikri','Akbar','Marble jali work'],['Vitthal temple','Pandharpur','—','Warkari centre'],['Jagannath temple','Puri','Eastern Gangas','Chaitanya’s base']],
sculpture:['Pichhwai paintings (Nathdwara)','Rajput and Pahari miniatures of Krishna (Gita Govinda themes)'],
analysis:['Bhakti shifted art towards emotional, devotional themes (Radha–Krishna).','Dargahs and temples became shared sacred spaces for many communities.','Devotional painting democratised art beyond royal courts.']});

AR('c18',{style:'Late Mughal and regional styles: Awadh, Rajput, Pahari, Deccani, Sikh.',
features:['Awadh: Imambaras with large vaults (Lucknow)','Rajput: Jaipur planned city, observatories','Pahari painting (Kangra, Basohli)','Deccani painting (Hyderabad)'],
monuments:[['Bara Imambara','Lucknow','Asaf-ud-Daula (1784)','Huge vaulted hall; Bhulbhulaiya'],['Jantar Mantar','Jaipur, Delhi','Sawai Jai Singh II','Observatories; Jaipur UNESCO'],['Hawa Mahal','Jaipur','1799','Facade with windows'],['Safdarjung’s Tomb','Delhi','1754','Last Mughal garden tomb'],['Padmanabhapuram palace','Travancore','Martanda Varma','Wooden Kerala architecture']],
sculpture:['Kangra paintings (Raja Sansar Chand)','Kishangarh painting (Bani Thani)','Deccani Hyderabad school'],
analysis:['Political decentralisation spread artistic patronage to regional courts.','Jaipur (1727) was one of India’s first planned cities, laid out on a grid.','Art shows continuity of Mughal forms with regional adaptation.']});

AR('europeans',{style:'European colonial architecture: forts, churches, factories.',
features:['Portuguese Baroque churches (Goa)','Fortified trading settlements','Dutch and Danish churches, cemeteries'],
monuments:[['Basilica of Bom Jesus','Goa','Portuguese (1605)','Baroque; UNESCO'],['Se Cathedral','Goa','Portuguese','Large church'],['Fort St George; St Mary’s Church','Madras','English (1639; 1680)','Oldest Anglican church in Asia'],['Dansborg fort','Tranquebar','Danes','Danish fort'],['Dutch cemetery and fort ruins','Pulicat, Masulipatnam','Dutch','East-coast trade']],
sculpture:['Indo-Portuguese art and furniture; Christian painting'],
analysis:['European buildings were initially defensive (forts), reflecting rivalry and insecurity.','Goa’s churches show Indian craftsmen adapting European Baroque.','Coastal towns like Masulipatnam show layered European presence.']});
