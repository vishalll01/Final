const scriptURL = 'https://script.google.com/macros/s/AKfycbx3aOYeQhCNMyj3PLor10pI9TQpGOxF_9Bl6M5nJ07apjoOEfBXhjEz9H0Oco9_RQaCOw/exec';

const form = document.forms['contact-form'];
const modal = document.querySelector('#myModal');
const button = document.querySelector('#Submit');
const canvas = document.querySelector('#confetti');

const jsConfetti = new JSConfetti();

form.addEventListener('submit', e => {
  jsConfetti.addConfetti({
    emojis: ['🌈', '⚡️', '💥', '✨', '💫', '🌸'],
}).then(() => jsConfetti.addConfetti())

  e.preventDefault();
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => {
    if (response.ok) {
      showModal(" <center>Thank You! <br> Your form is submitted successfully.</center> ");
      
      // alert("Thank you! Your form is submitted successfully.");
      form.reset(); // Reset the form after successful submission
    } else {
      throw new Error('Network response was not ok.');
    }
  })
  .catch(error => console.error('Error!', error.message));
});

function showModal(message) {
  const modalContent = document.querySelector('.modal-content');
  const modalContentHTML = document.querySelector('#modal-content-html');
  modalContentHTML.innerHTML = `<h2>${message}</h2>`;
  modal.style.display = "block";

  const closeModal = document.querySelector('.close');
  closeModal.onclick = function() {
    modal.style.display = "none";
  }

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}
