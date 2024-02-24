import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import Chart from "chart.js/auto";

function LineGraph() {
  const [data, setData] = useState([]);
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:9001/data");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (data.length > 0 && chartRef.current) {
      if (chartInstance.current) {
        chartInstance.current.destroy(); // Destroy existing chart if it exists
      }
      renderLineGraph();
    }
  }, [data]);

  const renderLineGraph = () => {
    const dates = data.map((item) => item.Date);
    const scores = data.map((item) =>
      parseFloat(item["Questionnaire Score"].replace(",", ""))
    );

    const ctx = chartRef.current.getContext("2d");

    chartInstance.current = new Chart(ctx, {
      type: "line",
      data: {
        labels: dates,
        datasets: [
          {
            label: "Questionnaire Score",
            data: scores,
            borderColor: "blue",
            borderWidth: 1,
            fill: false,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: true, // Ensure the chart fills its container
        scales: {
          x: {
            title: {
              display: true,
              text: "Date",
            },
          },
          y: {
            title: {
              display: true,
              text: "Questionnaire Score",
            },
          },
        },
      },
    });
  };

  return <canvas ref={chartRef} width="100%" height="100%"></canvas>;
}

export default LineGraph;
