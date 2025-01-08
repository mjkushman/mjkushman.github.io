// not convinced I need a dedicated api utility since I will only make a couple calls.

export const autoBloggerFetch = async (
    endpoint: string,
    options: RequestInit = {}
  ): Promise<Response> => {
    const apiKey = process.env.AUTOBLOGGER_API_KEY
    const baseUrl = "https://autobloggerapi.onrender.com/api/v1/"
    
    const defaultHeaders = {
      "Content-Type": "application/json",
      "X-API-KEY": apiKey,
    };
  
    const mergedOptions: RequestInit = {
      ...options,
      headers: {
        ...defaultHeaders,
        ...(options.headers || {}),
      },
    };
    const fetchUrl = [baseUrl, endpoint].join("")
    // console.log('sending request to', fetchUrl)
    // console.log('with merged options:', mergedOptions)
    const response = await fetch(fetchUrl, mergedOptions);
  
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || "Something went wrong");
    }
  
    return await response.json();
  };