// Search Event listeners
const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("searchInput");

searchBtn.addEventListener('click', performSearch);
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') performSearch();
});

function performSearch() {
    const searchTerm = searchInput.value.trim().toLowerCase();
    displayItems(searchTerm);
}

function displayItems(searchTerm) {
    const resultsGrid = document.getElementById("projectContainer");
    const projectCards = document.querySelectorAll(".project-card");
    let foundCount = 0;
    
    if (searchTerm.length === 0) {
        // Show all items when search is empty
        projectCards.forEach(card => {
            card.style.display = "block";
        });
        // Remove any "no results" message
        const noResults = document.querySelector('.no-results');
        if (noResults) noResults.remove();
        return;
    }
    
    projectCards.forEach(card => {
        // Search in multiple elements within each card
        const searchableElements = card.querySelectorAll(
            '.tag, .project-info .project-title, .project-info .project-description, .project-details h3, .project-features li'
        );
        
        let cardContainsTerm = false;
        
        // Check each searchable element for the search term
        searchableElements.forEach(element => {
            if (element.textContent.toLowerCase().includes(searchTerm)) {
                cardContainsTerm = true;
            }
        });
        
        // Show or hide card based on search result
        if (cardContainsTerm) {
            card.style.display = "block";
            foundCount++;
        } else {
            card.style.display = "none";
        }
    });
    
    // Show "no results" message if nothing found
    const existingNoResults = document.querySelector('.no-results');
    if (foundCount === 0) {
        if (!existingNoResults) {
            const noResultsDiv = document.createElement('div');
            noResultsDiv.className = 'no-results';
            noResultsDiv.innerHTML = `
                <h3>No items found</h3>
                <p>Try adjusting your search or filters</p>
            `;
            resultsGrid.appendChild(noResultsDiv);
        }
    } else {
        // Remove "no results" message if it exists
        if (existingNoResults) {
            existingNoResults.remove();
        }
    }
    
    // Optional: Update results count
    // resultsCount.textContent = `${foundCount} items found`;
}

// Optional: Add clear search functionality
const clearSearchBtn = document.getElementById("clearSearchBtn"); // Add this button to your HTML
if (clearSearchBtn) {
    clearSearchBtn.addEventListener('click', () => {
        searchInput.value = '';
        displayItems('');
    });
}