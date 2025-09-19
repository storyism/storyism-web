import Link from 'next/link';

export default function Header() {
    return (
        <header className="border-b border-gold/20 bg-deep-purple/95 backdrop-blur-lg sticky top-0 z-50">
            <div className="max-w-6xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo/Brand */}
                    <div className="flex items-center">
                        <Link href="/" className="font-heading text-3xl font-bold text-gradient hover:scale-105 transition-transform">
                            Storyism
                        </Link>
                        <span className="ml-3 text-sm text-gray hidden sm:inline font-body">
                            IP sovereignty on-chain
                        </span>
                    </div>

                    {/* Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        <Link
                            href="/"
                            className="font-body text-light-gray hover:text-gold font-medium transition-colors"
                        >
                            Home
                        </Link>
                        <Link
                            href="/manifesto"
                            className="font-body text-light-gray hover:text-gold font-medium transition-colors"
                        >
                            Manifesto
                        </Link>
                        <Link
                            href="/blog"
                            className="font-body text-light-gray hover:text-gold font-medium transition-colors"
                        >
                            Knowledge Hub
                        </Link>
                        <a
                            href="https://ip.world/ip/storyism"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-body text-light-gray hover:text-gold font-medium transition-colors"
                        >
                            IP Asset
                        </a>
                        <a
                            href="https://ip.world/token/0xb001fB4fdd1ca1F0D9C89ab01DC4d32B070817BD"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary text-sm"
                        >
                            🪙 Shoppy Token
                        </a>
                    </nav>

                    {/* Mobile menu button */}
                    <button className="md:hidden p-2 rounded-lg hover:bg-purple/20 text-light-gray">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>

                {/* Mobile Navigation (hidden by default, would need state management to toggle) */}
                <div className="md:hidden mt-4 pb-4 border-t border-gold/20 pt-4 hidden">
                    <div className="flex flex-col space-y-3">
                        <Link
                            href="/"
                            className="font-body text-light-gray hover:text-gold font-medium py-2 transition-colors"
                        >
                            Home
                        </Link>
                        <Link
                            href="/manifesto"
                            className="font-body text-light-gray hover:text-gold font-medium py-2 transition-colors"
                        >
                            Manifesto
                        </Link>
                        <Link
                            href="/blog"
                            className="font-body text-light-gray hover:text-gold font-medium py-2 transition-colors"
                        >
                            Knowledge Hub
                        </Link>
                        <a
                            href="https://ip.world/ip/storyism"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-body text-light-gray hover:text-gold font-medium py-2 transition-colors"
                        >
                            IP Asset
                        </a>
                        <a
                            href="https://ip.world/token/0xb001fB4fdd1ca1F0D9C89ab01DC4d32B070817BD"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary text-sm text-center"
                        >
                            🪙 Shoppy Token
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
}
