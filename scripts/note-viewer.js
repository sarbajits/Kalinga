window.addEventListener('load', function () {
    setTimeout(function () {
        document.querySelector('.loading-screen').style.display = 'none';
    }, 100);
});


const pdfjsLib = window['pdfjs-dist/build/pdf'];
pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';

function loadPDF(pdfName) {
    const pdfUrl = `/notes/${pdfName}.pdf`; // Replace with the path to your PDF files
    const loadingTask = pdfjsLib.getDocument(pdfUrl);

    loadingTask.promise.then((pdf) => {
        const allPagesContainer = document.getElementById('allPagesContainer');

        for (let i = 1; i <= pdf.numPages; i++) {
            pdf.getPage(i).then((page) => {
                const scale = 1.5; // Adjust scale as needed
                const viewport = page.getViewport({ scale });

                const div = document.createElement('div');
                div.className = 'pdfPage';

                const canvas = document.createElement('canvas');
                div.appendChild(canvas);
                allPagesContainer.appendChild(div);

                const context = canvas.getContext('2d');
                canvas.height = viewport.height;
                canvas.width = viewport.width;

                const renderContext = {
                    canvasContext: context,
                    viewport: viewport
                };

                page.render(renderContext);
            });
        }
    }).catch((error) => {
        console.error('Error loading PDF:', error);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const note = params.get('note');
    if (note) {
        loadPDF(note);
    } else {
        // Handle cases where no note is specified
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const note = params.get('note');

    if (note) {
        loadPDF(note);
        addDownloadButtonListener(); // Call function to add download button event listener
    } else {
        // Handle cases where no note is specified
    }
});

function addDownloadButtonListener() {
    const downloadButton = document.getElementById('downloadButton');

    downloadButton.addEventListener('click', () => {
        const params = new URLSearchParams(window.location.search);
        const note = params.get('note');

        // Check if a note is present
        if (note) {
            const pdfUrl = `/notes/${note}.pdf`; // Get the URL of the current PDF

            // Create an anchor element to trigger the download
            const link = document.createElement('a');
            link.href = pdfUrl;
            link.download = note; // Set the default download file name
            link.click();
        }
    });
}