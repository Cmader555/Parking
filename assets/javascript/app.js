$(document).ready(function () {

    //stadiums array

    var stadiums = ["Chase Field", "SunTrust Park", "Oriole Park at Camden Yards", "Oriole Park", "Camden Yards", "Fenway Park", "Wrigley Field", "Guaranteed Rate Field", "Great American Ball Park", "Progressive Field", "Coors Field", "Comerica Park", "Minute Maid Park", "Kauffman Stadium", "Angel Stadium", "Angel Stadium of Anaheim", "Dodger Stadium", "Marlins Park", "Miller Park", "Target Field", "Citi Field", "Yankee Stadium", "Oakland-Alameda County Stadium", "Citizens Bank Park", "PNC Park", "Petco Park", "AT&T Park", "ATT Park", "Safeco Park", "T-Mobile Park", "Busch Stadium", "Tropicana Field", "Globe Life Park", "Globe Life Park in Arlington", "Rogers Centre", "Nationals Park"];

    var foodDiv =

    function foodInfo() {
        var stadiumFood = $(this).attr("data-name");
        var queryURL = "https://developers.zomato.com/api/v2.1/locations?query=" + stadiumFood + "&apikey=809cacce2b45b91bf605edacedac021c";

        // Creating an AJAX call for the Zomato API
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);
            

        });
    }

});