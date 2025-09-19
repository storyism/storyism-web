import Link from 'next/link';
import { getAllArticles } from '@/lib/articles';

const articles = getAllArticles();

const categories = ["All", "Technology", "Economics", "Education", "Community", "Opinion"];

export default function Blog() {
    return (
        <div className="min-h-screen bg-deep-purple">
            {/* Header */}
            <div className="gradient-hero section-padding text-center">
                <div className="max-w-6xl mx-auto px-6">
                    <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6 text-gradient uppercase tracking-wider">
                        Knowledge Hub
                    </h1>
                    <p className="font-body text-xl md:text-2xl text-light-gray max-w-4xl mx-auto leading-relaxed">
                        Learn, remix, and protect your work. Explore articles, opinions, and insights
                        about IP sovereignty, remix culture, and the future of creative freedom.
                    </p>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-6 py-16">
                {/* Categories Filter */}
                <div className="mb-12">
                    <h3 className="font-heading text-xl font-semibold mb-6 text-gold">Explore by Category:</h3>
                    <div className="flex flex-wrap gap-4">
                        {categories.map((category) => (
                            <button
                                key={category}
                                className={`px-6 py-3 rounded-full font-medium transition-all ${category === "All"
                                    ? "btn-primary"
                                    : "btn-secondary text-sm"
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Featured Article */}
                <div className="mb-16">
                    <h2 className="font-heading text-3xl font-bold mb-8 text-gold">Featured Article</h2>
                    <div className="card-dark relative overflow-hidden">
                        <div className="absolute top-4 right-4">
                            <div className="badge">Featured</div>
                        </div>
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div>
                                <div className="flex items-center gap-4 mb-4">
                                    <span className="text-sm text-gray">{articles[0].date}</span>
                                    <span className="text-sm text-gray">•</span>
                                    <span className="text-sm text-gray">{articles[0].readTime}</span>
                                </div>
                                <h3 className="font-heading text-2xl font-bold mb-4 text-white">{articles[0].title}</h3>
                                <p className="font-body text-lg text-light-gray mb-6 leading-relaxed">{articles[0].excerpt}</p>
                                <div className="flex items-center justify-between mb-6">
                                    <div className="flex items-center gap-3">
                                        <span className="text-sm text-gray">By {articles[0].author}</span>
                                        <div className="badge text-xs">
                                            {articles[0].category}
                                        </div>
                                    </div>
                                </div>
                                <Link
                                    href={`/blog/${articles[0].slug}`}
                                    className="btn-primary inline-flex items-center gap-2"
                                >
                                    📖 Read Article
                                </Link>
                            </div>
                            <div className="hidden md:block">
                                <div className="w-full h-48 bg-gradient-to-br from-gold/20 to-purple/20 rounded-lg flex items-center justify-center">
                                    <span className="text-6xl">📚</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Articles Grid */}
                <div className="mb-16">
                    <h2 className="font-heading text-3xl font-bold mb-8 text-gold">Latest Articles</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {articles.slice(1).map((article) => (
                            <article
                                key={article.id}
                                className="card-dark group"
                            >
                                <div className="flex items-center gap-2 mb-4">
                                    <span className="text-xs text-gray">{article.date}</span>
                                    <span className="text-xs text-gray">•</span>
                                    <span className="text-xs text-gray">{article.readTime}</span>
                                </div>

                                <h3 className="font-heading text-xl font-semibold mb-4 text-white line-clamp-2 group-hover:text-gold transition-colors">
                                    {article.title}
                                </h3>

                                <p className="font-body text-light-gray mb-6 line-clamp-3 leading-relaxed">
                                    {article.excerpt}
                                </p>

                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-sm text-gray">By {article.author}</span>
                                    <div className="badge text-xs">
                                        {article.category}
                                    </div>
                                </div>

                                <Link
                                    href={`/blog/${article.slug}`}
                                    className="btn-secondary w-full text-center"
                                >
                                    Read More
                                </Link>
                            </article>
                        ))}
                    </div>
                </div>

                {/* Topics Section */}
                <div className="mb-16">
                    <h2 className="font-heading text-3xl font-bold mb-8 text-gold">Explore Topics</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="card-dark group">
                            <h3 className="font-heading text-lg font-semibold mb-3 text-white flex items-center gap-2">
                                <span className="text-2xl">📚</span>
                                IP 101 & Licensing Basics
                            </h3>
                            <p className="font-body text-light-gray mb-4 leading-relaxed">
                                Learn the fundamentals of intellectual property and how licensing works in the digital age.
                            </p>
                            <button className="text-gold hover:text-gold-bright font-medium transition-colors">
                                Explore Articles →
                            </button>
                        </div>

                        <div className="card-dark group">
                            <h3 className="font-heading text-lg font-semibold mb-3 text-white flex items-center gap-2">
                                <span className="text-2xl">💰</span>
                                Royalty On-Chain
                            </h3>
                            <p className="font-body text-light-gray mb-4 leading-relaxed">
                                Discover how blockchain technology revolutionizes royalty distribution and creator compensation.
                            </p>
                            <button className="text-gold hover:text-gold-bright font-medium transition-colors">
                                Explore Articles →
                            </button>
                        </div>

                        <div className="card-dark group">
                            <h3 className="font-heading text-lg font-semibold mb-3 text-white flex items-center gap-2">
                                <span className="text-2xl">🎭</span>
                                Remix Culture
                            </h3>
                            <p className="font-body text-light-gray mb-4 leading-relaxed">
                                Understanding how remix culture drives innovation and the tools that make it sustainable.
                            </p>
                            <button className="text-gold hover:text-gold-bright font-medium transition-colors">
                                Explore Articles →
                            </button>
                        </div>

                        <div className="card-dark group">
                            <h3 className="font-heading text-lg font-semibold mb-3 text-white flex items-center gap-2">
                                <span className="text-2xl">⚙️</span>
                                How Story Protocol Works
                            </h3>
                            <p className="font-body text-light-gray mb-4 leading-relaxed">
                                Deep dive into the technical architecture that powers programmable IP.
                            </p>
                            <button className="text-gold hover:text-gold-bright font-medium transition-colors">
                                Explore Articles →
                            </button>
                        </div>

                        <div className="card-dark group">
                            <h3 className="font-heading text-lg font-semibold mb-3 text-white flex items-center gap-2">
                                <span className="text-2xl">🌐</span>
                                How to Use ip.world
                            </h3>
                            <p className="font-body text-light-gray mb-4 leading-relaxed">
                                Practical guides for navigating and using the ip.world platform effectively.
                            </p>
                            <button className="text-gold hover:text-gold-bright font-medium transition-colors">
                                Explore Articles →
                            </button>
                        </div>

                        <div className="card-dark group">
                            <h3 className="font-heading text-lg font-semibold mb-3 text-white flex items-center gap-2">
                                <span className="text-2xl">🤖</span>
                                Community & Agents
                            </h3>
                            <p className="font-body text-light-gray mb-4 leading-relaxed">
                                Meet the AI agents and community members building the future of IP.
                            </p>
                            <button className="text-gold hover:text-gold-bright font-medium transition-colors">
                                Explore Articles →
                            </button>
                        </div>
                    </div>
                </div>

                {/* Newsletter Signup */}
                <div className="card-dark text-center mb-16">
                    <h2 className="font-heading text-3xl font-bold mb-4 text-gold">Stay Updated</h2>
                    <p className="font-body text-lg text-light-gray mb-8 max-w-2xl mx-auto leading-relaxed">
                        Get the latest articles, insights, and updates about IP sovereignty and remix culture
                        delivered directly to your inbox.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 px-4 py-3 bg-deep-purple border border-gold/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold text-white placeholder-gray"
                        />
                        <button className="btn-primary">
                            Subscribe
                        </button>
                    </div>
                </div>

                {/* Footer Links */}
                <div className="pt-8 border-t border-gold/20">
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Link
                            href="/manifesto"
                            className="btn-primary text-center"
                        >
                            📜 Read Full Manifesto
                        </Link>
                        <a
                            href="https://ip.world/ip/storyism"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-secondary text-center"
                        >
                            🌐 View IP Asset on ip.world
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
