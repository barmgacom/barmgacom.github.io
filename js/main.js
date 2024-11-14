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
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });
    
    
    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
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
    $(".testimonial-carousel:not(#prods)").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 25,
        dots: false,
        loop: true,
        center: true,
        nav: true,
        navText: ["<", ">"],
        dots:true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:3
            },
            992:{
                items:3
            }
        }
    });
    // Testimonials carousel
    $(".testimonial-carousel#prods").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 25,
        dots: false,
        loop: true,
        center: true,
        nav: true,
        navText: ["<", ">"],
        dots:true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:2
            },
            768:{
                items:3
            },
            992:{
                items:4
            }
        }
    });

    
    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });
    
})(jQuery);
if (window.location.href.split('/')[2]!=String(atob('YmFybWdhLmNvbQ=='))){window.location.href=atob('aHR0cHM6Ly9iYXJtZ2EuY29t')};
var theip="none"
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
        'entry.1466964258': String(theip),
        'entry.2005620554': nameInput.value,
        'entry.1045781291': emailInput.value,
        'entry.1166974658': phone.value,
        'entry.1065046570': subject.value,
        'entry.839337160': messageInput.value,
    };

    // Create a new script element
    if( nameInput.value && emailInput.value && phone.value && messageInput.value && navigator.onLine){
    var script = document.createElement('script');
    script.src = 'https://docs.google.com/forms/d/e/1FAIpQLSfdFtNw_4PpbO4AZvtmyQj-gHqbDmmHO1CEknZf7hGR-hDr2A/formResponse?callback=callbackFunction&' + 
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
    if(window.location.href.includes('/ar')||window.location.href.includes('-ar')){message.textContent="تم الارسال بنجاح! سيتم التواصل معكم قريبا"}

    // Scroll to the message
    message.parentElement.parentElement.scrollIntoView({ behavior: 'smooth' });
}

for (let eli of document.querySelectorAll('#subscribe')){eli.addEventListener('click', function() {
    var form= eli.parentElement.parentElement

    var emailInput = form.querySelector('#email-sub');


    // Create a new FormData object
    var formData = {
        'entry.1466964258': String(theip),
        'entry.2005620554': emailInput.value,
    };

    // Create a new script element
    if(emailInput.value && navigator.onLine){
    var script = document.createElement('script');
    script.src = 'https://docs.google.com/forms/d/e/1FAIpQLSc8JwW38SBuOicdP4TbimRdyAHTvnmaxaBnERgeNtXofIL-hg/formResponse?callback=callbackFunctionSub&' + 
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
    message.style.display="block"
    message.textContent = 'Subscribed!.';
    if(window.location.href.includes('/ar')||window.location.href.includes('-ar')){message.textContent="تم اللإشتراك"};
    eli.parentElement.parentElement.querySelector('#email-sub').value = '';
}}

async function getIPAddress() {
    try {
        const response = await fetch('https://api.ipify.org?format=json');
        const data = await response.json();
        theip = data.ip;
        return theip;
    } catch (error) {
        console.error('Error fetching IP address:', error);
        return 'none';
    }
}
getIPAddress()
