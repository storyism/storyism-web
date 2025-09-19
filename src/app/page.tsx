import Hero from '@/components/sections/Hero';
import ManifestoPreview from '@/components/sections/ManifestoPreview';
import WhyStoryism from '@/components/sections/WhyStoryism';
import HowToContribute from '@/components/sections/HowToContribute';
import CommunityAgents from '@/components/sections/CommunityAgents';
import KnowledgeHub from '@/components/sections/KnowledgeHub';
import Ecosystem from '@/components/sections/Ecosystem';

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 space-y-16">
      <Hero />
      <hr className="border-gray-300" />

      <ManifestoPreview />
      <hr className="border-gray-300" />

      <WhyStoryism />
      <hr className="border-gray-300" />

      <HowToContribute />
      <hr className="border-gray-300" />

      <CommunityAgents />
      <hr className="border-gray-300" />

      <KnowledgeHub />
      <hr className="border-gray-300" />

      <Ecosystem />
    </div>
  );
}
