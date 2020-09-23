// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");



data.forEach(obj => {
    var tRow = tbody.append("tr");
    Object.entries(obj).forEach(([key,value]) => {
        var tData = tRow.append("td");
        tData.text(value);
    });
});

var submitButton = d3.select("#filter-btn");
var inputField = d3.select("#datetime");

// implementing fuction to "filter button"
submitButton.on("click", function() {
    // clears the data of the current table        
    tbody.html("");
    d3.event.preventDefault();
    // select the input field
    var inputField = d3.select("#datetime");
    // get the value property of the "input" element 
    var inputElement = inputField.property("value");


    var inputTypeArray = data.filter(one => one.datetime === inputElement);
    console.log(inputTypeArray)
 
    inputTypeArray.forEach((selection) => {
        // for each "element" create a row
        var row = tbody.append("tr");
        Object.entries(selection).forEach(([key,value]) => {
            var cell = row.append("td");
            // adds the "value" to each row in the table
            cell.text(value);
        });
    });      
});