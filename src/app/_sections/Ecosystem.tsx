export default function Ecosystem() {
    return (
        <section className="gradient-purple-blue section-padding">
            <div className="w-full px-6 lg:px-12">
                <div className="max-w-7xl mx-auto">
                    <h2 className="font-heading text-4xl md:text-5xl font-bold text-center mb-16 text-white uppercase tracking-wide">
                        Ecosystem
                    </h2>

                    <div className="text-center mb-12">
                        <p className="font-body text-xl md:text-2xl text-light-gray">
                            Powered by cutting-edge <span className="text-gold font-semibold">IP infrastructure</span>:
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="card-dark text-center group">
                            <div className="text-5xl mb-6">⚡</div>
                            <h3 className="font-heading text-2xl font-bold mb-4 text-gold">
                                Story Protocol
                            </h3>
                            <p className="text-light-gray mb-6 leading-relaxed">
                                The foundational infrastructure for programmable IP on the blockchain
                            </p>
                            <a
                                href="https://www.story.foundation"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-secondary text-sm"
                            >
                                🔗 Learn More
                            </a>
                        </div>

                        <div className="card-dark text-center group">
                            <div className="text-5xl mb-6">🌐</div>
                            <h3 className="font-heading text-2xl font-bold mb-4 text-gold">
                                ip.world
                            </h3>
                            <p className="text-light-gray mb-6 leading-relaxed">
                                The premier platform for registering, licensing, and monetizing IP assets
                            </p>
                            <a
                                href="https://docs.ip.world"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-secondary text-sm"
                            >
                                📚 Documentation
                            </a>
                        </div>

                        <div className="card-dark text-center group">
                            <div className="text-5xl mb-6">🤖</div>
                            <h3 className="font-heading text-2xl font-bold mb-4 text-gold">
                                Agent TCP/IP
                            </h3>
                            <p className="text-light-gray mb-6 leading-relaxed">
                                Revolutionary agent-to-agent IP economy for autonomous creativity
                            </p>
                            <div className="badge">Coming Soon</div>
                        </div>
                    </div>

                    <div className="text-center mt-12">
                        <p className="font-body text-lg text-gray max-w-3xl mx-auto">
                            Join the movement to create a fair, transparent, and creator-first IP ecosystem powered by blockchain technology.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
