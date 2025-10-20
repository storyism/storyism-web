'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Button } from '../ui/button';
import Container from './Container';
import { Blend, Menu, X } from 'lucide-react';

const navigation = [
    {
        name: 'Manifesto',
        href: '/manifesto'
    },
    {
        name: 'IP Chronicles',
        href: '/blog'
    },
    {
        name: 'IP Asset',
        href: 'https://ip.world/ip/storyism',
        external: true
    },
    {
        name: 'Remix IP',
        href: 'https://ip.world/create/ip/storyism',
        external: true,
        isButton: true
    }
];

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className="backdrop-blur-lg sticky top-0 z-50 py-4 md:py-6 border-b border-border/50">
            <Container>
                <div className="flex items-center justify-between">
                    {/* Logo/Brand */}
                    <Link
                        className="flex items-center space-x-2 hover:scale-105 transition-all duration-300 ease-out"
                        href="/"
                    >
                        <div className="relative">
                            <Image
                                src="/img/logo.png"
                                alt="Storyism Logo"
                                width={32}
                                height={32}
                                className="rounded-full transition-transform duration-300 hover:rotate-12"
                            />
                        </div>
                        <span>
                            <h4 className="font-mono text-xl md:text-3xl font-black tracking-wider text-gradient-primary">
                                STORY<span className="font-bold">ISM</span>
                            </h4>
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
                        {navigation.map((item) => (
                            item.isButton ? (
                                <Button
                                    asChild
                                    key={item.name}
                                    variant="default"
                                    size="lg"
                                    className="font-body text-foreground font-medium text-sm lg:text-base uppercase tracking-wider px-6 lg:px-8 hover:scale-105 transition-all duration-300 ease-out shadow-lg hover:shadow-xl"
                                >
                                    <a
                                        href={item.href}
                                        target={item.external ? "_blank" : undefined}
                                        rel={item.external ? "noopener noreferrer" : undefined}
                                    >
                                        {item.name}
                                        <Blend className="ml-2 h-4 w-4" />
                                    </a>
                                </Button>
                            ) : (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="font-body text-foreground hover:text-accent hover:scale-105 font-medium transition-all duration-300 ease-out relative group"
                                >
                                    {item.name}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                                </Link>
                            )
                        ))}
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 rounded-lg hover:bg-accent transition-colors duration-200"
                        onClick={toggleMobileMenu}
                        aria-label="Toggle mobile menu"
                    >
                        {isMobileMenuOpen ? (
                            <X className="h-6 w-6 text-foreground" />
                        ) : (
                            <Menu className="h-6 w-6 text-foreground" />
                        )}
                    </button>
                </div>

                {/* Mobile Navigation Menu */}
                <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                    <nav className="pt-4 pb-2 space-y-2">
                        {navigation.map((item, index) => (
                            item.isButton ? (
                                <div key={item.name} className="pt-2">
                                    <Button
                                        asChild
                                        variant="default"
                                        size="lg"
                                        className="w-full font-body text-foreground font-medium text-base uppercase tracking-wider justify-center shadow-lg"
                                    >
                                        <a
                                            href={item.href}
                                            target={item.external ? "_blank" : undefined}
                                            rel={item.external ? "noopener noreferrer" : undefined}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            {item.name}
                                            <Blend className="ml-2 h-4 w-4" />
                                        </a>
                                    </Button>
                                </div>
                            ) : (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={`block py-3 px-4 rounded-lg font-body text-muted-foreground hover:text-primary hover:bg-accent/50 font-medium transition-all duration-200 transform hover:translate-x-2 ${isMobileMenuOpen ? 'animate-in slide-in-from-right-4' : ''
                                        }`}
                                    style={{ animationDelay: `${index * 100}ms` }}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            )
                        ))}
                    </nav>
                </div>
            </Container>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div
                    className="md:hidden fixed inset-0 bg-background/80 backdrop-blur-sm z-[-1]"
                    onClick={() => setIsMobileMenuOpen(false)}
                />
            )}
        </header>
    );
}
