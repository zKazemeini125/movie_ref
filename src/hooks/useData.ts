import { useEffect, useState } from "react";
import apiClient from "../services/api-Client";
import { IFetchResponse } from "../Interface";
import { CanceledError } from "axios";

const UseData = <T>(
  endpoint: string
): { data: T[]; error: string; isLoading: boolean } => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);
  const controller = new AbortController();
  useEffect(() => {
    setLoading(true);
    apiClient
      .get<IFetchResponse<T>>(endpoint, { signal: controller.signal })
      .then((res) => {
        setData(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });
    return () => controller.abort();
  }, []);

  return { data, error, isLoading };
};

export default UseData;
