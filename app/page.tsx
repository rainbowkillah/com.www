import { Hero } from "@/components/home/Hero";
import { PlatformGrid } from "@/components/home/PlatformGrid";
import { CommunityTeaser } from "@/components/home/CommunityTeaser";

export const revalidate = 300;

export default function Home() {
  return (
    <>
      <Hero />
      <PlatformGrid />
      <CommunityTeaser />
    </>
  );
}
