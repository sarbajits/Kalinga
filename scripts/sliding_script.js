const images = ["/images/image1.jpg", "/images/image2.jpg", "/images/image3.jpg"]; // Add more image URLs as needed
const imageElement = document.getElementById('galleryImage');
let currentIndex = 0;

function updateImage() {
  imageElement.src = images[currentIndex];
  currentIndex = (currentIndex + 1) % images.length;
}

setInterval(updateImage, 2000); // Update image every 2 seconds

const studentsData = [
  { image: '/images/toppers/st1.jpg', name: 'Arpita' },
  { image: '/images/toppers/st2.jpg', name: 'Suchismita' },
  { image: '/images/toppers/st3.jpg', name: 'Gayatree' },
  { image: '/images/toppers/st4.jpg', name: 'Biswajit' },
  { image: '/images/toppers/st5.jpg', name: 'Ipsita' },
  { image: '/images/toppers/st6.jpg', name: 'Chinmayee' }
];

const topperSection = document.getElementById('topper-section');

let currentIndex = 0;

function updateStudents() {
  topperSection.innerHTML = '';

  for (let i = currentIndex; i < currentIndex + 3; i++) {
    const student = studentsData[i % studentsData.length];
    const studentDiv = document.createElement('div');
    studentDiv.classList.add('student');

    const image = document.createElement('img');
    image.src = student.image;
    image.alt = student.name;
    image.classList.add('circle-image');

    const nameDiv = document.createElement('div');
    nameDiv.textContent = student.name;
    nameDiv.classList.add('student-name', 'blink');

    studentDiv.appendChild(image);
    studentDiv.appendChild(nameDiv);

    topperSection.appendChild(studentDiv);
  }
}

function rotateStudents() {
  setInterval(() => {
    currentIndex = (currentIndex + 1) % studentsData.length;
    updateStudents();
  }, 2000);
}

updateStudents();
rotateStudents();

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