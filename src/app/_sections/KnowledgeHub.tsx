import Link from 'next/link';

export default function KnowledgeHub() {
    return (
        <section className="section-padding bg-deep-purple">
            <div className="w-full px-6 lg:px-12">
                <div className="max-w-7xl mx-auto">
                    <h2 className="font-heading text-4xl md:text-5xl font-bold text-center mb-16 text-gold uppercase tracking-wide">
                        Knowledge Hub
                    </h2>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <p className="font-body text-xl md:text-2xl mb-8 text-light-gray leading-relaxed">
                                Learn, remix, and protect your work with our comprehensive resource library:
                            </p>

                            <ul className="space-y-4 text-lg mb-8">
                                <li className="flex items-start gap-3">
                                    <span className="text-gold text-xl">📚</span>
                                    <span><strong className="text-white">IP 101</strong> & licensing basics</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-gold text-xl">⛓️</span>
                                    <span><strong className="text-white">Royalty on-chain</strong> mechanisms</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-gold text-xl">🎨</span>
                                    <span><strong className="text-white">Remix culture</strong> and fair use</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-gold text-xl">🔧</span>
                                    <span><strong className="text-white">Story Protocol</strong> deep dives</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-gold text-xl">🌐</span>
                                    <span><strong className="text-white">ip.world</strong> platform guides</span>
                                </li>
                            </ul>

                            <Link
                                href="/blog"
                                className="btn-primary text-lg inline-flex items-center gap-2"
                            >
                                📖 Enter Knowledge Hub
                            </Link>
                        </div>

                        <div className="card-dark">
                            <h3 className="font-heading text-2xl font-bold mb-6 text-gold text-center">
                                Latest Articles
                            </h3>
                            <div className="space-y-4">
                                <div className="border-l-4 border-gold pl-4 py-2">
                                    <h4 className="font-semibold text-white">Understanding Story Protocol</h4>
                                    <p className="text-sm text-gray">A comprehensive guide to decentralized IP</p>
                                </div>
                                <div className="border-l-4 border-gold/60 pl-4 py-2">
                                    <h4 className="font-semibold text-white">Economics of Remix Culture</h4>
                                    <p className="text-sm text-gray">How blockchain enables fair creator compensation</p>
                                </div>
                                <div className="border-l-4 border-gold/40 pl-4 py-2">
                                    <h4 className="font-semibold text-white">IP Licensing Basics</h4>
                                    <p className="text-sm text-gray">Essential knowledge for creators</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
