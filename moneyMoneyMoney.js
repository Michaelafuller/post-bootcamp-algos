function calculateYears(principal, interest, tax, desired) {
    let years = 0;
  while(principal < desired) {
    let interestAccrued = principal * interest
    principal += interestAccrued;
    let taxableIncome = interestAccrued * tax;
    principal -= taxableIncome;
    years ++;
  }
  return years;
}

console.log(calculateYears(1000, 0.05, 0.18, 1100));