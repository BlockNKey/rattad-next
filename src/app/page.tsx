import Image from "next/image";

import Button from "molecules/Button";

import AppBar from "components/AppBar";
import RecentCarousel from "components/RecentCarousel";
import TabBar from "components/TabBar";

const Home = () => (
  <div className="min-h-screen">
    <AppBar />
    <div className="pt-[15px]">
      <RecentCarousel />
      <div className="px-5 pb-[100px] pt-4">
        <div className="h1">Mis teid huvitab?</div>
        <div className="grid grid-cols-2 gap-2.5 pt-4">
          <div className="bg-gray rounded-xl p-4">
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
          <div className="bg-gray rounded-xl p-4">
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
          <div className="bg-gray rounded-xl p-4">
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
          <div className="bg-gray relative overflow-hidden rounded-xl p-4">
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
        <Button wrapperClass="mt-[30px]" label="Broneeri teenus" />
      </div>
    </div>
    <TabBar />
  </div>
);

export default Home;
