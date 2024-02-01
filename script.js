/*--------- Gallery display ---------*/

// Get all elements with class 'photo'
var photos = document.querySelectorAll('.photo');

// Loop through each 'photo' element
photos.forEach((photo, index) => {
    var img = photo.querySelector('img');
    var description = photo.querySelector('.description');

    img.alt = caption[index];
    caption.textContent = caption[index];
    description.textContent = description[index];
});

/*--------- Information box ---------*/

// Function to open/show the information box
function openInfoBox(heading, text) {
  var infoHeading = document.getElementById('info-heading');
  var infoText = document.getElementById('info-text');
  var infoBox = document.getElementById('info-box');

  infoHeading.innerText = heading;
  infoText.innerText = text;
  infoBox.style.display = 'block';
}

// Function to close the information box
function closeInfoBox() {
  var infoBox = document.getElementById('info-box');
  infoBox.style.display = 'none';
}

// Loop through each 'photo' element
photos.forEach((photo) => {
  var description = photo.querySelector('.description');
  var caption = photo.querySelector('.caption').innerText;
  var descriptionText = description.innerText;

  // Add event listener to description
  description.addEventListener('click', () => {
    openInfoBox(caption, descriptionText);
  });
});

/*--------- User Interface Element - Contact Form ---------*/

var messageTitleSelect = document.getElementById('message_title');
var petListingsInput = document.getElementById('pet_listings_input');
var rehomeInput = document.getElementById('rehome_input');
var concernsInput = document.getElementById('concerns_input');
var otherInput = document.getElementById('other_input');

messageTitleSelect.addEventListener('change', function () {
    var selectedOption = messageTitleSelect.value;

    // Hide all input boxes
    petListingsInput.classList.add('hidden');
    rehomeInput.classList.add('hidden');
    concernsInput.classList.add('hidden');
    otherInput.classList.add('hidden');

    // Show the selected input box
    if (selectedOption === 'pet_listings') {
        petListingsInput.classList.remove('hidden');
    } else if (selectedOption === 'rehome') {
        rehomeInput.classList.remove('hidden');
    } else if (selectedOption === 'concerns') {
        concernsInput.classList.remove('hidden');
    } else if (selectedOption === 'other') {
        otherInput.classList.remove('hidden');
    }
});

/*--------- Lightbox ---------*/

$(document).ready(function () {
  // Open lightbox on image click
  $('.lightbox-toggle img').click(function () {
      $('.backdrop').animate({ 'opacity': '.50' }, 300, 'linear').css('display', 'block');
      $('.box').fadeIn();

      // Check if lightbox has an image
      if ($('.box').contents('img')) {
          $('.box').contents().remove('img'); // If true, clear image
      }

      // Get image source
      var imgSrc = $(this).attr('src');

      // Create a new image element and append it to the lightbox
      var img = $('<img>').attr('src', imgSrc);
      $('.box').append(img);
  });

  /* Click to close lightbox */
  $('.close, .backdrop').click(function () {
      $('.backdrop').animate({ 'opacity': '0' }, 300, 'linear', function () {
          $('.backdrop').css('display', 'none');
      });
      $('.box').fadeOut();
  });
});