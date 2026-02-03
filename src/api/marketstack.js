
const API_KEY= "9f5f013c3c96189d6600a217610db540"
const BASE_URL="http://api.marketstack.com/v1"


export const fetchStockData = async (symbol = 'AAPL') => {
  try {
    const response = await fetch(`${BASE_URL}/eod?access_key=${API_KEY}&symbols=${symbol}`);
    
    if (!response.ok) throw new Error('Network response was not ok');
    
    const result = await response.json();
    console.log(result.data)
    return result.data; 
    
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
};