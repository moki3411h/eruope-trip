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

            $("nav ul li a[href='#reviews']").text("Bewertungen");
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

    // Review Submission
    $("#review-form").submit(function(event) {
        event.preventDefault();
        let name = $("#review-name").val();
        let review = $("#review-text").val();
        if (name && review) {
            let newReview = `<div class='review'>"${review}" - ${name} ⭐⭐⭐⭐⭐</div>`;
            $("#reviews").append(newReview);
            $("#review-form")[0].reset();
        } else {
            alert("Please fill out both fields.");
        }
    });

    // Payment Handling
    $(".package button").click(function() {
        let trip = $(this).siblings("h2").text();
        let price = $(this).siblings(".price").text().replace("💰 Trip Price: ", "");
        let confirmation = confirm(`Proceed to payment for ${trip} - ${price}?`);
        if (confirmation) {
            alert("Redirecting to secure payment gateway...");
            // Here you can integrate an actual payment gateway
        }
    });
});
