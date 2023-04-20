import { useState, useEffect } from 'react';

import fakeData from '@mocks/fakeData.json';
import {Product} from '@utils/ProductInterface'


const useCallApi = () => {
  const [response, setResponse] = useState<Product[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = new Promise((resolve) => {
          setTimeout(() => {
            resolve(fakeData);
          }, 1000);
        });

        const data = await response;
        setResponse(data as Product[]);
  
        setIsLoading(false);
      } catch (error: any ) { 
        setError(error.message);
      }
    };
    fetchData();
  }, []);

  return { response, error, isLoading };
}

export default useCallApi;
