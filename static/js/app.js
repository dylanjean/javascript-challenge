// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");



data.forEach(obj => {
    var tr = tbody.append("tr");
    Object.entries(obj).forEach(([key,value]) => {
        var data = tr.append("td");
        data.text(value);
    });
});

var button = d3.select("#filter-btn");
var input = d3.select("#datetime");


var form = d3.select("form");


button.on("click", submit)

function submit () {      
    var input = d3.select("#datetime"); 
    var inputValue = input.property("value");
    
    tbody.html("");
    d3.event.preventDefault();
    


    var userInput = tableData.filter(item => item.datetime === inputValue);
    console.log(userInput)
 
    userInput.forEach((selection) => {
        var tr2 = tbody.append("tr");
        Object.entries(selection).forEach(([key,value]) => {
            var td = tr2.append("td");
            td.text(value);
        });
    });      
}
form.on("submit",submit)