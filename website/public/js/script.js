// function getDataPointsFromCSV(csv) {
//     var dataPoints = csvLines = points = [];
//     csvLines = csv.split(/[\r?\n|\r|\n]+/);
        
//     for (var i = 1; i < csvLines.length; i++)
//         if (csvLines[i].length > 0) {
//             points = csvLines[i].split(",");
//             dataPoints.push({ 
//                 x: parseFloat(points[3]), 
//                 y: parseFloat(points[4])    
//       });
//   }
//     return dataPoints;
// }

// var dataPoints = [];

// $(document).ready(function() {
// 	// d3.select("p").text("tomato tomato");

// 	// https://scrimba.com/casts/cast-1953 for me to learn how it works

// 	// d3.select(".chart")
//  //  		.selectAll("div")
//  //  		.data(dataPoints)
//  //    		.enter()
//  //    		.append("div")
//  //    		.classed("more", true)
//  //    		.style("width", function(d) { return d + "px"; })
//  //    		.text(function(d) { return d; });

//   //  var ctx = $(".chart1");
//     var chart = new CanvasJS.Chart("chartContainer", {
//     // var chart = new Chart(ctx, {
//         title: {
//       text: "Chart from CSV",
//         },
//         data: [{
//       type: "line",
//       dataPoints: getDataPointsFromCSV('energy.csv')
//        }]
//        // data: {
//        //     labels: ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 AM", "1:00 PM", "2:00 PM", "3:00 PM"],
//        //     datasets: [{
//        //         label: "Ida Sproul Energy Consumption",
//        //         backgroundColor: 'rgb(255, 99, 132)',
//        //         borderColor: 'rgb(255, 99, 132)',
//        //         data:[30, 42, 38, 35, 41, 27, 25],
//        //         fill: false,
//        // }],

//     });
//     chart.render();
// });


// Removed below on 10/29
// $(document).ready(function () {

// function getDataPointsFromCSV(csv) {
//     var dataPoints = csvLines = points = [];
//     csvLines = csv.split(/[\r?\n|\r|\n]+/);
        
//     for (var i = 0; i < csvLines.length; i++)
//         if (csvLines[i].length > 0) {
//             points = csvLines[i].split(",");
//             dataPoints.push({ 
//                 x: parseFloat(points[0]), 
//                 y: parseFloat(points[1])    
//       });
//   }
//     return dataPoints;
// }
   
// $.get("dataPoints.csv", function(data) {
//     var chart = new CanvasJS.Chart("chartContainer", {
//         title: {
//       text: "Chart from CSV",
//         },
//         data: [{
//       type: "line",
//       dataPoints: getDataPointsFromCSV(dataPoints.csv)
//   }]
//     });
    
//     chart.render();
 
// });

$(document).ready(function () {

var ctx = document.getElementById('fixedChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [{
            label: "Energy Consumption Monthly Average (kWh)",
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [340, 320, 350, 360, 320, 310, 300],
        }]
    },

    // Configuration options go here
    options: {}
});

});








 