// US Schools Database with Recognition System
// Covers: Illinois, Indiana, Colorado, Pennsylvania, New York, New Jersey, New Mexico, South Carolina, Wisconsin, Minnesota

const schoolsDatabase = {
  illinois: {
    private: [
      { name: "University of Chicago", variations: ["uchicago", "u chicago", "chicago", "uc"] },
      { name: "Northwestern University", variations: ["northwestern", "nu", "nwestern"] },
      { name: "DePaul University", variations: ["depaul", "depaul u"] },
      { name: "Loyola University Chicago", variations: ["loyola chicago", "loyola", "luc"] },
      { name: "Illinois Institute of Technology", variations: ["iit", "illinois tech", "il tech"] },
      { name: "Bradley University", variations: ["bradley", "bu"] },
      { name: "Knox College", variations: ["knox", "knox college"] },
      { name: "Wheaton College", variations: ["wheaton", "wheaton il"] },
      { name: "Lake Forest College", variations: ["lake forest", "lfc"] },
      { name: "Augustana College", variations: ["augustana", "augustana il"] }
    ],
    public: [
      { name: "University of Illinois at Urbana-Champaign", variations: ["uiuc", "u of i", "illinois", "urbana champaign"] },
      { name: "University of Illinois at Chicago", variations: ["uic", "u illinois chicago"] },
      { name: "Illinois State University", variations: ["isu", "illinois state", "il state"] },
      { name: "Northern Illinois University", variations: ["niu", "northern illinois", "northern il"] },
      { name: "Southern Illinois University", variations: ["siu", "southern illinois", "southern il"] },
      { name: "Eastern Illinois University", variations: ["eiu", "eastern illinois", "eastern il"] },
      { name: "Western Illinois University", variations: ["wiu", "western illinois", "western il"] },
      { name: "University of Illinois Springfield", variations: ["uis", "u illinois springfield"] },
      { name: "Chicago State University", variations: ["csu", "chicago state"] },
      { name: "Governors State University", variations: ["gsu", "governors state"] }
    ],
    community: [
      { name: "College of DuPage", variations: ["cod", "dupage", "college of dupage"] },
      { name: "Harper College", variations: ["harper", "harper cc"] },
      { name: "Oakton Community College", variations: ["oakton", "oakton cc"] },
      { name: "Triton College", variations: ["triton", "triton cc"] },
      { name: "Moraine Valley Community College", variations: ["moraine valley", "mvcc"] },
      { name: "Elgin Community College", variations: ["ecc", "elgin cc"] },
      { name: "College of Lake County", variations: ["clc", "lake county"] },
      { name: "Joliet Junior College", variations: ["jjc", "joliet"] },
      { name: "Morton College", variations: ["morton", "morton cc"] },
      { name: "Waubonsee Community College", variations: ["waubonsee", "wcc"] }
    ],
    state: [
      { name: "Illinois State University", variations: ["isu", "illinois state", "il state"] },
      { name: "Northern Illinois University", variations: ["niu", "northern illinois"] },
      { name: "Southern Illinois University", variations: ["siu", "southern illinois"] },
      { name: "Eastern Illinois University", variations: ["eiu", "eastern illinois"] },
      { name: "Western Illinois University", variations: ["wiu", "western illinois"] },
      { name: "Chicago State University", variations: ["csu", "chicago state"] },
      { name: "Governors State University", variations: ["gsu", "governors state"] },
      { name: "Northeastern Illinois University", variations: ["neiu", "northeastern illinois"] },
      { name: "Illinois State University", variations: ["isu", "illinois state"] },
      { name: "University of Illinois Springfield", variations: ["uis", "u illinois springfield"] }
    ],
    trade: [
      { name: "Lincoln Technical Institute", variations: ["lincoln tech", "lti"] },
      { name: "Coyne College", variations: ["coyne", "coyne college"] },
      { name: "Fox College", variations: ["fox", "fox college"] },
      { name: "Pivot Point Academy", variations: ["pivot point", "pivot"] },
      { name: "Paul Mitchell The School Chicago", variations: ["paul mitchell chicago", "pm chicago"] },
      { name: "Tricoci University", variations: ["tricoci", "tricoci u"] },
      { name: "Universal Technical Institute", variations: ["uti", "universal tech"] },
      { name: "Le Cordon Bleu Chicago", variations: ["cordon bleu chicago", "le cordon bleu"] },
      { name: "Illinois Media School", variations: ["illinois media", "ims"] },
      { name: "Chicago ORT Technical Institute", variations: ["ort", "chicago ort"] }
    ]
  },

  indiana: {
    private: [
      { name: "University of Notre Dame", variations: ["notre dame", "nd", "fighting irish"] },
      { name: "Butler University", variations: ["butler", "bu"] },
      { name: "DePauw University", variations: ["depauw", "depauw u"] },
      { name: "Earlham College", variations: ["earlham", "earlham college"] },
      { name: "Wabash College", variations: ["wabash", "wabash college"] },
      { name: "Rose-Hulman Institute of Technology", variations: ["rose hulman", "rhit", "rose"] },
      { name: "Valparaiso University", variations: ["valpo", "valparaiso", "vu"] },
      { name: "Franklin College", variations: ["franklin", "franklin college"] },
      { name: "Hanover College", variations: ["hanover", "hanover college"] },
      { name: "Taylor University", variations: ["taylor", "taylor u"] }
    ],
    public: [
      { name: "Indiana University Bloomington", variations: ["iu", "indiana", "iu bloomington", "hoosiers"] },
      { name: "Purdue University", variations: ["purdue", "boilermakers", "pu"] },
      { name: "Indiana State University", variations: ["isu", "indiana state", "sycamores"] },
      { name: "Ball State University", variations: ["ball state", "bsu", "cardinals"] },
      { name: "Indiana University-Purdue University Indianapolis", variations: ["iupui", "iu purdue indianapolis"] },
      { name: "University of Southern Indiana", variations: ["usi", "southern indiana"] },
      { name: "Indiana University Northwest", variations: ["iun", "iu northwest"] },
      { name: "Indiana University Southeast", variations: ["ius", "iu southeast"] },
      { name: "Vincennes University", variations: ["vincennes", "vu"] },
      { name: "Indiana University East", variations: ["iue", "iu east"] }
    ],
    community: [
      { name: "Ivy Tech Community College", variations: ["ivy tech", "itcc"] },
      { name: "Vincennes University", variations: ["vincennes", "vu"] },
      { name: "Indiana University Kokomo", variations: ["iuk", "iu kokomo"] },
      { name: "Purdue University Northwest", variations: ["pnw", "purdue northwest"] },
      { name: "University of Southern Indiana", variations: ["usi", "southern indiana"] },
      { name: "Indiana State University", variations: ["isu", "indiana state"] },
      { name: "Manchester University", variations: ["manchester", "manchester u"] },
      { name: "Ancilla College", variations: ["ancilla", "ancilla college"] },
      { name: "Holy Cross College", variations: ["holy cross", "hcc"] },
      { name: "Martin University", variations: ["martin", "martin u"] }
    ],
    state: [
      { name: "Indiana State University", variations: ["isu", "indiana state"] },
      { name: "Ball State University", variations: ["ball state", "bsu"] },
      { name: "University of Southern Indiana", variations: ["usi", "southern indiana"] },
      { name: "Indiana University Northwest", variations: ["iun", "iu northwest"] },
      { name: "Indiana University Southeast", variations: ["ius", "iu southeast"] },
      { name: "Indiana University East", variations: ["iue", "iu east"] },
      { name: "Indiana University Kokomo", variations: ["iuk", "iu kokomo"] },
      { name: "Purdue University Northwest", variations: ["pnw", "purdue northwest"] },
      { name: "Purdue University Fort Wayne", variations: ["pfw", "purdue fort wayne"] },
      { name: "Vincennes University", variations: ["vincennes", "vu"] }
    ],
    trade: [
      { name: "Lincoln Technical Institute", variations: ["lincoln tech", "lti"] },
      { name: "Kaplan College", variations: ["kaplan", "kaplan college"] },
      { name: "International Business College", variations: ["ibc", "international business"] },
      { name: "Brown Mackie College", variations: ["brown mackie", "bmc"] },
      { name: "Vet Tech Institute", variations: ["vet tech", "vti"] },
      { name: "Paul Mitchell The School", variations: ["paul mitchell", "pm"] },
      { name: "Aveda Institute", variations: ["aveda", "aveda institute"] },
      { name: "MedTech College", variations: ["medtech", "medtech college"] },
      { name: "Indiana Business College", variations: ["ibc", "indiana business"] },
      { name: "Sawyer College", variations: ["sawyer", "sawyer college"] }
    ]
  },

  colorado: {
    private: [
      { name: "University of Denver", variations: ["du", "denver", "u denver"] },
      { name: "Colorado College", variations: ["cc", "colorado college"] },
      { name: "Regis University", variations: ["regis", "regis u"] },
      { name: "Colorado Christian University", variations: ["ccu", "colorado christian"] },
      { name: "Johnson & Wales University Denver", variations: ["jwu denver", "johnson wales"] },
      { name: "Colorado Technical University", variations: ["ctu", "colorado tech"] },
      { name: "Naropa University", variations: ["naropa", "naropa u"] },
      { name: "Rocky Mountain College of Art + Design", variations: ["rmcad", "rocky mountain art"] },
      { name: "Denver Seminary", variations: ["denver seminary", "ds"] },
      { name: "National American University", variations: ["nau", "national american"] }
    ],
    public: [
      { name: "University of Colorado Boulder", variations: ["cu boulder", "colorado boulder", "cu", "buffs"] },
      { name: "Colorado State University", variations: ["csu", "colorado state", "rams"] },
      { name: "University of Colorado Denver", variations: ["cu denver", "ucd"] },
      { name: "Colorado School of Mines", variations: ["mines", "csm", "colorado mines"] },
      { name: "University of Northern Colorado", variations: ["unc", "northern colorado", "bears"] },
      { name: "Colorado State University Pueblo", variations: ["csu pueblo", "colorado state pueblo"] },
      { name: "Western Colorado University", variations: ["western colorado", "wcu"] },
      { name: "Adams State University", variations: ["adams state", "asu"] },
      { name: "Fort Lewis College", variations: ["fort lewis", "flc"] },
      { name: "Colorado Mesa University", variations: ["cmu", "colorado mesa"] }
    ],
    community: [
      { name: "Community College of Denver", variations: ["ccd", "denver cc"] },
      { name: "Front Range Community College", variations: ["frcc", "front range"] },
      { name: "Red Rocks Community College", variations: ["rrcc", "red rocks"] },
      { name: "Arapahoe Community College", variations: ["acc", "arapahoe"] },
      { name: "Colorado Community College System", variations: ["cccs", "colorado cc"] },
      { name: "Pikes Peak Community College", variations: ["ppcc", "pikes peak"] },
      { name: "Pueblo Community College", variations: ["pcc", "pueblo cc"] },
      { name: "Northeastern Junior College", variations: ["njc", "northeastern jc"] },
      { name: "Trinidad State Junior College", variations: ["tsjc", "trinidad state"] },
      { name: "Otero Junior College", variations: ["ojc", "otero"] }
    ],
    state: [
      { name: "Colorado State University", variations: ["csu", "colorado state"] },
      { name: "University of Northern Colorado", variations: ["unc", "northern colorado"] },
      { name: "Colorado State University Pueblo", variations: ["csu pueblo", "colorado state pueblo"] },
      { name: "Western Colorado University", variations: ["western colorado", "wcu"] },
      { name: "Adams State University", variations: ["adams state", "asu"] },
      { name: "Fort Lewis College", variations: ["fort lewis", "flc"] },
      { name: "Colorado Mesa University", variations: ["cmu", "colorado mesa"] },
      { name: "Metropolitan State University of Denver", variations: ["msu denver", "metro state"] },
      { name: "University of Colorado Colorado Springs", variations: ["uccs", "cu colorado springs"] },
      { name: "Colorado State University Global Campus", variations: ["csu global", "colorado state global"] }
    ],
    trade: [
      { name: "Emily Griffith Technical College", variations: ["emily griffith", "egtc"] },
      { name: "Pickens Technical College", variations: ["pickens tech", "ptc"] },
      { name: "Warren Technical School", variations: ["warren tech", "wts"] },
      { name: "Lincoln College of Technology", variations: ["lincoln tech", "lct"] },
      { name: "Redstone College", variations: ["redstone", "redstone college"] },
      { name: "Colorado Northwestern Community College", variations: ["cncc", "colorado northwestern"] },
      { name: "IntelliTec College", variations: ["intellitec", "itc"] },
      { name: "Bel-Rea Institute of Animal Technology", variations: ["bel rea", "bel-rea"] },
      { name: "Colorado School of Healing Arts", variations: ["csha", "healing arts"] },
      { name: "Paul Mitchell The School", variations: ["paul mitchell", "pm"] }
    ]
  },

  pennsylvania: {
    private: [
      { name: "University of Pennsylvania", variations: ["upenn", "penn", "u penn", "wharton"] },
      { name: "Carnegie Mellon University", variations: ["cmu", "carnegie mellon", "carnegie"] },
      { name: "Swarthmore College", variations: ["swarthmore", "swat"] },
      { name: "Haverford College", variations: ["haverford", "haverford college"] },
      { name: "Bryn Mawr College", variations: ["bryn mawr", "bryn mawr college"] },
      { name: "Lehigh University", variations: ["lehigh", "lu"] },
      { name: "Bucknell University", variations: ["bucknell", "bu"] },
      { name: "Lafayette College", variations: ["lafayette", "lafayette college"] },
      { name: "Villanova University", variations: ["villanova", "nova", "vu"] },
      { name: "Drexel University", variations: ["drexel", "du"] }
    ],
    public: [
      { name: "Pennsylvania State University", variations: ["penn state", "psu", "nittany lions"] },
      { name: "University of Pittsburgh", variations: ["pitt", "u pitt", "panthers"] },
      { name: "Temple University", variations: ["temple", "tu", "owls"] },
      { name: "West Chester University", variations: ["west chester", "wcu"] },
      { name: "Indiana University of Pennsylvania", variations: ["iup", "indiana pa"] },
      { name: "Kutztown University", variations: ["kutztown", "ku"] },
      { name: "Millersville University", variations: ["millersville", "mu"] },
      { name: "Shippensburg University", variations: ["shippensburg", "ship"] },
      { name: "East Stroudsburg University", variations: ["east stroudsburg", "esu"] },
      { name: "Bloomsburg University", variations: ["bloomsburg", "bu"] }
    ],
    community: [
      { name: "Community College of Philadelphia", variations: ["ccp", "philadelphia cc"] },
      { name: "Montgomery County Community College", variations: ["mccc", "montgomery cc"] },
      { name: "Bucks County Community College", variations: ["bccc", "bucks county"] },
      { name: "Delaware County Community College", variations: ["dccc", "delaware county"] },
      { name: "Northampton Community College", variations: ["ncc", "northampton"] },
      { name: "Reading Area Community College", variations: ["racc", "reading area"] },
      { name: "Harrisburg Area Community College", variations: ["hacc", "harrisburg area"] },
      { name: "Westmoreland County Community College", variations: ["wccc", "westmoreland"] },
      { name: "Lehigh Carbon Community College", variations: ["lccc", "lehigh carbon"] },
      { name: "Butler County Community College", variations: ["bc3", "butler county"] }
    ],
    state: [
      { name: "Pennsylvania State University", variations: ["penn state", "psu"] },
      { name: "West Chester University", variations: ["west chester", "wcu"] },
      { name: "Indiana University of Pennsylvania", variations: ["iup", "indiana pa"] },
      { name: "Kutztown University", variations: ["kutztown", "ku"] },
      { name: "Millersville University", variations: ["millersville", "mu"] },
      { name: "Shippensburg University", variations: ["shippensburg", "ship"] },
      { name: "East Stroudsburg University", variations: ["east stroudsburg", "esu"] },
      { name: "Bloomsburg University", variations: ["bloomsburg", "bu"] },
      { name: "Clarion University", variations: ["clarion", "cu"] },
      { name: "California University of Pennsylvania", variations: ["cal u", "california pa"] }
    ],
    trade: [
      { name: "Lincoln Technical Institute", variations: ["lincoln tech", "lti"] },
      { name: "Triangle Tech", variations: ["triangle", "triangle tech"] },
      { name: "Penn Commercial Business/Technical School", variations: ["penn commercial", "pcbts"] },
      { name: "Orleans Technical Institute", variations: ["orleans tech", "oti"] },
      { name: "YTI Career Institute", variations: ["yti", "yti career"] },
      { name: "Douglas Education Center", variations: ["douglas education", "dec"] },
      { name: "Pittsburgh Institute of Aeronautics", variations: ["pia", "pittsburgh aeronautics"] },
      { name: "Automotive Training Center", variations: ["atc", "automotive training"] },
      { name: "Pennsylvania Institute of Technology", variations: ["pit", "penn institute tech"] },
      { name: "McCann School of Business & Technology", variations: ["mccann", "mccann school"] }
    ]
  },

  "new york": {
    private: [
      { name: "Columbia University", variations: ["columbia", "cu", "columbia u"] },
      { name: "New York University", variations: ["nyu", "new york u"] },
      { name: "Cornell University", variations: ["cornell", "big red"] },
      { name: "University of Rochester", variations: ["rochester", "u rochester", "ur"] },
      { name: "Syracuse University", variations: ["syracuse", "cuse", "orange"] },
      { name: "Fordham University", variations: ["fordham", "fu"] },
      { name: "St. John's University", variations: ["st johns", "sju"] },
      { name: "Yeshiva University", variations: ["yeshiva", "yu"] },
      { name: "The New School", variations: ["new school", "parsons"] },
      { name: "Barnard College", variations: ["barnard", "barnard college"] }
    ],
    public: [
      { name: "State University of New York at Buffalo", variations: ["ub", "buffalo", "suny buffalo"] },
      { name: "Stony Brook University", variations: ["stony brook", "sbu", "suny stony brook"] },
      { name: "Binghamton University", variations: ["binghamton", "bing", "suny binghamton"] },
      { name: "University at Albany", variations: ["albany", "suny albany", "ualbany"] },
      { name: "Fashion Institute of Technology", variations: ["fit", "fashion institute"] },
      { name: "City College of New York", variations: ["ccny", "city college"] },
      { name: "Hunter College", variations: ["hunter", "hunter college"] },
      { name: "Brooklyn College", variations: ["brooklyn college", "bc"] },
      { name: "Queens College", variations: ["queens college", "qc"] },
      { name: "Baruch College", variations: ["baruch", "baruch college"] }
    ],
    community: [
      { name: "Borough of Manhattan Community College", variations: ["bmcc", "manhattan cc"] },
      { name: "LaGuardia Community College", variations: ["laguardia", "laguardia cc"] },
      { name: "Queensborough Community College", variations: ["qcc", "queensborough"] },
      { name: "Bronx Community College", variations: ["bcc", "bronx cc"] },
      { name: "Kingsborough Community College", variations: ["kbcc", "kingsborough"] },
      { name: "Nassau Community College", variations: ["ncc", "nassau cc"] },
      { name: "Suffolk County Community College", variations: ["sccc", "suffolk cc"] },
      { name: "Westchester Community College", variations: ["wcc", "westchester cc"] },
      { name: "Monroe Community College", variations: ["mcc", "monroe cc"] },
      { name: "Erie Community College", variations: ["ecc", "erie cc"] }
    ],
    state: [
      { name: "State University of New York at Buffalo", variations: ["ub", "buffalo", "suny buffalo"] },
      { name: "Stony Brook University", variations: ["stony brook", "sbu", "suny stony brook"] },
      { name: "Binghamton University", variations: ["binghamton", "bing", "suny binghamton"] },
      { name: "University at Albany", variations: ["albany", "suny albany"] },
      { name: "SUNY Oswego", variations: ["oswego", "suny oswego"] },
      { name: "SUNY Geneseo", variations: ["geneseo", "suny geneseo"] },
      { name: "SUNY New Paltz", variations: ["new paltz", "suny new paltz"] },
      { name: "SUNY Plattsburgh", variations: ["plattsburgh", "suny plattsburgh"] },
      { name: "SUNY Oneonta", variations: ["oneonta", "suny oneonta"] },
      { name: "SUNY Cortland", variations: ["cortland", "suny cortland"] }
    ],
    trade: [
      { name: "Lincoln Technical Institute", variations: ["lincoln tech", "lti"] },
      { name: "Plaza College", variations: ["plaza", "plaza college"] },
      { name: "ASA College", variations: ["asa", "asa college"] },
      { name: "Swedish Institute", variations: ["swedish institute", "si"] },
      { name: "New York Film Academy", variations: ["nyfa", "film academy"] },
      { name: "Institute of Culinary Education", variations: ["ice", "culinary education"] },
      { name: "Mandl School", variations: ["mandl", "mandl school"] },
      { name: "New York School of Interior Design", variations: ["nysid", "interior design"] },
      { name: "American Academy McAllister Institute", variations: ["aami", "mcallister"] },
      { name: "Technical Career Institutes", variations: ["tci", "technical career"] }
    ]
  },

  "new jersey": {
    private: [
      { name: "Princeton University", variations: ["princeton", "pu", "tigers"] },
      { name: "Stevens Institute of Technology", variations: ["stevens", "sit", "stevens tech"] },
      { name: "Seton Hall University", variations: ["seton hall", "shu"] },
      { name: "Fairleigh Dickinson University", variations: ["fdu", "fairleigh dickinson"] },
      { name: "Rider University", variations: ["rider", "ru"] },
      { name: "Monmouth University", variations: ["monmouth", "mu"] },
      { name: "Drew University", variations: ["drew", "drew u"] },
      { name: "The College of New Jersey", variations: ["tcnj", "college of nj"] },
      { name: "Caldwell University", variations: ["caldwell", "caldwell u"] },
      { name: "Saint Peter's University", variations: ["saint peters", "spu"] }
    ],
    public: [
      { name: "Rutgers University", variations: ["rutgers", "ru", "scarlet knights"] },
      { name: "The College of New Jersey", variations: ["tcnj", "college of nj"] },
      { name: "Montclair State University", variations: ["montclair", "msu"] },
      { name: "Rowan University", variations: ["rowan", "rowan u"] },
      { name: "Kean University", variations: ["kean", "kean u"] },
      { name: "William Paterson University", variations: ["william paterson", "wpu"] },
      { name: "New Jersey Institute of Technology", variations: ["njit", "nj tech"] },
      { name: "Stockton University", variations: ["stockton", "richard stockton"] },
      { name: "Ramapo College", variations: ["ramapo", "ramapo college"] },
      { name: "New Jersey City University", variations: ["njcu", "nj city"] }
    ],
    community: [
      { name: "Bergen Community College", variations: ["bcc", "bergen cc"] },
      { name: "Middlesex County College", variations: ["mcc", "middlesex cc"] },
      { name: "Ocean County College", variations: ["occ", "ocean county"] },
      { name: "Essex County College", variations: ["ecc", "essex county"] },
      { name: "Hudson County Community College", variations: ["hccc", "hudson county"] },
      { name: "Passaic County Community College", variations: ["pccc", "passaic county"] },
      { name: "Union County College", variations: ["ucc", "union county"] },
      { name: "Brookdale Community College", variations: ["brookdale", "bcc"] },
      { name: "Camden County College", variations: ["ccc", "camden county"] },
      { name: "Mercer County Community College", variations: ["mccc", "mercer county"] }
    ],
    state: [
      { name: "Montclair State University", variations: ["montclair", "msu"] },
      { name: "Rowan University", variations: ["rowan", "rowan u"] },
      { name: "Kean University", variations: ["kean", "kean u"] },
      { name: "William Paterson University", variations: ["william paterson", "wpu"] },
      { name: "Stockton University", variations: ["stockton", "richard stockton"] },
      { name: "Ramapo College", variations: ["ramapo", "ramapo college"] },
      { name: "New Jersey City University", variations: ["njcu", "nj city"] },
      { name: "Thomas Edison State University", variations: ["tesu", "thomas edison"] },
      { name: "New Jersey Institute of Technology", variations: ["njit", "nj tech"] },
      { name: "Rutgers University", variations: ["rutgers", "ru"] }
    ],
    trade: [
      { name: "Lincoln Technical Institute", variations: ["lincoln tech", "lti"] },
      { name: "Eastwick College", variations: ["eastwick", "eastwick college"] },
      { name: "Union County Vocational Technical Schools", variations: ["ucvts", "union county tech"] },
      { name: "Bergen County Technical Schools", variations: ["bcts", "bergen county tech"] },
      { name: "Hudson County Schools of Technology", variations: ["hcst", "hudson county tech"] },
      { name: "Academy of Culinary Arts", variations: ["aca", "culinary arts"] },
      { name: "Studio Jewelers", variations: ["studio jewelers", "sj"] },
      { name: "Capri Institute of Hair Design", variations: ["capri", "capri institute"] },
      { name: "American Beauty Academy", variations: ["aba", "american beauty"] },
      { name: "Berdan Institute", variations: ["berdan", "berdan institute"] }
    ]
  },

  "new mexico": {
    private: [
      { name: "St. John's College", variations: ["st johns nm", "st johns santa fe"] },
      { name: "University of the Southwest", variations: ["usw", "university southwest"] },
      { name: "Santa Fe University of Art and Design", variations: ["sfuad", "santa fe art"] },
      { name: "Institute of American Indian Arts", variations: ["iaia", "american indian arts"] },
      { name: "National American University", variations: ["nau", "national american"] },
      { name: "Brookline College", variations: ["brookline", "brookline college"] },
      { name: "Pima Medical Institute", variations: ["pima medical", "pmi"] },
      { name: "New Mexico Highlands University", variations: ["nmhu", "highlands"] },
      { name: "Western New Mexico University", variations: ["wnmu", "western nm"] },
      { name: "Eastern New Mexico University", variations: ["enmu", "eastern nm"] }
    ],
    public: [
      { name: "University of New Mexico", variations: ["unm", "new mexico", "lobos"] },
      { name: "New Mexico State University", variations: ["nmsu", "nm state", "aggies"] },
      { name: "New Mexico Institute of Mining and Technology", variations: ["nmt", "nm tech", "socorro"] },
      { name: "New Mexico Highlands University", variations: ["nmhu", "highlands"] },
      { name: "Western New Mexico University", variations: ["wnmu", "western nm"] },
      { name: "Eastern New Mexico University", variations: ["enmu", "eastern nm"] },
      { name: "Northern New Mexico College", variations: ["nnmc", "northern nm"] },
      { name: "San Juan College", variations: ["sjc", "san juan"] },
      { name: "University of New Mexico-Taos", variations: ["unm taos", "nm taos"] }
    ],
    community: [
      { name: "Central New Mexico Community College", variations: ["cnm", "central nm cc"] },
      { name: "Santa Fe Community College", variations: ["sfcc", "santa fe cc"] },
      { name: "Clovis Community College", variations: ["ccc", "clovis cc"] },
      { name: "Luna Community College", variations: ["lcc", "luna cc"] },
      { name: "Mesalands Community College", variations: ["mcc", "mesalands"] },
      { name: "New Mexico Junior College", variations: ["nmjc", "nm junior college"] },
      { name: "New Mexico Military Institute", variations: ["nmmi", "military institute"] },
      { name: "Dona Ana Community College", variations: ["dacc", "dona ana"] },
      { name: "San Juan College", variations: ["sjc", "san juan college"] },
      { name: "University of New Mexico-Gallup", variations: ["unm gallup", "gallup"] }
    ],
    state: [
      { name: "New Mexico State University", variations: ["nmsu", "nm state"] },
      { name: "New Mexico Highlands University", variations: ["nmhu", "highlands"] },
      { name: "Western New Mexico University", variations: ["wnmu", "western nm"] },
      { name: "Eastern New Mexico University", variations: ["enmu", "eastern nm"] },
      { name: "Northern New Mexico College", variations: ["nnmc", "northern nm"] },
      { name: "New Mexico Institute of Mining and Technology", variations: ["nmt", "nm tech"] },
      { name: "University of New Mexico", variations: ["unm", "new mexico"] },
      { name: "New Mexico State University-Alamogordo", variations: ["nmsu alamogordo", "alamogordo"] },
      { name: "New Mexico State University-Carlsbad", variations: ["nmsu carlsbad", "carlsbad"] },
      { name: "New Mexico State University-Grants", variations: ["nmsu grants", "grants"] }
    ],
    trade: [
      { name: "Pima Medical Institute", variations: ["pima medical", "pmi"] },
      { name: "Brookline College", variations: ["brookline", "brookline college"] },
      { name: "Carrington College", variations: ["carrington", "carrington college"] },
      { name: "National American University", variations: ["nau", "national american"] },
      { name: "Avalon School of Cosmetology", variations: ["avalon", "avalon cosmetology"] },
      { name: "Xenon International Academy", variations: ["xenon", "xenon academy"] },
      { name: "The Aveda Institute", variations: ["aveda nm", "aveda institute"] },
      { name: "Paul Mitchell The School", variations: ["paul mitchell nm", "pm nm"] },
      { name: "Universal Therapeutic Massage Institute", variations: ["utmi", "universal massage"] },
      { name: "Southwest Acupuncture College", variations: ["swac", "southwest acupuncture"] }
    ]
  },

  "south carolina": {
    private: [
      { name: "Furman University", variations: ["furman", "paladins"] },
      { name: "Wofford College", variations: ["wofford", "terriers"] },
      { name: "Presbyterian College", variations: ["pc", "presbyterian", "blue hose"] },
      { name: "Converse College", variations: ["converse", "converse college"] },
      { name: "Columbia International University", variations: ["ciu", "columbia international"] },
      { name: "Bob Jones University", variations: ["bju", "bob jones"] },
      { name: "Charleston Southern University", variations: ["csu", "charleston southern"] },
      { name: "Newberry College", variations: ["newberry", "wolves"] },
      { name: "Limestone College", variations: ["limestone", "saints"] }
    ],
    public: [
      { name: "University of South Carolina", variations: ["usc", "south carolina", "gamecocks"] },
      { name: "Clemson University", variations: ["clemson", "tigers"] },
      { name: "College of Charleston", variations: ["cofc", "charleston", "cougars"] },
      { name: "Coastal Carolina University", variations: ["ccu", "coastal carolina", "chanticleers"] },
      { name: "Winthrop University", variations: ["winthrop", "eagles"] },
      { name: "The Citadel", variations: ["citadel", "bulldogs"] },
      { name: "Francis Marion University", variations: ["fmu", "francis marion", "patriots"] },
      { name: "Lander University", variations: ["lander", "bearcats"] },
      { name: "South Carolina State University", variations: ["scsu", "sc state", "bulldogs"] },
      { name: "University of South Carolina Upstate", variations: ["usc upstate", "spartans"] }
    ],
    community: [
      { name: "Midlands Technical College", variations: ["mtc", "midlands tech"] },
      { name: "Greenville Technical College", variations: ["gtc", "greenville tech"] },
      { name: "Trident Technical College", variations: ["ttc", "trident tech"] },
      { name: "York Technical College", variations: ["ytc", "york tech"] },
      { name: "Florence-Darlington Technical College", variations: ["fdtc", "florence darlington"] },
      { name: "Spartanburg Community College", variations: ["scc", "spartanburg cc"] },
      { name: "Horry-Georgetown Technical College", variations: ["hgtc", "horry georgetown"] },
      { name: "Piedmont Technical College", variations: ["ptc", "piedmont tech"] },
      { name: "Technical College of the Lowcountry", variations: ["tcl", "lowcountry tech"] },
      { name: "Aiken Technical College", variations: ["atc", "aiken tech"] }
    ],
    state: [
      { name: "University of South Carolina", variations: ["usc", "south carolina"] },
      { name: "Clemson University", variations: ["clemson", "tigers"] },
      { name: "Coastal Carolina University", variations: ["ccu", "coastal carolina"] },
      { name: "Winthrop University", variations: ["winthrop", "eagles"] },
      { name: "Francis Marion University", variations: ["fmu", "francis marion"] },
      { name: "Lander University", variations: ["lander", "bearcats"] },
      { name: "South Carolina State University", variations: ["scsu", "sc state"] },
      { name: "University of South Carolina Upstate", variations: ["usc upstate", "spartans"] },
      { name: "University of South Carolina Aiken", variations: ["usca", "usc aiken"] },
      { name: "University of South Carolina Beaufort", variations: ["uscb", "usc beaufort"] }
    ],
    trade: [
      { name: "Miller-Motte Technical College", variations: ["miller motte", "mmtc"] },
      { name: "ECPI University", variations: ["ecpi", "ecpi university"] },
      { name: "Golf Academy of America", variations: ["gaa", "golf academy"] },
      { name: "Forrest College", variations: ["forrest", "forrest college"] },
      { name: "Paul Mitchell The School", variations: ["paul mitchell sc", "pm sc"] },
      { name: "Aveda Institute", variations: ["aveda sc", "aveda institute"] },
      { name: "Kenneth Shuler School of Cosmetology", variations: ["kenneth shuler", "shuler"] },
      { name: "Charleston Cosmetology Institute", variations: ["cci", "charleston cosmetology"] },
      { name: "Southeastern Institute", variations: ["sei", "southeastern institute"] },
      { name: "Virginia College", variations: ["virginia college", "vc"] }
    ]
  },

  wisconsin: {
    private: [
      { name: "Marquette University", variations: ["marquette", "mu", "golden eagles"] },
      { name: "Lawrence University", variations: ["lawrence", "vikings"] },
      { name: "Beloit College", variations: ["beloit", "buccaneers"] },
      { name: "Ripon College", variations: ["ripon", "red hawks"] },
      { name: "Carroll University", variations: ["carroll", "pioneers"] },
      { name: "Concordia University Wisconsin", variations: ["cuw", "concordia wisconsin"] },
      { name: "Milwaukee School of Engineering", variations: ["msoe", "milwaukee engineering"] },
      { name: "Alverno College", variations: ["alverno", "inferno"] },
      { name: "Cardinal Stritch University", variations: ["stritch", "wolves"] }
    ],
    public: [
      { name: "University of Wisconsin-Madison", variations: ["uw madison", "wisconsin", "badgers", "uw"] },
      { name: "University of Wisconsin-Milwaukee", variations: ["uwm", "uw milwaukee", "panthers"] },
      { name: "University of Wisconsin-Green Bay", variations: ["uwgb", "uw green bay", "phoenix"] },
      { name: "University of Wisconsin-La Crosse", variations: ["uwl", "uw la crosse", "eagles"] },
      { name: "University of Wisconsin-Oshkosh", variations: ["uwo", "uw oshkosh", "titans"] },
      { name: "University of Wisconsin-Eau Claire", variations: ["uwec", "uw eau claire", "blugolds"] },
      { name: "University of Wisconsin-Stevens Point", variations: ["uwsp", "uw stevens point", "pointers"] },
      { name: "University of Wisconsin-Whitewater", variations: ["uww", "uw whitewater", "warhawks"] },
      { name: "University of Wisconsin-Platteville", variations: ["uwp", "uw platteville", "pioneers"] },
      { name: "University of Wisconsin-Stout", variations: ["uws", "uw stout", "blue devils"] }
    ],
    community: [
      { name: "Milwaukee Area Technical College", variations: ["matc", "milwaukee tech"] },
      { name: "Madison Area Technical College", variations: ["madison tech", "matc madison"] },
      { name: "Fox Valley Technical College", variations: ["fvtc", "fox valley"] },
      { name: "Waukesha County Technical College", variations: ["wctc", "waukesha tech"] },
      { name: "Gateway Technical College", variations: ["gtc", "gateway tech"] },
      { name: "Northcentral Technical College", variations: ["ntc", "northcentral tech"] },
      { name: "Northeast Wisconsin Technical College", variations: ["nwtc", "northeast wisconsin tech"] },
      { name: "Mid-State Technical College", variations: ["mstc", "mid state tech"] },
      { name: "Chippewa Valley Technical College", variations: ["cvtc", "chippewa valley"] },
      { name: "Blackhawk Technical College", variations: ["btc", "blackhawk tech"] }
    ],
    state: [
      { name: "University of Wisconsin-Madison", variations: ["uw madison", "wisconsin", "badgers"] },
      { name: "University of Wisconsin-Milwaukee", variations: ["uwm", "uw milwaukee"] },
      { name: "University of Wisconsin-Green Bay", variations: ["uwgb", "uw green bay"] },
      { name: "University of Wisconsin-La Crosse", variations: ["uwl", "uw la crosse"] },
      { name: "University of Wisconsin-Oshkosh", variations: ["uwo", "uw oshkosh"] },
      { name: "University of Wisconsin-Eau Claire", variations: ["uwec", "uw eau claire"] },
      { name: "University of Wisconsin-Stevens Point", variations: ["uwsp", "uw stevens point"] },
      { name: "University of Wisconsin-Whitewater", variations: ["uww", "uw whitewater"] },
      { name: "University of Wisconsin-Platteville", variations: ["uwp", "uw platteville"] },
      { name: "University of Wisconsin-Stout", variations: ["uws", "uw stout"] }
    ],
    trade: [
      { name: "Milwaukee Area Technical College", variations: ["matc", "milwaukee tech"] },
      { name: "Madison Area Technical College", variations: ["madison tech", "matc madison"] },
      { name: "Aveda Institute", variations: ["aveda wi", "aveda institute"] },
      { name: "Paul Mitchell The School", variations: ["paul mitchell wi", "pm wi"] },
      { name: "Milwaukee Institute of Art & Design", variations: ["miad", "milwaukee art"] },
      { name: "Wisconsin School of Professional Psychology", variations: ["wspp", "wisconsin psychology"] },
      { name: "Concordia University Wisconsin", variations: ["cuw", "concordia wisconsin"] },
      { name: "Herzing University", variations: ["herzing", "herzing u"] },
      { name: "Globe University", variations: ["globe", "globe university"] },
      { name: "Rasmussen College", variations: ["rasmussen", "rasmussen college"] }
    ]
  },

  minnesota: {
    private: [
      { name: "Carleton College", variations: ["carleton", "knights"] },
      { name: "Macalester College", variations: ["macalester", "scots"] },
      { name: "University of St. Thomas", variations: ["st thomas", "tommies", "ust"] },
      { name: "Hamline University", variations: ["hamline", "pipers"] },
      { name: "Gustavus Adolphus College", variations: ["gustavus", "gusties"] },
      { name: "St. Olaf College", variations: ["st olaf", "oles"] },
      { name: "Concordia College", variations: ["concordia", "cobbers"] },
      { name: "Augsburg University", variations: ["augsburg", "auggies"] },
      { name: "Bethel University", variations: ["bethel", "royals"] },
      { name: "College of Saint Benedict", variations: ["csb", "saint benedict", "bennies"] }
    ],
    public: [
      { name: "University of Minnesota Twin Cities", variations: ["u of m", "minnesota", "gophers", "umn"] },
      { name: "University of Minnesota Duluth", variations: ["umd", "duluth", "bulldogs"] },
      { name: "Minnesota State University Mankato", variations: ["mankato", "msu mankato", "mavericks"] },
      { name: "St. Cloud State University", variations: ["scsu", "st cloud state", "huskies"] },
      { name: "Winona State University", variations: ["wsu", "winona state", "warriors"] },
      { name: "Bemidji State University", variations: ["bsu", "bemidji state", "beavers"] },
      { name: "Minnesota State University Moorhead", variations: ["msum", "moorhead", "dragons"] },
      { name: "Southwest Minnesota State University", variations: ["smsu", "southwest minnesota", "mustangs"] },
      { name: "University of Minnesota Morris", variations: ["umm", "morris", "cougars"] },
      { name: "University of Minnesota Crookston", variations: ["umc", "crookston", "golden eagles"] }
    ],
    community: [
      { name: "Minneapolis Community and Technical College", variations: ["mctc", "minneapolis cc"] },
      { name: "Normandale Community College", variations: ["normandale", "ncc"] },
      { name: "North Hennepin Community College", variations: ["nhcc", "north hennepin"] },
      { name: "Inver Hills Community College", variations: ["ihcc", "inver hills"] },
      { name: "Anoka-Ramsey Community College", variations: ["arcc", "anoka ramsey"] },
      { name: "Century College", variations: ["century", "century college"] },
      { name: "Dakota County Technical College", variations: ["dctc", "dakota county tech"] },
      { name: "Hennepin Technical College", variations: ["htc", "hennepin tech"] },
      { name: "Saint Paul College", variations: ["saintpaul", "st paul college"] },
      { name: "Rochester Community and Technical College", variations: ["rctc", "rochester cc"] }
    ],
    state: [
      { name: "Minnesota State University Mankato", variations: ["mankato", "msu mankato"] },
      { name: "St. Cloud State University", variations: ["scsu", "st cloud state"] },
      { name: "Winona State University", variations: ["wsu", "winona state"] },
      { name: "Bemidji State University", variations: ["bsu", "bemidji state"] },
      { name: "Minnesota State University Moorhead", variations: ["msum", "moorhead"] },
      { name: "Southwest Minnesota State University", variations: ["smsu", "southwest minnesota"] },
      { name: "University of Minnesota Morris", variations: ["umm", "morris"] },
      { name: "University of Minnesota Crookston", variations: ["umc", "crookston"] },
      { name: "University of Minnesota Duluth", variations: ["umd", "duluth"] },
      { name: "Metropolitan State University", variations: ["metro state", "msu"] }
    ],
    trade: [
      { name: "Dunwoody College of Technology", variations: ["dunwoody", "dunwoody tech"] },
      { name: "Minneapolis Community and Technical College", variations: ["mctc", "minneapolis tech"] },
      { name: "Hennepin Technical College", variations: ["htc", "hennepin tech"] },
      { name: "Dakota County Technical College", variations: ["dctc", "dakota county tech"] },
      { name: "Aveda Institute", variations: ["aveda mn", "aveda institute"] },
      { name: "Paul Mitchell The School", variations: ["paul mitchell mn", "pm mn"] },
      { name: "Le Cordon Bleu College of Culinary Arts", variations: ["cordon bleu mn", "le cordon bleu"] },
      { name: "Art Institutes International Minnesota", variations: ["art institutes mn", "ai mn"] },
      { name: "Brown College", variations: ["brown college", "brown"] },
      { name: "Globe University", variations: ["globe mn", "globe university"] }
    ]
  },

  michigan: {
    private: [
      { name: "University of Detroit Mercy", variations: ["udm", "detroit mercy", "u detroit mercy"] },
      { name: "Hillsdale College", variations: ["hillsdale", "hillsdale college"] },
      { name: "Kalamazoo College", variations: ["kzoo", "kalamazoo", "k college"] },
      { name: "Albion College", variations: ["albion", "albion college"] },
      { name: "Hope College", variations: ["hope", "hope college"] },
      { name: "Calvin University", variations: ["calvin", "calvin college", "calvin u"] },
      { name: "Andrews University", variations: ["andrews", "andrews u"] },
      { name: "Aquinas College", variations: ["aquinas", "aquinas college"] },
      { name: "Alma College", variations: ["alma", "alma college"] },
      { name: "Adrian College", variations: ["adrian", "adrian college"] }
    ],
    public: [
      { name: "University of Michigan", variations: ["u of m", "michigan", "wolverines", "um", "umich"] },
      { name: "Michigan State University", variations: ["msu", "michigan state", "spartans"] },
      { name: "Wayne State University", variations: ["wsu", "wayne state", "warriors"] },
      { name: "Western Michigan University", variations: ["wmu", "western michigan", "broncos"] },
      { name: "Eastern Michigan University", variations: ["emu", "eastern michigan", "eagles"] },
      { name: "Central Michigan University", variations: ["cmu", "central michigan", "chippewas"] },
      { name: "Northern Michigan University", variations: ["nmu", "northern michigan", "wildcats"] },
      { name: "Michigan Technological University", variations: ["michigan tech", "mtu", "huskies"] },
      { name: "Grand Valley State University", variations: ["gvsu", "grand valley", "lakers"] },
      { name: "Ferris State University", variations: ["fsu", "ferris state", "bulldogs"] }
    ],
    community: [
      { name: "Washtenaw Community College", variations: ["wcc", "washtenaw cc"] },
      { name: "Oakland Community College", variations: ["occ", "oakland cc"] },
      { name: "Macomb Community College", variations: ["macomb cc", "mcc"] },
      { name: "Grand Rapids Community College", variations: ["grcc", "grand rapids cc"] },
      { name: "Lansing Community College", variations: ["lcc", "lansing cc"] },
      { name: "Kalamazoo Valley Community College", variations: ["kvcc", "kalamazoo valley"] },
      { name: "Schoolcraft College", variations: ["schoolcraft", "schoolcraft college"] },
      { name: "Henry Ford College", variations: ["hfc", "henry ford"] },
      { name: "Delta College", variations: ["delta", "delta college"] },
      { name: "Muskegon Community College", variations: ["mcc", "muskegon cc"] }
    ],
    state: [
      { name: "University of Michigan", variations: ["u of m", "michigan", "wolverines"] },
      { name: "Michigan State University", variations: ["msu", "michigan state"] },
      { name: "Wayne State University", variations: ["wsu", "wayne state"] },
      { name: "Western Michigan University", variations: ["wmu", "western michigan"] },
      { name: "Eastern Michigan University", variations: ["emu", "eastern michigan"] },
      { name: "Central Michigan University", variations: ["cmu", "central michigan"] },
      { name: "Northern Michigan University", variations: ["nmu", "northern michigan"] },
      { name: "Michigan Technological University", variations: ["michigan tech", "mtu"] },
      { name: "Grand Valley State University", variations: ["gvsu", "grand valley"] },
      { name: "Ferris State University", variations: ["fsu", "ferris state"] }
    ],
    trade: [
      { name: "Baker College", variations: ["baker", "baker college"] },
      { name: "ITT Technical Institute", variations: ["itt tech", "itt"] },
      { name: "Specs Howard School of Media Arts", variations: ["specs howard", "specs"] },
      { name: "Davenport University", variations: ["davenport", "davenport u"] },
      { name: "Lawrence Technological University", variations: ["lawrence tech", "ltu"] },
      { name: "College for Creative Studies", variations: ["ccs", "creative studies"] },
      { name: "Michigan School of Professional Psychology", variations: ["mspp", "michigan psychology"] },
      { name: "Compass College of Cinematic Arts", variations: ["compass college", "compass"] },
      { name: "Paul Mitchell The School", variations: ["paul mitchell mi", "pm mi"] },
      { name: "Aveda Institute", variations: ["aveda mi", "aveda institute"] }
    ]
  },

  florida: {
    private: [
      { name: "University of Miami", variations: ["miami", "um", "hurricanes", "the u"] },
      { name: "Florida Institute of Technology", variations: ["florida tech", "fit"] },
      { name: "Rollins College", variations: ["rollins", "rollins college"] },
      { name: "Nova Southeastern University", variations: ["nsu", "nova southeastern", "nova"] },
      { name: "Lynn University", variations: ["lynn", "lynn u"] },
      { name: "Florida International University", variations: ["fiu", "florida international"] },
      { name: "Barry University", variations: ["barry", "barry u"] },
      { name: "Stetson University", variations: ["stetson", "stetson u"] },
      { name: "Florida Southern College", variations: ["florida southern", "fsc"] },
      { name: "Embry-Riddle Aeronautical University", variations: ["embry riddle", "erau", "riddle"] }
    ],
    public: [
      { name: "University of Florida", variations: ["uf", "florida", "gators"] },
      { name: "Florida State University", variations: ["fsu", "florida state", "seminoles", "noles"] },
      { name: "University of Central Florida", variations: ["ucf", "central florida", "knights"] },
      { name: "University of South Florida", variations: ["usf", "south florida", "bulls"] },
      { name: "Florida International University", variations: ["fiu", "florida international", "panthers"] },
      { name: "Florida Atlantic University", variations: ["fau", "florida atlantic", "owls"] },
      { name: "Florida Institute of Technology", variations: ["florida tech", "fit", "panthers"] },
      { name: "Florida A&M University", variations: ["famu", "florida a&m", "rattlers"] },
      { name: "Florida Gulf Coast University", variations: ["fgcu", "florida gulf coast", "eagles"] },
      { name: "Florida Polytechnic University", variations: ["florida poly", "fpoly", "phoenix"] }
    ],
    community: [
      { name: "Miami Dade College", variations: ["mdc", "miami dade", "miami dade cc"] },
      { name: "Valencia College", variations: ["valencia", "valencia college"] },
      { name: "Broward College", variations: ["broward", "broward college"] },
      { name: "Hillsborough Community College", variations: ["hcc", "hillsborough cc"] },
      { name: "St. Petersburg College", variations: ["spc", "st petersburg college", "st pete college"] },
      { name: "Seminole State College", variations: ["seminole state", "ssc"] },
      { name: "Palm Beach State College", variations: ["pbsc", "palm beach state"] },
      { name: "Indian River State College", variations: ["irsc", "indian river"] },
      { name: "Polk State College", variations: ["polk state", "psc"] },
      { name: "Santa Fe College", variations: ["santa fe", "santa fe college"] }
    ],
    state: [
      { name: "University of Florida", variations: ["uf", "florida", "gators"] },
      { name: "Florida State University", variations: ["fsu", "florida state"] },
      { name: "University of Central Florida", variations: ["ucf", "central florida"] },
      { name: "University of South Florida", variations: ["usf", "south florida"] },
      { name: "Florida International University", variations: ["fiu", "florida international"] },
      { name: "Florida Atlantic University", variations: ["fau", "florida atlantic"] },
      { name: "Florida A&M University", variations: ["famu", "florida a&m"] },
      { name: "Florida Gulf Coast University", variations: ["fgcu", "florida gulf coast"] },
      { name: "Florida Polytechnic University", variations: ["florida poly", "fpoly"] },
      { name: "New College of Florida", variations: ["new college", "ncf"] }
    ],
    trade: [
      { name: "Florida Career College", variations: ["fcc", "florida career"] },
      { name: "Keiser University", variations: ["keiser", "keiser u"] },
      { name: "Lincoln Technical Institute", variations: ["lincoln tech", "lti"] },
      { name: "Florida Technical College", variations: ["ftc", "florida technical"] },
      { name: "Everest University", variations: ["everest", "everest u"] },
      { name: "Paul Mitchell The School", variations: ["paul mitchell fl", "pm fl"] },
      { name: "Aveda Institute", variations: ["aveda fl", "aveda institute"] },
      { name: "Art Institute of Fort Lauderdale", variations: ["art institute fl", "ai fort lauderdale"] },
      { name: "Johnson & Wales University Miami", variations: ["jwu miami", "johnson wales miami"] },
      { name: "Le Cordon Bleu College of Culinary Arts", variations: ["cordon bleu miami", "le cordon bleu"] }
    ]
  },

  massachusetts: {
    private: [
      { name: "Harvard University", variations: ["harvard", "harvard u", "crimson"] },
      { name: "Massachusetts Institute of Technology", variations: ["mit", "mass tech"] },
      { name: "Boston University", variations: ["bu", "boston u", "terriers"] },
      { name: "Northeastern University", variations: ["northeastern", "nu", "huskies"] },
      { name: "Tufts University", variations: ["tufts", "jumbos"] },
      { name: "Brandeis University", variations: ["brandeis", "judges"] },
      { name: "Boston College", variations: ["bc", "boston college", "eagles"] },
      { name: "Wellesley College", variations: ["wellesley", "wellesley college"] },
      { name: "Williams College", variations: ["williams", "ephs"] },
      { name: "Amherst College", variations: ["amherst", "mammoths"] }
    ],
    public: [
      { name: "University of Massachusetts Amherst", variations: ["umass", "umass amherst", "minutemen"] },
      { name: "University of Massachusetts Boston", variations: ["umass boston", "umb", "beacons"] },
      { name: "University of Massachusetts Lowell", variations: ["umass lowell", "uml", "river hawks"] },
      { name: "University of Massachusetts Dartmouth", variations: ["umass dartmouth", "umd", "corsairs"] },
      { name: "Bridgewater State University", variations: ["bridgewater state", "bsu", "bears"] },
      { name: "Salem State University", variations: ["salem state", "ssu", "vikings"] },
      { name: "Westfield State University", variations: ["westfield state", "wsu", "owls"] },
      { name: "Fitchburg State University", variations: ["fitchburg state", "fsu", "falcons"] },
      { name: "Framingham State University", variations: ["framingham state", "frams", "rams"] },
      { name: "Worcester State University", variations: ["worcester state", "wsu", "lancers"] }
    ],
    community: [
      { name: "Bunker Hill Community College", variations: ["bhcc", "bunker hill"] },
      { name: "MassBay Community College", variations: ["massbay", "massbay cc"] },
      { name: "North Shore Community College", variations: ["nscc", "north shore"] },
      { name: "Northern Essex Community College", variations: ["necc", "northern essex"] },
      { name: "Middlesex Community College", variations: ["mcc", "middlesex cc"] },
      { name: "Quinsigamond Community College", variations: ["qcc", "quinsigamond"] },
      { name: "Springfield Technical Community College", variations: ["stcc", "springfield tech"] },
      { name: "Holyoke Community College", variations: ["hcc", "holyoke cc"] },
      { name: "Greenfield Community College", variations: ["gcc", "greenfield cc"] },
      { name: "Berkshire Community College", variations: ["bcc", "berkshire cc"] }
    ],
    state: [
      { name: "University of Massachusetts Amherst", variations: ["umass", "umass amherst"] },
      { name: "University of Massachusetts Boston", variations: ["umass boston", "umb"] },
      { name: "University of Massachusetts Lowell", variations: ["umass lowell", "uml"] },
      { name: "University of Massachusetts Dartmouth", variations: ["umass dartmouth", "umd"] },
      { name: "Bridgewater State University", variations: ["bridgewater state", "bsu"] },
      { name: "Salem State University", variations: ["salem state", "ssu"] },
      { name: "Westfield State University", variations: ["westfield state", "wsu"] },
      { name: "Fitchburg State University", variations: ["fitchburg state", "fsu"] },
      { name: "Framingham State University", variations: ["framingham state", "frams"] },
      { name: "Worcester State University", variations: ["worcester state", "wsu"] }
    ],
    trade: [
      { name: "Benjamin Franklin Institute of Technology", variations: ["bfit", "benjamin franklin tech"] },
      { name: "New England Institute of Technology", variations: ["neit", "new england tech"] },
      { name: "Lincoln Technical Institute", variations: ["lincoln tech", "lti"] },
      { name: "Porter and Chester Institute", variations: ["pci", "porter chester"] },
      { name: "The Art Institute of Boston", variations: ["ai boston", "art institute boston"] },
      { name: "Emerson College", variations: ["emerson", "emerson college"] },
      { name: "Berklee College of Music", variations: ["berklee", "berklee music"] },
      { name: "New England Conservatory", variations: ["nec", "new england conservatory"] },
      { name: "Paul Mitchell The School", variations: ["paul mitchell ma", "pm ma"] },
      { name: "Aveda Institute", variations: ["aveda ma", "aveda institute"] }
    ]
  },
  california: {
    private: [
      { name: "Stanford University", variations: ["stanford", "stanford univ", "su"] },
      { name: "University of Southern California", variations: ["usc", "southern cal", "southern california"] },
      { name: "California Institute of Technology", variations: ["caltech", "cal tech", "cit"] },
      { name: "Pepperdine University", variations: ["pepperdine", "pepp"] },
      { name: "Santa Clara University", variations: ["santa clara", "scu"] },
      { name: "Loyola Marymount University", variations: ["lmu", "loyola marymount", "loyola"] },
      { name: "University of San Diego", variations: ["usd", "san diego", "u san diego"] },
      { name: "Chapman University", variations: ["chapman", "chapman u"] },
      { name: "Occidental College", variations: ["occidental", "oxy"] },
      { name: "Claremont McKenna College", variations: ["claremont mckenna", "cmc", "claremont"] }
    ],
    public: [
      { name: "University of California, Berkeley", variations: ["uc berkeley", "berkeley", "cal berkeley", "ucb"] },
      { name: "University of California, Los Angeles", variations: ["ucla", "uc la", "uc los angeles"] },
      { name: "University of California, San Diego", variations: ["ucsd", "uc san diego", "uc sd"] },
      { name: "University of California, Davis", variations: ["uc davis", "ucd", "davis"] },
      { name: "University of California, Santa Barbara", variations: ["ucsb", "uc santa barbara", "uc sb"] },
      { name: "University of California, Irvine", variations: ["uci", "uc irvine"] },
      { name: "University of California, Santa Cruz", variations: ["ucsc", "uc santa cruz", "uc sc"] },
      { name: "University of California, Riverside", variations: ["ucr", "uc riverside"] },
      { name: "University of California, Merced", variations: ["ucm", "uc merced"] },
      { name: "San Diego State University", variations: ["sdsu", "san diego state", "sd state"] }
    ],
    community: [
      { name: "Santa Monica College", variations: ["smc", "santa monica cc"] },
      { name: "Pasadena City College", variations: ["pcc", "pasadena cc"] },
      { name: "De Anza College", variations: ["de anza", "deanza"] },
      { name: "Diablo Valley College", variations: ["dvc", "diablo valley"] },
      { name: "Orange Coast College", variations: ["occ", "orange coast"] },
      { name: "Mt. San Antonio College", variations: ["mt sac", "mount sac"] },
      { name: "Foothill College", variations: ["foothill"] },
      { name: "El Camino College", variations: ["el camino", "ecc"] },
      { name: "Glendale Community College", variations: ["glendale cc", "gcc"] },
      { name: "Cerritos College", variations: ["cerritos"] }
    ],
    state: [
      { name: "California State University, Long Beach", variations: ["csulb", "cal state long beach", "long beach state"] },
      { name: "California State University, Los Angeles", variations: ["csula", "cal state la"] },
      { name: "California State University, Northridge", variations: ["csun", "cal state northridge"] },
      { name: "California State University, Fullerton", variations: ["csuf", "cal state fullerton"] },
      { name: "California State University, Sacramento", variations: ["csus", "sac state", "sacramento state"] },
      { name: "California State University, San Bernardino", variations: ["csusb", "cal state san bernardino"] },
      { name: "California State University, Fresno", variations: ["fresno state", "csuf"] },
      { name: "California State University, San Jose", variations: ["sjsu", "san jose state"] },
      { name: "California State University, Chico", variations: ["chico state", "csuc"] },
      { name: "California State University, Pomona", variations: ["cal poly pomona", "cpp"] }
    ],
    trade: [
      { name: "Universal Technical Institute", variations: ["uti", "universal tech"] },
      { name: "WyoTech", variations: ["wyotech", "wyoming tech"] },
      { name: "Marinello Schools of Beauty", variations: ["marinello"] },
      { name: "Paul Mitchell The School", variations: ["paul mitchell"] },
      { name: "Le Cordon Bleu College of Culinary Arts", variations: ["le cordon bleu", "cordon bleu"] },
      { name: "Art Institute of California", variations: ["art institute", "ai"] },
      { name: "Fashion Institute of Design & Merchandising", variations: ["fidm"] },
      { name: "Musicians Institute", variations: ["mi", "musicians inst"] },
      { name: "Academy of Art University", variations: ["academy of art", "aau"] },
      { name: "NewSchool of Architecture and Design", variations: ["newschool", "nsad"] }
    ]
  }
};

// School Recognition System
class SchoolRecognizer {
  constructor(database) {
    this.database = database;
    this.allSchools = this.buildSchoolIndex();
  }

  // Build a searchable index of all schools with their variations
  buildSchoolIndex() {
    const index = [];
    
    for (const [state, categories] of Object.entries(this.database)) {
      for (const [category, schools] of Object.entries(categories)) {
        schools.forEach(school => {
          // Add the main name
          index.push({
            name: school.name,
            searchName: this.normalizeString(school.name),
            state: state,
            category: category,
            originalName: school.name
          });
          
          // Add all variations
          school.variations.forEach(variation => {
            index.push({
              name: variation,
              searchName: this.normalizeString(variation),
              state: state,
              category: category,
              originalName: school.name
            });
          });
        });
      }
    }
    
    return index;
  }

  // Normalize strings for better matching
  normalizeString(str) {
    return str.toLowerCase()
      .replace(/[^\w\s]/g, '') // Remove punctuation
      .replace(/\s+/g, ' ')    // Normalize spaces
      .trim();
  }

  // Find school by name with fuzzy matching
  findSchool(input) {
    const normalizedInput = this.normalizeString(input);
    
    // Exact match first
    let exactMatch = this.allSchools.find(school => 
      school.searchName === normalizedInput
    );
    
    if (exactMatch) {
      return {
        found: true,
        school: exactMatch.originalName,
        state: exactMatch.state,
        category: exactMatch.category,
        confidence: 1.0
      };
    }

    // Partial matches
    let partialMatches = this.allSchools.filter(school => {
      return school.searchName.includes(normalizedInput) || 
             normalizedInput.includes(school.searchName);
    });

    if (partialMatches.length > 0) {
      // Sort by best match (longest common substring)
      partialMatches.sort((a, b) => {
        const aScore = this.calculateMatchScore(normalizedInput, a.searchName);
        const bScore = this.calculateMatchScore(normalizedInput, b.searchName);
        return bScore - aScore;
      });

      const bestMatch = partialMatches[0];
      return {
        found: true,
        school: bestMatch.originalName,
        state: bestMatch.state,
        category: bestMatch.category,
        confidence: this.calculateMatchScore(normalizedInput, bestMatch.searchName),
        suggestions: partialMatches.slice(1, 4).map(m => m.originalName) // Additional suggestions
      };
    }

    // No matches found
    return {
      found: false,
      suggestions: this.getSimilarSchools(normalizedInput, 5)
    };
  }

  // Calculate match score between two strings
  calculateMatchScore(str1, str2) {
    const longer = str1.length > str2.length ? str1 : str2;
    const shorter = str1.length > str2.length ? str2 : str1;
    
    if (longer.length === 0) return 1.0;
    
    return (longer.length - this.levenshteinDistance(longer, shorter)) / longer.length;
  }

  // Calculate Levenshtein distance
  levenshteinDistance(str1, str2) {
    const matrix = [];
    
    for (let i = 0; i <= str2.length; i++) {
      matrix[i] = [i];
    }
    
    for (let j = 0; j <= str1.length; j++) {
      matrix[0][j] = j;
    }
    
    for (let i = 1; i <= str2.length; i++) {
      for (let j = 1; j <= str1.length; j++) {
        if (str2.charAt(i - 1) === str1.charAt(j - 1)) {
          matrix[i][j] = matrix[i - 1][j - 1];
        } else {
          matrix[i][j] = Math.min(
            matrix[i - 1][j - 1] + 1,
            matrix[i][j - 1] + 1,
            matrix[i - 1][j] + 1
          );
        }
      }
    }
    
    return matrix[str2.length][str1.length];
  }

  // Get similar schools for suggestions
  getSimilarSchools(input, limit = 5) {
    const scores = this.allSchools.map(school => ({
      ...school,
      score: this.calculateMatchScore(input, school.searchName)
    }));

    return scores
      .sort((a, b) => b.score - a.score)
      .slice(0, limit)
      .map(school => school.originalName);
  }

  // Get all schools in a specific state
  getSchoolsByState(state) {
    const normalizedState = state.toLowerCase().replace(/\s+/g, ' ').trim();
    return this.database[normalizedState] || null;
  }

  // Get schools by category across all states
  getSchoolsByCategory(category) {
    const results = {};
    
    for (const [state, categories] of Object.entries(this.database)) {
      if (categories[category]) {
        results[state] = categories[category];
      }
    }
    
    return results;
  }
}

// Initialize the recognizer
const schoolRecognizer = new SchoolRecognizer(schoolsDatabase);

// Usage examples:
// const result = schoolRecognizer.findSchool("northwestern");
// const result = schoolRecognizer.findSchool("NU");
// const result = schoolRecognizer.findSchool("university of chicago");
// const illinoisSchools = schoolRecognizer.getSchoolsByState("illinois");
// const privateSchools = schoolRecognizer.getSchoolsByCategory("private");

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { schoolsDatabase, SchoolRecognizer, schoolRecognizer };
}
  