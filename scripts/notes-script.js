// notes-scripts.js
document.addEventListener('DOMContentLoaded', function() {
    const notesList = document.getElementById('notes-list');
    const sortOptions = document.getElementById('sort-options');
    const filterOptions = document.getElementById('filter-options');
    
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
                teacher: note.teacher || 'N/A',
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
                <p><strong>Teacher:</strong> ${note.teacher}</p>
                <p><strong>Upload Date:</strong> ${new Date(note.upload_date).toLocaleString()}</p>
                <a href="view-pdf.html?pdf=${encodeURIComponent(note.pdf_url)}" target="_blank">View PDF</a>
            `;
            notesList.appendChild(noteCard);
        });
    };

    // Function to sort notes
    const sortNotes = (notes, criteria) => {
        return notes.sort((a, b) => {
            if (criteria === 'date-asc') {
                return new Date(a.upload_date) - new Date(b.upload_date);
            } else if (criteria === 'date-desc') {
                return new Date(b.upload_date) - new Date(a.upload_date);
            }
        });
    };

    // Function to filter notes by teacher
    const filterNotes = (notes, teacher) => {
        return teacher === 'all' ? notes : notes.filter(note => note.teacher === teacher);
    };

    // Event listeners for sorting and filtering
    sortOptions.addEventListener('change', () => {
        const sortedNotes = sortNotes([...notesData], sortOptions.value);
        displayNotes(filterNotes(sortedNotes, filterOptions.value));
    });

    filterOptions.addEventListener('change', () => {
        const filteredNotes = filterNotes(notesData, filterOptions.value);
        displayNotes(sortNotes(filteredNotes, sortOptions.value));
    });

    // Fetch and display notes on page load
    fetchNotes();
});
