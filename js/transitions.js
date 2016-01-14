$(document).ready(function() {
    $("body").css("display", "none");

    $("body").fadeIn(600);

    $("a.fade").click(function(event){
        event.preventDefault();
        linkLocation = this.href;
        $("body").fadeOut(400, redirectPage);
    });

    function redirectPage() {
        window.location = linkLocation;
    }
});
