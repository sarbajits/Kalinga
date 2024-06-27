document.addEventListener('DOMContentLoaded', function () {
    const teacherSelectionModal = document.getElementById('teacher-selection-modal');
    const closeModalButton = document.getElementById('close-modal');
    const searchBar = document.getElementById('search-bar');
    const searchInput = document.getElementById('search-input');
    const notesList = document.getElementById('notes-list');
    const teacherOptions = document.getElementById('teacher-options');
    const teacherFilter = document.getElementById('teacher-filter');

    let notesData = [];

    const apiUrl = 'https://654ca07977200d6ba8591dfa.mockapi.io/notes'; // Example API

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
                window.location.href = `pdf-view.html?pdf=${encodeURIComponent(note.pdf_url)}`;
            });

            notesList.appendChild(noteCard);

            renderPDFPreview(note.pdf_url, noteCard.querySelector('.pdf-preview'));
        });
    };

    const renderPDFPreview = (pdfUrl, canvas) => {
        const loadingTask = pdfjsLib.getDocument(pdfUrl);
        loadingTask.promise.then(pdf => {
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

    const filterNotes = (teacher) => {
        return teacher === 'all' ? notesData : notesData.filter(note => note.teacher === teacher);
    };

    const searchNotes = (query) => {
        return notesData.filter(note => 
            note.title.toLowerCase().includes(query.toLowerCase()) ||
            note.teacher.toLowerCase().includes(query.toLowerCase())
        );
    };

    closeModalButton.addEventListener('click', () => {
        teacherSelectionModal.style.display = 'none';
        const selectedTeacher = teacherOptions.value;
        teacherFilter.value = selectedTeacher;
        const filteredNotes = filterNotes(selectedTeacher);
        displayNotes(filteredNotes);
        searchBar.style.display = 'block';
    });

    teacherFilter.addEventListener('change', () => {
        const selectedTeacher = teacherFilter.value;
        const filteredNotes = filterNotes(selectedTeacher);
        displayNotes(filteredNotes);
    });

    searchInput.addEventListener('input', () => {
        const query = searchInput.value;
        const searchedNotes = searchNotes(query);
        displayNotes(searchedNotes);
    });

    fetchNotes();
    teacherSelectionModal.style.display = 'block';
});
