import Container from "@/components/layout/Container"
import Section from "@/components/layout/Section"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRightIcon, ExternalLinkIcon } from "lucide-react"
import Link from "next/link"

export default function WhyItMatters() {
    const useCases = [
        {
            icon: "🎵",
            title: "Musicians",
            description: "can license remixes fairly."
        },
        {
            icon: "✍️",
            title: "Writers",
            description: "can trace adaptations back to their work."
        },
        {
            icon: "🤖",
            title: "AI builders",
            description: "can prove provenance and share royalties."
        },
        {
            icon: "🔗",
            title: "Agents",
            description: "can transact knowledge through",
            hasLink: true,
            linkUrl: "https://arxiv.org/pdf/2501.06243",
            linkText: "Agent TCP/IP"
        }
    ]

    return (
        <Section>
            <Container className="max-w-5xl">
                <div className="space-y-12">
                    {/* Header Section */}
                    <div className="text-center space-y-6">
                        <h2 className="text-4xl md:text-5xl font-bold text-balance">
                            Why It <span className="text-primary">Matters</span>
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto">
                            Creative work today is exploited: scraped by AI, locked behind intermediaries, stripped of attribution.{" "}
                            <span className="text-primary font-semibold">Storyism is a cultural stance.</span>
                            It frames the call for authorship, remix, and fair culture — and points toward infrastructures like{" "}
                            <a href="https://story.foundation" target="_blank" className="text-primary hover:underline">
                                Story Protocol
                            </a>{" "}
                            as a path to realize these values.
                        </p>
                    </div>

                    {/* What Becomes Possible Section */}
                    <div className="space-y-6">
                        <h3 className="text-2xl md:text-3xl font-bold text-center">
                            What Becomes <span className="text-primary">Possible</span>
                        </h3>

                        {/* Use Cases Grid */}
                        <div className="grid md:grid-cols-2 gap-6">
                            {useCases.map((useCase, index) => (
                                <Card key={index} className="p-6 bg-card/50 backdrop-blur-sm">
                                    <CardHeader className="p-0 -mb-6">
                                        <div className="flex items-center space-x-3">
                                            <span className="text-2xl">{useCase.icon}</span>
                                            <CardTitle>{useCase.title}</CardTitle>
                                        </div>
                                    </CardHeader>
                                    <CardContent className="p-0">
                                        <p className="text-muted-foreground">
                                            {useCase.description}
                                            {useCase.hasLink && (
                                                <>
                                                    {" "}
                                                    <a
                                                        href={useCase.linkUrl}
                                                        target="_blank"
                                                        className="inline-flex items-center space-x-1 underline hover:text-primary transition-colors duration-200"
                                                    >
                                                        <span>{useCase.linkText}</span>
                                                        <ExternalLinkIcon className="w-3 h-3" />
                                                    </a>
                                                </>
                                            )}
                                        </p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    )
}
