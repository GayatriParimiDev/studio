import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Waves, Fish, Dna } from 'lucide-react';
import Image from 'next/image';
import Logo from '@/components/layout/logo';

const features = [
  {
    icon: Waves,
    title: 'Unified Data Platform',
    description:
      'Integrate diverse datasets from oceanography, fisheries, and molecular biodiversity into a single, cohesive view.',
  },
  {
    icon: Fish,
    title: 'AI-Powered Insights',
    description:
      'Leverage cutting-edge AI to uncover hidden patterns, perform cross-domain analysis, and identify species with our taxonomic assistant.',
  },
  {
    icon: Dna,
    title: 'Interactive Visualizers',
    description:
      'Engage with your data through interactive maps, otolith morphology simulators, and eDNA sequence matchers.',
  },
];

const articles = [
  {
    id: 'article-1',
    title: 'The Silent Storytellers: What Otoliths Reveal About Fish',
    summary:
      'Fish ear stones, or otoliths, are more than just biological structures; they are natural data recorders. By analyzing their growth rings, we can determine the age, growth rate, and environmental conditions a fish has experienced, providing invaluable data for fisheries management.',
    imageUrl: 'https://uni.hi.is/scampana/files/2016/10/shape-2-eng.jpg',
    imageHint: 'otolith fish anatomy',
  },
  {
    id: 'article-2',
    title: 'eDNA: Unlocking Marine Biodiversity from a Drop of Water',
    summary:
      'Environmental DNA (eDNA) is revolutionizing how we monitor marine ecosystems. By sequencing DNA fragments in the water, scientists can detect species presence without ever seeing or capturing them, offering a non-invasive tool for biodiversity assessment.',
    imageUrl:
      'https://www.msc.org/images/default-source/au-library/marine-biodiversity-marine-stewardship-council.jpg?sfvrsn=87ef96e8_4',
    imageHint: 'marine biodiversity',
  },
  {
    id: 'article-3',
    title: 'Connecting the Dots: Ocean Currents and Species Distribution',
    summary:
      'Oceanographic parameters like temperature and salinity are deeply connected to where marine life thrives. Our platform helps correlate this data to predict how changes in ocean climate might impact fish populations and biodiversity hotspots across the globe.',
    imageUrl:
      'https://t4.ftcdn.net/jpg/02/78/12/73/360_F_278127372_mWGRfu0XaAaJbrGCCo4b4WHLaXU4U3p7.jpg',
    imageHint: 'ocean currents map',
  },
];

function BackgroundVideo() {
  const videoUrl =
    'https://videos.pexels.com/video-files/34086730/34086730-hd_1920_1080_30fps.mp4';
  return (
    <div className="absolute inset-0 -z-10 h-full w-full overflow-hidden">
      <video
        key={videoUrl}
        autoPlay
        loop
        muted
        playsInline
        className="h-full w-full object-cover"
        poster="https://picsum.photos/seed/oceanbg/1920/1080"
      >
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black/60" />
    </div>
  );
}

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="relative h-screen text-white">
        <BackgroundVideo />
        <main className="relative container mx-auto flex h-full flex-col items-center justify-center px-4 text-center">
          <div className="flex items-center gap-4 font-semibold text-primary">
            <Logo className="h-16 w-16 text-accent" />
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
              Aqua Insights
            </h1>
          </div>
          <p className="mt-4 max-w-3xl text-xl md:text-2xl text-neutral-200">
            An AI-Driven Unified Data Platform for Oceanographic, Fisheries, and
            Molecular Biodiversity Insights
          </p>
          <Button
            asChild
            size="lg"
            className="mt-8 bg-accent hover:bg-accent/90 text-accent-foreground"
          >
            <Link href="/dashboard">
              Enter Dashboard <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </main>
      </div>

      <section id="about" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-primary">
              Why Aqua Insights?
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
              Our oceans are a complex, interconnected system. Understanding
              them requires bridging the gap between different scientific
              domains. Aqua Insights was created to break down data silos and
              provide a unified platform for researchers, conservationists, and
              policy-makers.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {features.map((feature) => (
              <Card
                key={feature.title}
                className="bg-card/50 backdrop-blur-sm"
              >
                <CardHeader className="flex flex-row items-center gap-4">
                  <feature.icon className="h-10 w-10 text-accent" />
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="articles" className="py-16 md:py-24 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-primary">
              From the Depths of Data
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
              Explore the latest topics and discoveries in marine science,
              powered by the kind of analysis our platform enables.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {articles.map((article) => (
              <Card
                key={article.id}
                className="overflow-hidden bg-card/50 backdrop-blur-sm"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={article.imageUrl}
                    alt={article.title}
                    width={600}
                    height={400}
                    className="object-cover w-full h-full"
                    data-ai-hint={article.imageHint}
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{article.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    {article.summary}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-background py-6">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          &copy; 2025 Aqua Insights. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
}
