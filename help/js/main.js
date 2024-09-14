(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('bg-primary shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('bg-primary shadow-sm').css('top', '-150px');
        }
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 1000,
        dots: true,
        loop: true,
        nav: true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });
    
})(jQuery);

//here my code
        $(document).ready(function(){
            $('.owl-carousel').owlCarousel({
                items:4
            });
        });
            document.querySelector('#openSearchModal').addEventListener('click', function() {
                var myModal = new bootstrap.Modal(document.querySelector('#searchModal'), {});
                document.querySelector('#searchModal').querySelector('input').value=""
                myModal.show();
                document.querySelector('#searchModal').querySelector('input').classList.remove('is-invalid');
            });
            document.getElementById('searchButton').addEventListener('click', function() {
    var input = document.getElementById('searchInput');
    if (input.value.trim() === '') {
        input.classList.add('is-invalid');
    } else {
        input.classList.remove('is-invalid');
        var keywords = input.value.replace(/\s+/g, '+');
        window.location.href = '../products-directory/index.html?keywords=' + encodeURIComponent(keywords);
    }
});
document.querySelector('#your-form').addEventListener('submit', function(event) {
    // Prevent form from submitting normally
    event.preventDefault();

    // Get form elements
    var nameInput = document.querySelector('#your-name-input');
    var emailInput = document.querySelector('#your-email-input');
    var messageInput = document.querySelector('#your-message-input');
    var phone= document.querySelector('#your-phone-input');
    var subject= document.querySelector('#your-subject-input');


    // Create a new FormData object
    var formData = {
        'entry.2027034230': window.location.href,
        'entry.2005620554': nameInput.value,
        'entry.1045781291': emailInput.value,
        'entry.1166974658': phone.value,
        'entry.839337160': subject.value,
        'entry.1555242023': messageInput.value,
    };

    // Create a new script element
    if( nameInput.value && emailInput.value && phone.value && messageInput.value && navigator.onLine){
    var script = document.createElement('script');
    script.src = 'https://docs.google.com/forms/d/e/1FAIpQLSeMxcHG99jtoa9D87Mmw--LVZmaRXWqrTBYYqYQr4J_HZuXxg/formResponse?callback=callbackFunction&' + 
        Object.keys(formData).map(function(key) {
            return key + '=' + encodeURIComponent(formData[key]);
        }).join('&');
    document.body.appendChild(script);
    loadScript("js/callbackFunction.js")}
});

// Define the callback function
function loadScript(url) {
    var script = document.createElement('script');
    script.src = url;
    document.body.appendChild(script);
}
// Define the callback function
function callbackFunction() {
    console.log('Form submitted successfully!');

    // Empty the inputs
    document.querySelector('#your-name-input').value = '';
    document.querySelector('#your-email-input').value = '';
    document.querySelector('#your-phone-input').value = '';
    document.querySelector('#your-subject-input').value = '';
    document.querySelector('#your-message-input').value = '';
    

    // Display a "Comment submitted" message above the form
    var message=document.querySelector("#submitted")
    message.textContent = 'Message received! We will get back to you shortly.';

    // Scroll to the message
    message.parentElement.parentElement.scrollIntoView({ behavior: 'smooth' });
}
for (let eli of document.querySelectorAll('#subscribe')){eli.addEventListener('click', function() {
    var form= eli.parentElement.parentElement

    var emailInput = form.querySelector('#email-sub');


    // Create a new FormData object
    var formData = {
        'entry.2027034230': window.location.href,
        'entry.1045781291': emailInput.value
    };

    // Create a new script element
    if(emailInput.value && navigator.onLine){
    var script = document.createElement('script');
    script.src = 'https://docs.google.com/forms/d/e/1FAIpQLSdjbza1toUAOjlNCyIR6FukihvOqClsg-1Og8cqfUaKRTIKxg/formResponse?callback=callbackFunctionSub&' + 
        Object.keys(formData).map(function(key) {
            return key + '=' + encodeURIComponent(formData[key]);
        }).join('&');
    document.body.appendChild(script);
    loadScript("js/callbackFunctionSub.js")}
});}

function callbackFunctionSub() {
    console.log('Form submitted successfully!');
    var message=''

    
    for (let eli of document.querySelectorAll('#subscribe')){
    message=eli.parentElement.parentElement.querySelector(".submitted")
    message.textContent = 'Message received! We will get back to you shortly.';
    eli.parentElement.parentElement.querySelector('#email-sub').value = '';
}}