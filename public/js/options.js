/**
 * Created by Liam on 3/7/2017.
 */
$(document).ready(function() {
    initPage();
});

function initPage() {
    //$("#nextVehicle").click(gotoEquipment);
}

function gotoEquipment(e) {
    e.preventDefault();

    var vehicle = $("input:radio[name=Vehicle]").val();
    $.post("vehicle", {
        "vehicle": vehicle
    });
}

