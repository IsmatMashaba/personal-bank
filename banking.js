/*2nd page*/
/*handling deposit button*/

document.getElementById('deposit-button').addEventListener("click", function () {
    const depositInput=document.getElementById('deposit-input')
    const newDepositAmountText=depositInput.value;
    const newDepositAmount=parseFloat(newDepositAmountText)


/*update deposite total*/
    const depositTotal=document.getElementById('deposit-total');
    const previousDepositAmountText=depositTotal.innerText;
    const previousDepositAmount=parseFloat(previousDepositAmountText)

    const newDepositTotal=previousDepositAmount+newDepositAmount
    depositTotal.innerText=newDepositTotal

    /*Update total balance*/
    const balanceTotal=document.getElementById('balance-total');
    const previousBalanceAmountText=balanceTotal.innerText;
    const previousBalanceAmount=parseFloat(previousBalanceAmountText)
    const newBalanceAmount=previousBalanceAmount+newDepositAmount
    balanceTotal.innerText=newBalanceAmount

    /*clear input field*/
      depositInput.value='';
})



/*handling withdraw button*/

document.getElementById('withdraw-button').addEventListener("click", function () {
    const withdrawInput=document.getElementById('withdraw-input')
    const newWithdrawAmountText=withdrawInput.value;
    const newWithdrawAmount=parseFloat(newWithdrawAmountText);



    /*update withdraw total*/
const withdrawTotal=document.getElementById('withdraw-total');
const previousWithdrawAmountText=withdrawTotal.innerText;
const previousWithdrawAmount=parseFloat(previousWithdrawAmountText);

 const newWithdrawTotal=previousWithdrawAmount+newWithdrawAmount;
    withdrawTotal.innerText=newWithdrawTotal

    /*update total balance*/
    const balanceTotal=document.getElementById('balance-total');
    const previousBalanceAmountText=balanceTotal.innerText;
    const previousBalanceAmount=parseFloat(previousBalanceAmountText)

    const lastBalanceAmount=previousBalanceAmount-newWithdrawTotal;

    balanceTotal.innerText=lastBalanceAmount

    /*clear withdraw input field*/
    withdrawInput.value='';


})















