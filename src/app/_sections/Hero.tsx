import Container from '@/components/layout/Container';
import Section from '@/components/layout/Section';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Hero() {
    return (
        <Section isFirst variant="full" className="flex items-center justify-center text-center relative">
            <Container className="space-y-6">
                <div className="mx-auto">
                    <Badge className='animate-float'>
                        ✊ A creator-first movement for authorship, remix, and fair culture
                    </Badge>
                    <h1 className="text-[6rem] font-sans font-extrabold mb-4">
                        Fight for IP Sovereignty
                    </h1>
                    <p className="text-2xl max-w-2xl mx-auto text-muted-foreground">
                        Keep your name on your work, license remixes fairly, and share rewards when creators deserve them.
                    </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                    <Button asChild className='w-[240px]' size={"lg"}>
                        <Link
                            href="/manifesto"
                            className="text-xl animate-glow"
                        >
                            Join The Movement
                        </Link>
                    </Button>
                    <Button asChild className='w-[240px]' size={"lg"} variant={"secondary"}>
                        <Link
                            href="/manifesto"
                            className="text-xl"
                        >
                            Read Manifesto
                        </Link>
                    </Button>
                </div>
                <p className="mt-8 text-sm text-muted-foreground">*No crypto-speak required.</p>
            </Container>
        </Section>
    );
}
