// == Global Variables == //
const filterBtns = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".filtered-card");
const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("searchInput");

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
});

// Optional: Clear search when input is cleared
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
    const resultsGrid = document.getElementById("projectContainer");
    let visibleCount = 0;
    
    projectCards.forEach(card => {
        // Apply filter first
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
    });
    
    // Handle "no results" message
    const existingNoResults = document.querySelector('.no-results');
    
    if (visibleCount === 0) {
        if (!existingNoResults && resultsGrid) {
            const noResultsDiv = document.createElement('div');
            noResultsDiv.className = 'no-results';
            
            let message = 'No items found';
            if (currentSearchTerm && currentFilter !== 'all') {
                message = `No items found for "${currentSearchTerm}" in ${currentFilter} category`;
            } else if (currentSearchTerm) {
                message = `No items found for "${currentSearchTerm}"`;
            } else if (currentFilter !== 'all') {
                message = `No items found in ${currentFilter} category`;
            }
            
            noResultsDiv.innerHTML = `
                <h3>${message}</h3>
                <p>Try adjusting your search or filters</p>
                <button class="clear-filters">Clear all filters</button>
            `;
            
            resultsGrid.appendChild(noResultsDiv);
            
            // Add event listener to clear filters button
            const clearBtn = noResultsDiv.querySelector('.clear-filters');
            clearBtn.addEventListener('click', clearAllFilters);
        }
    } else {
        if (existingNoResults) {
            existingNoResults.remove();
        }
    }
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
    const clearBtn = document.createElement('button');
    clearBtn.id = 'clearSearchBtn';
    clearBtn.textContent = 'x';
    clearBtn.style.cssText = `
        position: absolute;
        right: 10px;
        top: 50%;
        transform: translateY(-50%);
        background: none;
        border: none;
        font-size: 20px;
        cursor: pointer;
        display: none;
    `;
    
    searchInput.style.paddingRight = '30px';
    searchInput.parentElement.style.position = 'relative';
    searchInput.parentElement.appendChild(clearBtn);
    
    clearBtn.addEventListener('click', () => {
        searchInput.value = '';
        currentSearchTerm = '';
        clearBtn.style.display = 'none';
        updateDisplay();
    });
    
    searchInput.addEventListener('input', () => {
        clearBtn.style.display = searchInput.value ? 'block' : 'none';
    });
}

// Optional: Debounced search for better performance
function addDebouncedSearch() {
    let searchTimeout;
    searchInput.addEventListener('input', (e) => {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            currentSearchTerm = e.target.value.trim().toLowerCase();
            updateDisplay();
        }, 300); // 300ms delay
    });
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    // Initialize with all cards visible
    updateDisplay();
    
    // Optional: Add clear search button
    addClearSearchButton();
    
    // Optional: Add debounced search
    // addDebouncedSearch();
});

// Optional: Update results count function
function updateResultsCount(count) {
    const resultsCount = document.getElementById("resultsCount");
    if (resultsCount) {
        resultsCount.textContent = `${count} ${count === 1 ? 'item' : 'items'} found`;
    }
}