import { notFound } from 'next/navigation';
import { modules } from '@/app/lib/data';
import SolutionDetail from '@/app/components/SolutionDetail';

export async function generateStaticParams() {
  return modules.map((m) => ({ module: m.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ module: string }> }) {
  const { module } = await params;
  const mod = modules.find((m) => m.slug === module);
  if (!mod) return { title: 'Not Found' };
  
  return {
    title: mod.title,
    description: mod.seoDescription,
    openGraph: { images: [mod.ogImage] },
  };
}

export default async function SolutionPage({ params }: { params: Promise<{ module: string }> }) {
  const { module } = await params;
  const mod = modules.find((m) => m.slug === module);
  if (!mod) notFound();
  
  return <SolutionDetail module={mod} />;
}