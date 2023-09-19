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

function preloadImages() {
  studentsData.forEach(student => {
    const img = new Image();
    img.src = student.image;
  });
}

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

preloadImages();  // Preload images before starting rotation
updateStudents();
rotateStudents();