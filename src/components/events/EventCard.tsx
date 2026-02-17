import { Calendar, MapPin, Clock, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import Link from 'next/link';
import { Event } from '@/data/events';

interface EventCardProps {
  event: Event;
}

export function EventCard({ event }: EventCardProps) {
  return (
    <Card className="flex h-full flex-col overflow-hidden border-white/10 bg-slate-900/70 text-slate-100 transition-all hover:-translate-y-1 hover:border-amber-300/40">
      <div className="relative h-48 w-full">
        <Image
          src={event.image}
          alt={event.title}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute left-4 top-4">
          <Badge variant="outline" className="border-white/40 bg-slate-950/70 text-slate-100 backdrop-blur-sm">
            {event.category}
          </Badge>
        </div>
        <div className="absolute right-4 top-4">
          <Badge className={event.status === 'upcoming' ? 'bg-emerald-500 text-white' : 'bg-slate-700 text-slate-100'}>
            {event.status === 'upcoming' ? 'Upcoming' : 'Past'}
          </Badge>
        </div>
      </div>

      <CardHeader>
        <CardTitle className="line-clamp-2 text-xl">{event.title}</CardTitle>
        <CardDescription className="mt-2 flex items-center gap-2 text-slate-300">
          <Calendar className="h-4 w-4" /> {event.date}
        </CardDescription>
      </CardHeader>

      <CardContent className="flex-grow">
        <div className="mb-4 space-y-2 text-sm text-slate-300">
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" /> {event.time}
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4" /> {event.location}
          </div>
        </div>
        <p className="line-clamp-3 text-sm text-slate-400">{event.description}</p>
      </CardContent>

      <CardFooter>
        <Button
          className="w-full"
          variant={event.status === 'upcoming' ? 'default' : 'outline'}
          asChild
        >
          <Link href={event.registrationLink}>
            {event.status === 'upcoming' ? 'Register / Join' : 'View Recap'} <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
