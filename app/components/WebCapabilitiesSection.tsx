import React from 'react';

export const WebCapabilitiesSection = () => {
	return (
		<section className="py-12 sm:py-20 px-4">
			<div className="max-w-6xl mx-auto">
				<h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center">What I Build With</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
					{[
						{
							title: 'Solana dApps',
							icon: '⚙️',
							features: ['Rust & Anchor', 'Solana Web3.js', 'Token & NFT logic'],
						},
						{
							title: 'Smart Contracts',
							icon: '📜',
							features: ['Secure program design', 'On-chain data handling', 'Upgradeable contracts'],
						},
						{
							title: 'Frontend UX',
							icon: '🎨',
							features: ['React & Next.js', 'Tailwind CSS', 'Framer Motion'],
						},
						{
							title: 'Wallet & Web3 Integration',
							icon: '🪙',
							features: ['Phantom Wallet', 'Solana Pay', 'Transaction UX'],
						},
						{
							title: 'Backend & APIs',
							icon: '🛠️',
							features: ['Node.js', 'REST / GraphQL', 'Custom API design'],
						},
						{
							title: 'DevOps & Performance',
							icon: '🚀',
							features: ['CI/CD', 'Docker', 'Lighthouse audits'],
						},
					].map((category) => (
						<div key={category.title} className="group bg-[#161B22] p-6 rounded-lg hover:bg-[#21262D] transition-all">
							<div className="text-3xl mb-4">{category.icon}</div>
							<h3 className="text-xl font-bold mb-3">{category.title}</h3>
							<ul className="space-y-2">
								{category.features.map((feature) => (
									<li key={feature} className="text-gray-400 group-hover:text-gray-300 transition-colors">
										{feature}
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
