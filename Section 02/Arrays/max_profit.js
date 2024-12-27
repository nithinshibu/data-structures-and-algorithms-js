/*

MaxProfit

Imagine you're buying and selling stocks throughout the year. Your job is to find the biggest profit you could make by buying low and selling high only once.

Here's what you're given:

A list of stock prices for each day 👉 [7, 1, 5, 3, 6, 4]

Here's what you need to find:

The difference between the cheapest price you could have bought the stock and the most expensive price you could have sold it later on.


*/

/*

You are given a list of stock prices, where each number represents the price of a stock on a specific day.
Your job is to figure out:

On which day you should buy the stock (lowest price so far).
On which day you should sell the stock (highest price after the day you bought it).
Calculate the maximum profit you can make by buying the stock and selling it later.
You are allowed to buy the stock once and sell it once.

Example 1
Input: [7, 1, 5, 3, 6, 4]

You would buy the stock when the price is 1 (on Day 2).
You would sell the stock when the price is 6 (on Day 5).
The profit you make is:
6 (sell price) - 1 (buy price) = 5
Output: Maximum Profit = 5




*/

const maxProfit = (prices) => {
  let minPrice = prices[0]; //Assume that the first day is the cheapest to buy
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    let currentPrice = prices[i];
    //Update minimum price if the lower price is found
    minPrice = Math.min(minPrice, currentPrice);

    const potentialProfit = currentPrice - minPrice;

    maxProfit = Math.max(maxProfit, potentialProfit);
  }
  return `Maximum Profit is ${maxProfit}`;
};

const prices = [7, 1, 5, 3, 6, 4];

const profit = maxProfit(prices);

console.log(profit);
