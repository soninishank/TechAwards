import { HeroSection } from '@/components/sections/HeroSection';
import { StatsSection } from '@/components/sections/StatsSection';
import { PartnersSection } from '@/components/sections/PartnersSection';
import MissionSection from '@/components/sections/MissionSection';
import { PreviousWinnersSection } from '@/components/sections/PreviousWinnersSection';

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: 'National Technology Excellence Award 2019',
    description: 'Official archive of the 2019 National Technology Excellence Award with finalists, judges, winners, and event timeline.',
    url: 'https://nationaltechexcellence.in',
    startDate: '2019-01-01T00:00:00+05:30',
    endDate: '2019-12-31T23:59:59+05:30',
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    location: {
      '@type': 'Place',
      name: 'India',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'IN'
      }
    },
    organizer: {
      '@type': 'Organization',
      name: 'National Technology Excellence Award',
      url: 'https://nationaltechexcellence.in'
    }
  };

  return (
    <div className="flex flex-col gap-0">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroSection />
      <StatsSection />
      <PartnersSection />
      <PreviousWinnersSection />
      <MissionSection />
    </div>
  );
}
