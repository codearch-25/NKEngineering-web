import React from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";

export default function ProductsPage() {
	// Sample product data - in a real app, this would come from a database
	const products = [
		{
			id: 1,
			name: "Fire Suppression Systems",
			description:
				"Advanced fire suppression systems for commercial and residential buildings.",
			image: "/images/fire-system.jpg",
		},
		{
			id: 2,
			name: "Fire Safety Equipment",
			description:
				"High-quality fire safety equipment including extinguishers, alarms, and detection systems.",
			image: "/images/fire-equipment.jpg",
		},
		{
			id: 3,
			name: "Engineering Consulting Services",
			description:
				"Expert engineering consultation for building safety and compliance.",
			image: "/images/fire-engineer.png",
		},
	];

	return (
		<div className="container mx-auto px-4 py-20">
			<h1 className="text-4xl font-bold mb-6">Our Products</h1>
			<p className="text-lg mb-8">
				Explore our range of high-quality engineering products and services
				designed to meet the highest standards of safety and efficiency.
			</p>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{products.map((product) => (
					<Card key={product.id} className="overflow-hidden">
						<div className="h-48 relative">
							<Image
								src={product.image}
								alt={product.name}
								fill
								className="object-cover"
							/>
						</div>
						<div className="p-4">
							<h3 className="text-xl font-semibold mb-2">{product.name}</h3>
							<p>{product.description}</p>
						</div>
					</Card>
				))}
			</div>
		</div>
	);
}
