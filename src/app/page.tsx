import Image from "next/image";

import Button from "molecules/Button";

import AppBar from "components/AppBar";
import RecentCarousel from "components/RecentCarousel";
import TabBar from "components/TabBar";

const Home = () => (
  <div className="flex h-screen flex-col">
    <AppBar />
    <div className="px-5 pt-[35px]">
      <RecentCarousel />
    </div>
    <div className="h1 px-5 pt-4">Mis teid huvitab?</div>
    <div className="scrollbar-hide mt-4 flex-1 overflow-scroll">
      <div className="grid grid-cols-2 gap-2.5 overflow-scroll px-5">
        <div className="h-min rounded-xl bg-gray p-4">
          <div className="h-[100px]">
            <Image
              src="/tire.png"
              alt="tire"
              width={117}
              height={100}
              className="h-full"
            />
          </div>
          <div className="h3 pt-1.5">Rehvid</div>
        </div>
        <div className="h-min rounded-xl bg-gray p-4">
          <div className="h-[100px]">
            <Image
              src="/rim.png"
              alt="rim"
              width={117}
              height={100}
              className="h-full"
            />
          </div>
          <div className="h3 pt-1.5">Veljed</div>
        </div>
        <div className="h-min rounded-xl bg-gray p-4">
          <div className="h-[100px]">
            <Image
              src="/full_tire.png"
              alt="full tire"
              width={117}
              height={100}
              className="h-full"
            />
          </div>
          <div className="h3 pt-1.5">
            Veljed+
            <br />
            Rehvid
          </div>
        </div>
        <div className="relative h-min overflow-hidden rounded-xl bg-gray p-4">
          <div className="h-[100px] overflow-hidden">
            <Image
              src="/car_placeholder.png"
              alt="car"
              width={160}
              height={110}
              className="absolute left-0 top-0 h-[130px]"
            />
          </div>
          <div className="h3 pt-1.5">
            Rehvikoda
            <br />
            ja teenused
          </div>
        </div>
      </div>
    </div>
    <Button wrapperClass="pt-4 pb-9 px-5" label="Broneeri teenus" />
    <TabBar />
  </div>
);

export default Home;
