$(document).ready(function () {
    // When user clicks #basic-sites-button
    $(document).on("click", "#basic-sites-button", function () {
        if (
            $("#basic-sites-blurb").hasClass("hide")
        ) {
            $("#basic-sites-blurb").removeClass("hide");
            $("#freelance-main").addClass("hide");
        };
    });

    // When user clicks on Full Stack button
    $(document).on("click", "#full-stack-button", function () {
        if (
            $("#full-stack-blurb").hasClass("hide")
        ) {
            $("#full-stack-blurb").removeClass("hide");
            $("#freelance-main").addClass("hide");
        };
    });

    // When a user clicks on the Freelance Back Button
    $(document).on("click", "#freelance-back-button", function () {
        // If Freelance Main and Full Stack Blurb are hidden, hide Basic Sites Blurb and display Main Blurb
        if (
            $("#freelance-main").hasClass("hide") && $("#full-stack-blurb").hasClass("hide")
        ) {
            $("#freelance-main").removeClass("hide");
            $("#basic-sites-blurb").addClass("hide");
        };

        // If Freelance Main and Basic Sites Blurb are hidden, hide Full Stack Blurb and display Main Blurb
        if (
            $("#freelance-main").hasClass("hide") && $("#basic-sites-blurb").hasClass("hide")
        ) {
            $("#freelance-main").removeClass("hide");
            $("#full-stack-blurb").addClass("hide");
        };
    });
});