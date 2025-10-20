import Hero from '@/app/_sections/Hero';
import ManifestoPreview from '@/app/_sections/ManifestoPreview';
import WhyItMatters from '@/app/_sections/WhyItMatters';
import HowToContribute from '@/app/_sections/HowToContribute';
import CommunityAgents from '@/app/_sections/CommunityAgents';
import KnowledgeHub from '@/app/_sections/KnowledgeHub';
import Ecosystem from '@/app/_sections/Ecosystem';
import PageLayout from '@/components/layout/Page';
import WhatIsStoryism from './_sections/WhatIsStoryism';

export default function Home() {
  return (
    <PageLayout>
      <Hero />
      <WhatIsStoryism />
      <WhyItMatters />
      <HowToContribute />
      <CommunityAgents />



      <ManifestoPreview />
      <KnowledgeHub />
      <Ecosystem />
    </PageLayout>
  );
}
