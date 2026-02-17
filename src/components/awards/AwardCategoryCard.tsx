import { AwardCategory } from '@/data/awards';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Rocket, UserCheck, Heart, Globe, Code, type LucideIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const iconMap: Record<string, LucideIcon> = {
    Rocket,
    UserCheck,
    Heart,
    Globe,
    Code,
};

interface AwardCategoryCardProps {
    category: AwardCategory;
}

export function AwardCategoryCard({ category }: AwardCategoryCardProps) {
    const Icon = iconMap[category.icon] || Rocket;

    return (
        <Card className="flex flex-col h-full hover:border-primary transition-colors">
            <CardHeader>
                <div className="p-3 bg-primary/10 rounded-full w-fit mb-4 text-primary">
                    <Icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">{category.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow flex flex-col justify-between">
                <div>
                    <p className="text-muted-foreground mb-4">
                        {category.description}
                    </p>
                    <div className="mb-6">
                        <h4 className="font-semibold text-sm mb-2">Key Criteria:</h4>
                        <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                            {category.criteria.map((c, i) => (
                                <li key={i}>{c}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <Button variant="outline" className="w-full" asChild>
                    <Link href={`/awards/contact?category=${category.id}`}>
                        Nominate Now
                    </Link>
                </Button>
            </CardContent>
        </Card>
    );
}
