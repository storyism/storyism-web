import Link from 'next/link';

export default function ManifestoPreview() {
    return (
        <section className="section-padding bg-deep-purple">
            <div className="w-full px-6 lg:px-12">
                <div className="card-dark max-w-6xl mx-auto text-center">
                    <h2 className="font-heading text-4xl md:text-5xl font-bold mb-8 text-gold uppercase tracking-wide">
                        Manifesto Preview
                    </h2>
                    <p className="font-body text-xl md:text-2xl leading-relaxed mb-8 text-light-gray">
                        Every creator deserves recognition, royalties, and the right to remix.
                        Storyism grounds this vision with Story Protocol: an open system to register, license, and monetize IP on-chain.
                    </p>
                    <blockquote className="border-l-4 border-gold pl-6 mb-8 text-lg italic text-gray bg-gold/5 py-4 rounded-r-lg">
                        "The future of creativity lies not in gatekeepers, but in protocols that empower every voice."
                    </blockquote>
                    <Link
                        href="/manifesto"
                        className="btn-primary text-lg inline-flex items-center gap-2"
                    >
                        📜 Read Full Manifesto
                    </Link>
                </div>
            </div>
        </section>
    );
}
