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

            // Navigation
            $("nav ul li a[href='#paris']").text("Paris");
            $("nav ul li a[href='#swiss']").text("Schweizer Alpen");
            $("nav ul li a[href='#italy']").text("Italien");
            $("nav ul li a[href='#spain']").text("Spanien");
            $("nav ul li a[href='#greece']").text("Griechenland");
            $("nav ul li a[href='#prague']").text("Prag");
            $("nav ul li a[href='#food']").text("Essen");
            $("nav ul li a[href='#reviews']").text("Bewertungen");
            $("nav ul li a[href='#payment']").text("Zahlung");
            $("nav ul li a[href='#contact']").text("Kontakt");

            // Food Section
            $("#food h2").text("🍽️ Berühmte Speisen in jeder Destination");

            // Reviews Section
            $("#reviews h2").text("🌟 Kundenbewertungen");

            // Contact Section
            $("#contact h2").text("📩 Kontaktieren Sie uns");
            $("form input[placeholder='Your Name']").attr("placeholder", "Ihr Name");
            $("form input[placeholder='Your Email']").attr("placeholder", "Ihre E-Mail");
            $("form textarea[placeholder='Your Message']").attr("placeholder", "Ihre Nachricht");
            $("form button").text("Nachricht senden");

            // Packages
            $(".package#paris h2").text("Paris Urlaub");
            $(".package#paris p:nth-of-type(1)").text("5-tägige romantische Tour in Paris.");
            $(".package#paris button").text("Jetzt buchen");

            $(".package#swiss h2").text("Schweizer Alpen Abenteuer");
            $(".package#swiss p:nth-of-type(1)").text("Erleben Sie die Schönheit der Schweizer Alpen.");
            $(".package#swiss button").text("Jetzt buchen");

            $(".package#italy h2").text("Italienische Reise");
            $(".package#italy p:nth-of-type(1)").text("Entdecken Sie die reiche Geschichte Italiens.");
            $(".package#italy button").text("Jetzt buchen");

            $(".package#spain h2").text("Spanisches Fest");
            $(".package#spain p:nth-of-type(1)").text("Genießen Sie die lebendige Kultur Spaniens.");
            $(".package#spain button").text("Jetzt buchen");

            $(".package#greece h2").text("Griechische Inseln");
            $(".package#greece p:nth-of-type(1)").text("Entspannen Sie an den atemberaubenden Stränden Griechenlands.");
            $(".package#greece button").text("Jetzt buchen");

            $(".package#prague h2").text("Prager Wunder");
            $(".package#prague p:nth-of-type(1)").text("Entdecken Sie die historische Schönheit Prags.");
            $(".package#prague button").text("Jetzt buchen");

            // Payment Section
            $("#payment h2").text("💳 Zahlungsmethoden");
            $(".payment-method h3:contains('UPI Payment')").text("UPI Zahlung");
            $(".payment-method h3:contains('Credit/Debit Cards')").text("Kredit-/Debitkarten");
            $(".payment-method h3:contains('Net Banking')").text("Online-Banking");
            
            $(".payment-method p:contains('Scan the QR code or use the UPI ID below:')")
                .text("Scannen Sie den QR-Code oder verwenden Sie die folgende UPI-ID:");
            $(".payment-method p:contains('We accept all major credit and debit cards')")
                .text("Wir akzeptieren alle gängigen Kredit- und Debitkarten");
            $(".payment-method p:contains('All major Indian banks supported')")
                .text("Alle wichtigen indischen Banken werden unterstützt");
            
            $(".payment-instructions h3").text("Zahlungsanweisungen:");
            $(".payment-instructions ol li:nth-child(1)").text("Wählen Sie Ihr bevorzugtes Paket und klicken Sie auf \"Jetzt buchen\"");
            $(".payment-instructions ol li:nth-child(2)").text("Wählen Sie Ihre Zahlungsmethode");
            $(".payment-instructions ol li:nth-child(3)").text("Für UPI-Zahlungen verwenden Sie die angegebene ID oder scannen Sie den QR-Code");
            $(".payment-instructions ol li:nth-child(4)").text("Nach der Zahlung teilen Sie uns den Screenshot/Beleg mit");
            $(".payment-instructions ol li:nth-child(5)").text("Sie erhalten innerhalb von 24 Stunden eine Buchungsbestätigung");

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

    // Package Booking Button Click
    $(".package button").click(function() {
        // Scroll to payment section instead of redirecting
        $("html, body").animate({ scrollTop: $("#payment").offset().top - 50 }, 1000);
    });
});
