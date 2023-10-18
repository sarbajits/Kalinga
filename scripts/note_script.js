const urlParams = new URLSearchParams(window.location.search);
const divId = urlParams.get('id');

// Load images based on div ID
// const folderPath = `notes/${divId}/`; // Adjust the path to match your folder structure
const folderPath = `notes/cpro/`; // Adjust the path to match your folder structure

const imageContainer = document.getElementById('image-container');

fetchImages();

async function fetchImages() {
    const response = await fetch(`fetch_images.php?folder=${folderPath}`); // Adjust the PHP script accordingly
    const imageFiles = await response.json();

    imageFiles.forEach(file => {
        const img = document.createElement('img');
        img.src = `${folderPath}${file}`; // Adjust the path to match your file structure
        img.alt = 'Image';
        imageContainer.appendChild(img);
    });
}