$(document).ready(function() {
    let isEnglish = true;

    // Dark Mode Toggle
    $("#dark-mode-toggle").click(function() {
        $("body").toggleClass("dark-mode");
    });

    // Language Toggle
    $("#language-toggle").click(function() {
        if (isEnglish) {
            // Switch to German
            $("#title").text("Entdecke Europa");
            $("#subtitle").text("Finden Sie die besten Reisepakete für Ihren Traumurlaub in Europa!");
            $("#language-toggle").text("English");
            $(".discount-banner h2").text("🔥 Begrenztes Angebot: 10% Rabatt auf alle Reisen! Jetzt buchen! 🔥");
            
            $("#reviews h2").text("🌟 Kundenbewertungen");
            $("#contact h2").text("📩 Kontaktieren Sie uns");
            $("form input[placeholder='Your Name']").attr("placeholder", "Ihr Name");
            $("form input[placeholder='Your Email']").attr("placeholder", "Ihre E-Mail");
            $("form textarea[placeholder='Your Message']").attr("placeholder", "Ihre Nachricht");
            $("form button").text("Nachricht senden");
            
            isEnglish = false;
        } else {
            location.reload(); // Reloads the page to restore original English text
        }
    });

    // Smooth Scroll for Navigation
    $("nav ul li a").click(function(event) {
        event.preventDefault();
        var target = $(this).attr("href");
        $("html, body").animate({ scrollTop: $(target).offset().top - 50 }, 1000);
    });

    // Contact Form Submission
    $("form").submit(function(event) {
        event.preventDefault();
        alert("Thank you for contacting us! We will get back to you soon.");
        $("form")[0].reset();
    });

    // Payment Method
    $(".package button").click(function() {
        let packageName = $(this).siblings("h2").text();
        let price = $(this).siblings(".price").text();
        let paymentMethod = prompt("Enter payment method (Credit Card, PayPal, Bank Transfer):");
        if (paymentMethod) {
            alert("Payment successful for " + packageName + " with " + paymentMethod + "!");
        }
    });

    // Review Submission
    $("#reviews").append('<h3>Leave a Review</h3><form id="review-form"><input type="text" id="review-name" placeholder="Your Name" required><textarea id="review-text" placeholder="Your Review" required></textarea><button type="submit">Submit Review</button></form><div id="user-reviews"></div>');

    $("#review-form").submit(function(event) {
        event.preventDefault();
        let name = $("#review-name").val();
        let review = $("#review-text").val();
        if (name && review) {
            $("#user-reviews").append("<div class='review'><strong>" + name + "</strong>: " + review + " ⭐⭐⭐⭐⭐</div>");
            $("#review-form")[0].reset();
        }
    });
});
