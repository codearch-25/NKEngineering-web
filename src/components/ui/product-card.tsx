import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface ProductCardProps {
	id: number;
	name: string;
	description: string;
	image: string;
}

export function ProductCard({
	id,
	name,
	description,
	image,
}: ProductCardProps) {
	return (
		<Card
			key={id}
			className="h-full pt-0 overflow-hidden border bg-primary-maroon text-primary-white shadow-sm hover:shadow-md transition-shadow"
		>
			<div className="h-48 md:h-56 relative">
				<Image src={image} alt={name} fill className="object-cover" />
			</div>
			<div className="p-4">
				<h3 className="text-xl font-semibold mb-2">{name}</h3>
				<p className="mb-4 text-gray-100 line-clamp-3 h-[4.5em] overflow-hidden text-ellipsis">
					{description}
				</p>
				<Button
					asChild
					className="w-full bg-primary-amber hover:bg-primary-yellow text-primary-black"
				>
					<Link href="/products">Learn More</Link>
				</Button>
			</div>
		</Card>
	);
}
