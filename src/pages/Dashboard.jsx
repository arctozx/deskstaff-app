import React from "react";
import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line, Doughnut, Bar } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  // Line chart data
  const lineChartData = {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
    ],
    datasets: [
      {
        label: "Job Order",
        data: [50, 60, 200, 300, 600, 700, 750, 900],
        borderColor: "purple",
        backgroundColor: "rgba(128, 0, 128, 0.5)",
      },
      {
        label: "Regular",
        data: [200, 250, 250, 250, 300, 500, 400, 600],
        borderColor: "green",
        backgroundColor: "rgba(0, 128, 0, 0.5)",
      },
    ],
  };

  // Doughnut chart data
  const doughnutChartData = {
    labels: ["Total Employees"],
    datasets: [
      {
        data: [900],
        backgroundColor: ["#4e73df"],
        hoverBackgroundColor: ["#2e59d9"],
      },
    ],
  };

  // Bar chart data
  const barChartData = {
    labels: ["Regular", "Non-Regular"],
    datasets: [
      {
        data: [40, 60],
        backgroundColor: ["#36b9cc", "#e74a3b"],
      },
    ],
  };

  return (
    <div className="p-4 sm:p-6">
      <h1 className="text-xl sm:text-2xl font-bold mb-4">EMPLOYEES DATA</h1>
      <div className="h-64 sm:h-96 mb-8">
        <Line
          data={lineChartData}
          options={{ responsive: true, maintainAspectRatio: false }}
        />
      </div>
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="w-full lg:w-1/3">
          <h2 className="text-lg sm:text-xl font-semibold mb-2">
            TOTAL EMPLOYEES
          </h2>
          <div className="relative h-64">
            <Doughnut
              data={doughnutChartData}
              options={{ responsive: true, maintainAspectRatio: false }}
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <p className="text-lg font-bold">200</p>
              <p className="text-sm">Total Employees</p>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-2/3">
          <h2 className="text-lg sm:text-xl font-semibold mb-2">
            EMPLOYEE DISTRIBUTION
          </h2>
          <div className="h-64">
            <Bar
              data={barChartData}
              options={{
                indexAxis: "y",
                responsive: true,
                maintainAspectRatio: false,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
