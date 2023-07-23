// Function to create a new hackathon
function createHackathon(event) {
    event.preventDefault();
    const hackathonForm = document.getElementById('hackathon-form');
    const hackathonName = hackathonForm.elements['hackathon-name'].value;
    const startDate = hackathonForm.elements['start-date'].value;
    const endDate = hackathonForm.elements['end-date'].value;
    const description = hackathonForm.elements['description'].value;
    const thumbnailFile = hackathonForm.elements['thumbnail'].files[0];
  
    // Create a new list item to display the hackathon details
    const li = document.createElement('li');
    li.classList.add('hackathon-item');
    li.innerHTML = `
      <div class="hackathon-thumbnail">
        <img src="${thumbnailFile ? URL.createObjectURL(thumbnailFile) : 'placeholder.png'}" alt="Thumbnail">
      </div>
      <div class="hackathon-details">
        <strong>${hackathonName}</strong>
        <br>
        <strong>Start Date:</strong> ${startDate}
        <br>
        <strong>End Date:</strong> ${endDate}
        <br>
        <strong>Description:</strong> ${description}
      </div>
    `;
  
    // Add the new hackathon to the list
    const hackathonList = document.getElementById('hackathon-list');
    hackathonList.appendChild(li);
  
    // Reset the form fields
    hackathonForm.reset();
  }
  
  // Event listener for the form submission
  const hackathonForm = document.getElementById('hackathon-form');
  hackathonForm.addEventListener('submit', createHackathon);
  