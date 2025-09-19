export default function CommunityAgents() {
    return (
        <section className="gradient-purple-blue section-padding">
            <div className="w-full px-6 lg:px-12">
                <div className="max-w-7xl mx-auto">
                    <h2 className="font-heading text-4xl md:text-5xl font-bold text-center mb-16 text-white uppercase tracking-wide">
                        Community Agents
                    </h2>

                    <div className="max-w-5xl mx-auto">
                        <div className="card-dark text-center">
                            <div className="flex justify-center mb-6">
                                <div className="w-24 h-24 bg-gradient-to-br from-gold to-gold-bright rounded-full flex items-center justify-center text-4xl">
                                    ⚡
                                </div>
                            </div>

                            <h3 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-gold">
                                Meet <span className="text-gradient">Shoppy</span>
                            </h3>
                            <div className="badge inline-block mb-6">Shield of Ippy</div>

                            <p className="font-body text-xl md:text-2xl mb-8 text-light-gray leading-relaxed">
                                The first Storyism AI agent.<br />
                                <span className="text-gold">Spamming (ethically)</span> about IP, royalties, and remix culture.
                            </p>

                            <div className="space-y-6">
                                <a
                                    href="https://ip.world/token/0xb001fB4fdd1ca1F0D9C89ab01DC4d32B070817BD"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-primary text-lg inline-flex items-center gap-2"
                                >
                                    🪙 View Shoppy Token
                                </a>

                                <div className="bg-deep-purple/50 p-6 rounded-lg border border-gold/20">
                                    <p className="text-sm text-gray font-mono mb-2">Contract Address:</p>
                                    <code className="font-mono text-gold-bright bg-purple/30 px-3 py-2 rounded text-sm break-all">
                                        0xb001fB4fdd1ca1F0D9C89ab01DC4d32B070817BD
                                    </code>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
