function checkCashRegister(price, cash, cid) {
  // variables and arrays
  const denominationValues = [10000, 2000, 1000, 500, 100, 25, 10, 5, 1];
  let cidTotal = getCidTotal(cid);
  let coinAndBillAmounts = [];
  let changeDue = (cash * 100) - (price * 100);
  console.log(changeDue);
  let changeToReturn = [];
  let amt = 0;

  /* main section */

  if (cidTotal < changeDue) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  } else if (cidTotal === changeDue) {
    return { status: "CLOSED", change: cid };
  } else if (cidTotal > changeDue) {
    // get amount of bills and coins of each denomination
    cid.reverse();
    for (let i = 0; i < cid.length; i++) {
      coinAndBillAmounts.push((cid[i][1] * 100) / denominationValues[i]);
    }
    // get dollar amount of each denomination to return
    for (let i = 0; i < cid.length; i++) {
      amt = 0;
      if (changeDue >= denominationValues[i] && coinAndBillAmounts[i] > 0) {
        while (changeDue >= denominationValues[i] && coinAndBillAmounts[i] > 0) {
          amt += denominationValues[i];
          changeDue -= denominationValues[i];
          coinAndBillAmounts[i]--;
          console.log("change returned: " + amt / 100 + " of " + denominationValues[i] / 100 + " " + "change remaining: " + changeDue / 100);
        }
        changeToReturn.push([cid[i][0], amt / 100]);
      }
    }
    if (changeDue !== 0) {
      return {status: "INSUFFICIENT_FUNDS", change: []};
    }
    return {status: "OPEN", change: changeToReturn};
  }
  // functions
  function getCidTotal(arr) {
    let total = 0;
    for (let i = 0; i < arr.length;i++) {
      total += (arr[i][1] * 100);
    }
    return total;
  }
}

checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
