import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getArticleBySlug, getRelatedArticles } from '@/lib/articles';

interface ArticlePageProps {
    params: Promise<{
        slug: string;
    }>;
}

export default async function ArticlePage({ params }: ArticlePageProps) {
    const { slug } = await params;
    const article = getArticleBySlug(slug);

    if (!article) {
        notFound();
    }

    const relatedArticles = getRelatedArticles(article.id);

    return (
        <div className="min-h-screen bg-deep-purple">
            {/* Hero Section */}
            <div className="gradient-hero section-padding">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <Link
                        href="/blog"
                        className="inline-flex items-center text-light-gray hover:text-gold mb-8 transition-colors"
                    >
                        ← Back to Knowledge Hub
                    </Link>

                    {/* Article Meta */}
                    <div className="flex items-center justify-center gap-4 mb-8">
                        <div className="badge">
                            {article.category}
                        </div>
                        <span className="text-gray">{article.date}</span>
                        <span className="text-gray">•</span>
                        <span className="text-gray">{article.readTime}</span>
                    </div>

                    {/* Title and Author */}
                    <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6 text-gradient leading-tight">{article.title}</h1>
                    <p className="font-body text-xl md:text-2xl text-light-gray mb-6 leading-relaxed max-w-3xl mx-auto">{article.excerpt}</p>
                    <div className="flex items-center justify-center gap-2 text-light-gray">
                        <span>By</span>
                        <span className="font-medium text-gold">{article.author}</span>
                    </div>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-6 py-16">
                {/* Article Content */}
                <article className="prose-dark mb-16">
                    <div
                        dangerouslySetInnerHTML={{ __html: article.content }}
                        className="article-content"
                    />
                </article>

                {/* Article Footer */}
                <div className="card-dark mb-16">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                        <div>
                            <p className="text-sm text-gray mb-2">Written by</p>
                            <p className="font-heading font-semibold text-gold text-lg">{article.author}</p>
                        </div>
                        <div className="flex flex-wrap gap-4">
                            <Link
                                href="/manifesto"
                                className="btn-primary"
                            >
                                📜 Read Manifesto
                            </Link>
                            <a
                                href="https://ip.world/ip/storyism"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-secondary"
                            >
                                🌐 View IP Asset
                            </a>
                        </div>
                    </div>
                </div>

                {/* Related Articles */}
                <div className="border-t border-gold/20 pt-16">
                    <h2 className="font-heading text-3xl font-bold mb-8 text-gold text-center">Related Articles</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {relatedArticles.map((relatedArticle) => (
                            <Link
                                key={relatedArticle.id}
                                href={`/blog/${relatedArticle.slug}`}
                                className="block group"
                            >
                                <article className="card-dark group-hover:scale-105 transition-transform">
                                    <div className="flex items-center gap-2 mb-4">
                                        <span className="text-xs text-gray">{relatedArticle.date}</span>
                                        <span className="text-xs text-gray">•</span>
                                        <span className="text-xs text-gray">{relatedArticle.readTime}</span>
                                    </div>

                                    <h3 className="font-heading text-lg font-semibold mb-4 text-white group-hover:text-gold transition-colors">
                                        {relatedArticle.title}
                                    </h3>

                                    <p className="font-body text-light-gray mb-4 text-sm line-clamp-3 leading-relaxed">
                                        {relatedArticle.excerpt}
                                    </p>

                                    <div className="flex items-center justify-between">
                                        <span className="text-sm text-gray">By {relatedArticle.author}</span>
                                        <div className="badge text-xs">
                                            {relatedArticle.category}
                                        </div>
                                    </div>
                                </article>
                            </Link>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <Link
                            href="/blog"
                            className="btn-primary text-lg"
                        >
                            📖 View All Articles
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
