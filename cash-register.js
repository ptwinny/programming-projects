function checkCashRegister(price, cash, cid) {
  cid.reverse();
  
  let changeDue = cash - price;
  let changeToReturn = [];
  const denominationValues = [100, 20, 10, 5, 1, .25, .1, .05, .01];
  let coinAndBillAmounts = [];
  
  for (let i = 0; i < cid.length; i++) {
    coinAndBillAmounts.push(cid[i][1] / denominationValues[i]);
  }

  for (let i = 0; i < cid.length; i++) {
    while (cid[i][1] >= changeDue && coinAndBillAmounts[i] > 0) {
      changeToReturn.push([cid[i][0], denominationValues[i]]);
      changeDue -= denominationValues[i];
      coinAndBillAmounts[i]--;
    }
  }


  for (let i = 0; i < changeToReturn.length; i++) {
    for (let j = i + 1; j < changeToReturn.length; j++) {
      if (changeToReturn[i][1] === changeToReturn[j][1]) {
        changeToReturn[i][1] = (changeToReturn[i][1] + changeToReturn[j][1]);
        changeToReturn.splice(1, 1);
      }
    }
  }

  console.log(changeToReturn);

}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
