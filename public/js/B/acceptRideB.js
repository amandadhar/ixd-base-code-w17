/**
 * Created by Liam on 3/8/2017.
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
    $.post('/movenow-rider-accepted',
        {
            "id": rideID
        }, acceptedRide);
}

function acceptedRide(data) {
    window.location.href = "pickupB";
}