'use client';

import { client } from "@/sanity/lib/client";
import { useEffect, useRef, useState } from "react";

export const useSanityQuery = <T extends unknown>(query: string, slug?: string) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const hasFetched = useRef<boolean>(false);

  useEffect(() => {
    if (hasFetched.current) return;
    hasFetched.current = true;

    if (!slug) {
      client.fetch<T>(query).then((result) => {
        setData(result);
        setLoading(false);
      });
    } else {
      client.fetch<T>(query, { slug }).then((result) => {
        setData(result);
        setLoading(false);
      });
    }
  }, []);

  return { data, loading };
};
