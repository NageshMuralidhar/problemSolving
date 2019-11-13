var coinChange = function(coins, amount) {
  let changer = 0;
  let index = 0;
  let store = [];
  let coin_val = coins.length - 1;
  coins = coins.sort();
  while (amount > 0) {
    if (amount <= coins[coin_val]) {
      coin_val--;
    }
    amount = amount - coins[coin_val];
    store.push(coins[coin_val]);
  }
  console.log(store);
};
let coins = [1, 2, 10];
let amount = 7;
coinChange(coins, amount);
