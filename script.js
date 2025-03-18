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

            $("nav ul li a[href='#paris']").text("Paris");
            $("nav ul li a[href='#swiss']").text("Schweizer Alpen");
            $("nav ul li a[href='#italy']").text("Italien");
            $("nav ul li a[href='#spain']").text("Spanien");
            $("nav ul li a[href='#greece']").text("Griechenland");
            $("nav ul li a[href='#prague']").text("Prag");
            $("nav ul li a[href='#food']").text("Essen");
            $("nav ul li a[href='#reviews']").text("Bewertungen");
            $("nav ul li a[href='#contact']").text("Kontakt");

            $("#food h2").text("🍽️ Berühmte Speisen in jeder Destination");

            $("#reviews h2").text("🌟 Kundenbewertungen");

            $("#contact h2").text("📩 Kontaktieren Sie uns");
            $("form input[placeholder='Your Name']").attr("placeholder", "Ihr Name");
            $("form input[placeholder='Your Email']").attr("placeholder", "Ihre E-Mail");
            $("form textarea[placeholder='Your Message']").attr("placeholder", "Ihre Nachricht");
            $("form button").text("Nachricht senden");

            $(".package#paris h2").text("Paris Urlaub");
            $(".package#paris p:nth-of-type(1)").text("5-tägige romantische Tour in Paris.");
            $(".package#paris .price").text("💰 Reisepreis: $1200");
            $(".package#paris .hotel-price").text("🏨 Hotel: $500 (5 Nächte)");
            $(".package#paris .flight-price").text("✈️ Flug: $400");
            $(".package#paris button").text("Jetzt buchen");

            $(".package#swiss h2").text("Schweizer Alpen Abenteuer");
            $(".package#swiss p:nth-of-type(1)").text("Erleben Sie die Schönheit der Schweizer Alpen.");
            $(".package#swiss .price").text("💰 Reisepreis: $1500");
            $(".package#swiss .hotel-price").text("🏨 Hotel: $700 (5 Nächte)");
            $(".package#swiss .flight-price").text("✈️ Flug: $500");
            $(".package#swiss button").text("Jetzt buchen");

            $(".package#italy h2").text("Italienische Reise");
            $(".package#italy p:nth-of-type(1)").text("Entdecken Sie die reiche Geschichte Italiens.");
            $(".package#italy .price").text("💰 Reisepreis: $1100");
            $(".package#italy .hotel-price").text("🏨 Hotel: $450 (5 Nächte)");
            $(".package#italy .flight-price").text("✈️ Flug: $350");
            $(".package#italy button").text("Jetzt buchen");

            $(".package#spain h2").text("Spanisches Fest");
            $(".package#spain p:nth-of-type(1)").text("Genießen Sie die lebendige Kultur Spaniens.");
            $(".package#spain .price").text("💰 Reisepreis: $1300");
            $(".package#spain .hotel-price").text("🏨 Hotel: $600 (5 Nächte)");
            $(".package#spain .flight-price").text("✈️ Flug: $450");
            $(".package#spain button").text("Jetzt buchen");

            $(".package#greece h2").text("Griechische Inseln");
            $(".package#greece p:nth-of-type(1)").text("Entspannen Sie an den atemberaubenden Stränden Griechenlands.");
            $(".package#greece .price").text("💰 Reisepreis: $1400");
            $(".package#greece .hotel-price").text("🏨 Hotel: $650 (5 Nächte)");
            $(".package#greece .flight-price").text("✈️ Flug: $480");
            $(".package#greece button").text("Jetzt buchen");

            $(".package#prague h2").text("Prager Wunder");
            $(".package#prague p:nth-of-type(1)").text("Entdecken Sie die historische Schönheit Prags.");
            $(".package#prague .price").text("💰 Reisepreis: $1250");
            $(".package#prague .hotel-price").text("🏨 Hotel: $500 (5 Nächte)");
            $(".package#prague .flight-price").text("✈️ Flug: $400");
            $(".package#prague button").text("Jetzt buchen");

            isEnglish = false;
        } else {
            // Switch back to English
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
});
