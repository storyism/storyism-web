import Link from 'next/link';

export default function Manifesto() {
    return (
        <div className="min-h-screen bg-deep-purple">
            {/* Hero Section */}
            <div className="gradient-hero section-padding text-center">
                <div className="max-w-4xl mx-auto px-6">
                    <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6 text-gradient uppercase tracking-wider">
                        The Storyism Manifesto
                    </h1>
                    <p className="font-body text-xl md:text-2xl text-light-gray leading-relaxed">
                        A vision for IP sovereignty on-chain and the future of creative freedom.
                    </p>
                </div>
            </div>

            {/* Manifesto Content */}
            <div className="max-w-4xl mx-auto px-6 py-16">
                <article className="prose-dark space-y-12">

                    {/* Introduction */}
                    <section className="card-dark">
                        <h2 className="font-heading text-3xl font-bold mb-6 text-gold">Our Declaration</h2>
                        <p className="font-body text-lg leading-relaxed mb-6">
                            Every creator deserves recognition, royalties, and the right to remix.
                            For too long, the creative economy has been controlled by gatekeepers,
                            middlemen, and centralized platforms that extract value while leaving
                            creators with scraps.
                        </p>
                        <p className="font-body text-lg leading-relaxed">
                            <span className="text-gold font-semibold">Storyism</span> represents a fundamental shift: the democratization of intellectual
                            property through blockchain technology, programmable licensing, and
                            community-driven governance.
                        </p>
                    </section>

                    {/* The Problem */}
                    <section className="card-dark">
                        <h2 className="font-heading text-3xl font-bold mb-6 text-gold">The Problem We Face</h2>
                        <div className="bg-gradient-to-r from-purple/20 to-blue/20 border-l-4 border-gold p-6 mb-6 rounded-r-lg">
                            <h3 className="font-heading text-xl font-semibold mb-4 text-gold-bright">The Old World:</h3>
                            <ul className="space-y-3 text-light-gray">
                                <li className="flex items-start gap-3">
                                    <span className="text-gold">•</span>
                                    <span><strong className="text-white">Centralized:</strong> A few corporations control distribution and monetization</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-gold">•</span>
                                    <span><strong className="text-white">Costly:</strong> Legal fees and bureaucracy make IP protection expensive</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-gold">•</span>
                                    <span><strong className="text-white">Unfair:</strong> Creators receive minimal compensation while platforms profit</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-gold">•</span>
                                    <span><strong className="text-white">Restrictive:</strong> Remix culture is stifled by complex licensing</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-gold">•</span>
                                    <span><strong className="text-white">Opaque:</strong> No transparency in how value is distributed</span>
                                </li>
                            </ul>
                        </div>
                        <p className="font-body text-lg leading-relaxed">
                            This system has failed creators, stifled innovation, and concentrated
                            wealth in the hands of intermediaries. It's time for change.
                        </p>
                    </section>

                    {/* The Vision */}
                    <section className="card-dark">
                        <h2 className="font-heading text-3xl font-bold mb-6 text-gold">Our Vision</h2>
                        <div className="bg-gradient-to-r from-gold/10 to-gold-bright/10 border-l-4 border-gold p-6 mb-6 rounded-r-lg">
                            <h3 className="font-heading text-xl font-semibold mb-4 text-gold-bright">The New World:</h3>
                            <ul className="space-y-3 text-light-gray">
                                <li className="flex items-start gap-3">
                                    <span className="text-gold">•</span>
                                    <span><strong className="text-white">Open:</strong> Permissionless creation and collaboration</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-gold">•</span>
                                    <span><strong className="text-white">Programmable:</strong> Smart contracts automate licensing and royalties</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-gold">•</span>
                                    <span><strong className="text-white">Transparent:</strong> All transactions and attributions are public</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-gold">•</span>
                                    <span><strong className="text-white">Fair:</strong> Value flows directly to creators and contributors</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-gold">•</span>
                                    <span><strong className="text-white">Composable:</strong> Ideas build upon each other freely</span>
                                </li>
                            </ul>
                        </div>
                        <p className="font-body text-lg leading-relaxed">
                            We envision a world where creativity becomes <span className="text-gold font-semibold">programmable IP</span> —
                            where ideas can flow, remix, and reward fairly across the internet.
                        </p>
                    </section>

                    {/* Story Protocol */}
                    <section className="card-dark">
                        <h2 className="font-heading text-3xl font-bold mb-6 text-gold">Powered by Story Protocol</h2>
                        <p className="font-body text-lg leading-relaxed mb-6">
                            Storyism is built on <span className="text-gold font-semibold">Story Protocol</span>, the foundational infrastructure for
                            intellectual property on-chain. Story Protocol provides:
                        </p>
                        <ul className="space-y-4 text-lg">
                            <li className="flex items-start gap-3">
                                <span className="text-gold text-xl">📝</span>
                                <span><strong className="text-white">IP Registration:</strong> Immutable proof of creation and ownership</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-gold text-xl">⚡</span>
                                <span><strong className="text-white">Programmable Licensing:</strong> Automated terms and royalty distribution</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-gold text-xl">🔗</span>
                                <span><strong className="text-white">Attribution Tracking:</strong> Transparent provenance and derivative chains</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-gold text-xl">💰</span>
                                <span><strong className="text-white">Monetization Tools:</strong> Direct creator-to-fan value transfer</span>
                            </li>
                        </ul>
                    </section>

                    {/* Principles */}
                    <section className="card-dark">
                        <h2 className="font-heading text-3xl font-bold mb-8 text-gold">Our Core Principles</h2>

                        <div className="space-y-8">
                            <div className="border-l-4 border-gold pl-6">
                                <h3 className="font-heading text-xl font-semibold mb-3 text-white">1. Creator Sovereignty</h3>
                                <p className="font-body text-lg leading-relaxed">
                                    Creators own and control their intellectual property. No platform,
                                    corporation, or intermediary should have the power to deplatform,
                                    censor, or extract unfair value from creative work.
                                </p>
                            </div>

                            <div className="border-l-4 border-gold/80 pl-6">
                                <h3 className="font-heading text-xl font-semibold mb-3 text-white">2. Fair Compensation</h3>
                                <p className="font-body text-lg leading-relaxed">
                                    Value should flow directly to creators and contributors. Automated
                                    royalty systems ensure everyone in the creative chain receives
                                    their fair share.
                                </p>
                            </div>

                            <div className="border-l-4 border-gold/60 pl-6">
                                <h3 className="font-heading text-xl font-semibold mb-3 text-white">3. Remix Culture</h3>
                                <p className="font-body text-lg leading-relaxed">
                                    Innovation thrives when ideas build upon each other. Clear licensing
                                    and attribution systems enable safe remixing while protecting
                                    original creators.
                                </p>
                            </div>

                            <div className="border-l-4 border-gold/40 pl-6">
                                <h3 className="font-heading text-xl font-semibold mb-3 text-white">4. Transparency</h3>
                                <p className="font-body text-lg leading-relaxed">
                                    All IP registrations, licenses, and royalty flows are public and
                                    verifiable on-chain. No hidden fees, no black boxes.
                                </p>
                            </div>

                            <div className="border-l-4 border-gold/20 pl-6">
                                <h3 className="font-heading text-xl font-semibold mb-3 text-white">5. Community Governance</h3>
                                <p className="font-body text-lg leading-relaxed">
                                    The Storyism community collectively shapes the future of the
                                    platform through democratic governance and open collaboration.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Call to Action */}
                    <section className="card-dark">
                        <h2 className="font-heading text-3xl font-bold mb-6 text-gold">Join the Movement</h2>
                        <p className="font-body text-lg leading-relaxed mb-8">
                            <span className="text-gold font-semibold">Storyism</span> is not just a platform — it's a movement. Every creator,
                            developer, and community member has a role to play in building
                            the future of intellectual property.
                        </p>

                        <div className="bg-gradient-to-r from-gold/10 to-gold-bright/10 border border-gold/30 rounded-lg p-8">
                            <h3 className="font-heading text-xl font-semibold mb-6 text-gold-bright">How You Can Contribute:</h3>
                            <ul className="grid md:grid-cols-2 gap-4 text-lg">
                                <li className="flex items-start gap-3">
                                    <span className="text-gold">🎨</span>
                                    <span>Mint and share Remix Tokens</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-gold">📝</span>
                                    <span>Publish articles, memes, and opinions</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-gold">🔄</span>
                                    <span>Create derivative works with clear attribution</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-gold">🤝</span>
                                    <span>Join discussions and shape the community</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-gold">🛠️</span>
                                    <span>Build tools and applications on Story Protocol</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-gold">📢</span>
                                    <span>Spread the word about IP sovereignty</span>
                                </li>
                            </ul>
                        </div>
                    </section>

                    {/* Conclusion */}
                    <section className="card-dark text-center">
                        <h2 className="font-heading text-3xl font-bold mb-6 text-gold">The Future is Programmable</h2>
                        <p className="font-body text-lg leading-relaxed mb-6">
                            We stand at the dawn of a new era for creativity. An era where
                            intellectual property is not a weapon of control, but a tool of
                            liberation. Where creators are empowered, remix culture flourishes,
                            and innovation knows no bounds.
                        </p>
                        <p className="font-heading text-2xl leading-relaxed font-bold text-gradient">
                            The future is programmable. The future is Storyism.
                        </p>
                    </section>

                </article>

                {/* Footer Links */}
                <div className="mt-16 pt-8 border-t border-gold/20">
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Link
                            href="/blog"
                            className="btn-primary text-lg"
                        >
                            📖 Read More in Knowledge Hub
                        </Link>
                        <a
                            href="https://ip.world/ip/storyism"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-secondary text-lg"
                        >
                            🌐 View IP Asset on ip.world
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
