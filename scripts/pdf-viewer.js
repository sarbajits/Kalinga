document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const note = params.get('note');
    if (note) {
        loadPDF(note);
    } else {
        // Handle cases where no note is specified
    }
});


// Get the canvas element.
const canvas = document.getElementById('pdf-canvas');

function loadPDF(pdfName) {

// Get the PDF file URL.
const pdfUrl = `/notes/${pdfName}.pdf`;

pdfjsLib.GlobalWorkerOptions.workerSrc = `/scripts/pdf.worker.js`;

// Load the PDF file using PDF.js.
pdfjsLib.getDocument(pdfUrl).promise.then(function (pdfDoc) {
	// Get the first page of the PDF file.
	pdfDoc
		.getPage(1)
		.then(function (page) {
			const viewport = page.getViewport({ scale: 1 });

			// Set the canvas dimensions to match the PDF page size.
			canvas.width = viewport.width;
			canvas.height = viewport.height;

			// Set the canvas rendering context.
			const ctx = canvas.getContext('2d');

			const renderContext = {
				canvasContext: ctx,
				viewport: viewport,
			};

			// Render the PDF page to the canvas.
			page.render(renderContext);
		})
		.then(function () {
			console.log('Rendering complete');
		});
});

PDFJS.getDocument(pdfUrl)
	.promise.then(function (pdf) {
		// Do something with the PDF document.
	})
	.catch(function (error) {
		console.log('Error loading PDF file:', error);
	});
}