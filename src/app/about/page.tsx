import { Code2, Heart, Users, Globe } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function AboutPage() {
    return (
        <div className="w-full py-16 md:py-24">
            {/* Hero */}
            <div className="text-center mb-16 max-w-5xl mx-auto px-4">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                    Celebrating Technology Builders, Together
                </h1>
                <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
                    Tech Award Summit is a community-led platform dedicated to connecting, empowering, and recognizing people building meaningful technology.
                </p>
            </div>

            {/* Story */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24 max-w-7xl mx-auto px-4">
                <div>
                    <h2 className="text-3xl font-bold mb-4">Our Story</h2>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                        It started with a simple observation: incredible product and engineering work often goes unseen outside individual company circles. Teams ship quietly, leaders mentor silently, and communities miss chances to learn from one another.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                        Tech Award Summit was created to bridge that gap. Through awards, finalist showcases, and events, we help people discover who is raising the bar and why their work matters.
                    </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-primary/10 p-6 rounded-2xl flex flex-col items-center justify-center text-center aspect-square">
                        <Users className="h-8 w-8 text-primary mb-2" />
                        <h3 className="font-bold text-2xl">4,200+</h3>
                        <p className="text-sm text-muted-foreground">Community Members</p>
                    </div>
                    <div className="bg-primary/10 p-6 rounded-2xl flex flex-col items-center justify-center text-center aspect-square">
                        <Globe className="h-8 w-8 text-primary mb-2" />
                        <h3 className="font-bold text-2xl">38</h3>
                        <p className="text-sm text-muted-foreground">Cities Active</p>
                    </div>
                    <div className="bg-primary/10 p-6 rounded-2xl flex flex-col items-center justify-center text-center aspect-square">
                        <Code2 className="h-8 w-8 text-primary mb-2" />
                        <h3 className="font-bold text-2xl">510</h3>
                        <p className="text-sm text-muted-foreground">Nominations Reviewed</p>
                    </div>
                    <div className="bg-primary/10 p-6 rounded-2xl flex flex-col items-center justify-center text-center aspect-square">
                        <Heart className="h-8 w-8 text-primary mb-2" />
                        <h3 className="font-bold text-2xl">∞</h3>
                        <p className="text-sm text-muted-foreground">Love for Code</p>
                    </div>
                </div>
            </div>

            {/* Values */}
            <div className="mb-16 max-w-7xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 text-center">Our Core Values</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <Card>
                        <CardContent className="pt-6">
                            <h3 className="font-bold text-xl mb-2">Community First</h3>
                            <p className="text-muted-foreground">Every decision we make starts with the question: &quot;Does this help the community grow?&quot;</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="pt-6">
                            <h3 className="font-bold text-xl mb-2">Excellence Always</h3>
                            <p className="text-muted-foreground">We celebrate quality code, scalable architecture, and thoughtful design.</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="pt-6">
                            <h3 className="font-bold text-xl mb-2">Open Bridges</h3>
                            <p className="text-muted-foreground">We believe in open source, open knowledge, and open doors for everyone.</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
