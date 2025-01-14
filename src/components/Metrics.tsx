"use client";

import React, { useEffect, useState } from "react";

const Metrics = () => {
  async function fetchRequests(): Promise<number> {
    try {
      const response = await fetch("https://api.runpod.ai/metrics");
      const { requests } = await response.json();
      return requests;
    } catch (error) {
      console.log("error fetching", error);
    }
    return 0;
  }

  const [data, setData] = useState(() => fetchRequests());

  useEffect(() => {
    setData(() => fetchRequests());

    const intervalId = setInterval(fetchRequests, 5000);

    return () => clearTimeout(intervalId);
  }, []);

  if (!data) return;
  return <div>{data.toLocaleString()}</div>;
};

export default Metrics;
