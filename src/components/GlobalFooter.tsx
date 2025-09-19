import Link from 'next/link';

export default function GlobalFooter() {
    return (
        <footer className="gradient-purple-blue border-t border-gold/20 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-10 left-10 w-20 h-20 border border-gold rounded-full"></div>
                <div className="absolute bottom-10 right-10 w-16 h-16 border border-gold rounded-full"></div>
                <div className="absolute top-1/2 left-1/3 w-12 h-12 border border-gold rounded-full"></div>
            </div>

            <div className="max-w-6xl mx-auto px-6 py-16 relative z-10">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">

                    {/* Brand Section */}
                    <div className="md:col-span-2">
                        <h3 className="font-heading text-3xl font-bold mb-4 text-gradient">Storyism</h3>
                        <p className="font-body text-light-gray mb-6 max-w-md leading-relaxed">
                            A community movement to protect creativity, enable fair royalties,
                            and unlock remix culture through IP sovereignty on-chain.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <a
                                href="https://ip.world/ip/storyism"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-secondary text-sm"
                            >
                                🌐 IP Asset
                            </a>
                            <a
                                href="https://ip.world/token/0xb001fB4fdd1ca1F0D9C89ab01DC4d32B070817BD"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-secondary text-sm"
                            >
                                🪙 Shoppy Token
                            </a>
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <div>
                        <h4 className="font-heading font-semibold mb-6 text-gold text-lg">Navigation</h4>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/" className="font-body text-light-gray hover:text-gold transition-colors">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/manifesto" className="font-body text-light-gray hover:text-gold transition-colors">
                                    Manifesto
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog" className="font-body text-light-gray hover:text-gold transition-colors">
                                    Knowledge Hub
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Ecosystem Links */}
                    <div>
                        <h4 className="font-heading font-semibold mb-6 text-gold text-lg">Ecosystem</h4>
                        <ul className="space-y-3">
                            <li>
                                <a
                                    href="https://www.story.foundation"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-body text-light-gray hover:text-gold transition-colors"
                                >
                                    Story Protocol
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://docs.ip.world"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-body text-light-gray hover:text-gold transition-colors"
                                >
                                    ip.world
                                </a>
                            </li>
                            <li>
                                <span className="font-body text-gray">Agent TCP/IP</span>
                                <div className="badge text-xs mt-1">Coming Soon</div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-gold/20">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="font-body text-gray">
                            © 2025 <span className="text-gold font-semibold">Storyism</span> — A Community IP movement.
                        </p>
                        <div className="flex flex-wrap gap-6">
                            <a
                                href="https://ip.world/ip/storyism"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-body text-sm text-gray hover:text-gold transition-colors"
                            >
                                IP Asset on ip.world
                            </a>
                            <a
                                href="https://ip.world/token/0xb001fB4fdd1ca1F0D9C89ab01DC4d32B070817BD"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-body text-sm text-gray hover:text-gold transition-colors"
                            >
                                Shoppy Token
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
