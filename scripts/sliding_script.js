// const studentsData = [
//   { image: '/images/toppers/st1.jpg', name: 'Sadhu' },
//   { image: '/images/toppers/st2.jpg', name: 'Ashis' },
//   { image: '/images/toppers/st3.jpg', name: 'Rashmiranjan' },
//   { image: '/images/toppers/st4.jpg', name: 'Kanhu' },
//   { image: '/images/toppers/st5.jpg', name: 'D M' },
//   { image: '/images/toppers/st6.jpg', name: 'Soumya' }
// ];

// const topperSection = document.getElementById('topper-section');

// let currentIndex = 0;

// function preloadImages() {
//   studentsData.forEach(student => {
//     const img = new Image();
//     img.src = student.image;
//   });
// }

// function updateStudents() {
//   topperSection.innerHTML = '';

//   for (let i = currentIndex; i < currentIndex + 3; i++) {
//     const student = studentsData[i % studentsData.length];
//     const studentDiv = document.createElement('div');
//     studentDiv.classList.add('student');

//     const image = document.createElement('img');
//     image.src = student.image;
//     image.alt = student.name;
//     image.classList.add('circle-image');

//     const nameDiv = document.createElement('div');
//     nameDiv.textContent = student.name;
//     nameDiv.classList.add('student-name', 'blink');

//     studentDiv.appendChild(image);
//     studentDiv.appendChild(nameDiv);

//     topperSection.appendChild(studentDiv);
//   }
// }

// function rotateStudents() {
//   setInterval(() => {
//     currentIndex = (currentIndex + 1) % studentsData.length;
//     updateStudents();
//   }, 2000);
// }

// preloadImages();  // Preload images before starting rotation
// updateStudents();
// rotateStudents();

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
  setTimeout(showSlides, 2000);
}

const imageUrls = [
  '/images/std/students (14).jpeg',
  '/images/std/students (2).jpeg',
  '/images/std/students (3).jpeg',
  '/images/std/students (4).jpeg',
  '/images/std/students (5).jpeg',
  '/images/std/students (6).jpeg',
  '/images/std/students (7).jpeg',
  '/images/std/students (8).jpeg',
  '/images/std/students (9).jpeg',
  '/images/std/students (10).jpeg',
  '/images/std/students (11).jpeg',
  '/images/std/students (12).jpeg',
  '/images/std/students (13).jpeg',
  '/images/std/students (1).jpeg',
  '/images/std/students (15).jpeg',
];

function showFloatingDiv() {
  const floatingDiv = document.getElementById('floatingDiv');
  const imageGallery = document.getElementById('imageGallery');

  // Create img elements for each image URL
  imageUrls.forEach(imageUrl => {
    const imgElement = document.createElement('img');
    imgElement.src = imageUrl;
    imgElement.alt = 'Gallery Image';
    imageGallery.appendChild(imgElement);
  });

  floatingDiv.style.display = 'block';
}

function closeFloatingDiv() {
  const floatingDiv = document.getElementById('floatingDiv');
  const imageGallery = document.getElementById('imageGallery');
  imageGallery.innerHTML = ''; // Clear the image gallery content
  floatingDiv.style.display = 'none';
}

// // Show the floating div initially
// document.addEventListener('DOMContentLoaded', showFloatingDiv);

// const toppers = document.querySelectorAll('.card');
// let index = 0;

// function displayNextTopper() {
//   toppers.forEach((topper) => {
//     topper.style.display = 'none';
//   });

//   index = (index + 1) % toppers.length;
//   toppers[index].style.display = 'flex';
// }

// function rotateToppers() {
//   displayNextTopper();
//   setTimeout(rotateToppers, 2000); // Rotate every 2 seconds
// }

// rotateToppers(); // Start the rotation

function displayToppers(toppers) {
  const toppersContainer = document.querySelector('.topperCarousel');
  let currentIndex = 0;

  function showTopper(index) {
    const topper = toppers[index];

    const card = document.createElement('div');
    card.classList.add('card');

    const img = document.createElement('img');
    img.src = topper.photoUrl;
    img.alt = topper.name;
    card.appendChild(img);

    const infoDiv = document.createElement('div');
    infoDiv.classList.add('info');

    const details = ['name', 'exam', 'batch', 'mark'];
    details.forEach(detail => {
      const p = document.createElement('p');
      p.textContent = `${detail.charAt(0).toUpperCase() + detail.slice(1)}: ${topper[detail]}`;
      infoDiv.appendChild(p);
    });

    card.appendChild(infoDiv);

    toppersContainer.innerHTML = '';
    toppersContainer.appendChild(card);

    // Change to the next topper after 2 seconds
    setTimeout(() => {
      currentIndex = (currentIndex + 1) % toppers.length;
      showTopper(currentIndex);
    }, 2000);
  }

  // Show the first topper
  showTopper(currentIndex);
}

// Fetch data from your API
fetch('https://6549fbdce182221f8d52442e.mockapi.io/toppers')
  .then(response => response.json())
  .then(data => {
    const toppers = data; // Assuming API response is an array of toppers
    displayToppers(toppers);
  })
  .catch(error => {
    console.log('Error fetching data:', error);
  });