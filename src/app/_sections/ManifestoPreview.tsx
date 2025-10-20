import Container from "@/components/layout/Container"
import Section from "@/components/layout/Section"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

const theses = [
    "Authorship is not a luxury — it's a right.",
    "Remix is culture, not theft — when attribution and terms are clear.",
    "Royalties should flow with the work, not stall in middlemen.",
    "Programmable licenses make fairness legible.",
    "Communities — not corporations — set the new cultural norms.",
]

export default function ManifestoPreview() {
    return (
        <Section>
            <Container>
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Header Section */}
                    <div className="space-y-6">
                        <h2 className="text-4xl md:text-5xl font-bold text-balance">
                            Manifesto <span className="text-primary">(Preview)</span>
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Five core principles that guide our movement toward IP sovereignty and fair creator culture.
                        </p>
                        <blockquote className="text-xl text-primary italic leading-relaxed border-l-4 border-primary/30 pl-6">
                            "Sovereignty means your name stays on your work — and value finds its way back to the source."
                        </blockquote>
                        <Button asChild size="lg" className="animate-glow">
                            <a href="/manifesto" className="inline-flex items-center space-x-2">
                                <span>Read Full Manifesto</span>
                                <ArrowRight className="w-5 h-5" />
                            </a>
                        </Button>
                    </div>

                    {/* Theses Card */}
                    <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/20 animate-float">
                        <CardHeader className="p-0">
                            <CardTitle className="text-2xl mb-6">Core Theses</CardTitle>
                        </CardHeader>
                        <CardContent className="p-0 space-y-6">
                            {theses.map((thesis, index) => (
                                <div key={index} className="flex items-start space-x-4">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm transition-colors duration-200 hover:bg-primary/30">
                                        {index + 1}
                                    </div>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {thesis}
                                    </p>
                                </div>
                            ))}
                        </CardContent>
                    </Card>
                </div>
            </Container>
        </Section>
    )
}
