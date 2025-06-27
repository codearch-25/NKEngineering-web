import React from "react";
import {
	Card,
	CardHeader,
	CardTitle,
	CardContent,
	CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Services() {
	return (
		<div>
			<section id="services" className="py-12 md:py-20 bg-primary-black">
				<div className="container mx-auto px-4">
					<div className="text-center mb-12">
						<h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-white">
							Our Products & Services
						</h2>
						<p className="text-lg text-primary-white/80 max-w-2xl mx-auto">
							Comprehensive engineering solutions tailored to your industry and
							specific requirements.
						</p>
					</div>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
						{[
							{
								title: "Mechanical Engineering",
								description:
									"Expert design and analysis for mechanical systems and components.",
								icon: "🔧",
							},
							{
								title: "Electrical Engineering",
								description:
									"Advanced electrical systems design and implementation.",
								icon: "⚡",
							},
							{
								title: "Software Solutions",
								description:
									"Custom software development for engineering applications.",
								icon: "💻",
							},
							{
								title: "Structural Analysis",
								description:
									"Comprehensive structural engineering and analysis services.",
								icon: "🏗️",
							},
							{
								title: "Energy Systems",
								description:
									"Innovative solutions for energy generation and management.",
								icon: "🔋",
							},
							{
								title: "Consulting Services",
								description:
									"Expert engineering consultation for complex projects.",
								icon: "📊",
							},
						].map((service, index) => (
							<Card
								key={index}
								className="h-full border-0 bg-primary-maroon/20 shadow-sm hover:shadow-md transition-shadow"
							>
								<CardHeader>
									<div className="text-4xl mb-2">{service.icon}</div>
									<CardTitle className="text-primary-white">
										{service.title}
									</CardTitle>
								</CardHeader>
								<CardContent>
									<p className="text-primary-white/70">{service.description}</p>
								</CardContent>
								<CardFooter>
									<Button
										variant="ghost"
										className="p-0 h-auto text-primary-amber hover:text-primary-yellow"
									>
										Learn more →
									</Button>
								</CardFooter>
							</Card>
						))}
					</div>
				</div>
			</section>
		</div>
	);
}
