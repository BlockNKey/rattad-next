import AppBar from "components/AppBar";
import TabBar from "components/TabBar";
import MenuItem from "molecules/SettingItems/MenuItem";
import ToggleItem from "molecules/SettingItems/ToggleItem";

const Page = () => (
  <div className="flex h-screen flex-col bg-gray">
    <AppBar />
    <div className="scrollbar-hide flex flex-1 flex-col gap-2.5 overflow-scroll">
      <div className="bg-white pb-[14px] pt-[15px]">
        <div className="h1 px-5 pb-3">Minu profiil</div>
        <MenuItem title="Profiiliandmed" />
        <MenuItem title="Keel / Language" />
      </div>
      <div className="flex flex-col bg-white pb-[22px] pt-[23px]">
        <MenuItem title="Minu rehvihotell" special type="Michelin R19" />
        <MenuItem title="Minu broneeringud" />
        <MenuItem title="Minu otsingud" />
      </div>
      <div className="bg-white px-5 py-6">
        <ToggleItem
          title="Olulised teavitused"
          description="Lorem ipsum dolor sit amet"
        />
      </div>
      <div className="bg-white px-5 py-6">
        <ToggleItem
          title="Eripakkumised"
          description="Lorem ipsum dolor sit amet"
        />
      </div>
    </div>
    <TabBar />
  </div>
);

export default Page;
