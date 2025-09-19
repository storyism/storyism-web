export default function HowToContribute() {
    return (
        <section className="section-padding bg-deep-purple">
            <div className="w-full px-6 lg:px-12">
                <div className="max-w-7xl mx-auto">
                    <h2 className="font-heading text-4xl md:text-5xl font-bold text-center mb-16 text-gold uppercase tracking-wide">
                        How to Contribute
                    </h2>

                    <div className="text-center mb-12">
                        <p className="font-body text-xl md:text-2xl text-light-gray">
                            Storyism is <span className="text-gold font-semibold">open to all</span>. Anyone can:
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="card-dark text-center group">
                            <div className="text-4xl mb-4">🎨</div>
                            <h3 className="font-heading text-xl font-bold mb-3 text-white">Create & Mint</h3>
                            <p className="text-light-gray">Mint & share Remix Tokens for your creative works</p>
                        </div>

                        <div className="card-dark text-center group">
                            <div className="text-4xl mb-4">📝</div>
                            <h3 className="font-heading text-xl font-bold mb-3 text-white">Publish Content</h3>
                            <p className="text-light-gray">Share articles, memes, and opinions on IP sovereignty</p>
                        </div>

                        <div className="card-dark text-center group">
                            <div className="text-4xl mb-4">🔄</div>
                            <h3 className="font-heading text-xl font-bold mb-3 text-white">Remix & Build</h3>
                            <p className="text-light-gray">Create derivative works with clear attribution</p>
                        </div>

                        <div className="card-dark text-center group">
                            <div className="text-4xl mb-4">🤝</div>
                            <h3 className="font-heading text-xl font-bold mb-3 text-white">Join Community</h3>
                            <p className="text-light-gray">Participate in discussions and shape the future</p>
                        </div>
                    </div>

                    <div className="text-center mt-12">
                        <a
                            href="https://github.com/storyprotocol"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary text-lg"
                        >
                            🚀 Start Contributing
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
