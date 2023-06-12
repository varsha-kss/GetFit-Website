// Calculate total calories, protein, carbs, and fat
var calories = 0;
var protein = 0;
var carbs = 0;
var fat = 0;

var rows = document.getElementsByTagName("tbody")[0].getElementsByTagName("tr");

for (var i = 0; i < rows.length; i++) {
  var row = rows[i];
  var cols = row.getElementsByTagName("td");
  
  if (cols.length > 0) {
    var cals = parseInt(cols[2].textContent);
    var prot = parseFloat(cols[3].textContent);
    var carb = parseFloat(cols[4].textContent);
    var f = parseFloat(cols[5].textContent);
    
    calories += cals;
    protein += prot;
    carbs += carb;
    fat += f;
  }
}

// Display total calories, protein, carbs, and fat
var totalRow = document.createElement("tr");
var totalCell = document.createElement("td");
totalCell.textContent = "Total";
totalRow.appendChild(totalCell);

for (var i = 0; i < 4; i++) {
  var totalData = document.createElement("td");
  
  switch (i) {
    case 0:
      totalData.textContent = calories;
      break;
    case 1:
      totalData.textContent = protein.toFixed(1);
      break;
    case 2:
      totalData.textContent = carbs.toFixed(1);
      break;
    case 3:
      totalData.textContent = fat.toFixed(1);
      break;
  }
  
  totalRow.appendChild(totalData);
}

document.getElementsByTagName("tbody")[0].appendChild(totalRow);
