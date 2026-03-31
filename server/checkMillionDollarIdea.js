const checkMillionDollarIdea = (req, res, next) => {
  const { numWeeks, weeklyRevenue } = req.body;
  
  // Check if both properties exist
  if (numWeeks === undefined || weeklyRevenue === undefined) {
    res.status(400).send();
    return;
  }
  
  // Check if they are valid numbers
  const numWeeksNumber = Number(numWeeks);
  const weeklyRevenueNumber = Number(weeklyRevenue);
  
  if (isNaN(numWeeksNumber) || isNaN(weeklyRevenueNumber)) {
    res.status(400).send();
    return;
  }
  
  // Calculate total yield
  const totalYield = numWeeksNumber * weeklyRevenueNumber;
  
  // Check if it meets the million dollar threshold
  if (totalYield < 1000000) {
    res.status(400).send();
    return;
  }
  
  // If all validations pass, proceed to next middleware/route
  next();
};

// Leave this exports assignment so that the function can be used elsewhere
module.exports = checkMillionDollarIdea;
