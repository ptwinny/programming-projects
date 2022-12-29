function checkCashRegister(price, cash, cid) {
  let changeDue = ((cash * 100) - (price * 100)) / 100;
  let coinAndBillAmounts = [];
  const denominationValues = [100, 20, 10, 5, 1, .25, .1, .05, .01];
  let changeReturned = [];

  cid.reverse();
  for (let i = 0; i < cid.length; i++) {
    coinAndBillAmounts.push((cid[i][1] * 100) / (denominationValues[i] / 100));
  }

  for (let i = 0; i < cid.length; i++) {
    while (denominationValues[i] <= changeDue && coinAndBillAmounts[i] > 0) {
      changeReturned.push([cid[i][0], denominationValues[i]]);
      changeDue -= denominationValues[i];
      coinAndBillAmounts[i]--;
    }
  }


  for (let i = 0; i < changeReturned.length; i++) {
    for (let j = i + 1; j < changeReturned.length; j++) {
      if (changeReturned[i][1] === changeReturned[j][1]) {
        changeReturned[i][1] = (changeReturned[i][1] + changeReturned[j][1]);
        changeReturned.splice(1, 1);
      }
    }
  }

  console.log(changeReturned);

}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);