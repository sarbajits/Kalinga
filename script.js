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

const main = document.querySelector(".main")


fundamental.innerHTML = `
            <img src="https://cyber.olympiadsuccess.com/assets/images/cyber_square/cyber_topic_13.jpg" alt="Fundamental">
            <h3>Fundaamental Note</h3>
`;
win7.innerHTML = `
            <img src="https://redmondmag.com/-/media/ECG/redmondmag/Images/introimages2014/140812REDMackieWin7.jpg" alt="Windows 7">
            <h3>Windows 7 Note Note</h3>
`;
word.innerHTML = `
            <img src="https://images.livemint.com/img/2021/07/01/1600x900/MSW_1625167807940_1625167818629.png" alt="Word">
            <h3>Word Note</h3>
`;
excel.innerHTML = `
            <img src="https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20-%202021-02-12T211518_067.jpg" alt="Excel">
            <h3>Excel Note</h3>
`;
powerpoint.innerHTML = `
            <img src="https://cdn.techjockey.com/blog/wp-content/uploads/2020/11/03140707/free-microsoft-powerpoint-alternatives_feature.jpg" alt="Powerpoint">
            <h3>Powerpoint Note</h3>
`;
access.innerHTML = `
            <img src="https://www.hyperoffice.com/blog/wp-content/uploads/2022/09/maxresdefault.jpg" alt="Access">
            <h3>Access Note</h3>
`;
photoshop.innerHTML = `
            <img src="https://5.imimg.com/data5/SELLER/Default/2022/9/GP/QY/YB/30966494/adobe-photoshop-7-0.png" alt="Photoshop">
            <h3>Photoshop Note</h3>
`;
pagemaker.innerHTML = `
            <img src="https://5.imimg.com/data5/SELLER/Default/2021/2/WZ/PU/ZQ/120773045/adobe-pagemaker-7-0-fastest-e-mail-whatsapp-delivery-500x500.jpg" alt="Pagemaker">
            <h3>Pagemaker Note</h3>
`;
html.innerHTML = `
            <img src="https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2018/11/what-is-html-3.jpg" alt="HTML">
            <h3>HTML Note</h3>
`;
word_old.innerHTML = `
            <img src="https://images.livemint.com/img/2021/07/01/1600x900/MSW_1625167807940_1625167818629.png" alt="Word Old Note">
            <h3>Word Old Note</h3>
`;
excel_old.innerHTML = `
            <img src="https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20-%202021-02-12T211518_067.jpg" alt="Excel Old Note">
            <h3>Excel Old Note</h3>
`;


const note_link = {
    fundamental: "https://drive.google.com/file/d/1FGujMtij03eCXLFm2exRTxt2_TnqTv2Y/",
    win7: "https://drive.google.com/file/d/1aLYlBW9Fek0yF3kQgd_7Me5HKadxMvmK/",
    word: "https://drive.google.com/file/d/1fQSuDADhzggjpqk2p8Zfl6kCtysLmAHi/",
    excel: "https://drive.google.com/file/d/1FIvBDIlI9Gu5FFFU8co4nAJkMFeW17p9/",
    powerpoint: "https://drive.google.com/file/d/1UdOOuR3EFuYn_IrQV1e2phWAz5KkRUup/",
    access: "https://drive.google.com/file/d/1OwGClN3aTCJqZoPYW9jFlslTb6bIiOcK/",
    photoshop: "https://drive.google.com/file/d/1LhI5L20oY_o7ukTYx7fUneSIUhzUCSmG/",
    pagemaker: "https://drive.google.com/file/d/1Ekrs72RFYIMC6caf03yvKUz64ggMeLc4/",
    html: "https://drive.google.com/file/d/1RLoJm8_fBc526CmRSA4ndUf-XyS68-6E/",
    word_old: "https://drive.google.com/file/d/1u5oXkCdtSLytfsNhYWUmW4RYrf04EuLa/",
    excel_old: "https://drive.google.com/file/d/1UXgGQvJpfrHKqBX6RzpMT6uX46prlMQs/"
}

fundamental.addEventListener('click',
    function (e) {
        main.innerHTML = `
        <iframe src="${note_link.fundamental}preview" width="100%" height="100%" allow="autoplay"></iframe>
    `;
    });
win7.addEventListener('click',
    function (e) {
        main.innerHTML = `
        <iframe src="${note_link.win7}preview" width="100%" height="100%" allow="autoplay"></iframe>
    `;
    });
word.addEventListener('click',
    function (e) {
        main.innerHTML = `
        <iframe src="${note_link.word}preview" width="100%" height="100%" allow="autoplay"></iframe>
    `;
    });
excel.addEventListener('click',
    function (e) {
        main.innerHTML = `
        <iframe src="${note_link.excel}preview" width="100%" height="100%" allow="autoplay"></iframe>
    `;
    });
powerpoint.addEventListener('click',
    function (e) {
        main.innerHTML = `
        <iframe src="${note_link.powerpoint}preview" width="100%" height="100%" allow="autoplay"></iframe>
    `;
    });
access.addEventListener('click',
    function (e) {
        main.innerHTML = `
        <iframe src="${note_link.access}preview" width="100%" height="100%" allow="autoplay"></iframe>
    `;
    });
photoshop.addEventListener('click',
    function (e) {
        main.innerHTML = `
        <iframe src="${note_link.photoshop}preview" width="100%" height="100%" allow="autoplay"></iframe>
    `;
    });
pagemaker.addEventListener('click',
    function (e) {
        main.innerHTML = `
        <iframe src="${note_link.pagemaker}preview" width="100%" height="100%" allow="autoplay"></iframe>
    `;
    });
html.addEventListener('click',
    function (e) {
        main.innerHTML = `
        <iframe src="${note_link.html}preview" width="100%" height="100%" allow="autoplay"></iframe>
    `;
    });
word_old.addEventListener('click',
    function (e) {
        main.innerHTML = `
        <iframe src="${note_link.word_old}preview" width="100%" height="100%" allow="autoplay"></iframe>
    `;
    });
excel_old.addEventListener('click',
    function (e) {
        main.innerHTML = `
        <iframe src="${note_link.excel_old}preview" width="100%" height="100%" allow="autoplay"></iframe>
    `;
    });

const return_btn= document.getElementById("return_btn");

return_btn.addEventListener('click',
function(e){
    console.log("Hello");
    window.location.replace("https://kalingacomputer.netlify.app/");
}
)