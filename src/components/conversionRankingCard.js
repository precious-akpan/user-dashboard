import { Doughnut } from "react-chartjs-2";

import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";
import Card from "./card.component";
import { TbTargetArrow } from "react-icons/tb";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function ConversionRankingCard({ cardTitle, icon }) {
  return (
    <Card>
      <div className="p-5">
        <div className="flex justify-between text-gray-500">
          <h2 className="text-xl font-bold">{cardTitle}</h2>
          <div className="rounded-lg">{icon}</div>
        </div>
        <div className="md:grid md:grid-cols-2">
          <div className={"h-16 m-1"}>
            <Doughnut
              className={""}
              data={{
                labels: ["Conversion", "remaining"],
                datasets: [
                  {
                    id: 1,
                    label: "",
                    data: [40125, 3125],
                    backgroundColor: ["purple", "grey"],
                    borderRadius: 5,
                  },
                ],
              }}
              options={{
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    position: "right",
                    labels: { padding: 5, borderRadius: 15 },
                  },
                },
              }}
            />
          </div>
          <div className={"md:flex hidden items-center mx-2"}>
            <div className={"text-sm"}>
              <div>
                <span className={"text-gray-300"}>....................</span>{" "}
                <span className={"text-black"}>85%</span>{" "}
                <span className={"text-gray-300"}>....................</span>{" "}
                <span className={"text-purple-600"}>40125</span>
              </div>
              <div>
                <span className={"text-gray-300"}>....................</span>{" "}
                <span className={"text-black"}>15%</span>{" "}
                <span className={"text-gray-300"}>....................</span>{" "}
                <span className={"text-purple-600"}>3125</span>
              </div>
            </div>
          </div>
        </div>
        <div className={"justify-end hidden sm:flex"}>
          <div className={"flex text-purple-600 m-1 hover:cursor-pointer"}>
            <TbTargetArrow className={"m-1"} />
            Set Target
          </div>
          <div className={"m-1 text-gray-600"}>Target Ranking</div>
          <div className={"m-1"}>43,500</div>
        </div>
      </div>
    </Card>
  );
}
