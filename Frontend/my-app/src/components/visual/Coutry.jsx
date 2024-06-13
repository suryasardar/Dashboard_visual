import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Chart as Chartjs } from "chart.js/auto";
import {Line} from 'react-chartjs-2'

function Coutry() {
    const [value, setvalue] = useState({
      labels: [],
      datasets: [{ label: "intensity", data: [] }],
    });
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(
            "http://localhost:5000/Data/All"
          );
            console.log(response.data);
          if (response.data.data) {
            const data = response.data.data.map((DATA) => ({
              sector: DATA.sector,
              intensity: DATA.intensity,
            }));
            setvalue({
              labels: data.map((DATA) => DATA.sector),
              datasets: [
                {
                  label: "intensity",
                  data: data.map((DATA) => DATA.intensity),
                },
              ],
            });
          } else {
            console.log('No data found');
          }
        } catch (error) {
          console.log(error);
          console.error("Error fetching data:", error);
        }
      };
      fetchData();
    }, []);
  
    return (
      <div>
        {value.labels.length > 0 ? (
          <Line data={value} />
        ) : (
          <div>value is null</div>
        )}
      </div>
    );
  }
  
  export default Coutry;