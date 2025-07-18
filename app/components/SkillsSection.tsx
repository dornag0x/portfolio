import React from 'react';

export const SkillsSection = () => {
	return (
		<section className="py-12 sm:py-20 px-4 bg-[#161B22]">
			<div className="max-w-6xl mx-auto">
				<h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-16 text-center">Technical Expertise</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
					{[
						{
							category: 'Solana Development',
							skills: [
								{ name: 'Rust', level: 95 },
								{ name: 'Anchor Framework', level: 90 },
								{ name: 'Solana Web3.js', level: 95 },
								{ name: 'Smart Contract Design', level: 92 },
							],
							icon: '🛠️',
							color: 'from-blue-500 to-blue-700',
						},
						{
							category: 'Frontend & UX',
							skills: [
								{ name: 'React.js / Next.js', level: 90 },
								{ name: 'Tailwind CSS', level: 92 },
								{ name: 'Web Animation (Framer Motion)', level: 85 },
								{ name: 'Responsive Design', level: 90 },
							],
							icon: '🎨',
							color: 'from-pink-500 to-pink-700',
						},
						{
							category: 'Backend, APIs & DevOps',
							skills: [
								{ name: 'Node.js', level: 90 },
								{ name: 'REST & GraphQL APIs', level: 92 },
								{ name: 'Docker & CI/CD', level: 85 },
								{ name: 'AWS & Deployment', level: 82 },
							],
							icon: '⚙️',
							color: 'from-green-500 to-green-700',
						},
					].map((category) => (
						<div key={category.category} className="bg-[#21262D] rounded-lg p-6 transform hover:scale-[1.02] transition-all">
							<div className="flex items-center gap-3 mb-6">
								<span className="text-3xl">{category.icon}</span>
								<h3 className="text-xl font-bold">{category.category}</h3>
							</div>
							<div className="space-y-4">
								{category.skills.map((skill) => (
									<div key={skill.name}>
										<div className="flex justify-between text-sm mb-1">
											<span>{skill.name}</span>
											<span className="text-gray-400">{skill.level}%</span>
										</div>
										<div className="h-2 bg-[#30363D] rounded-full overflow-hidden">
											<div className={`h-full bg-gradient-to-r ${category.color} animate-expand origin-left`} style={{ width: `${skill.level}%` }}></div>
										</div>
									</div>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
