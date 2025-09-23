document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const thankYouMessage = document.getElementById('thankYouMessage');
    
    // Form validation and submission
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        let isValid = true;
        
        // Validate name
        const nameInput = document.getElementById('name');
        const nameError = document.getElementById('nameError');
        if (nameInput.value.trim() === '') {
            nameError.style.display = 'block';
            isValid = false;
        } else {
            nameError.style.display = 'none';
        }
        
        // Validate email
        const emailInput = document.getElementById('email');
        const emailError = document.getElementById('emailError');
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailInput.value)) {
            emailError.style.display = 'block';
            isValid = false;
        } else {
            emailError.style.display = 'none';
        }
        
        // Validate subject
        const subjectInput = document.getElementById('subject');
        const subjectError = document.getElementById('subjectError');
        if (subjectInput.value.trim() === '') {
            subjectError.style.display = 'block';
            isValid = false;
        } else {
            subjectError.style.display = 'none';
        }
        
        // Validate message
        const messageInput = document.getElementById('message');
        const messageError = document.getElementById('messageError');
        if (messageInput.value.trim() === '') {
            messageError.style.display = 'block';
            isValid = false;
        } else {
            messageError.style.display = 'none';
        }
        
        // If form is valid, show thank you message
        if (isValid) {
            // Hide form and show thank you message
            contactForm.style.opacity = '0';
            contactForm.style.height = '0';
            contactForm.style.overflow = 'hidden';
            
            setTimeout(() => {
                thankYouMessage.classList.add('visible');
            }, 500);
            
            // In a real application, you would send the form data to a server here
            console.log('Form submitted:', {
                name: nameInput.value,
                email: emailInput.value,
                subject: subjectInput.value,
                message: messageInput.value
            });
        }
    });
    
    // Real-time validation
    const inputs = document.querySelectorAll('.form-control');
    inputs.forEach(input => {
        input.addEventListener('input', function() {
            const errorElement = document.getElementById(this.id + 'Error');
            errorElement.style.display = 'none';
        });
    });

    // Initialize map
    initMap();
});

// Google Maps initialization
function initMap() {
    // Map coordinates for San Francisco
    const location = { lat: 37.7749, lng: -122.4194 };
    
    // Create a map centered at the location
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: location,
        styles: [
            {
                "featureType": "all",
                "elementType": "geometry",
                "stylers": [{ "color": "#1e293b" }]
            },
            {
                "featureType": "all",
                "elementType": "labels.text.fill",
                "stylers": [{ "color": "#94a3b8" }]
            },
            {
                "featureType": "all",
                "elementType": "labels.text.stroke",
                "stylers": [{ "color": "#1e293b" }]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry",
                "stylers": [{ "color": "#1e293b" }]
            },
            {
                "featureType": "landscape",
                "elementType": "geometry",
                "stylers": [{ "color": "#0f172a" }]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [{ "color": "#1e293b" }]
            },
            {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [{ "color": "#334155" }]
            },
            {
                "featureType": "transit",
                "elementType": "geometry",
                "stylers": [{ "color": "#1e293b" }]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [{ "color": "#1e3a8a" }]
            }
        ]
    });
    
    // Create a marker at the location
    const marker = new google.maps.Marker({
        position: location,
        map: map,
        title: 'Dev Headquarters',
        icon: {
            url: 'https://maps.google.com/mapfiles/ms/icons/blue-dot.png'
        }
    });
    
    // Create an info window
    const infoWindow = new google.maps.InfoWindow({
        content: `
            <div style="color: #0f172a;">
                <h3 style="margin-bottom: 10px; color: #4facfe;">Dev Headquarters</h3>
                <p>123 Developer Street, Suite 101<br>San Francisco, CA 94103</p>
            </div>
        `
    });
    
    // Open info window when marker is clicked
    marker.addListener('click', () => {
        infoWindow.open(map, marker);
    });
    
    // Add satellite view button functionality
    document.getElementById('satelliteView').addEventListener('click', function() {
        map.setMapTypeId(google.maps.MapTypeId.SATELLITE);
    });
    
    // Add street view button functionality
    document.getElementById('streetView').addEventListener('click', function() {
        const streetViewService = new google.maps.StreetViewService();
        const radius = 50;
        
        streetViewService.getPanorama({
            location: location,
            radius: radius
        }, function(data, status) {
            if (status === 'OK') {
                const nearLocation = data.location.latLng;
                const heading = google.maps.geometry.spherical.computeHeading(
                    nearLocation, location
                );
                
                const panoramaOptions = {
                    position: nearLocation,
                    pov: {
                        heading: heading,
                        pitch: 10
                    }
                };
                
                const panorama = new google.maps.StreetViewPanorama(
                    document.getElementById('map'), panoramaOptions
                );
                
                map.setStreetView(panorama);
            } else {
                alert('Street View data not found for this location.');
            }
        });
    });
}