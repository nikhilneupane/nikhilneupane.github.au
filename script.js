// Function to toggle navigation menu
function toggleNav() {
    var nav = document.getElementById("mainNav");
    nav.classList.toggle("show-nav");
}

// Function to handle menu icon click
document.getElementById("menuIcon").addEventListener("click", function() {
    toggleNav();
});

// Function to close navigation menu when a menu item is clicked (for smoother UX)
var navItems = document.querySelectorAll("#mainNav ul li a");
navItems.forEach(function(item) {
    item.addEventListener("click", function() {
        // Check if the navigation menu is open
        var nav = document.getElementById("mainNav");
        if (nav.classList.contains("show-nav")) {
            toggleNav(); // Close the navigation menu
        }
    });
});

// JavaScript for form validation
document.getElementById("contactForm").addEventListener("submit", function(event) {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var errorMessage = "";

    if (name.trim() === "") {
        errorMessage += "Please enter your name.<br>";
    }

    if (email.trim() === "") {
        errorMessage += "Please enter your email address.<br>";
    } else if (!isValidEmail(email)) {
        errorMessage += "Please enter a valid email address.<br>";
    }

    if (message.trim() === "") {
        errorMessage += "Please enter your message.<br>";
    }

    if (errorMessage !== "") {
        document.getElementById("errorMessage").innerHTML = errorMessage;
        event.preventDefault();
    }
});

function isValidEmail(email) {
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

// Function to mark active navigation item based on current page URL
function setActiveNavItem() {
    var path = window.location.pathname;
    var page = path.split("/").pop();

    // Remove 'active' class from all navigation items
    var navItems = document.querySelectorAll("#mainNav ul li a");
    navItems.forEach(function(item) {
        item.classList.remove("active");
    });

    // Add 'active' class to the corresponding navigation item
    var activeNavItem = document.getElementById(page.split('.')[0]); // remove file extension
    if (activeNavItem) {
        activeNavItem.classList.add("active");
    }
}

// Call setActiveNavItem function when the page is loaded
document.addEventListener("DOMContentLoaded", function() {
    setActiveNavItem();
});

document.querySelectorAll('.read-more').forEach(button => {
    button.addEventListener('click', function() {
        const additionalContent = this.parentElement.querySelector('.additional-content');
        if (additionalContent) {
            additionalContent.style.display = additionalContent.style.display === 'none' ? 'block' : 'none';
        }
    });
});
