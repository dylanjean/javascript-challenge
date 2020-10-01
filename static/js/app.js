// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");



data.forEach(obj => {
    var tr = tbody.append("tr");
    Object.entries(obj).forEach(([key,value]) => {
        var td = tr.append("td");
        td.text(value);
    });
});

var button = d3.select("#filter-btn");
var input = d3.select("#datetime");


var form = d3.select("form");


button.on("click", submit);

function submit () {      
    var input = d3.select("#datetime"); 
    d3.event.preventDefault();
    tbody.html("");

    var userInput = tableData.filter(item => item.datetime === input.property("value"));
    userInput.forEach((entry) => {
        var tr2 = tbody.append("tr");
        Object.entries(entry).forEach(data => {
            var td = tr2.append("td");
            td.text(data);
        });
    });      
};
form.on("submit",submit);