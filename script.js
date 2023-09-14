const excel = document.getElementById('excel')
const main = document.querySelector(".main")
excel.innerHTML = `
<img src="https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20-%202021-02-12T211518_067.jpg" alt="Excel">
<h3>Excel Note</h3>
`;
excel.addEventListener('click',
    function (e) {
        console.log("Excel");
        main.innerHTML = `
<iframe src="https://drive.google.com/file/d/1FIvBDIlI9Gu5FFFU8co4nAJkMFeW17p9/preview" width="100%" height="100%" allow="autoplay"></iframe>
    `;
    })
