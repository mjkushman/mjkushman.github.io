"use client";

import React, { useEffect, useState } from "react";

type Props = {};

const Metrics = (props: Props) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchRequests() {
      try {
        const response = await fetch("https://api.runpod.ai/metrics");
        const { requests } = await response.json();
        setData(requests);
      } catch (error) {
        console.log("error fetching", error);
      }
    }
    fetchRequests();

    const intervalId = setInterval(fetchRequests, 5000);

    return () => clearTimeout(intervalId);
  }, []);

  return <div>{data && data.toLocaleString("en-US")}</div>;
};

export default Metrics;
