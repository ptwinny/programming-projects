function checkCashRegister(price, cash, cid) {
  // variables and arrays
  const denominationValues = [100, 20, 10, 5, 1, 0.25, 0.1, 0.05, .01];
  let cidTotal = getCidTotal(cid);
  let coinAndBillAmounts = [];
  let changeDue = cash - price;
  let changeToReturn = [];
  let amt = 0;

  // main section
  if (cidTotal < changeDue) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  } else if (cidTotal === changeDue) {
    return { status: "CLOSED", change: cid };
  } else {
    /* RETURNING ONE LESS PENNY THAN SHOULD
    // get amount of bills and coins of each denomination
    cid.reverse();
    for (let i = 0; i < cid.length; i++) {
      coinAndBillAmounts.push(cid[i][1] / denominationValues[i]);
    }
    // get dollar amount of each denomination to return
    for (let i = 0; i < cid.length; i++) {
      amt = 0;
      if (changeDue >= denominationValues[i] && coinAndBillAmounts[i] > 0) {
        while (changeDue >= denominationValues[i] && coinAndBillAmounts[i] > 0) {
          amt += denominationValues[i];
          changeDue -= denominationValues[i];
          coinAndBillAmounts[i]--;
        }
        changeToReturn.push([cid[i][0], amt]);
      }
    }
    */
    console.log(changeToReturn);
    return {status: "OPEN", change: changeToReturn};
  }
  // functions
  function getCidTotal(arr) {
    let total = 0;
    for (let i = 0; i < cid.length;i++) {
      total += (arr[i][1]);
    }
    return total;
  }
}

checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
