import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const posts = [
  {
    title: 'What Judges Look for in Product Impact',
    excerpt: 'A practical breakdown of how judging panels evaluate measurable customer outcomes and business value.',
    category: 'Awards Insights',
    date: 'July 06, 2026',
    readTime: '5 min read',
  },
  {
    title: 'How Winning Teams Tell Better Engineering Stories',
    excerpt: 'Why clear technical narratives help companies stand out during finalist presentations.',
    category: 'Engineering',
    date: 'June 28, 2026',
    readTime: '8 min read',
  },
  {
    title: 'Community-Led Recognition Beats Vanity Awards',
    excerpt: 'What changes when awards are built by operators, leaders, and attendees instead of paid promotions.',
    category: 'Community',
    date: 'June 14, 2026',
    readTime: '6 min read',
  },
];

export default function BlogPage() {
  return (
    <div className="w-full py-16 md:py-24">
      <div className="mx-auto mb-12 max-w-7xl px-4">
        <h1 className="mb-4 text-4xl font-bold">Stories Behind the Awards</h1>
        <p className="text-xl text-muted-foreground">Deep dives, interviews, and insights from finalists, judges, and community members.</p>
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Card key={post.title} className="flex h-full flex-col">
            <CardHeader>
              <div className="mb-2 flex items-center justify-between">
                <Badge variant="secondary">{post.category}</Badge>
                <span className="text-xs text-muted-foreground">{post.readTime}</span>
              </div>
              <CardTitle className="mb-2 text-xl">{post.title}</CardTitle>
              <CardDescription>{post.date}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-muted-foreground">{post.excerpt}</p>
            </CardContent>
            <CardFooter>
              <Button variant="link" className="h-auto p-0 font-semibold text-primary" asChild>
                <Link href="/awards/how-it-works">
                  Read Insight <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
