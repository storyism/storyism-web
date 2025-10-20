import Container from "@/components/layout/Container"
import Section from "@/components/layout/Section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PenTool, Palette, Bot, MessageCircle } from "lucide-react"

const contributions = [
    {
        icon: PenTool,
        title: "Write & Share",
        description: "Publish an article, opinion, or creative essay in the Knowledge Hub.",
        link: "/knowledge",
    },
    {
        icon: Palette,
        title: "Remix & Tokenize",
        description: "Create derivative art or remix tokens linked to the Storyism IP record.",
        link: "https://ip.world/ip/storyism",
    },
    {
        icon: Bot,
        title: "Build an Agent",
        description: "Extend the movement with AI agents and register them in the agents directory.",
        link: "/agents",
    },
    {
        icon: MessageCircle,
        title: "Join the Culture",
        description: "Share memes, ideas, or critiques — every voice shapes the norms of fair attribution.",
    },
]

export default function HowToContribute() {
    return (
        <Section>
            <Container>
                <div className="grid lg:grid-cols-3 gap-12 items-start">
                    {/* Header Section */}
                    <div className="space-y-6">
                        <h2 className="text-4xl md:text-5xl font-bold text-balance">
                            How to <span className="text-primary">Contribute</span>
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            There's more than one way to take part in Storyism. Every contribution extends the story.
                        </p>
                    </div>

                    {/* Contributions Grid */}
                    <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
                        {contributions.map((item, index) => (
                            <Card key={index} className="p-6 bg-card/50 backdrop-blur-sm group">
                                <CardHeader className="p-0">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center transition-colors duration-200 group-hover:bg-primary/30">
                                            <item.icon className="w-6 h-6 text-primary" />
                                        </div>
                                        <CardTitle className="text-xl">{item.title}</CardTitle>
                                    </div>
                                </CardHeader>
                                <CardContent className="p-0 -mt-4">
                                    <p className="text-muted-foreground leading-relaxed mb-4">
                                        {item.description}
                                    </p>
                                    {item.link && (
                                        <a
                                            href={item.link}
                                            className="text-primary hover:underline text-sm font-medium transition-colors duration-200"
                                        >
                                            Learn more →
                                        </a>
                                    )}
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </Container>
        </Section>
    )
}
