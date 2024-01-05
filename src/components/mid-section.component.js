import { MdOutlineAddBox } from "react-icons/md";
import CardComponent from "./cardList.component";
import { PiHandbagFill } from "react-icons/pi";
import { RiBarChartBoxFill } from "react-icons/ri";
import { FaArrowsRotate } from "react-icons/fa6";
import ConversionRankingCard from "./conversionRankingCard";
import TopProducts from "./top-products.components";

const MidSectionComponent = () => {
  return (
    <div className="bg-white">
      <div className={"flex justify-between p-8 sm:px-24 sm:py-10"}>
        <h1 className={"text-2xl"}>Your Dashboard</h1>
        <button
          className={"bg-violet-900 text-white flex p-2 sm:p-5 rounded-md"}
        >
          <MdOutlineAddBox className={"m-1 hidden sm:flex"} />
          Add new gadget
        </button>
      </div>
      <div className={"lg:px-20"}>
        <div className="md:flex justify-center">
          <CardComponent
            cardTitle={"Total Prospects"}
            icon={<PiHandbagFill />}
            value={3400}
            totalValue={Number(102000).toLocaleString()}
            percentValue={5.1}
            isAppreciated={false}
          />
          <CardComponent
            cardTitle={"Total Conversion"}
            icon={<FaArrowsRotate />}
            value={12600}
            totalValue={Number(40125).toLocaleString()}
            percentValue={93.6}
            isAppreciated={true}
          />
          <ConversionRankingCard
            cardTitle={"Overall Conversion Ranking"}
            icon={<RiBarChartBoxFill />}
          />
        </div>
        <div className={"text-2xl p-6"}>Top Products</div>
        <TopProducts />
      </div>
    </div>
  );
};

export default MidSectionComponent;
