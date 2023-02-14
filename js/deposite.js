// console.log('deposit.js');
// step-1: add event listener to the deposit button
document.getElementById('btn-diposit').addEventListener('click',function(){
// step-2:get diposite amount from the deposit input field
   const depositField = document.getElementById('deposit-field');
   const newDepositAmountString = depositField.value;
//    console.log(newDepositAmountString);
//    convert string deposite amount to a number type

   const newDepositAmount = parseFloat(newDepositAmountString);
// console.log(newdepositeAmount);

// step-3: cleare the deposit input field after getting the value 
    depositField.value = ''; 

    // step-4: get the peivious deposite
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    // step-5: calculate new deposite total and set the value to the deposit total
    const neweDpositTotal = previousDepositTotal + newDepositAmount;
    depositTotalElement.innerText = neweDpositTotal;

    // step-6: 
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalance = parseFloat(previousBalanceTotalString);

    const newBlanceTotal  = previousBalance + newDepositAmount;
    balanceTotalElement.innerText = newBlanceTotal;
})