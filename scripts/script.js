var users = [
    { username: "admin", password: "kalinga", fname: "Kalinga Computer" },
    { username: "user", password: "password", fname: "Kalinga Staff" },
    // Add more users as needed
];
const alert = document.querySelector(".alert");
function checkCredentials() {
    var username = document.getElementById("login-username").value;
    var password = document.getElementById("login-password").value;
    var alert = document.querySelector(".alert");
    for (var i = 0; i < users.length; i++) {
        if (username === users[i].username && password === users[i].password) {
            // alert("Login successful!");
            alert.innerHTML = "Loading....";
            window.open("/home.html", "_self");
            return;
        }
    }
    // alert("Invalid credentials. Please try again.");
    alert.innerHTML = "Wrong Password!!!";
}
let prevScrollPos = window.pageYOffset;

window.onscroll = function() {
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
function goBack() {
    window.history.back();
}
function login() {
    window.open("/login.html", "_self")
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
    pagemaker: "https://drive.google.com/file/d/1Ekrs72RFYIMC6caf03yvKUz64ggMeLc4/preview",
    html: "https://drive.google.com/file/d/1RLoJm8_fBc526CmRSA4ndUf-XyS68-6E/preview",
    word_old: "https://drive.google.com/file/d/1u5oXkCdtSLytfsNhYWUmW4RYrf04EuLa/preview",
    excel_old: "https://drive.google.com/file/d/1UXgGQvJpfrHKqBX6RzpMT6uX46prlMQs/preview"
}

const fundamental = document.getElementById('fundamental')
const win7 = document.getElementById('win7')
const word = document.getElementById('word')
const excel = document.getElementById('excel')
const powerpoint = document.getElementById('powerpoint')
const access = document.getElementById('access')
const photoshop = document.getElementById('photoshop')
const pagemaker = document.getElementById('pagemaker')
const html = document.getElementById('html')
const word_old = document.getElementById('word_old')
const excel_old = document.getElementById('excel_old')

fundamental.setAttribute("onclick", "openSecondWebpage(note_link.fundamental)");
win7.setAttribute("onclick", "openSecondWebpage(note_link.win7)");
word.setAttribute("onclick", "openSecondWebpage(note_link.word)");
excel.setAttribute("onclick", "openSecondWebpage(note_link.excel)");
powerpoint.setAttribute("onclick", "openSecondWebpage(note_link.powerpoint)");
access.setAttribute("onclick", "openSecondWebpage(note_link.access)");
photoshop.setAttribute("onclick", "openSecondWebpage(note_link.photoshop)");
pagemaker.setAttribute("onclick", "openSecondWebpage(note_link.pagemaker)");
html.setAttribute("onclick", "openSecondWebpage(note_link.html)");
word_old.setAttribute("onclick", "openSecondWebpage(note_link.word_old)");
excel_old.setAttribute("onclick", "openSecondWebpage(note_link.excel_old)");