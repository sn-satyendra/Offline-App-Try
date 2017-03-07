$(document).ready(function() {
    $("#btnSignIn").on("click", function() {
        var opt = {
            method: 'POST'
        };
        fetch('/authenticate', opt).then(function(response) {
            alert(response.body);
        });
    });
});
