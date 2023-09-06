### What

Euler is a non-custodial permissionless protocol on Ethereum that allows users to lend and borrow almost any crypto asset. Euler helps users to earn interest on their crypto assets or hedge against volatile markets without the need for a trusted third-party.

### Why?

Euler introduces a number of new features in DeFi, including permissionless lending markets, protected collateral, reactive interest rates, per-second compounding interests and feeless flash loans.

#### Permisionless listing 

Euler lets its users determine which assets are listed. Any asset that has a WETH pair on Uniswap v3 can be added as a lending market on Euler.

#### Protected Collateral

On Compound and Aave, collateral deposited to the protocol is always made available for lending. On the other hand, Euler allows collateral to be deposited, but not made available for lending.  This collateral is 'protected'. It doesn't earn interest, but is free from the risks of borrowers defaulting, can always be withdrawn instantly, and helps protect against borrowers using tokens to influence governance decisions.

#### Reactive interest rates

Euler uses control theory to autonomously change the interest rates towards a level that maximises utilisation of assets in the protocol. These reactive interest rates adapt to market conditions for the asset in real-time without the need for ongoing governance intervention. 

#### Compound Interest

Compound interest is accrued on Euler each second. This is different from other lending protocols, where interest is typically accrued every block. Earning interest per-second is generally expected to perform more predictably in the long-run, even if upgrades to Ethereum lead to changes in the average time between blocks.

#### Feeless Flash Loans 

Euler only charges fees according to the time value of money, and from the blockchain's perspective flash loans are held for a duration of 0 seconds. Thus, they are entirely free on Euler (ignoring gas costs).
