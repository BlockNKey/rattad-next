import AppBar from "components/AppBar";
import TabBar from "components/TabBar";
import MenuItem from "molecules/SettingItems/MenuItem";
import ToggleItem from "molecules/SettingItems/ToggleItem";

const Page = () => (
  <div className="bg-gray min-h-screen">
    <AppBar />
    <div className="flex flex-col gap-2.5 pb-[100px]">
      <div className="bg-white px-5 pb-[22px] pt-[15px]">
        <div className="h1">Minu profiil</div>
        <MenuItem title="Profiiliandmed" wrapperClass="pt-[19px]" />
        <MenuItem title="Keel / Language" wrapperClass="pt-[17px]" />
      </div>
      <div className="flex flex-col gap-5 bg-white px-5 pb-[22px] pt-[23px]">
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
