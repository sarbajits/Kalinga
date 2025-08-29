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
    { username: "S", password: "s", name: "SS" },
];
const alert = document.querySelector(".alert");
function checkCredentials() {
    var username = document.getElementById("login-username").value.trim();
    var password = document.getElementById("login-password").value.trim();
    var alert = document.querySelector(".alert");
    for (var i = 0; i < users.length; i++) {
        if (username === users[ i ].username && password === users[ i ].password) {
            // alert("Login successful!");
            alert.innerHTML = "Loading....";
            window.open("/admin-panel.html", "_self");
            return;
        }
    }
    // alert("Invalid credentials. Please try again.");
    alert.innerHTML = "Wrong Password!!!";
}

// let prevScrollPos = window.pageYOffset;

// window.onscroll = function () {
//     const currentScrollPos = window.pageYOffset;
//     if (prevScrollPos > currentScrollPos) {
//         document.querySelector('nav').classList.remove('hidden-nav');
//         document.body.classList.remove('nav-hidden');
//     } else {
//         document.querySelector('nav').classList.add('hidden-nav');
//         document.body.classList.add('nav-hidden');
//     }
//     prevScrollPos = currentScrollPos;
// }

// function openSecondWebpage(value) {
//     // Encode the value to ensure proper URL handling
//     var encodedValue = encodeURIComponent(value);

//     // Open the second webpage with the value as a query parameter
//     window.open("/notes.html?value=" + encodedValue, "_self");
// }


// // *************For Notes**************************
// // Function to get the value from the URL
// function getValueFromURL() {
//     var urlParams = new URLSearchParams(window.location.search);
//     return urlParams.get('value');
// }

// // Call this function to set the iframe src with the value from the URL
// var value = getValueFromURL();
// if (value) {
//     // Decode the value to get the original string
//     var decodedValue = decodeURIComponent(value);
//     document.getElementById("myIframe").src = decodedValue;
// }


// // ***********************************************************************
// const note_link = {
//     fundamental: "https://drive.google.com/file/d/1FGujMtij03eCXLFm2exRTxt2_TnqTv2Y/preview",
//     win7: "https://drive.google.com/file/d/1aLYlBW9Fek0yF3kQgd_7Me5HKadxMvmK/preview",
//     word: "https://drive.google.com/file/d/1fQSuDADhzggjpqk2p8Zfl6kCtysLmAHi/preview",
//     excel: "https://drive.google.com/file/d/1FIvBDIlI9Gu5FFFU8co4nAJkMFeW17p9/preview",
//     powerpoint: "https://drive.google.com/file/d/1UdOOuR3EFuYn_IrQV1e2phWAz5KkRUup/preview",
//     access: "https://drive.google.com/file/d/1OwGClN3aTCJqZoPYW9jFlslTb6bIiOcK/preview",
//     photoshop: "https://drive.google.com/file/d/1LhI5L20oY_o7ukTYx7fUneSIUhzUCSmG/preview",
//     ps1: "https://drive.google.com/file/d/1HOueHs8DZSjAJJzrOo3Uw13MotQ3WU09/preview",
//     pagemaker: "https://drive.google.com/file/d/1Ekrs72RFYIMC6caf03yvKUz64ggMeLc4/preview",
//     html: "https://drive.google.com/file/d/1RLoJm8_fBc526CmRSA4ndUf-XyS68-6E/preview",
//     css: "https://drive.google.com/file/d/12pQ2fv5BtPy9vrFYnJwcBccduyfSJClu/preview",
//     word_old: "https://drive.google.com/file/d/1u5oXkCdtSLytfsNhYWUmW4RYrf04EuLa/preview",
//     excel_old: "https://drive.google.com/file/d/1UXgGQvJpfrHKqBX6RzpMT6uX46prlMQs/preview",
//     cmd: "https://drive.google.com/file/d/1NhRRVy8Ocho_zQgeZBwRU5qUgWUnkz27/preview",
//     acc: "https://drive.google.com/file/d/1FOe2Xp1PHT5bm-cQnfM1d1nsr5ls8_Vu/preview",
//     cpro: "https://drive.google.com/file/d/1rsI8cNGzOUv48l9Xh_1NDs0XWUcVjfL6/preview"
// }

// const fundamental = document.getElementById('fundamental')
// const win7 = document.getElementById('win7')
// const word = document.getElementById('word')
// const excel = document.getElementById('excel')
// const powerpoint = document.getElementById('powerpoint')
// const access = document.getElementById('access')
// const photoshop = document.getElementById('photoshop')
// const ps1 = document.getElementById('ps1')
// const pagemaker = document.getElementById('pagemaker')
// const html = document.getElementById('html')
// const css = document.getElementById('css')
// const word_old = document.getElementById('word_old')
// const excel_old = document.getElementById('excel_old')
// const cmd = document.getElementById('cmd')
// const acc = document.getElementById('acc')
// const cpro = document.getElementById('cpro')

// fundamental.setAttribute("onclick", "openSecondWebpage(note_link.fundamental)");
// win7.setAttribute("onclick", "openSecondWebpage(note_link.win7)");
// word.setAttribute("onclick", "openSecondWebpage(note_link.word)");
// excel.setAttribute("onclick", "openSecondWebpage(note_link.excel)");
// powerpoint.setAttribute("onclick", "openSecondWebpage(note_link.powerpoint)");
// access.setAttribute("onclick", "openSecondWebpage(note_link.access)");
// photoshop.setAttribute("onclick", "openSecondWebpage(note_link.photoshop)");
// ps1.setAttribute("onclick", "openSecondWebpage(note_link.ps1)");
// pagemaker.setAttribute("onclick", "openSecondWebpage(note_link.pagemaker)");
// html.setAttribute("onclick", "openSecondWebpage(note_link.html)");
// css.setAttribute("onclick", "openSecondWebpage(note_link.css)");
// word_old.setAttribute("onclick", "openSecondWebpage(note_link.word_old)");
// excel_old.setAttribute("onclick", "openSecondWebpage(note_link.excel_old)");
// cmd.setAttribute("onclick", "openSecondWebpage(note_link.cmd)");
// acc.setAttribute("onclick", "openSecondWebpage(note_link.acc)");
// cpro.setAttribute("onclick", "openSecondWebpage(note_link.cpro)");
