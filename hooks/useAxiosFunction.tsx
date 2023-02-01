import { useState, useEffect } from 'react';
import axios, { AxiosError, AxiosRequestConfig } from 'axios';

interface CustomConfig {
  url: string;
  method?: string;
  config?: AxiosRequestConfig;
  open?: boolean;
}

const BASE_URL = 'https://logifleet360.ch/lfr3/eg-services/';

const LFAxios = axios.create({
  baseURL: BASE_URL,
  headers: {
    'content-type': 'application/json',
  },
});

function useAxiosFunction<T>(): [({ url, method, config, open }: CustomConfig) => void, string, boolean, T?] {
  const [response, setResponse] = useState<T>();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [controller, setController] = useState<AbortController>();

  async function fetch({ url, method = 'GET', open = false, config = {} }: CustomConfig) {
    try {
      setLoading(true);
      const ctrl = new AbortController();
      setController(ctrl);
      if (!open) {
        config.headers = {
          'X-LFR-MOBILEAPPKEY': 'c96d3af7-b77f-4c42-86f9-c75fac510dd8',
          'X-LFR-USERID': '6f73d4b4-367e-48c4-bb9a-6eae77034f68',
        };
      }
      const res = await LFAxios({
        url: url,
        method: method.toLowerCase(),
        ...config,
      });
      setResponse(res.data);
    } catch (err: any | AxiosError) {
      if (axios.isAxiosError(err)) {
        setError(err.message);
      } else {
        console.log(err);
      }
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    return () => controller?.abort();
  }, [controller]);

  return [fetch, error, loading, response];
}

export default useAxiosFunction;
