const scrollToTopBtn = document.getElementById('scroll-to-top');

window.onscroll = function() {
  const scrollTop = (document.body.scrollTop || document.documentElement.scrollTop);

  if (scrollTop > 100) {
    scrollToTopBtn.style.display = 'block';
  } else {
    scrollToTopBtn.style.display = 'none';
  }
};

scrollToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});


// form submition
function submitForm(event) {
    event.preventDefault();

    // Assuming the form submission is successful
    // You can add your own form submission logic here if needed

    // Show the success message
    var successMessage = document.getElementById("success-message");
    successMessage.innerText = "Sent successfully! \nWe will get back to you in 24 hours.";
    successMessage.style.display = "flex";

    // Set a timeout to hide the success message after 5 seconds
    setTimeout(function () {
        successMessage.style.display = "none";
    }, 5000);

    // Reset the form fields (optional)
    event.target.reset();

    return false;
}


// refresh page
function refreshPage() {
    location.reload();
}
hello()

// video
const elem = document.querySelector("video");

elem.audioTracks.onaddtrack = (event) => {
  trackEditor.addTrack(event.track);
};

elem.audioTracks.onremovetrack = (event) => {
  trackEditor.removeTrack(event.track);
};
