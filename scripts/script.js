function loader() {
    const loader = document.querySelector('.loading-screen');
    loader.style.display = 'none';
}

window.addEventListener('load', function () {
    loader();
});

window.addEventListener('progress',
    function () {
        loader();
    });

window.addEventListener('progress',
    function () {
        loader();
    });

function goBack() {
    window.history.back();
}

function note() {
    window.open("/home2.html", "_self");
}

function login() {
    window.open("/login.html", "_self");
}

function exam() {
    window.open("/exam.html", "_self");
}
function theory1() {
    window.open("/theory1.html", "_self");
}

function practical1() {
    window.open("/practical1.html", "_self");
}
function theory2() {
    window.open("/theory2.html", "_self");
}

function practical2() {
    window.open("/practical2.html", "_self");
}
var users = [
    { username: "admin", password: "kce@2006", name: "Kalinga Computer" },
    { username: "staff", password: "kalinga", name: "Kalinga Staff" },
    // { username:"temp", password: "kalinga", name: "Kalinga Staff" },
    // {
    //     "name": "Sarbajit Sahoo",
    //     "username": "Sarbajit",
    //     "password": "@Sarb2004"
    // },
    // {
    //     "name": "Sashmita Rout",
    //     "username": "Sashmita",
    //     "password": "@Sash2004"
    // },
    // {
    //     "name": "SITUN PARIDA",
    //     "username": "Situn",
    //     "password": "@Situ2003"
    // },
    // {
    //     "name": "ASHOK KUMAR BEHERA",
    //     "username": "Ashok",
    //     "password": "@Asho2002"
    // },
    // {
    //     "name": "MANAS KUMAR RANA",
    //     "username": "Manas",
    //     "password": "@Mana2003"
    // },
    // {
    //     "name": "ELINA MUDULI",
    //     "username": "Elina",
    //     "password": "@Elin2004"
    // },
    // {
    //     "name": "NIASI PANDA",
    //     "username": "Niasi",
    //     "password": "@Nias2003"
    // },
    // {
    //     "name": "RASMIREKHA RANA",
    //     "username": "Rasmirekha",
    //     "password": "@Rasm2003"
    // },
    // {
    //     "name": "SHEELA SAMALA",
    //     "username": "Sheela",
    //     "password": "@Shee2004"
    // },
    // {
    //     "name": "BARSHA PRIYADARSHINI DAS",
    //     "username": "Barsha",
    //     "password": "@Bars2004"
    // },
    // {
    //     "name": "SUNITA BEHERA",
    //     "username": "Sunita",
    //     "password": "@Suni2003"
    // },
    // {
    //     "name": "PUJA PUROHIT",
    //     "username": "Puja",
    //     "password": "@Puja2000"
    // },
    // {
    //     "name": "SAMBIT SAHOO",
    //     "username": "Sambit",
    //     "password": "@Samb2005"
    // },
    // {
    //     "name": "SATYAJIT ROUL",
    //     "username": "Satyajit",
    //     "password": "@Saty2003"
    // },
    // {
    //     "name": "SASMITA PARIDA",
    //     "username": "Sasmita",
    //     "password": "@Sasm2004"
    // },
    // {
    //     "name": "SAGARIKA PANDA",
    //     "username": "Sagarika",
    //     "password": "@Saga2003"
    // },
    // {
    //     "name": "NITALI DAS",
    //     "username": "Nitali",
    //     "password": "@Nita2005"
    // },
    // {
    //     "name": "PRANGYA SAHOO",
    //     "username": "Prangya",
    //     "password": "@Pran2005"
    // },
    // {
    //     "name": "SUBHASHREE SINGH",
    //     "username": "Subhashree",
    //     "password": "@Subh2003"
    // },
    // {
    //     "name": "ALINA CHOUDHURY",
    //     "username": "Alina",
    //     "password": "@Alin2004"
    // },
    // {
    //     "name": "BARSHA PRIYADARSHINI",
    //     "username": "Barsha",
    //     "password": "@Bars2004"
    // },
    // {
    //     "name": "SOUMYA RANJAN PRUSTY",
    //     "username": "Soumya",
    //     "password": "@Soum2005"
    // },
    // {
    //     "name": "SUJIT KUMAR SAHOO",
    //     "username": "Sujit",
    //     "password": "@Suji2005"
    // },
    // {
    //     "name": "PRATIKSHYA MOHAPATRA",
    //     "username": "Pratikshya",
    //     "password": "@Prat1999"
    // },
    // {
    //     "name": "PRIYARANJAN SAHOO",
    //     "username": "Priyaranjan",
    //     "password": "@Priy2006"
    // },
    // {
    //     "name": "JEEBAN MOHARANA",
    //     "username": "Jeeban",
    //     "password": "@Jeeb2003"
    // },
    // {
    //     "name": "CHAKRADHAR MOHARANA",
    //     "username": "Chakradhar",
    //     "password": "@Chak2008"
    // },
    // {
    //     "name": "RITESH MAHAMANSINGH",
    //     "username": "Ritesh",
    //     "password": "@Rite2005"
    // },
    // {
    //     "name": "SOUMYARANJAN SAHOO",
    //     "username": "Soumyaranjan",
    //     "password": "@Soum2005"
    // },
    // {
    //     "name": "SOUMYA RANJAN ROUT",
    //     "username": "Soumya",
    //     "password": "@Soum2006"
    // },
    // {
    //     "name": "DIPTIRANJAN SAHOO",
    //     "username": "Diptiranjan",
    //     "password": "@Dipt2005"
    // },
    // {
    //     "name": "CHINMAYA KAR",
    //     "username": "Chinmaya",
    //     "password": "@Chin2005"
    // },
    // {
    //     "name": "DINESH GADAPALLA",
    //     "username": "Dinesh",
    //     "password": "@Dine2005"
    // },
    // {
    //     "name": "BADAL ROUT",
    //     "username": "Badal",
    //     "password": "@Bada2006"
    // },
    // {
    //     "name": "ARPITA MAJHI",
    //     "username": "Arpita",
    //     "password": "@Arpi2006"
    // },
    // {
    //     "name": "SAROJINI SAHOO",
    //     "username": "Sarojini",
    //     "password": "@Saro2004"
    // },
    // {
    //     "name": "BABITA SAHOO",
    //     "username": "Babita",
    //     "password": "@Babi2003"
    // },
    // {
    //     "name": "SUBHASMITA BARIK",
    //     "username": "Subhasmita",
    //     "password": "@Subh2003"
    // },
    // {
    //     "name": "ARUSMITA SAHOO",
    //     "username": "Arusmita",
    //     "password": "@Arus2008"
    // },
    // {
    //     "name": "BISHAL PRIYADARSHI",
    //     "username": "Bishal",
    //     "password": "@Bish2005"
    // },
    // {
    //     "name": "BAISAKHI BEHERA",
    //     "username": "Baisakhi",
    //     "password": "@Bais2005"
    // },
    // {
    //     "name": "SOUMYA RANJAN PATTANAIK",
    //     "username": "Soumya",
    //     "password": "@Soum1998"
    // },
    // {
    //     "name": "JAYANTA ROUT",
    //     "username": "Jayanta",
    //     "password": "@Jaya2005"
    // },
    // {
    //     "name": "BHABANISANKAR ROUT",
    //     "username": "Bhabanisankar",
    //     "password": "@Bhab2005"
    // },
    // {
    //     "name": "BISHNU CHARAN SAHOO",
    //     "username": "Bishnu",
    //     "password": "@Bish2004"
    // },
    // {
    //     "name": "SRITAM DAS",
    //     "username": "Sritam",
    //     "password": "@Srit2004"
    // },
    // {
    //     "name": "SUDAMA SITHA",
    //     "username": "Sudama",
    //     "password": "@Suda2006"
    // },
    // {
    //     "name": "RAKESH NAIK",
    //     "username": "Rakesh",
    //     "password": "@Rake2005"
    // },
    // {
    //     "name": "SANGRAM BARIK",
    //     "username": "Sangram",
    //     "password": "@Sang2003"
    // },
    // {
    //     "name": "SAROJ KUMAR JENA",
    //     "username": "Saroj",
    //     "password": "@Saro2003"
    // },
    // {
    //     "name": "BANSIDHAR NAIK",
    //     "username": "Bansidhar",
    //     "password": "@Bans2004"
    // },
    // {
    //     "name": "SUBRAT MOHANTY",
    //     "username": "Subrat",
    //     "password": "@Subr2003"
    // },
    // {
    //     "name": "BANDANARANI ROUT",
    //     "username": "Bandanarani",
    //     "password": "@Band2004"
    // },
    // {
    //     "name": "MINU NAIK",
    //     "username": "Minu",
    //     "password": "@Minu2006"
    // },
    // {
    //     "name": "AMAN MISHRA",
    //     "username": "Aman",
    //     "password": "@Aman2004"
    // },
    // {
    //     "name": "SUBHASHREE SAHOO",
    //     "username": "Subhashree",
    //     "password": "@Subh1999"
    // },
    // {
    //     "name": "JAGANNATH SAHOO",
    //     "username": "Jagannath",
    //     "password": "@Jaga2006"
    // },
    // {
    //     "name": "CHINMAYA PARIDA",
    //     "username": "Chinmaya",
    //     "password": "@Chin2006"
    // },
    // {
    //     "name": "PRAVASINI PRADHAN",
    //     "username": "Pravasini",
    //     "password": "@Prav2000"
    // },
    // {
    //     "name": "TRUPTIMAYEE PANDA",
    //     "username": "Truptimayee",
    //     "password": "@Trup2000"
    // },
    // {
    //     "name": "BISWAPRAKASH BEHERA",
    //     "username": "Biswaprakash",
    //     "password": "@Bisw2004"
    // },
    // {
    //     "name": "PRANGYA PRIYADARSHINI SAHOO",
    //     "username": "Prangya",
    //     "password": "@Pran2005"
    // },
    // {
    //     "name": "RATIKANTA ROUT",
    //     "username": "Ratikanta",
    //     "password": "@Rati2006"
    // },
    // {
    //     "name": "SRIYASMITA SAHOO",
    //     "username": "Sriyasmita",
    //     "password": "@Sriy2004"
    // },
    // {
    //     "name": "LIPSA NAYAK",
    //     "username": "Lipsa",
    //     "password": "@Lips2005"
    // },
    // {
    //     "name": "TULASI DAS",
    //     "username": "Tulasi",
    //     "password": "@Tula2005"
    // },
    // {
    //     "name": "SUBHASHREE SAHOO",
    //     "username": "Subhashree",
    //     "password": "@Subh2005"
    // },
    // {
    //     "name": "SUBHAM KUMAR DASH",
    //     "username": "Subham",
    //     "password": "@Subh2006"
    // },
    // {
    //     "name": "SATYA PRAKASH SAHOO",
    //     "username": "Satya",
    //     "password": "@Saty2005"
    // },
    // {
    //     "name": "SUJIT KUMAR ROUT",
    //     "username": "Sujit",
    //     "password": "@Suji2006"
    // },
    // {
    //     "name": "DIPTIMAYEE BEHERA",
    //     "username": "Diptimayee",
    //     "password": "@Dipt2005"
    // },
    // {
    //     "name": "SONALI JENA",
    //     "username": "Sonali",
    //     "password": "@Sona2005"
    // },
    // {
    //     "name": "PRADYUMNA KUMAR BHANJA",
    //     "username": "Pradyumna",
    //     "password": "@Prad1997"
    // },
    // {
    //     "name": "SUBHADRIKA BHANJA",
    //     "username": "Subhadrika",
    //     "password": "@Subh2004"
    // },
    // {
    //     "name": "PRAJNASMITA SAHOO",
    //     "username": "Prajnasmita",
    //     "password": "@Praj2006"
    // },
    // {
    //     "name": "DIPTIMAYEE NAYAK",
    //     "username": "Diptimayee",
    //     "password": "@Dipt2005"
    // },
    // {
    //     "name": "DEBASISH PARIDA",
    //     "username": "Debasish",
    //     "password": "@Deba2004"
    // },
    // {
    //     "name": "KALYANI BEHERA",
    //     "username": "Kalyani",
    //     "password": "@Kaly2005"
    // },
    // {
    //     "name": "SUJATA NAYAK",
    //     "username": "Sujata",
    //     "password": "@Suja2005"
    // },
    // {
    //     "name": "BISWAJIT MOHAPATRA",
    //     "username": "Biswajit",
    //     "password": "@Bisw2006"
    // },
    // {
    //     "name": "ASHUTOSH ROUT",
    //     "username": "Ashutosh",
    //     "password": "@Ashu2006"
    // },
    // {
    //     "name": "RUDRA SAMANTARAY ",
    //     "username": "Rudra",
    //     "password": "@Rudr2004"
    // },
    // {
    //     "name": "SOUBHAGYA ROUT",
    //     "username": "Soubhagya",
    //     "password": "@Soub2004"
    // },
    // {
    //     "name": "AMIT SAHOO",
    //     "username": "Amit",
    //     "password": "@Amit2005"
    // },
    // {
    //     "name": "RUNI BEHERA",
    //     "username": "Runi",
    //     "password": "@Runi2003"
    // },
    // {
    //     "name": "LIPA BURMA",
    //     "username": "Lipa",
    //     "password": "@Lipa2004"
    // },
    // {
    //     "name": "PRIYABRATA BEHERA",
    //     "username": "Priyabrata",
    //     "password": "@Priy2005"
    // },
    // {
    //     "name": "BRAHMANANDA ROUT",
    //     "username": "Brahmananda",
    //     "password": "@Brah2006"
    // },
    // {
    //     "name": "ASHISH KUMAR SAHOO",
    //     "username": "Ashish",
    //     "password": "@Ashi2006"
    // },
    // {
    //     "name": "MITHUN SAHOO",
    //     "username": "Mithun",
    //     "password": "@Mith2002"
    // },
    // {
    //     "name": "MILU MOHAPATRA",
    //     "username": "Milu",
    //     "password": "@Milu2006"
    // },
    // {
    //     "name": "SRUTISUMAN MISHRA",
    //     "username": "Srutisuman",
    //     "password": "@Srut2006"
    // },
    // {
    //     "name": "SUBHASMITA SENAPATI",
    //     "username": "Subhasmita",
    //     "password": "@Subh2005"
    // },
    // {
    //     "name": "SATYA RANJAN ROUT",
    //     "username": "Satya",
    //     "password": "@Saty2005"
    // },
    // {
    //     "name": "RASMI RANJAN BARIK",
    //     "username": "Rasmi",
    //     "password": "@Rasm2004"
    // },
    // {
    //     "name": "SWARNAMAYEE SENAPATI",
    //     "username": "Swarnamayee",
    //     "password": "@Swar2006"
    // },
    // {
    //     "name": "RAJALAXMI PANDA",
    //     "username": "Rajalaxmi",
    //     "password": "@Raja2005"
    // },
    // {
    //     "name": "NITYASHREE SAIPRAVA DAS",
    //     "username": "Nityashree",
    //     "password": "@Nity2005"
    // },
    // {
    //     "name": "MEENA BEHERA",
    //     "username": "Meena",
    //     "password": "@Meen2005"
    // },
    // {
    //     "name": "KAUSALYA PRADHAN",
    //     "username": "Kausalya",
    //     "password": "@Kaus2003"
    // },
    // {
    //     "name": "PURNIMA SAHOO",
    //     "username": "Purnima",
    //     "password": "@Purn2005"
    // },
    // {
    //     "name": "NANDINI KUMARI SWAIN",
    //     "username": "Nandini",
    //     "password": "@Nand2006"
    // },
    // {
    //     "name": "HARISH PRADHAN",
    //     "username": "Harish",
    //     "password": "@Hari2005"
    // },
    // {
    //     "name": "SUMITRA LENKA",
    //     "username": "Sumitra",
    //     "password": "@Sumi2005"
    // },
    // {
    //     "name": "SWAYAM PRADHAN",
    //     "username": "Swayam",
    //     "password": "@Sway2004"
    // },
    // {
    //     "name": "PRIYANKA PRIYADARSHINI DAS",
    //     "username": "Priyanka",
    //     "password": "@Priy2005"
    // },
    // {
    //     "name": "SUMITRA SAHOO",
    //     "username": "Sumitra",
    //     "password": "@Sumi2004"
    // },
    // {
    //     "name": "MANORANJAN MAJHI",
    //     "username": "Manoranjan",
    //     "password": "@Mano2004"
    // },
    // {
    //     "name": "BISWAJIT SWAIN",
    //     "username": "Biswajit",
    //     "password": "@Bisw2006"
    // },
    // {
    //     "name": "JYOTSNAMAYEE MALLIK",
    //     "username": "Jyotsnamayee",
    //     "password": "@Jyot2003"
    // },
    // {
    //     "name": "PURNAMASI PRIYADARSINI",
    //     "username": "Purnamasi",
    //     "password": "@Purn2008"
    // },
    // {
    //     "name": "STHITAPRANGYA BHUYAN",
    //     "username": "Sthitaprangya",
    //     "password": "@Sthi2006"
    // },
    // {
    //     "name": "SANGRAM ROUT",
    //     "username": "Sangram",
    //     "password": "@Sang2006"
    // },
    // {
    //     "name": "SUBHASMITA LENKA",
    //     "username": "Subhasmita",
    //     "password": "@Subh2006"
    // },
    // {
    //     "name": "RANJIT SWAIN",
    //     "username": "Ranjit",
    //     "password": "@Ranj2004"
    // },
    // {
    //     "name": "MADHUSMITA BARIK",
    //     "username": "Madhusmita",
    //     "password": "@Madh2008"
    // },
    // {
    //     "name": "SADHANA PRIYADARSHINI SAHOO",
    //     "username": "Sadhana",
    //     "password": "@Sadh2001"
    // },
    // {
    //     "name": "IPSITA SAHOO",
    //     "username": "Ipsita",
    //     "password": "@Ipsi2005"
    // },
    // {
    //     "name": "BARSHARANI SAHOO",
    //     "username": "Barsharani",
    //     "password": "@Bars2006"
    // },
    // {
    //     "name": "SOUMYARANJAN DAS",
    //     "username": "Soumyaranjan",
    //     "password": "@Soum2006"
    // },
    // {
    //     "name": "CHANDRAPRAKASH DAS",
    //     "username": "Chandraprakash",
    //     "password": "@Chan2005"
    // },
    // {
    //     "name": "PADMINI PRADHAN",
    //     "username": "Padmini",
    //     "password": "@Padm2005"
    // },
    // {
    //     "name": "MANAS NAIK",
    //     "username": "Manas",
    //     "password": "@Mana2001"
    // },
    // {
    //     "name": "ABHISIKTA PRUSTY",
    //     "username": "Abhisikta",
    //     "password": "@Abhi2005"
    // },
    // {
    //     "name": "SUNITA BEURA",
    //     "username": "Sunita",
    //     "password": "@Suni2005"
    // },
    // {
    //     "name": "SATYAJIT BRAHMA",
    //     "username": "Satyajit",
    //     "password": "@Saty2006"
    // },
    // {
    //     "name": "SWETAPADMA SINGH",
    //     "username": "Swetapadma",
    //     "password": "@Swet2006"
    // },
    // {
    //     "name": "RITA ROUT",
    //     "username": "Rita",
    //     "password": "@Rita2005"
    // },
    // {
    //     "name": "PRAGATI PRADHAN",
    //     "username": "Pragati",
    //     "password": "@Prag2005"
    // },
    // {
    //     "name": "SONALISHA NAYAK",
    //     "username": "Sonalisha",
    //     "password": "@Sona2006"
    // },
    // {
    //     "name": "LIPI BRAHMA",
    //     "username": "Lipi",
    //     "password": "@Lipi2006"
    // },
    // {
    //     "name": "GOPABANDHU NAYAK",
    //     "username": "Gopabandhu",
    //     "password": "@Gopa2006"
    // },
    // {
    //     "name": "MANUA GOCHHI",
    //     "username": "Manua",
    //     "password": "@Manu2003"
    // },
    // {
    //     "name": "ABHIJIT ROUT",
    //     "username": "Abhijit",
    //     "password": "@Abhi2006"
    // },
    // {
    //     "name": "SAISWETA SAHOO",
    //     "username": "Saisweta",
    //     "password": "@Sais2006"
    // },
    // {
    //     "name": "ANYA DAS",
    //     "username": "Anya",
    //     "password": "@Anya2006"
    // },
    // {
    //     "name": "MANJIL KUMAR TUNGA",
    //     "username": "Manjil",
    //     "password": "@Manj2005"
    // },
    // {
    //     "name": "DIPAK SAMAL",
    //     "username": "Dipak",
    //     "password": "@Dipa2006"
    // },
    // {
    //     "name": "ROJALIN BEHERA",
    //     "username": "Rojalin",
    //     "password": "@Roja2005"
    // },
    // {
    //     "name": "JANGYASENI PARIDA",
    //     "username": "Jangyaseni",
    //     "password": "@Jang2005"
    // },
    // {
    //     "name": "SOUMYARANJAN PRADHAN",
    //     "username": "Soumyaranjan",
    //     "password": "@Soum2006"
    // },
    // {
    //     "name": "SWAPNADEVI MOHARANA",
    //     "username": "Swapnadevi",
    //     "password": "@Swap2005"
    // },
    // {
    //     "name": "SARMISTHA SAMAL",
    //     "username": "Sarmistha",
    //     "password": "@Sarm2005"
    // },
    // {
    //     "name": "MANOJ KUMAR PARIDA",
    //     "username": "Manoj",
    //     "password": "@Mano2005"
    // },
    // {
    //     "name": "PRANGYA PARAMITA SWAIN",
    //     "username": "Prangya",
    //     "password": "@Pran2006"
    // },
    // {
    //     "name": "SUNIL KUMAR SAHOO",
    //     "username": "Sunil",
    //     "password": "@Suni2005"
    // },
    // {
    //     "name": "BHARATI BEHERA",
    //     "username": "Bharati",
    //     "password": "@Bhar2006"
    // },
    // {
    //     "name": "BALARAM PANDA",
    //     "username": "Balaram",
    //     "password": "@Bala2005"
    // },
    // {
    //     "name": "NIKHILI RANA",
    //     "username": "Nikhili",
    //     "password": "@Nikh2004"
    // },
    // {
    //     "name": "SANGRAM RANA",
    //     "username": "Sangram",
    //     "password": "@Sang2006"
    // },
    // {
    //     "name": "KANHU BEHERA",
    //     "username": "Kanhu",
    //     "password": "@Kanh2007"
    // },
    // {
    //     "name": "SUBHAM SETHY",
    //     "username": "Subham",
    //     "password": "@Subh2004"
    // },
    // {
    //     "name": "SWATI UDAYSINGH",
    //     "username": "Swati",
    //     "password": "@Swat2004"
    // },
    // {
    //     "name": "ANANTA KESHARI THATOI",
    //     "username": "Ananta",
    //     "password": "@Anan2006"
    // },
    // {
    //     "name": "GADADHAR HATI",
    //     "username": "Gadadhar",
    //     "password": "@Gada2005"
    // },
    // {
    //     "name": "SUNALI DAS",
    //     "username": "Sunali",
    //     "password": "@Suna1999"
    // },
    // {
    //     "name": "IPSEETA SAHOO",
    //     "username": "Ipseeta",
    //     "password": "@Ipse2006"
    // },
    // {
    //     "name": "PRIYABRAT PRADHAN",
    //     "username": "Priyabrat",
    //     "password": "@Priy2000"
    // },
    // {
    //     "name": "PRAMOD KUMAR PRADHAN",
    //     "username": "Pramod",
    //     "password": "@Pram1999"
    // },
    // {
    //     "name": "CHINMAYEE MOHAPATRA",
    //     "username": "Chinmayee",
    //     "password": "@Chin2005"
    // },
    // {
    //     "name": "SOMYARANJAN MOHANTY",
    //     "username": "Somyaranjan",
    //     "password": "@Somy2003"
    // },
    // {
    //     "name": "DIPALI SAHOO",
    //     "username": "Dipali",
    //     "password": "@Dipa2004"
    // },
    // {
    //     "name": "RUPALI SAHOO",
    //     "username": "Rupali",
    //     "password": "@Rupa2000"
    // },
    // {
    //     "name": "ANIL KUMAR SINGH",
    //     "username": "Anil",
    //     "password": "@Anil2005"
    // },
    // {
    //     "name": "JAGADISH MOHANTY",
    //     "username": "Jagadish",
    //     "password": "@Jaga2003"
    // },
    // {
    //     "name": "PREM ANAND BARAL",
    //     "username": "Prem",
    //     "password": "@Prem2006"
    // },
    // {
    //     "name": "DIPTIMAYEE PRIYADARSHINI",
    //     "username": "Diptimayee",
    //     "password": "@Dipt2004"
    // },
    // {
    //     "name": "BAISAKHI JENA",
    //     "username": "Baisakhi",
    //     "password": "@Bais2003"
    // },
    // {
    //     "name": "ANUBHAB BEHERA",
    //     "username": "Anubhab",
    //     "password": "@Anub2005"
    // },
    // {
    //     "name": "SITUN NAYAK",
    //     "username": "Situn",
    //     "password": "@Situ2007"
    // },
    // {
    //     "name": "SUBHAM KUMAR SWAIN",
    //     "username": "Subham",
    //     "password": "@Subh2006"
    // },
    // {
    //     "name": "ANUBHABA SAHOO",
    //     "username": "Anubhaba",
    //     "password": "@Anub2006"
    // },
    // {
    //     "name": "SRIMAN RANENDRA PRATAP SAHOO",
    //     "username": "Sriman",
    //     "password": "@Srim2006"
    // },
    // {
    //     "name": "SIBA DEHURI",
    //     "username": "Siba",
    //     "password": "@Siba2006"
    // },
    // {
    //     "name": "SUCHISMITA MOHANTY",
    //     "username": "Suchismita",
    //     "password": "@Such2002"
    // },
    // {
    //     "name": "SHIKHA SETHI",
    //     "username": "Shikha",
    //     "password": "@Shik2003"
    // },
    // {
    //     "name": "MONALISHA NAYAK",
    //     "username": "Monalisha",
    //     "password": "@Mona2003"
    // },
    // {
    //     "name": "ARPITA BEHERA",
    //     "username": "Arpita",
    //     "password": "@Arpi2006"
    // },
    // {
    //     "name": "SNEHANJALI JENA",
    //     "username": "Snehanjali",
    //     "password": "@Sneh2005"
    // },
    // {
    //     "name": "SUPRIYA BEHERA",
    //     "username": "Supriya",
    //     "password": "@Supr2006"
    // },
    // {
    //     "name": "SOUMYA RANJAN PRADHAN",
    //     "username": "Soumya",
    //     "password": "@Soum2006"
    // },
    // {
    //     "name": "DIPUNA MOHANTY",
    //     "username": "Dipuna",
    //     "password": "@Dipu2006"
    // },
    // {
    //     "name": "OMM PRAKASH BEURA",
    //     "username": "Omm",
    //     "password": "@Omm2006"
    // },
    // {
    //     "name": "RUDRANARAYAN MOHANTY",
    //     "username": "Rudranarayan",
    //     "password": "@Rudr2006"
    // },
    // {
    //     "name": "SANGRAM MOHANTY",
    //     "username": "Sangram",
    //     "password": "@Sang2005"
    // },
    // {
    //     "name": "SUBHASHREE SAHOO",
    //     "username": "Subhashree",
    //     "password": "@Subh2002"
    // },
    // {
    //     "name": "PRANGYAPARAMITA SAHOO",
    //     "username": "Prangyaparamita",
    //     "password": "@Pran2006"
    // },
    // {
    //     "name": "PATITA BEURA",
    //     "username": "Patita",
    //     "password": "@Pati2006"
    // },
    // {
    //     "name": "PRATIVA MOHANTY",
    //     "username": "Prativa",
    //     "password": "@Prat2005"
    // },
    // {
    //     "name": "SWAGATIKA PUHAN",
    //     "username": "Swagatika",
    //     "password": "@Swag2006"
    // },
    // {
    //     "name": "MADHUSMITA SAHOO",
    //     "username": "Madhusmita",
    //     "password": "@Madh2005"
    // },
    // {
    //     "name": "RUPALI BEHERA",
    //     "username": "Rupali",
    //     "password": "@Rupa2006"
    // },
    // {
    //     "name": "JAYANTA NAYAK",
    //     "username": "Jayanta",
    //     "password": "@Jaya2006"
    // },
    // {
    //     "name": "SOUMYARANJAN PADHI",
    //     "username": "Soumyaranjan",
    //     "password": "@Soum2004"
    // },
    // {
    //     "name": "SANATAN BEHERA",
    //     "username": "Sanatan",
    //     "password": "@Sana2004"
    // },
    // {
    //     "name": "SARMISTHA ROUT",
    //     "username": "Sarmistha",
    //     "password": "@Sarm2005"
    // },
    // {
    //     "name": "NARESH JENA",
    //     "username": "Naresh",
    //     "password": "@Nare2005"
    // },
    // {
    //     "name": "SOMESH KUMAR PARIDA",
    //     "username": "Somesh",
    //     "password": "@Some2006"
    // },
    // {
    //     "name": "SANTOSHINI BEHERA",
    //     "username": "Santoshini",
    //     "password": "@Sant2006"
    // },
    // {
    //     "name": "SUSHREE SRABANI DHALL",
    //     "username": "Sushree",
    //     "password": "@Sush2004"
    // },
    // {
    //     "name": "ALOK SAHOO",
    //     "username": "Alok",
    //     "password": "@Alok2002"
    // },
    // {
    //     "name": "RATIKANTA SAHOO",
    //     "username": "Ratikanta",
    //     "password": "@Rati2000"
    // },
    // {
    //     "name": "PRIYANKA PRIYADARSINI SAHOO",
    //     "username": "Priyanka",
    //     "password": "@Priy2006"
    // },
    // {
    //     "name": "AKASH CHANDRA SAHOO",
    //     "username": "Akash",
    //     "password": "@Akas2005"
    // },
    // {
    //     "name": "KUMAR BISHNUDEV JENA",
    //     "username": "Kumar",
    //     "password": "@Kuma2006"
    // },
    // {
    //     "name": "RAHUL KABI",
    //     "username": "Rahul",
    //     "password": "@Rahu2005"
    // },
    // {
    //     "name": "SHATRUJIT SAHOO",
    //     "username": "Shatrujit",
    //     "password": "@Shat2000"
    // },
    // {
    //     "name": "RANJAN KUMAR DAS",
    //     "username": "Ranjan",
    //     "password": "@Ranj1994"
    // },
    // {
    //     "name": "DEEPANJALI NAYAK",
    //     "username": "Deepanjali",
    //     "password": "@Deep2005"
    // },
    // {
    //     "name": "ASHISH KUMAR SAHOO",
    //     "username": "Ashish",
    //     "password": "@Ashi2005"
    // },
    // {
    //     "name": "RAJA BEHERA",
    //     "username": "Raja",
    //     "password": "@Raja2004"
    // },
    // {
    //     "name": "KSHYAMA JENA",
    //     "username": "Kshyama",
    //     "password": "@Kshy2006"
    // },
    // {
    //     "name": "SONALI SETHI",
    //     "username": "Sonali",
    //     "password": "@Sona2006"
    // },
    // {
    //     "name": "SUBHASMITA SWAIN",
    //     "username": "Subhasmita",
    //     "password": "@Subh2006"
    // },
    // {
    //     "name": "RITISHRI BEURA",
    //     "username": "Ritishri",
    //     "password": "@Riti2005"
    // },
    // {
    //     "name": "PRAGYAN ROUT",
    //     "username": "Pragyan",
    //     "password": "@Prag2005"
    // },
    // {
    //     "name": "D M SOUBHAGYALAXMI",
    //     "username": "D",
    //     "password": "@D2005"
    // },
    // {
    //     "name": "SATYARANJAN SAHOO",
    //     "username": "Satyaranjan",
    //     "password": "@Saty2004"
    // },
    // {
    //     "name": "MAMALI SAHOO",
    //     "username": "Mamali",
    //     "password": "@Mama2006"
    // },
    // {
    //     "name": "KALPANA SAHOO",
    //     "username": "Kalpana",
    //     "password": "@Kalp2006"
    // },
    // {
    //     "name": "RAJAT KUMAR SAHOO",
    //     "username": "Rajat",
    //     "password": "@Raja2006"
    // },
    // {
    //     "name": "TANUSHREE ROUT",
    //     "username": "Tanushree",
    //     "password": "@Tanu2006"
    // },
    // {
    //     "name": "HARISH KUMAR SETHY",
    //     "username": "Harish",
    //     "password": "@Hari2003"
    // },
    // {
    //     "name": "SUBHADRA SAHOO",
    //     "username": "Subhadra",
    //     "password": "@Subh2004"
    // },
    // {
    //     "name": "PAPINA BEHERA",
    //     "username": "Papina",
    //     "password": "@Papi2003"
    // },
    // {
    //     "name": "AKANKSHYA SATAPATHY",
    //     "username": "Akankshya",
    //     "password": "@Akan2006"
    // },
    // {
    //     "name": "ADITYA ARYAN SAHOO",
    //     "username": "Aditya",
    //     "password": "@Adit2004"
    // },
    // {
    //     "name": "MANTU PRADHAN",
    //     "username": "Mantu",
    //     "password": "@Mant2006"
    // },
    // {
    //     "name": "NIRANJAN PRADHAN",
    //     "username": "Niranjan",
    //     "password": "@Nira2005"
    // },
    // {
    //     "name": "MADHUSMITA SAHOO",
    //     "username": "Madhusmita",
    //     "password": "@Madh2004"
    // },
    // {
    //     "name": "ARAJIT MAHARANA",
    //     "username": "Arajit",
    //     "password": "@Araj2006"
    // },
    // {
    //     "name": "PUJA ROUT",
    //     "username": "Puja",
    //     "password": "@Puja2002"
    // },
    // {
    //     "name": "KRISHNA PATRA",
    //     "username": "Krishna",
    //     "password": "@Kris2003"
    // },
    // {
    //     "name": "SUBHASHREE MAHARANA",
    //     "username": "Subhashree",
    //     "password": "@Subh2003"
    // },
    // {
    //     "name": "SUBHALAXMI SAHOO",
    //     "username": "Subhalaxmi",
    //     "password": "@Subh2004"
    // },
    // {
    //     "name": "MINAKSHI BEURA",
    //     "username": "Minakshi",
    //     "password": "@Mina2006"
    // },
    // {
    //     "name": "PABITRA KUMAR ROUT",
    //     "username": "Pabitra",
    //     "password": "@Pabi2003"
    // },
    // {
    //     "name": "SMRUTISMITA SAHOO",
    //     "username": "Smrutismita",
    //     "password": "@Smru2003"
    // },
    // {
    //     "name": "DIPTI MOHANRANA",
    //     "username": "Dipti",
    //     "password": "@Dipt2004"
    // },
    // {
    //     "name": "SUBARNALATA SINGH",
    //     "username": "Subarnalata",
    //     "password": "@Suba1994"
    // },
    // {
    //     "name": "MADHUSMITA SAHOO",
    //     "username": "Madhusmita",
    //     "password": "@Madh2004"
    // },
    // {
    //     "name": "GYANA RANJAN NAYAK",
    //     "username": "Gyana",
    //     "password": "@Gyan2005"
    // },
    // {
    //     "name": "ROJALIN MOHANTY",
    //     "username": "Rojalin",
    //     "password": "@Roja2006"
    // },
    // {
    //     "name": "OM PRAKASH BEHERA",
    //     "username": "Om",
    //     "password": "@Om2007"
    // },
    // {
    //     "name": "SURYAPRATAP SAHOO",
    //     "username": "Suryapratap",
    //     "password": "@Sury2005"
    // },
    // {
    //     "name": "SADHU CHARAN MOHANTY",
    //     "username": "Sadhu",
    //     "password": "@Sadh2002"
    // },
    // {
    //     "name": "BISWAJIT SAMAL",
    //     "username": "Biswajit",
    //     "password": "@Bisw2004"
    // },
    // {
    //     "name": "BUBUN ROUT",
    //     "username": "Bubun",
    //     "password": "@Bubu2005"
    // },
    // {
    //     "name": "SIBA PRASAD ROUT",
    //     "username": "Siba",
    //     "password": "@Siba2006"
    // },
    // {
    //     "name": "SATYAMITRA NAIK",
    //     "username": "Satyamitra",
    //     "password": "@Saty2005"
    // },
    // {
    //     "name": "MANISHA SAHOO",
    //     "username": "Manisha",
    //     "password": "@Mani2003"
    // },
    // {
    //     "name": "ANJALI PADHI",
    //     "username": "Anjali",
    //     "password": "@Anja2003"
    // },
    // {
    //     "name": "SABNAM SULTANA",
    //     "username": "Sabnam",
    //     "password": "@Sabn1998"
    // },
    // {
    //     "name": "MAMALI MULIA",
    //     "username": "Mamali",
    //     "password": "@Mama2006"
    // },
    // {
    //     "name": "SEEMA SAHOO",
    //     "username": "Seema",
    //     "password": "@Seem2006"
    // },
    // {
    //     "name": "KHULANA GOCHHI",
    //     "username": "Khulana",
    //     "password": "@Khul2003"
    // },
    // {
    //     "name": "SOUMYARANJAN SAMANTARAY",
    //     "username": "Soumyaranjan",
    //     "password": "@Soum2002"
    // },
    // {
    //     "name": "SIBARAM MOHARANA",
    //     "username": "Sibaram",
    //     "password": "@Siba2006"
    // },
    // {
    //     "name": "ALISHA ROUT",
    //     "username": "Alisha",
    //     "password": "@Alis2001"
    // },
    // {
    //     "name": "RASMITA BEHERA",
    //     "username": "Rasmita",
    //     "password": "@Rasm1995"
    // },
    // {
    //     "name": "DEEPAK KUMAR NAIK",
    //     "username": "Deepak",
    //     "password": "@Deep2005"
    // },
    // {
    //     "name": "RANJIT DEURI",
    //     "username": "Ranjit",
    //     "password": "@Ranj2005"
    // },
    // {
    //     "name": "MADHUSMITA PRADHAN",
    //     "username": "Madhusmita",
    //     "password": "@Madh2002"
    // },
    // {
    //     "name": "SMRUTI RANJAN NAYAK",
    //     "username": "Smruti",
    //     "password": "@Smru2001"
    // },

    // //Batch-12-13
    // {
    //     "name": "BISWAJIT BEHERA",
    //     "username": "Biswajit",
    //     "password": "@Bisw2006"
    // },
    // {
    //     "name": "SUNYATARA BEHERA",
    //     "username": "Sunyatara",
    //     "password": "@Suny2003"
    // },
    // {
    //     "name": "DHARITRI RANA",
    //     "username": "Dharitri",
    //     "password": "@Dhar2005"
    // },
    // {
    //     "name": "GAYATREE RANA",
    //     "username": "Gayatree",
    //     "password": "@Gaya2003"
    // },
    // {
    //     "name": "SUDHANSU PRADHAN",
    //     "username": "Sudhansu",
    //     "password": "@Sudh2004"
    // },
    // {
    //     "name": "SAROJ KUMAR MOHAPATRA",
    //     "username": "Saroj",
    //     "password": "@Saro2003"
    // },
    // {
    //     "name": "SATYAJIT ROUT",
    //     "username": "Satyajit",
    //     "password": "@Saty2004"
    // },
    // {
    //     "name": "SUJIT KUMAR SAHOO",
    //     "username": "Sujit",
    //     "password": "@Suji2006"
    // },
    // {
    //     "name": "RUDRA NARAYAN SAHOO",
    //     "username": "Rudra",
    //     "password": "@Rudr2003"
    // },
    // {
    //     "name": "SWABHIMAN PRADHAN",
    //     "username": "Swabhiman",
    //     "password": "@Swab2004"
    // },
    // {
    //     "name": "JASMIN BEHERA",
    //     "username": "Jasmin",
    //     "password": "@Jasm2004"
    // },
    // {
    //     "name": "TAPAS KUMAR BARIK",
    //     "username": "Tapas",
    //     "password": "@Tapa2003"
    // },
    // {
    //     "name": "RAJAT KUMAR SAHOO",
    //     "username": "Rajat",
    //     "password": "@Raja2004"
    // },
    // {
    //     "name": "LAXMIPRIYA JENA",
    //     "username": "Laxmipriya",
    //     "password": "@Laxm2004"
    // },
    // {
    //     "name": "ADYASHA PANDA",
    //     "username": "Adyasha",
    //     "password": "@Adya2004"
    // },
    // {
    //     "name": "LAXMIPRIYA BEHERA",
    //     "username": "Laxmipriya",
    //     "password": "@Laxm2003"
    // },
    // {
    //     "name": "SUNIL KUMAR SAHOO",
    //     "username": "Sunil",
    //     "password": "@Suni2001"
    // },
    // {
    //     "name": "PARBATI PRADHAN",
    //     "username": "Parbati",
    //     "password": "@Parb2006"
    // },
    // {
    //     "name": "SIKRUTI SATAPATHY",
    //     "username": "Sikruti",
    //     "password": "@Sikr2005"
    // },
    // {
    //     "name": "NISHAT AFREEN",
    //     "username": "Nishat",
    //     "password": "@Nish2004"
    // },
    // {
    //     "name": "RAJIB KARMAKAR",
    //     "username": "Rajib",
    //     "password": "@Raji2002"
    // },
    // {
    //     "name": "URMILA SWAIN",
    //     "username": "Urmila",
    //     "password": "@Urmi2004"
    // },
    // {
    //     "name": "ANIL PUHAN",
    //     "username": "Anil",
    //     "password": "@Anil2003"
    // },
    // {
    //     "name": "ITINA JENA",
    //     "username": "Itina",
    //     "password": "@Itin2003"
    // },
    // {
    //     "name": "JAGANNATH PRADHAN",
    //     "username": "Jagannath",
    //     "password": "@Jaga2004"
    // },
    // {
    //     "name": "RAKESH KUMAR PRADHAN",
    //     "username": "Rakesh",
    //     "password": "@Rake2004"
    // },
    // {
    //     "name": "STITIPRANGYA SAHOO",
    //     "username": "Stitiprangya",
    //     "password": "@Stit2004"
    // },
    // {
    //     "name": "MANISHA SAHOO",
    //     "username": "Manisha",
    //     "password": "@Mani2001"
    // },
    // {
    //     "name": "CHANDAN BEHERA",
    //     "username": "Chandan",
    //     "password": "@Chan2004"
    // },
    // {
    //     "name": "SOURAV NANDA",
    //     "username": "Sourav",
    //     "password": "@Sour2003"
    // },
    // {
    //     "name": "GEETANJALI PRADHAN",
    //     "username": "Geetanjali",
    //     "password": "@Geet1999"
    // },
    // {
    //     "name": "SONALI PRIYADARSHINI ROUT",
    //     "username": "Sonali",
    //     "password": "@Sona2005"
    // },
    // {
    //     "name": "BHAGYASHREE SAHOO",
    //     "username": "Bhagyashree",
    //     "password": "@Bhag2005"
    // },
    // {
    //     "name": "ARPITA NAYAK",
    //     "username": "Arpita",
    //     "password": "@Arpi2001"
    // },
    // {
    //     "name": "PRIYAMBADA PRADHAN",
    //     "username": "Priyambada",
    //     "password": "@Priy1992"
    // },
    // {
    //     "name": "SWARNAPRIYA DAS",
    //     "username": "Swarnapriya",
    //     "password": "@Swar2004"
    // },
    // {
    //     "name": "DEBI PRASAD BARIK",
    //     "username": "Debi",
    //     "password": "@Debi1999"
    // },
    // {
    //     "name": "PINKINA SAHOO",
    //     "username": "Pinkina",
    //     "password": "@Pink2000"
    // },
    // {
    //     "name": "SRABANI BAR",
    //     "username": "Srabani",
    //     "password": "@Srab2002"
    // },
    // {
    //     "name": "SUCHARITA SAHOO",
    //     "username": "Sucharita",
    //     "password": "@Such2000"
    // },
    // {
    //     "name": "MAHEFUJ KHAN",
    //     "username": "Mahefuj",
    //     "password": "@Mahe2002"
    // },
    // {
    //     "name": "SWATIPUSPA BEHERA",
    //     "username": "Swatipuspa",
    //     "password": "@Swat1999"
    // },
    // {
    //     "name": "SUCHISMITA PATRA",
    //     "username": "Suchismita",
    //     "password": "@Such2000"
    // },
    // {
    //     "name": "SUBHASHREE JENA",
    //     "username": "Subhashree",
    //     "password": "@Subh2004"
    // },
    // {
    //     "name": "CHINMAYA PRUSTY",
    //     "username": "Chinmaya",
    //     "password": "@Chin2001"
    // },
    // {
    //     "name": "BINOD BARIK",
    //     "username": "Binod",
    //     "password": "@Bino2003"
    // },
    // {
    //     "name": "SIBANI SUBHADARSHINI",
    //     "username": "Sibani",
    //     "password": "@Siba2003"
    // },
    // {
    //     "name": "SUNIL HATI",
    //     "username": "Sunil",
    //     "password": "@Suni2004"
    // },
    // {
    //     "name": "ALOK JENA",
    //     "username": "Alok",
    //     "password": "@Alok2005"
    // },
    // {
    //     "name": "JHANSI BISOI",
    //     "username": "Jhansi",
    //     "password": "@Jhan2002"
    // },

    // //New Branch

    //     {
    //         "name": "ROMYARANJAN DAS",
    //         "username": "Romyaranjan",
    //         "password": "@Romy2005"
    //     },
    //     {
    //         "name": "BIREN KHATUA",
    //         "username": "Biren",
    //         "password": "@Bire2004"
    //     },
    //     {
    //         "name": "GURUCHARAN BEURA",
    //         "username": "Gurucharan",
    //         "password": "@Guru2006"
    //     },
    //     {
    //         "name": "MRUTYUNJAYA DAS",
    //         "username": "Mrutyunjaya",
    //         "password": "@Mrut2006"
    //     },
    //     {
    //         "name": "RASMIRANJAN PARIDA",
    //         "username": "Rasmiranjan",
    //         "password": "@Rasm2006"
    //     },
    //     {
    //         "name": "RAHUL DAS",
    //         "username": "Rahul",
    //         "password": "@Rahu2005"
    //     },
    //     {
    //         "name": "ARIF BUX",
    //         "username": "Arif",
    //         "password": "@Arif2003"
    //     },
    //     {
    //         "name": "NILAMANI BEHERA",
    //         "username": "Nilamani",
    //         "password": "@Nila2005"
    //     },
    //     {
    //         "name": "DEEPAK SAHOO",
    //         "username": "Deepak",
    //         "password": "@Deep2005"
    //     },
    //     {
    //         "name": "BIRBADAL BALIA MARNDI",
    //         "username": "Birbadal",
    //         "password": "@Birb2006"
    //     },
    //     {
    //         "name": "SUSHIL KUMAR SWAIN",
    //         "username": "Sushil",
    //         "password": "@Sush2006"
    //     },
    //     {
    //         "name": "CHANDRAKANTA ROUT",
    //         "username": "Chandrakanta",
    //         "password": "@Chan2003"
    //     },
    //     {
    //         "name": "KANHUCHARAN SAHOO",
    //         "username": "Kanhucharan",
    //         "password": "@Kanh2005"
    //     },
    //     {
    //         "name": "KRUTIBAS PRADHAN",
    //         "username": "Krutibas",
    //         "password": "@Krut2007"
    //     },
    //     {
    //         "name": "SANJAY PRADHAN",
    //         "username": "Sanjay",
    //         "password": "@Sanj2007"
    //     },
    //     {
    //         "name": "ASHIS PANDA",
    //         "username": "Ashis",
    //         "password": "@Ashi2003"
    //     },
    //     {
    //         "name": "JITENDRA KUMAR SAHOO",
    //         "username": "Jitendra",
    //         "password": "@Jite2004"
    //     },
    //     {
    //         "name": "SWADHINA SAHOO",
    //         "username": "Swadhina",
    //         "password": "@Swad2004"
    //     },
    //     {
    //         "name": "SUSHREE SWETA SWAGATIKA",
    //         "username": "Sushree",
    //         "password": "@Sush2005"
    //     },
    //     {
    //         "name": "SNIGDHARANI BARAL",
    //         "username": "Snigdharani",
    //         "password": "@Snig2002"
    //     },
    //     {
    //         "name": "OMM PRAKASH BEHERA",
    //         "username": "Omm",
    //         "password": "@Omm2007"
    //     },
    //     {
    //         "name": "TULASI PUHAN",
    //         "username": "Tulasi",
    //         "password": "@Tula2007"
    //     },
    //     {
    //         "name": "HARSHITA SWAIN",
    //         "username": "Harshita",
    //         "password": "@Hars2006"
    //     },
    //     {
    //         "name": "CHITRASEN JENA",
    //         "username": "Chitrasen",
    //         "password": "@Chit2007"
    //     },
    //     {
    //         "name": "KALYANI DASH",
    //         "username": "Kalyani",
    //         "password": "@Kaly2003"
    //     },
    //     {
    //         "name": "ASHUTOSH PRADHAN",
    //         "username": "Ashutosh",
    //         "password": "@Ashu2001"
    //     },
    //     {
    //         "name": "SWAPNARANI SWAIN",
    //         "username": "Swapnarani",
    //         "password": "@Swap2005"
    //     },
    //     {
    //         "name": "ASWINI KUMAR NAYAK",
    //         "username": "Aswini",
    //         "password": "@Aswi2006"
    //     },
    //     {
    //         "name": "AMIT BHOI",
    //         "username": "Amit",
    //         "password": "@Amit2007"
    //     },
    //     {
    //         "name": "ABHIJIT MAJHI",
    //         "username": "Abhijit",
    //         "password": "@Abhi2002"
    //     },
    //     {
    //         "name": "AISWARYA SAHOO",
    //         "username": "Aiswarya",
    //         "password": "@Aisw2000"
    //     },
    //     {
    //         "name": "SUBHASHREE NAIK",
    //         "username": "Subhashree",
    //         "password": "@Subh2000"
    //     },
    //     {
    //         "name": "JYOTRIMAYEE SAHOO",
    //         "username": "Jyotrimayee",
    //         "password": "@Jyot2003"
    //     },
    //     {
    //         "name": "SWAGATA PATTNAIK",
    //         "username": "Swagata",
    //         "password": "@Swag2007"
    //     },
    //     {
    //         "name": "SRADHANJALI SAHOO",
    //         "username": "Sradhanjali",
    //         "password": "@Srad2004"
    //     },
    //     {
    //         "name": "ASIT KUMAR SWAIN",
    //         "username": "Asit",
    //         "password": "@Asit2006"
    //     },
    //     {
    //         "name": "PRABHUDUTTA RANA",
    //         "username": "Prabhudutta",
    //         "password": "@Prab2005"
    //     },
    //     {
    //         "name": "TRUPTIMAYA MOHAPATRA",
    //         "username": "Truptimaya",
    //         "password": "@Trup2007"
    //     },
    //     {
    //         "name": "GANESH SAHOO",
    //         "username": "Ganesh",
    //         "password": "@Gane2005"
    //     },
    //     {
    //         "name": "CHINMAYADATTA BEHERA",
    //         "username": "Chinmayadatta",
    //         "password": "@Chin2007"
    //     },
    //     {
    //         "name": "PINKUN NAYAK",
    //         "username": "Pinkun",
    //         "password": "@Pink2006"
    //     },
    //     {
    //         "name": "BISWARANJAN SAHOO",
    //         "username": "Biswaranjan",
    //         "password": "@Bisw2004"
    //     },
    //     {
    //         "name": "SUBRAT KUMAR JENA",
    //         "username": "Subrat",
    //         "password": "@Subr2004"
    //     },
    //     {
    //         "name": "SRIMANTA DASH",
    //         "username": "Srimanta",
    //         "password": "@Srim2004"
    //     },
    //     {
    //         "name": "SUNITA RANA",
    //         "username": "Sunita",
    //         "password": "@Suni2005"
    //     },
    //     {
    //         "name": "SAMBIT KUMAR SAHOO",
    //         "username": "Sambit",
    //         "password": "@Samb2005"
    //     },
    //     {
    //         "name": "JITU SAHOO",
    //         "username": "Jitu",
    //         "password": "@Jitu2004"
    //     },
    //     {
    //         "name": "JASHOBANTA ROUT",
    //         "username": "Jashobanta",
    //         "password": "@Jash2005"
    //     },
    //     {
    //         "name": "BUBU SAHOO",
    //         "username": "Bubu",
    //         "password": "@Bubu2005"
    //     },
    //     {
    //         "name": "SHRABANEE NAIK",
    //         "username": "Shrabanee",
    //         "password": "@Shra2005"
    //     },
    //     {
    //         "name": "JAGANNATH NAIK",
    //         "username": "Jagannath",
    //         "password": "@Jaga2005"
    //     },
    //     {
    //         "name": "SANTOSINI SWAIN",
    //         "username": "Santosini",
    //         "password": "@Sant2001"
    //     },
    //     {
    //         "name": "SAMARENDRA NAYAK",
    //         "username": "Samarendra",
    //         "password": "@Sama2003"
    //     },
    //     //Adding New indivisual
    //     {
    //         "name": "SANGEETA BEHERA",
    //         "username": "Sangeeta",
    //         "password": "@Sang2002"
    //     }
];
const alert = document.querySelector(".alert");
function checkCredentials() {
    var username = document.getElementById("login-username").value.trim();
    var password = document.getElementById("login-password").value.trim();
    var alert = document.querySelector(".alert");
    for (var i = 0; i < users.length; i++) {
        if (username === users[i].username && password === users[i].password) {
            // alert("Login successful!");
            alert.innerHTML = "Loading....";
            window.open("/api/topper.html", "_self");
            return;
        }
    }
    // alert("Invalid credentials. Please try again.");
    alert.innerHTML = "Wrong Password!!!";
}

let prevScrollPos = window.pageYOffset;

window.onscroll = function () {
    const currentScrollPos = window.pageYOffset;
    if (prevScrollPos > currentScrollPos) {
        document.querySelector('nav').classList.remove('hidden-nav');
        document.body.classList.remove('nav-hidden');
    } else {
        document.querySelector('nav').classList.add('hidden-nav');
        document.body.classList.add('nav-hidden');
    }
    prevScrollPos = currentScrollPos;
}

function openSecondWebpage(value) {
    // Encode the value to ensure proper URL handling
    var encodedValue = encodeURIComponent(value);

    // Open the second webpage with the value as a query parameter
    window.open("/notes.html?value=" + encodedValue, "_self");
}


// *************For Notes**************************
// Function to get the value from the URL
function getValueFromURL() {
    var urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('value');
}

// Call this function to set the iframe src with the value from the URL
var value = getValueFromURL();
if (value) {
    // Decode the value to get the original string
    var decodedValue = decodeURIComponent(value);
    document.getElementById("myIframe").src = decodedValue;
}


// ***********************************************************************
const note_link = {
    fundamental: "https://drive.google.com/file/d/1FGujMtij03eCXLFm2exRTxt2_TnqTv2Y/preview",
    win7: "https://drive.google.com/file/d/1aLYlBW9Fek0yF3kQgd_7Me5HKadxMvmK/preview",
    word: "https://drive.google.com/file/d/1fQSuDADhzggjpqk2p8Zfl6kCtysLmAHi/preview",
    excel: "https://drive.google.com/file/d/1FIvBDIlI9Gu5FFFU8co4nAJkMFeW17p9/preview",
    powerpoint: "https://drive.google.com/file/d/1UdOOuR3EFuYn_IrQV1e2phWAz5KkRUup/preview",
    access: "https://drive.google.com/file/d/1OwGClN3aTCJqZoPYW9jFlslTb6bIiOcK/preview",
    photoshop: "https://drive.google.com/file/d/1LhI5L20oY_o7ukTYx7fUneSIUhzUCSmG/preview",
    ps1: "https://drive.google.com/file/d/1HOueHs8DZSjAJJzrOo3Uw13MotQ3WU09/preview",
    pagemaker: "https://drive.google.com/file/d/1Ekrs72RFYIMC6caf03yvKUz64ggMeLc4/preview",
    html: "https://drive.google.com/file/d/1RLoJm8_fBc526CmRSA4ndUf-XyS68-6E/preview",
    css: "https://drive.google.com/file/d/12pQ2fv5BtPy9vrFYnJwcBccduyfSJClu/preview",
    word_old: "https://drive.google.com/file/d/1u5oXkCdtSLytfsNhYWUmW4RYrf04EuLa/preview",
    excel_old: "https://drive.google.com/file/d/1UXgGQvJpfrHKqBX6RzpMT6uX46prlMQs/preview",
    cmd: "https://drive.google.com/file/d/1NhRRVy8Ocho_zQgeZBwRU5qUgWUnkz27/preview",
    acc: "https://drive.google.com/file/d/1FOe2Xp1PHT5bm-cQnfM1d1nsr5ls8_Vu/preview",
    cpro: "https://drive.google.com/file/d/1rsI8cNGzOUv48l9Xh_1NDs0XWUcVjfL6/preview"
}

const fundamental = document.getElementById('fundamental')
const win7 = document.getElementById('win7')
const word = document.getElementById('word')
const excel = document.getElementById('excel')
const powerpoint = document.getElementById('powerpoint')
const access = document.getElementById('access')
const photoshop = document.getElementById('photoshop')
const ps1 = document.getElementById('ps1')
const pagemaker = document.getElementById('pagemaker')
const html = document.getElementById('html')
const css = document.getElementById('css')
const word_old = document.getElementById('word_old')
const excel_old = document.getElementById('excel_old')
const cmd = document.getElementById('cmd')
const acc = document.getElementById('acc')
const cpro = document.getElementById('cpro')

fundamental.setAttribute("onclick", "openSecondWebpage(note_link.fundamental)");
win7.setAttribute("onclick", "openSecondWebpage(note_link.win7)");
word.setAttribute("onclick", "openSecondWebpage(note_link.word)");
excel.setAttribute("onclick", "openSecondWebpage(note_link.excel)");
powerpoint.setAttribute("onclick", "openSecondWebpage(note_link.powerpoint)");
access.setAttribute("onclick", "openSecondWebpage(note_link.access)");
photoshop.setAttribute("onclick", "openSecondWebpage(note_link.photoshop)");
ps1.setAttribute("onclick", "openSecondWebpage(note_link.ps1)");
pagemaker.setAttribute("onclick", "openSecondWebpage(note_link.pagemaker)");
html.setAttribute("onclick", "openSecondWebpage(note_link.html)");
css.setAttribute("onclick", "openSecondWebpage(note_link.css)");
word_old.setAttribute("onclick", "openSecondWebpage(note_link.word_old)");
excel_old.setAttribute("onclick", "openSecondWebpage(note_link.excel_old)");
cmd.setAttribute("onclick", "openSecondWebpage(note_link.cmd)");
acc.setAttribute("onclick", "openSecondWebpage(note_link.acc)");
cpro.setAttribute("onclick", "openSecondWebpage(note_link.cpro)");