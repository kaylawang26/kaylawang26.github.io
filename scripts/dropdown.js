$(document).ready(function() {
    // Hamburger Menu
    $("#dropdown-button").click(function() {
        if ($("#menu").hasClass("hide-nav")) {
            $("#menu").removeClass("hide-nav");
        } else {
            $("#menu").addClass("hide-nav");
        }
    });

});
