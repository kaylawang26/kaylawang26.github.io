$(document).ready(function() {
    // Q&A Accordian
    $("#q1").click(function() {
        if ($("#q1a").hasClass("hide-answer")) {
            $("#q1a").removeClass("hide-answer");
            $("#open-arrow1").removeClass("hide-arrow");
            $("#closed-arrow1").addClass("hide-arrow");
        } else {
            $("#q1a").addClass("hide-answer");
            $("#closed-arrow1").removeClass("hide-arrow");
            $("#open-arrow1").addClass("hide-arrow");
        }
    });
    $("#q2").click(function() {
        if ($("#q2a").hasClass("hide-answer")) {
            $("#q2a").removeClass("hide-answer");
            $("#open-arrow2").removeClass("hide-arrow");
            $("#closed-arrow2").addClass("hide-arrow");
        } else {
            $("#q2a").addClass("hide-answer");
            $("#closed-arrow2").removeClass("hide-arrow");
            $("#open-arrow2").addClass("hide-arrow");
        }
    });
    $("#q3").click(function() {
        if ($("#q3a").hasClass("hide-answer")) {
            $("#q3a").removeClass("hide-answer");
            $("#open-arrow3").removeClass("hide-arrow");
            $("#closed-arrow3").addClass("hide-arrow");
        } else {
            $("#q3a").addClass("hide-answer");
            $("#closed-arrow3").removeClass("hide-arrow");
            $("#open-arrow3").addClass("hide-arrow");
        }
    });
    $("#q4").click(function() {
        if ($("#q4a").hasClass("hide-answer")) {
            $("#q4a").removeClass("hide-answer");
            $("#open-arrow4").removeClass("hide-arrow");
            $("#closed-arrow4").addClass("hide-arrow");
        } else {
            $("#q4a").addClass("hide-answer");
            $("#closed-arrow4").removeClass("hide-arrow");
            $("#open-arrow4").addClass("hide-arrow");
        }
    });
    $("#q5").click(function() {
        if ($("#q5a").hasClass("hide-answer")) {
            $("#q5a").removeClass("hide-answer");
            $("#open-arrow5").removeClass("hide-arrow");
            $("#closed-arrow5").addClass("hide-arrow");
        } else {
            $("#q5a").addClass("hide-answer");
            $("#closed-arrow5").removeClass("hide-arrow");
            $("#open-arrow5").addClass("hide-arrow");
        }
    });
    $("#q6").click(function() {
        if ($("#q6a").hasClass("hide-answer")) {
            $("#q6a").removeClass("hide-answer");
            $("#open-arrow6").removeClass("hide-arrow");
            $("#closed-arrow6").addClass("hide-arrow");
        } else {
            $("#q6a").addClass("hide-answer");
            $("#closed-arrow6").removeClass("hide-arrow");
            $("#open-arrow6").addClass("hide-arrow");
        }
    });
});
