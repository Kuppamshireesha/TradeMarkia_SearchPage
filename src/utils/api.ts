import axios from 'axios';

export const searchTrademarks = async (query: string) => {
  try {
    const response = await axios.post(
      'https://vit-tm-task.api.trademarkia.app/api/v3/us',
      {
        input_query: query,
        input_query_type: "",
        sort_by: "default",
        status: [],
        exact_match: false,
        date_query: false,
        owners: [],
        attorneys: [],
        law_firms: [],
        mark_description_description: [],
        classes: [],
        page: 1,
        rows: 10,
        sort_order: "desc",
        states: [],
        counties: []
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }
    );
    return response.data.results || [];
  } catch (error) {
    console.error('API call failed:', error);
    throw error;
  }
};
