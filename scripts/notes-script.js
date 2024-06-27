document.addEventListener('DOMContentLoaded', function () {
    const teacherSelectionModal = document.getElementById('teacher-selection-modal');
    const closeModalButton = document.getElementById('close-modal');
    const searchBar = document.getElementById('search-bar');
    const searchInput = document.getElementById('search-input');
    const notesList = document.getElementById('notes-list');
    const teacherOptions = document.getElementById('teacher-options');
    const teacherFilter = document.getElementById('teacher-filter');

    let notesData = [];

    // Mock API URL (replace with your actual API URL)
    const apiUrl = 'https://654ca07977200d6ba8591dfa.mockapi.io/notes'; // Example API

    // Function to fetch notes data from the API
    const fetchNotes = async () => {
        try {
            const response = await fetch(apiUrl);
            const data = await response.json();
            notesData = data.map(note => ({
                ...note,
                teacher: note.teacher || 'Unknown',
                upload_date: note.upload_date || new Date().toISOString()
            }));
            displayNotes(notesData);
        } catch (error) {
            console.error('Error fetching notes:', error);
            notesList.innerHTML = '<p>Failed to load notes. Please try again later.</p>';
        }
    };

    // Function to display notes on the page
    const displayNotes = (notes) => {
        notesList.innerHTML = '';
        notes.forEach(note => {
            const noteCard = document.createElement('div');
            noteCard.className = 'note-card';

            noteCard.innerHTML = `
                <h2>${note.title}</h2>
                <canvas class="pdf-preview"></canvas>
            `;

            noteCard.addEventListener('click', () => {
                window.open("/view-pdf.html?pdf=${encodeURIComponent(note.pdf_url)}", '_self');
            });

            notesList.appendChild(noteCard);

            // Render PDF preview using PDF.js
            renderPDFPreview(note.pdf_url, noteCard.querySelector('.pdf-preview'));
        });
    };

    // Function to render PDF preview using PDF.js
    const renderPDFPreview = (pdfUrl, canvas) => {
        const loadingTask = pdfjsLib.getDocument(pdfUrl);
        loadingTask.promise.then(pdf => {
            // Fetch the first page
            pdf.getPage(1).then(page => {
                const viewport = page.getViewport({ scale: 0.2 });
                const context = canvas.getContext('2d');
                canvas.height = viewport.height;
                canvas.width = viewport.width;

                const renderContext = {
                    canvasContext: context,
                    viewport: viewport
                };
                page.render(renderContext);
            });
        }).catch(error => {
            console.error('Error rendering PDF preview:', error);
        });
    };

    // Function to filter notes by teacher
    const filterNotes = (teacher) => {
        return teacher === 'all' ? notesData : notesData.filter(note => note.teacher === teacher);
    };

    // Function to search notes by title and teacher
    const searchNotes = (query) => {
        return notesData.filter(note => 
            note.title.toLowerCase().includes(query.toLowerCase()) ||
            note.teacher.toLowerCase().includes(query.toLowerCase())
        );
    };

    // Event listener for closing modal and showing notes
    closeModalButton.addEventListener('click', () => {
        teacherSelectionModal.style.display = 'none';
        const selectedTeacher = teacherOptions.value;
        teacherFilter.value = selectedTeacher;
        const filteredNotes = filterNotes(selectedTeacher);
        displayNotes(filteredNotes);
        searchBar.style.display = 'block';
    });

    // Event listener for changing teacher filter
    teacherFilter.addEventListener('change', () => {
        const selectedTeacher = teacherFilter.value;
        const filteredNotes = filterNotes(selectedTeacher);
        displayNotes(filteredNotes);
    });

    // Event listener for searching notes
    searchInput.addEventListener('input', () => {
        const query = searchInput.value;
        const searchedNotes = searchNotes(query);
        displayNotes(searchedNotes);
    });

    // Fetch notes on page load and open modal
    fetchNotes();
    teacherSelectionModal.style.display = 'block';
});
