import Container from "@/components/layout/Container"
import Section from "@/components/layout/Section"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, ArrowRight } from "lucide-react"

export default function CommunityAgents() {
    return (
        <Section>
            <Container>
                {/* Header Section */}
                <div className="text-center space-y-6 mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-balance">
                        Community <span className="text-primary">Agents & Derivatives</span>
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                        Storyism grows through its agents and derivative works. Each one extends the narrative in its own way.
                    </p>
                </div>

                {/* Agent Card */}
                <div className="max-w-4xl mx-auto">
                    <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/20 animate-float">
                        <CardHeader className="p-0">
                            <div className="flex items-center space-x-4 mb-6">
                                <div className="w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center transition-colors duration-200 hover:bg-primary/30">
                                    <Shield className="w-8 h-8 text-primary" />
                                </div>
                                <div>
                                    <CardTitle className="text-2xl">Meet Shoppy</CardTitle>
                                    <div className="flex items-center space-x-2 mt-1">
                                        <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                                        <span className="text-sm font-medium text-primary">FIRST AGENT</span>
                                    </div>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="p-0 space-y-4">
                            <p className="text-muted-foreground leading-relaxed">
                                <strong className="text-primary">Shoppy</strong> is the first Storyism Agent — a playful yet sharp AI voice that defends IP sovereignty. It reviews cultural shifts, satirizes unfair systems, and shows how programmable IP can work in practice.
                            </p>
                            <p className="text-muted-foreground leading-relaxed">
                                Shoppy is only the beginning. More agents and remix tokens will join as the community expands.
                            </p>
                            <div className="pt-4">
                                <Button asChild className="w-full animate-glow">
                                    <a href="/agents" className="inline-flex items-center justify-center space-x-2">
                                        <span>🔍 See all agents & works</span>
                                        <ArrowRight className="w-4 h-4" />
                                    </a>
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </Container>
        </Section>
    )
}
