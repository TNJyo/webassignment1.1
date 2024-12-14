// This script will add smooth scrolling to the navigation links
$(document).ready(function() {
    $("a").on("click", function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
        }
    });
});
