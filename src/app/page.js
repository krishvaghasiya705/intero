import Decorsection from "@/components/homecomponents/decorsection";
import Driven from "@/components/homecomponents/driven";
import Herobanner from "@/components/homecomponents/herobanner";
import Realtime from "@/components/homecomponents/realtime";
import Wedesign from "@/components/homecomponents/wedegin";
import Interiordesign from "@/components/homecomponents/interiordesign";
import Wecreate from "@/components/homecomponents/wecreate";
import Interiordesigners from "@/components/homecomponents/interiordesigners";
import Contactus from "@/components/homecomponents/contactus";

export default function Home() {
  return (
    <>
      <Herobanner />
      <Wedesign />
      <Decorsection />
      <Realtime />
      <Driven />
      <Interiordesign />
      <Wecreate />
      <Interiordesigners />
      <Contactus />
    </>
  );
}
