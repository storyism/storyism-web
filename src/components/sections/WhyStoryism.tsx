export default function WhyStoryism() {
    return (
        <section className="gradient-purple-blue section-padding">
            <div className="w-full px-6 lg:px-12">
                <div className="max-w-7xl mx-auto">
                    <h2 className="font-heading text-4xl md:text-5xl font-bold text-center mb-16 text-white uppercase tracking-wide">
                        Why Storyism?
                    </h2>

                    <div className="grid md:grid-cols-2 gap-12 mb-12">
                        <div className="card-dark">
                            <h3 className="font-heading text-2xl font-bold mb-4 text-gold flex items-center gap-3">
                                ❌ Old World
                            </h3>
                            <ul className="space-y-4 text-lg">
                                <li className="flex items-start gap-3">
                                    <span className="text-gold">•</span>
                                    <span>Centralized gatekeepers control distribution</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-gold">•</span>
                                    <span>Costly legal barriers for creators</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-gold">•</span>
                                    <span>Unfair revenue sharing models</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-gold">•</span>
                                    <span>Limited remix and collaboration rights</span>
                                </li>
                            </ul>
                        </div>

                        <div className="card-dark">
                            <h3 className="font-heading text-2xl font-bold mb-4 text-gold flex items-center gap-3">
                                ✨ New World
                            </h3>
                            <ul className="space-y-4 text-lg">
                                <li className="flex items-start gap-3">
                                    <span className="text-gold">•</span>
                                    <span>Open, decentralized IP infrastructure</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-gold">•</span>
                                    <span>Programmable licensing and royalties</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-gold">•</span>
                                    <span>Transparent, automated revenue sharing</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-gold">•</span>
                                    <span>Permissionless creativity and remixing</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="text-center">
                        <p className="font-body text-xl md:text-2xl leading-relaxed text-light-gray max-w-4xl mx-auto">
                            Storyism turns creativity into <span className="text-gold font-semibold">programmable IP</span> —
                            so ideas can flow, remix, and reward fairly across the internet.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
