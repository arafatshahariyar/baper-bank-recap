// console.log('withdraw.js');
// 1.step: add event handlre the window button

document.getElementById('btn-withdraw').addEventListener('ckick', function(){
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    console.log(newWithdrawAmount);
})