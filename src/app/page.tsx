import { HeroSection } from '@/components/sections/HeroSection';
import { StatsSection } from '@/components/sections/StatsSection';
import { PartnersSection } from '@/components/sections/PartnersSection';
import MissionSection from '@/components/sections/MissionSection';
import { PreviousWinnersSection } from '@/components/sections/PreviousWinnersSection';

export default function Home() {
  return (
    <div className="flex flex-col gap-0">
      <HeroSection />
      <StatsSection />
      <PartnersSection />
      <PreviousWinnersSection />
      <MissionSection />
    </div>
  );
}
