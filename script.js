// Pre-approved list of seniors' names
const approvedNames = [
    'Abhinav Mohanty', 'Aditya Khara', 'Aditya Pujari', 'Aniket Pradhan', 'Anurag Patnaik',
    'Atulya Kumar Batra', 'A. Tarun', 'Binit Kumar Bhuyan', 'Bhargav Yoroda', 'Chetan Biswal',
    'Debansh Partnaik', 'Evanjali Bagh', 'G. Priyanka Rao', 'G. Smruti', 'G. Vara Prasad',
    'Haimanti Haldar', 'Hosiyannah Bagh', 'Humera Fatima', 'Joshua Prayal Khorar',
    'Kaushik Kumar Bissoi', 'Living Stone Khosla', 'Manas Ranjan Khillo', 'Mousumi Kirsani',
    'Neha Padhi', 'Nishant Kumar', 'Om Shankar Jena', 'Om Subham Jena', 'Parthiv Panda',
    'Pawan Kumar Behra', 'Pragyan Parmita Nayak', 'Pratik Khosla', 'Pratyush Kumar Dalai',
    'Priyaranjan Tarini', 'Pruthiv Raj Parida', 'Rakesh Kumar Nag', 'Rashmi Rekha Partnaik',
    'Rutuvee Patra', 'Sameer Patthaik', 'Shaik Nilofer Begum', 'Shrusti Sanjeevani',
    'Shruti Patro', 'SK Bashiruddin', 'Smruti Rekha Sethy', 'Sneha Sharma', 'Solomon Dai',
    'Sonali Bagh', 'Sunemia Khora', 'U Sravan Kumar'
];

// Function to create falling objects (balloons or flowers)
function createFallingObject() {
    const objectTypes = ['balloon', 'flower']; // Object types to fall
    const objectType = objectTypes[Math.floor(Math.random() * objectTypes.length)];
    
    const object = document.createElement('div');
    object.classList.add('falling-object', objectType);

    // Randomize horizontal position and size
    const position = Math.random() * window.innerWidth;
    const size = Math.random() * 50 + 20; // Between 20px and 70px
    object.style.left = `${position}px`;
    object.style.width = `${size}px`;
    object.style.height = `${size}px`;

    // Add the falling object to the page
    document.getElementById('animations').appendChild(object);

    // Remove object after animation ends (cleanup)
    setTimeout(() => {
        object.remove();
    }, 7000); // Same duration as the animation
}

// Create falling objects every 1 second
setInterval(createFallingObject, 1000);

// Handle the RSVP form submission
document.getElementById('invitation-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;

    // Check if the name is on the approved list
    if (approvedNames.includes(name)) {
        // Show the "You Are Invited!",'From your beloved juniors' modal
        const modal = document.getElementById('invited-modal');
        modal.style.display = 'flex';

        // Close the modal when the user clicks on the close button
        document.getElementById('close-btn').addEventListener('click', function() {
            modal.style.display = 'none';
        });
    } else {
        alert('Sorry, you are not on the approved list for this event.');
    }

    // Reset the form after submission
    document.getElementById('invitation-form').reset();
});
