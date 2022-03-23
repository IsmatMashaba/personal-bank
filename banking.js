/*handling deposit button*/
function getInputValue(inputId) {
    const inputField=document.getElementById(inputId)
    const inputAmountText=inputField.value;
    const amountValue=parseFloat(inputAmountText)
    /*clear input field*/
    inputField.value='';
    return amountValue;
}
function updateTotalField(depositAmount) {
    const depositTotal=document.getElementById('deposit-total');
    const depositTotalText=depositTotal.innerText;
    const previousDepositTotal=parseFloat(depositTotalText)

    depositTotal.innerText=previousDepositTotal+depositAmount

}

document.getElementById('deposit-button').addEventListener("click", function () {

    const depositAmount=getInputValue('deposit-input')
    updateTotalField(depositAmount)



    /*update deposite total*/
    /*const depositTotal=document.getElementById('deposit-total');
    const depositTotalText=depositTotal.innerText;
    const previousDepositTotal=parseFloat(depositTotalText)

    depositTotal.innerText=previousDepositTotal+depositAmount*/

    /*Update total balance*/
    const balanceTotal=document.getElementById('balance-total');
    const previousBalanceAmountText=balanceTotal.innerText;
    const previousBalanceAmount=parseFloat(previousBalanceAmountText)
    const newBalanceAmount=previousBalanceAmount+depositAmount
    balanceTotal.innerText=newBalanceAmount

    /*clear input field*/
    /*depositInput.value='';*/
})



/*handling withdraw button*/

document.getElementById('withdraw-button').addEventListener("click", function () {

    const withdrawAmount=getInputValue('withdraw-input')

    /*update withdraw total*/
    const withdrawTotal=document.getElementById('withdraw-total');
    const previousWithdrawTotalText=withdrawTotal.innerText;
    const previousWithdrawTotal=parseFloat(previousWithdrawTotalText);

    withdrawTotal.innerText=previousWithdrawTotal+withdrawAmount

    /*update total balance*/
    const balanceTotal=document.getElementById('balance-total');
    const previousBalanceAmountText=balanceTotal.innerText;
    const previousBalanceAmount=parseFloat(previousBalanceAmountText)



    balanceTotal.innerText=previousBalanceAmount-withdrawTotal

    /*clear withdraw input field*/
   /* withdrawInput.value='';*/


})














