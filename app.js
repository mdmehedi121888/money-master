function functionValue(id) {
  const valueString = document.getElementById(id).value;
  const Value = parseInt(valueString);
  return Value;
}
document.getElementById("calculate-btn").addEventListener("click", function () {
  const incomeValue = functionValue("income");
  const foodValue = functionValue("food");
  const rentValue = functionValue("rent");
  const clothesValue = functionValue("clothes");

  const expenses = document.getElementById("expenses");
  const balance = document.getElementById("balance");
  const totalCost = foodValue + rentValue + clothesValue;
  const remainingBalance = incomeValue - totalCost;
  if (remainingBalance < 0) alert("Sorry!!! you dont have sufficinet balance");
  else {
    expenses.innerText = totalCost;
    balance.innerText = remainingBalance;
  }
});

document.getElementById("save-btn").addEventListener("click", function () {
  const saveValue = functionValue("save");
  const incomeValue = functionValue("income");
  const deposit = incomeValue*(saveValue/100);
  const expensesString = document.getElementById("expenses").innerText;
  const expenses = parseInt(expensesString);
  const totalExpenses = deposit + expenses;
  if(incomeValue < totalExpenses)
  alert('Soorryy !!! you dont have sufficient balance ..plz income ta ektu baran ...')
  else{
    const savingAmount = document.getElementById('saving-amount');
   const  remainingBalance = document.getElementById('remaining-balance');
    savingAmount.innerText = deposit;
    const remainingbalance = incomeValue - totalExpenses;
    remainingBalance.innerText = remainingbalance;
    //console.log(totalExpenses);
  }
});
