import Container from "@/components/layout/Container"
import Section from "@/components/layout/Section"
import { Card } from "@/components/ui/card"
import { MoveRightIcon } from "lucide-react"
import Link from "next/link"

export default function WhatIsStoryism() {
    return (
        <Section>
            <Container>
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
                            What is <span className="text-primary">Storyism</span>
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                            Storyism is a community movement and a registered Community IP that believes creators must keep control of their work in the AI era. Its mission is to grow from collective participation by encouraging adoption of <a href="https://story.foundation" target="_blank">Story Protocol</a>, shaping clear licensing frameworks, fostering ethical remix culture, and building shared norms for attribution and fair value.
                        </p>
                        <a
                            href="https://ip.world/ip/storyism"
                            target="_blank"
                            className="group block"
                        >
                            <div className="inline-flex pr-4 rounded items-center space-x-4 hover:bg-accent/10 transition-all duration-200 group-hover:scale-[1.03]">
                                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center transition-colors duration-200 group-hover:bg-primary/30">
                                    <span className="text-primary text-xl transition-transform duration-200 group-hover:scale-110">📋</span>
                                </div>
                                <div>
                                    <p className="font-semibold">See the IP record</p>
                                    <p className="text-sm text-muted-foreground">Full registration details</p>
                                </div>
                                <MoveRightIcon className="text-muted-foreground transition-transform duration-200 translate-x-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 ml-2" />
                            </div>
                        </a>
                    </div>

                    <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/20 animate-float">
                        <div className="space-y-6">
                            <div className="flex items-center space-x-4">
                                <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                                <span className="text-sm font-medium text-primary">MOVEMENT STATUS</span>
                            </div>
                            <h3 className="text-2xl font-bold">A bottom-up community movement</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                It exists to uphold authorship, foster ethical remixing, and establish fair cultural norms. Story Protocol provides the technical foundation, while Storyism drives adoption through community practice and shared frameworks.
                            </p>
                            <div className="pt-4 border-t border-border">
                                <Link href={"/manifesto"} className="text-sm italic text-secondary/60 hover:text-secondary inline-flex items-center space-x-1 hover:underline transition-all duration-200">
                                    See how the movement connects with Story Protocol and its licensing standards
                                </Link>
                            </div>
                        </div>
                    </Card>
                </div>
            </Container>
        </Section>
    )
}
