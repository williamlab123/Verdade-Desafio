
// Global variable to store names
let names = [];

// Function to check if a name is valid
function isNameValid(name) {
  return name.length > 0;
}

// When the page is loaded, open the modal
window.onload = function() {
  const modal = document.getElementById("modal");
  modal.style.display = "block";
  
  // When the user clicks on <span> (x), close the modal
  const closeBtn = document.getElementById("close-modal");
  closeBtn.onclick = function() {
    const nameInput = document.getElementById("name");
    const name = nameInput.value;
    if (!isNameValid(name)) {
      return;
    }
    names.push(name);
    nameInput.value = '';
    const submitBtn = document.getElementById("submit");
    const doneBtn = document.getElementById("done");
    submitBtn.style.display = 'none';
    doneBtn.style.display = 'block';
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      const nameInput = document.getElementById("name");
      const name = nameInput.value;
      if (!isNameValid(name)) {
        return;
      }
      names.push(name);
      nameInput.value = '';
      const submitBtn = document.getElementById("submit");
      const doneBtn = document.getElementById("done");
      submitBtn.style.display = 'none';
      doneBtn.style.display = 'block';
      modal.style.display = "none";
      displayParticipants();
    }
  }

  // Get the user's name
  const nameInput = document.getElementById("name");
  const submitBtn = document.getElementById("submit");
  const doneBtn = document.getElementById("done");

  submitBtn.onclick = function() {
    const name = nameInput.value.trim();
    if (!isNameValid(name)) {
      return;
    }
    names.push(name);
    nameInput.value = '';
  }

  // When the user clicks on the "Pronto" button, display the names in the modal
  doneBtn.onclick = function() {
    const nameInput = document.getElementById("name");
    const name = nameInput.value.trim();
    if (!isNameValid(name) && names.length < 2) {
      alert('Insira ao menos 2 nomes para continuar');
      return;
    }
    if (isNameValid(name)) {
      names.push(name);
      nameInput.value = '';
      const submitBtn = document.getElementById("submit");
      const doneBtn = document.getElementById("done");
      submitBtn.style.display = 'none';
      doneBtn.style.display = 'block';
    }
    displayParticipants();
    const continueBtn = document.getElementById('continue');
    continueBtn.style.display = 'block';
  }

  function displayParticipants() {
    const modalContent = document.querySelector('.modal-content');
    modalContent.innerHTML = `
      <h2>Participantes</h2>
      <div id="participant-list">
        <ul>
          ${names.map(name => `<li>${name}</li>`).join('')}
        </ul>
        <button onclick="redirect()" id="continue"   >Continuar</button>
      </div>
    `};
    const continueBtn = document.getElementById('continue');
    continueBtn.style.display = 'none';
    continueBtn.onclick = function() {
      modal.style.display = 'block';
      const nameInput = document.getElementById('name');
      const submitBtn = document.getElementById('submit');
      const doneBtn = document.getElementById('done');
      submitBtn.style.display = 'block';
      doneBtn.style.display = 'none';
      const participantList = document
      doneBtn.onclick = function() {
        const nameInput = document.getElementById("name");
        const name = nameInput.value.trim();
        if (!isNameValid(name) && names.length < 2) {
          alert('Insira ao menos 2 nomes para continuar');
          return;
        }
        if (isNameValid(name)) {
          names.push(name);
          nameInput.value = '';
          const submitBtn = document.getElementById("submit");
          const doneBtn = document.getElementById("done");
          submitBtn.style.display = 'none';
          doneBtn.style.display = 'none';
          displayParticipants();
          const continueBtn = document.createElement('button');
          continueBtn.textContent = 'Continuar';
          continueBtn.onclick = function() {
            modal.style.display = 'block';
            continueBtn.style.display = 'none';
            const participantList = document.getElementById('participant-list');
            participantList.style.display = 'none';
            submitBtn.style.display = 'block';
            doneBtn.style.display = 'none';
          }
          modalContent.appendChild(continueBtn);
        } else {
          const participantList = document.getElementById('participant-list');
          participantList.style.display = 'none';
          submitBtn.style.display = 'block';
          doneBtn.style.display = 'none';
          modal.style.display = 'block';
        }
      }
    
      function displayParticipants() {
        const modalContent = document.querySelector('.modal-content');
        modalContent.innerHTML = `
          <h2>Participantes</h2>
          <div id="participant-list">
            <ul>
              ${names.map(name => `<li>${name}</li>`).join('')}
            </ul>
          </div>
        `;
      }
    }
    

}

function redirect()
{
  const btnContinuar = document.querySelector("#continue")

  if(btnContinuar.onclick)
  {
    window.location = "index.html"
   
  }
}
