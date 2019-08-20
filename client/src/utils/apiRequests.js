import axios from 'axios';

const port = process.env.PORT || 3001;

const postSavings = async (savingsParams, currency) => {
  try {
    const response = await axios.post(`http://localhost:${port}/api/v1/savings/?currencyCode=${currency}`, savingsParams);
    return response;
  } catch (err) {
    throw err;
  }
};

export default {
  postSavings,
};
