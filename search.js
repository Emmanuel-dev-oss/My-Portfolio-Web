//Search Event listeners
const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("searchInput");
const filterBtns = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".filtered-card");

// Initialize with all cards visible
let currentFilter = "all";
let currentSearchTerm = "";

// == Filter Event Listeners == //
filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        filterBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        
        currentFilter = btn.dataset.tech;
        updateDisplay();
    });
});

// == Search Event Listeners == //
searchBtn.addEventListener('click', performSearch);
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') performSearch();
    // e.preventDefault()
});

searchInput.addEventListener('input', (e) => {
    if (e.target.value === '') {
        currentSearchTerm = '';
        updateDisplay();
    }
});

function performSearch() {
    currentSearchTerm = searchInput.value.trim().toLowerCase();
    updateDisplay();
}

// == Combined Update Function == //
function updateDisplay() {
    let visibleCount = 0;

    projectCards.forEach(card => {
        //Apply filter first
        let shouldShow = true;

        if (currentFilter !== "all") {
            const cardTech = card.dataset.tech;
            shouldShow = cardTech.includes(currentFilter);
        }

        // Apply search if there's a search term
        if (shouldShow && currentSearchTerm) {
            // Search in multiple elements within the card
            const searchableElements = card.querySelectorAll(
                '.tag, .project-info .project-title, .project-info .project-description, .project-details h3, .project-features li'
            );
            
            let cardContainsTerm = false;
            
            searchableElements.forEach(element => {
                if (element.textContent.toLowerCase().includes(currentSearchTerm)) {
                    cardContainsTerm = true;
                }
            });
            
            shouldShow = cardContainsTerm;
        }

        // Update card visibility
        if (shouldShow) {
            card.style.display = "block";
            visibleCount++;
        } else {
            card.style.display = "none";
        }
    })

    // Handle "no results" message
    const existingNoResults = document.querySelector('.no-results');

    // if (searchTerm.length === 0) {
    //     // Show all items when search is empty
    //     projectCards.forEach(card => {
    //         card.style.display = "block";
    //     });
    // }

    // Show "no results" message if nothing found
    if (visibleCount === 0) {
        existingNoResults.classList.add('visible');
    } else {
        // Remove "no results" message if it exists
        existingNoResults.classList.remove('visible');
    }

    // Add event listener to clear filters button
    const clearBtn = document.querySelector('.clear-filters');
    clearBtn.addEventListener('click', clearAllFilters);
}

// == Clear All Filters Function == //
function clearAllFilters() {
    // Reset filter
    filterBtns.forEach(b => b.classList.remove("active"));
    const allBtn = document.querySelector('.filter-btn[data-tech="all"]');
    if (allBtn) allBtn.classList.add("active");
    currentFilter = "all";
    
    // Reset search
    searchInput.value = '';
    currentSearchTerm = '';
    
    // Update display
    updateDisplay();
}

// Optional: Add a clear search button
function addClearSearchButton() {
    const clearSearchInput = document.createElement('button');
    clearSearchInput.id = 'clearSearchBtn';
    clearSearchInput.textContent = 'x';
    clearSearchInput.style.cssText = `
        position: absolute;
        right: 8px;
        top: 21%;
        transform: translateY(-50%);
        background: none;
        font-size: 15px;
        font-weight: bold;
        border: none;
        cursor: pointer;
        color: #002244;
        display: none;
    `;

    searchInput.parentElement.appendChild(clearSearchInput);

    clearSearchInput.addEventListener('click', (e) => {
        searchInput.value = '';
        currentSearchTerm = '';
        clearSearchInput.style.display = 'none';
        e.preventDefault()
        updateDisplay();
    });

    searchInput.addEventListener('input', (e) => {
        clearSearchInput.style.display = e.target.value.length > 0  ? 'block' : 'none';
    });
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    // Initialize with all cards visible
    updateDisplay();
    
    // Add clear search button
    addClearSearchButton();
});