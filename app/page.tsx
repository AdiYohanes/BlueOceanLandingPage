import FirstSection from "@/components/Home/FirstSection";
import Partner from "@/components/Home/Partner";
import SecondSection from "@/components/Home/SecondSection";


export default function Home() {
  return (
    <div className="block">
      <FirstSection />
      <SecondSection />
      <Partner />
    </div>
  );
}
