import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import Card from "./card.component";

export default function ({
  cardTitle,
  value,
  totalValue,
  icon,
  percentValue,
  isAppreciated,
}) {
  return (
    <Card>
      <div className='p-5 w-70'>
        <div className="flex justify-between text-gray-500">
          <h2 className="text-xl font-bold">{cardTitle}</h2>
          <div className="rounded-lg mx-4">{icon}</div>
        </div>
        <div className="flex text-3xl text-purple-600 py-6">{totalValue}</div>
        <footer className="flex justify-between">
          <span
            className={`flex ${
              isAppreciated ? "text-green-600" : "text-red-600"
            } text-xl font-bold`}
          >
            {isAppreciated ? (
              <IoMdArrowDropup className={"p-1"} size={"1.5em"} />
            ) : (
              <IoMdArrowDropdown className={"p-1"} size={"1.5em"} />
            )}
            {percentValue}%
          </span>
          {
            <span className={"text-xl text-gray-500 mx-4"}>
              {value} This week
            </span>
          }
        </footer>
      </div>
    </Card>
  );
}
