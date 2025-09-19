import Link from 'next/link';

export default function Hero() {
    return (
        <section className="gradient-hero min-h-screen flex items-center justify-center text-center relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-20 left-20 w-32 h-32 border border-gold rounded-full"></div>
                <div className="absolute bottom-32 right-20 w-24 h-24 border border-gold rounded-full"></div>
                <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-gold rounded-full"></div>
                <div className="absolute top-32 right-1/3 w-20 h-20 border border-gold rounded-full"></div>
                <div className="absolute bottom-20 left-1/3 w-12 h-12 border border-gold rounded-full"></div>
            </div>

            <div className="relative z-10 w-full px-6 space-y-8">
                <div className="max-w-5xl mx-auto">
                    <h1 className="font-heading text-6xl md:text-8xl font-bold mb-6 text-gradient uppercase tracking-wider">
                        Storyism
                    </h1>
                    <p className="font-heading text-2xl md:text-4xl text-gold italic mb-8 tracking-wide">
                        IP sovereignty on-chain.
                    </p>
                    <p className="font-body text-xl md:text-2xl max-w-4xl mx-auto text-light-gray leading-relaxed">
                        A community movement to protect creativity, enable fair royalties, and unlock remix culture.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
                    <Link
                        href="/manifesto"
                        className="btn-primary text-lg px-8 py-4"
                    >
                        � Read Manifesto
                    </Link>
                    <a
                        href="https://ip.world/ip/storyism"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary text-lg px-8 py-4"
                    >
                        🌐 View IP Asset
                    </a>
                </div>
            </div>
        </section>
    );
}
