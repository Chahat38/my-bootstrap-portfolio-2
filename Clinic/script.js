 document.addEventListener('DOMContentLoaded', function() {
    // Scroll to booking section when clicking on "Book Appointment" button
    const scrollToBookingBtns = document.querySelectorAll('.scroll-to-booking');
    scrollToBookingBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            document.getElementById('booking').scrollIntoView({ 
                behavior: 'smooth' 
            });
        });
    });

    // Form submission handling
    const appointmentForm = document.getElementById('appointmentForm');
    const confirmationModal = document.getElementById('confirmationModal');
    const confirmationDetails = document.getElementById('confirmationDetails');
    
    appointmentForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Basic form validation
        const requiredFields = appointmentForm.querySelectorAll('[required]');
        let isValid = true;
        
        requiredFields.forEach(field => {
            if (!field.value.trim()) {
                field.style.borderColor = 'var(--danger-color)';
                isValid = false;
            } else {
                field.style.borderColor = '#ddd';
            }
        });
        
        if (!isValid) {
            alert('Please fill out all required fields.');
            return;
        }
        
        // Gather form data
        const formData = new FormData(appointmentForm);
        const appointmentData = {};
        
        formData.forEach((value, key) => {
            appointmentData[key] = value;
        });
        
        // Display confirmation modal
        displayConfirmation(appointmentData);
        
        // Here you would typically send the data to a server
        // For this example, we'll just show the confirmation
        console.log('Appointment data:', appointmentData);
        
        // Reset form
        appointmentForm.reset();
    });
    
    // Display confirmation modal with appointment details
    function displayConfirmation(data) {
        let detailsHtml = `
            <p><strong>Name:</strong> ${data.fullName}</p>
            <p><strong>Service:</strong> ${data.service}</p>
            <p><strong>Date:</strong> ${formatDate(data.date)}</p>
            <p><strong>Time:</strong> ${data.time}</p>
        `;
        
        if (data.doctor) {
            detailsHtml += `<p><strong>Doctor:</strong> ${data.doctor}</p>`;
        }
        
        confirmationDetails.innerHTML = detailsHtml;
        confirmationModal.style.display = 'flex';
    }
    
    // Helper function to format date
    function formatDate(dateString) {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('en-US', options);
    }
    
    // Close modal when clicking X or Close button
    document.querySelector('.close-modal').addEventListener('click', function() {
        confirmationModal.style.display = 'none';
    });
    
    document.querySelector('.close-confirmation').addEventListener('click', function() {
        confirmationModal.style.display = 'none';
    });
    
    // Close modal when clicking outside of it
    window.addEventListener('click', function(e) {
        if (e.target === confirmationModal) {
            confirmationModal.style.display = 'none';
        }
    });
    
    // Set minimum date for appointment (today)
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
    const yyyy = today.getFullYear();
    
    const minDate = yyyy + '-' + mm + '-' + dd;
    document.getElementById('date').min = minDate;
});
