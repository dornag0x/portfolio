import React from 'react';
import Image from 'next/image';

export const ProjectsSection = () => {
	return (
		<section id="work" className="py-12 sm:py-20 px-4 bg-[#161B22] scroll-mt-20">
			<div className="max-w-6xl mx-auto">
				<h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center">Featured Projects</h2>
				<div className="space-y-8 sm:space-y-12">
					{[
						{
							title: 'Huch – Skin Collateralization Platform (Solana)',
							description: 'Founder & CEO of Huch, a decentralized platform allowing CS2 skin owners to collateralize in-game assets using Solana smart contracts.',
							metrics: {
								winner: 'Colosseum',
								mainnet: 'Q4 2024',
								rustContracts: 6,
							},
							techDetails: [
								'Smart contract architecture in Rust & Anchor',
								'NFT parsing and skin valuation logic',
								'Phantom wallet & Solana Pay integration',
								'Custom fullstack dApp with Next.js + Tailwind',
							],
							image: '/huch.png',
						},
						{
							title: 'Acquired AI – Social-Driven Fashion Recommender',
							description: 'Internship at Acquired AI, a startup building a fashion advisory platform that recommends outfits based on TikTok & Instagram content.',
							metrics: {
								accuracy: '85%+ accuracy',
								ai: 'Style insights',
								delivery: 'Instant',
							},
							techDetails: [
								'Built frontend with Next.js & Tailwind',
								'Integrated AI inference with Langchain agents',
								'Designed prompt chains for TikTok caption parsing',
								'Used Pinecone for vector search on image embeddings',
							],
							image: '/acquired.png',
						},
					].map((project) => (
						<div key={project.title} className="bg-[#21262D] rounded-lg overflow-hidden">
							<div className="grid grid-cols-1 lg:grid-cols-2">
								<div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
									<h3 className="text-xl sm:text-2xl font-bold">{project.title}</h3>
									<p className="text-sm sm:text-base text-gray-400">{project.description}</p>

									{/* Project Highlights */}
									<div className="space-y-3">
										<h4 className="text-base sm:text-lg font-semibold">Project Highlights</h4>
										<div className="grid grid-cols-3 gap-2 sm:gap-4">
											{Object.entries(project.metrics).map(([key, value]) => (
												<div key={key} className="text-center">
													<div className="text-lg font-bold text-blue-400">{value}</div>
													<div className="text-xs sm:text-sm text-gray-400 capitalize">{key}</div>
												</div>
											))}
										</div>
									</div>

									{/* Technical Implementation */}
									<div>
										<h4 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3">Technical Implementation</h4>
										<ul className="space-y-1.5 sm:space-y-2 text-sm sm:text-base">
											{project.techDetails.map((detail) => (
												<li key={detail} className="flex items-center gap-2">
													<span className="text-green-400">▹</span>
													<span className="text-gray-300">{detail}</span>
												</li>
											))}
										</ul>
									</div>
								</div>

								<div className="relative h-full min-h-[300px] lg:min-h-full">
									<Image src={project.image} alt={project.title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
									<div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-[#21262D] via-transparent to-transparent lg:via-[#21262D]/20 lg:to-[#21262D]/40"></div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
