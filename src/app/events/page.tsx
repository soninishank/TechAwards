import { events } from '@/data/events';
import { EventCard } from '@/components/events/EventCard';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Events & Showcases | National Technology Excellence Award',
  description: 'Discover our upcoming events, award ceremonies, hackathons, and community gatherings.',
};

export default function EventsPage() {
  const upcomingEvents = events.filter((event) => event.status === 'upcoming');
  const pastEvents = events.filter((event) => event.status === 'past');

  return (
    <div className="px-6 py-16 md:px-10 md:py-20">
      <div className="mx-auto w-full max-w-[1240px]">
        <div className="mb-12 rounded-3xl border border-white/10 bg-slate-900/70 p-6 md:p-9">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-amber-200">Community Calendar</p>
          <h1 className="mt-2 font-display text-4xl text-white md:text-5xl">2019 Awards Event Timeline</h1>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-400 md:text-base">
            From finalist showcases to post-event discussions, this is the archived timeline around the September 15, 2019 awards function at Taj MG Road, Bengaluru.
          </p>
        </div>

        <section className="mb-14">
          <h2 className="mb-5 text-2xl text-white">Upcoming Events</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {upcomingEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
          {upcomingEvents.length === 0 && (
            <p className="text-sm text-slate-400">No upcoming events. This page is showing the archived 2019 season.</p>
          )}
        </section>

        <section>
          <h2 className="mb-5 text-2xl text-white">Past Highlights</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {pastEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
