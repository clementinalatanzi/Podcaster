export  const calculateDateDifference = (currentTimestamp, lastFetchTimestamp) => {
    const oneDay = 24 * 60 * 60 * 1000; // Duration of one day in milliseconds
    return currentTimestamp - lastFetchTimestamp < oneDay;
  };
  