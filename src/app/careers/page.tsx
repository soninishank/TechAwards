import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Briefcase, ArrowRight } from 'lucide-react';

export default function CareersPage() {
    return (
        <div className="w-full py-16 md:py-24">
            <div className="flex flex-col items-center text-center max-w-2xl mx-auto border p-12 rounded-2xl bg-muted/30">
                <div className="p-4 bg-primary/10 rounded-full mb-6 text-primary">
                    <Briefcase className="h-10 w-10" />
                </div>
                <h1 className="text-4xl font-bold mb-4">Job Board Coming Soon</h1>
                <p className="text-lg text-muted-foreground mb-8">
                    We are building the most curated job board for Indian tech talent. Connect with top startups and MNCs hiring in Bangalore, Hyderabad, Pune, and remotely.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
                    <Button size="lg" asChild>
                        <Link href="/">
                            Return Home
                        </Link>
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                        <Link href="#">
                            Notify Me When Live <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </div>
                <p className="text-sm text-muted-foreground mt-8">
                    Are you a recruiter? <Link href="#" className="text-primary underline hover:text-primary/80">Partner with us</Link>
                </p>
            </div>
        </div>
    );
}
