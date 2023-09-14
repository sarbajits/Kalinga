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

const main = document.querySelector(".main")


fundamental.innerHTML = `
            <img src="https://media.licdn.com/dms/image/C5612AQHWUqvihBnRBw/article-cover_image-shrink_720_1280/0/1614051276268?e=2147483647&v=beta&t=Y-sLPH-BNVShok6pRoMlVHHWHMNy1R6c1o1qgbWY2gI" alt="Fundamental">
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




excel.addEventListener('click',
    function (e) {
        main.innerHTML = `
        <iframe src="https://drive.google.com/file/d/1FIvBDIlI9Gu5FFFU8co4nAJkMFeW17p9/preview" width="100%" height="100%" allow="autoplay"></iframe>
    `;
    })
