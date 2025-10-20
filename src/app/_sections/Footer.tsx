export default function Footer() {
    return (
        <footer className="space-y-4 text-center">
            <p className="text-lg font-semibold">Storyism © 2025 — A Community IP movement.</p>
            <div className="space-y-2">
                <p className="text-lg">Official links:</p>
                <ul className="space-y-1">
                    <li>
                        • <a href="https://ip.world/ip/storyism" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                            IP Asset on ip.world
                        </a>
                    </li>
                    <li>
                        • <a href="https://ip.world/token/0xb001fB4fdd1ca1F0D9C89ab01DC4d32B070817BD" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                            Shoppy Token
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}
