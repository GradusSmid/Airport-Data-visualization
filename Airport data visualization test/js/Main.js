//variables
var allData
var totalflight = [];
var totalpassenger = [];
var lastyearflights = [];
var lastyearPassengers = [];
var sizes = [];

//calling the raw data using ajax, in json format
$(document).ready(function () {
    $.ajax({
        url: "https://opendata.cbs.nl/ODataApi/odata/37478eng/TypedDataSet",
        method: "GET",
        datatype: "json",
        success: function (data) {
            allData = data.value;
            filter(allData);
        },

        error: function (request) {
            console.log(request.responsetext);
        }
    });

});

//filter the data so you only get 2018 and 2017 year overview.
function filter(allData) {
    console.log("starting");
    for (i = 0; i < allData.length; i++) {
        if (allData[i].Periods == "2018JJ00") {
            totalflight.push(allData[i].TotalFlights_3); /*Put all total flights in a array for easy use*/
            totalpassenger.push(allData[i].TotalPassengers_12); /*put all total flights in a array for easy use*/
        }
        if (allData[i].Periods == "2017JJ00") {
            lastyearflights.push(allData[i].TotalFlights_3);
            lastyearPassengers.push(allData[i].TotalPassengers_12);
        }
    }
    //confirmation that the function has been executed
    console.log(totalflight);
    console.log(totalpassenger);
    setsize(totalflight);
};

//Data into percentage, All = 100%
function setsize(array) {
    for (i = 0; i < array.length; i++) {
        sizes.push((array[i] / array[0]) * 100);
    }
    console.log(sizes);
    //Make loading dissapear and set infographic visible
    $(".fa-spinner").css("visibility", "hidden");
    $("#present").css("visibility", "visible");
    $(".h2").css("visibility", "visible");
}
$(document).ready(function () {
    //functions to change the size of the male icon according to its data, and show the data as well
    $(".allbutton").click(function () {
        $(".fa-male").css("font-size", (100 + sizes[0]) + "px");
        $(".showamountofpeople").replaceWith("<p class = 'showamountofpeople' >" + totalpassenger[0] + " people </p>") /* used replaceWith to replace the old data */
    })
    $(".amsbutton").click(function () {
        $(".fa-male").css("font-size", (100 + sizes[1]) + "px");
        $(".showamountofpeople").replaceWith("<p class = 'showamountofpeople' >" + totalpassenger[1] + " people </p>")
    })
    $(".rotbutton").click(function () {
        $(".fa-male").css("font-size", (100 + sizes[2]) + "px");
        $(".showamountofpeople").replaceWith("<p class = 'showamountofpeople' >" + totalpassenger[2] + " people </p>")
    })
    $(".edhbutton").click(function () {
        $(".fa-male").css("font-size", (100 + sizes[3]) + "px");
        $(".showamountofpeople").replaceWith("<p class = 'showamountofpeople' >" + totalpassenger[3] + " people </p>")
    })
    $(".mstbutton").click(function () {
        $(".fa-male").css("font-size", (100 + sizes[4]) + "px");
        $(".showamountofpeople").replaceWith("<p class = 'showamountofpeople' >" + totalpassenger[4] + " people </p>")
    })
    $(".eldbutton").click(function () {
        $(".fa-male").css("font-size", (100 + sizes[5]) + "px");
        $(".showamountofpeople").replaceWith("<p class = 'showamountofpeople' >" + totalpassenger[5] + " people </p>")
    })
})

$(document).ready(function () {
    //Function to add data to airport.
    $("#ALL").one("click", function () {
        $("#ALL").css("margin-left", 700 * (sizes[0] / 100) + "px"); /* calculating distance the plane should move across the page */
        $("#ALL").append(totalflight[0]);
        $(".LastYearFlightall").append(lastyearflights[0] + " In 2017");
    });
    $("#AMS").one("click", function () {
        $("#AMS").css("margin-left", 700 * (sizes[1] / 100) + "px");
        $("#AMS").append(totalflight[1]);
        $(".LastYearFlightams").append(lastyearflights[1] + " In 2017");
    });
    $("#ROT").one("click", function () {
        $("#ROT").css("margin-left", 700 * (sizes[2] / 100) + "px");
        $("#ROT").append(totalflight[2]);
        $(".LastYearFlightrot").append(lastyearflights[2] + " In 2017");
    });
    $("#EDH").one("click", function () {
        $("#EDH").css("margin-left", 700 * (sizes[3] / 100) + "px");
        $("#EDH").append(totalflight[3]);
        $(".LastYearFlightedh").append(lastyearflights[3] + " In 2017");
    });
    $("#MST").one("click", function () {
        $("#MST").css("margin-left", 700 * (sizes[4] / 100) + "px");
        $("#MST").append(totalflight[4]);
        $(".LastYearFlightmst").append(lastyearflights[4] + " In 2017");
    });
    $("#ELD").one("click", function () {
        $("#ELD").css("margin-left", 700 * (sizes[5] / 100) + "px");
        $("#ELD").append(totalflight[5]);
        $(".LastYearFlighteld").append(lastyearflights[5] + " In 2017");
    });

})