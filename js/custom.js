// Get Current Year
function getCurrentYear() {
    var d = new Date();
    var year = d.getFullYear();
    document.querySelector("#displayDateYear").innerText = year;
}
getCurrentYear()

//client section owl carousel
$(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    navText: [
        '<i class="fa fa-long-arrow-left" aria-hidden="true"></i>',
        '<i class="fa fa-long-arrow-right" aria-hidden="true"></i>'
    ],
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        1000: {
            items: 2
        }
    }
});

/** google_map js **/

function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(40.712775, -74.005973),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

// contact us box

// simple way, i'm not sure if you can use this for online and stuff
let userName;
let phoneNumber;
let userEmail;
let message;
let MailDraft


Document.getElementById("Submit").onclick = function() {

  userName = Document.getElementbyID("username").value;
  phoneNumber = Document.getElementbyID("number").value;
  email = Document.getElementbyID("email").value;
  message = Document.getElementbyID("message").value;
 
  MailDraft = "Limitless Capital, Mail from client!", userName, phoneNumber,userEmail,"The message from client: "+message;
    
//just a test(which didnt work)
  console.log("MailDraft")
  
}

 document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // prevent the form from submitting normally
    
    // Get form data
    const formData = new FormData(event.target);
    const formObject = {};
    formData.forEach((value, key) => {
      formObject[key] = value;
    });
    
    // Send email using EmailJS or any other email service
    // Replace YOUR_EMAIL_SERVICE_ID, YOUR_TEMPLATE_ID, and YOUR_USER_ID with your actual values
    emailjs.send("YOUR_EMAIL_SERVICE_ID", "YOUR_TEMPLATE_ID", formObject, "YOUR_USER_ID")
      .then(function(response) {
        console.log("Email sent successfully:", response);
        alert("Your message has been sent. Thank you!");
      }, function(error) {
        console.error("Email sending failed:", error);
        alert("Sorry, an error occurred while sending your message. Please try again later.");
      });
  });


