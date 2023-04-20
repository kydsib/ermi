import { useState, useEffect } from 'react';

import fakeData from '@mocks/fakeData.json';

type ApiResponse = {
  title: string;
  mainImage: string;
  price: {
    mainPrice: number;
    discountPrice: number;
    pricePerSquare: number;
  };
  highlights: {
    title: string;
    value: string;
  }[];
  availableShipping: string[];
};


const useCallApi = () => {
  const [response, setResponse] = useState<ApiResponse>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await new Promise((resolve) => {
          setTimeout(() => {
            resolve(fakeData);
          }, 1000);
        });
        setResponse(response as ApiResponse);
      } catch (error: any ) { 
        console.error(error, 'error');
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);


  return { response, isLoading };
  
}

export default useCallApi;
