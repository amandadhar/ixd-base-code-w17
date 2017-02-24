/**
 * Created by Liam on 2/23/2017.
 */
$(document).ready(function() {
    initPage();
});

function initPage() {
    $(".acceptBtn").click(acceptRide);
}

function acceptRide(e) {
    e.preventDefault();

    var rideID = $(this).attr('id');
    rideID = rideID.substr('accept'.length);
    console.log(rideID);
    $.post('/movenow-rider',
        {
            "id": rideID
        }, acceptedRide);
}

function acceptedRide(data) {
    window.location.href = "movenow-driver-accepted";
}