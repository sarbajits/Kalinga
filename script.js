let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 4000); // Change image every 2 seconds
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

fundamental.setAttribute("onclick","openSecondWebpage(note_link.fundamental)");
win7.setAttribute("onclick","openSecondWebpage(note_link.win7)");
word.setAttribute("onclick","openSecondWebpage(note_link.word)");
excel.setAttribute("onclick","openSecondWebpage(note_link.excel)");
powerpoint.setAttribute("onclick","openSecondWebpage(note_link.powerpoint)");
access.setAttribute("onclick","openSecondWebpage(note_link.access)");
photoshop.setAttribute("onclick","openSecondWebpage(note_link.photoshop)");
pagemaker.setAttribute("onclick","openSecondWebpage(note_link.pagemaker)");
html.setAttribute("onclick","openSecondWebpage(note_link.html)");
word_old.setAttribute("onclick","openSecondWebpage(note_link.word_old)");
excel_old.setAttribute("onclick","openSecondWebpage(note_link.excel_old)");