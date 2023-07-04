$(document).ready(function () {
    $("#form507275619").submit(function(e) {
        console.log("im hero")
        displayTrackInfo()
    })

    $("#track").on('keydown', function(e) {
        if (e.keyCode === 13) displayTrackInfo()
    })

    $("#tracking").on('click', function(e) {
        displayTrackInfo()
    })

})

function displayTrackInfo() {
    $("#tracking").addClass("active")
    const track = $("#track")[0].value

    $.post("/tracking", {track: track}, function (data) {
        console.log('data ', data)
        $("#track_info").html(data)
        $("#tracking").removeClass("active")
    })
}
