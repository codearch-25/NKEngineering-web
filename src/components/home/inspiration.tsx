import React from "react";
import {
	Card,
	CardHeader,
	CardTitle,
	CardContent,
	CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Inspiration() {
	return (
		<div>
			<section id="inspiration" className="py-12 md:py-20">
				<div className="container mx-auto px-4">
					<div className="text-center mb-12">
						<h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-black">
							Inspiration & Innovation
						</h2>
						<p className="text-lg text-primary-black/70 max-w-2xl mx-auto">
							Discover how our engineering solutions are shaping the industry
							and creating new possibilities.
						</p>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
						{[
							{
								title: "Future Technology",
								description:
									"Exploring cutting-edge technologies that will shape tomorrow's engineering landscape.",
							},
							{
								title: "Sustainable Solutions",
								description:
									"Creating environmentally conscious engineering solutions for a better planet.",
							},
							{
								title: "Innovation Process",
								description:
									"Our unique approach to problem-solving and innovative engineering design.",
							},
						].map((item, index) => (
							<Card key={index} className="h-full border-primary-amber/20">
								<CardHeader>
									<CardTitle className="text-primary-black">
										{item.title}
									</CardTitle>
								</CardHeader>
								<CardContent>
									<p className="text-primary-black/70">{item.description}</p>
								</CardContent>
								<CardFooter>
									<Button
										variant="outline"
										className="w-full border-primary-amber text-primary-black hover:bg-primary-amber/10"
									>
										Learn More
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
