import Image from 'next/image'
import { Inter } from 'next/font/google'
import Layout from '@/components/Layout'
import Work from '@/components/Work'
import HeroSection from '@/components/HeroSection'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
		<main>
			<Layout>
				<HeroSection />
				<Work />
			</Layout>
		</main>
	);
}
