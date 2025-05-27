import Decorsection from "@/components/homecomponents/decorsection";
import Driven from "@/components/homecomponents/driven";
import Herobanner from "@/components/homecomponents/herobanner";
import Realtime from "@/components/homecomponents/realtime";
import Wedesign from "@/components/homecomponents/wedegin";

export default function Home() {
  return (
    <>
      <Herobanner />
      <Wedesign />
      <Decorsection />
      <Realtime />
      <Driven />
    </>
  );
}
