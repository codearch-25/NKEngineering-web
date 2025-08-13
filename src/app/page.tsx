import React from "react";

import Hero from "@/components/home/hero";
import Inspiration from "@/components/home/inspiration";
import Services from "@/components/home/services";
import FeaturedProducts from "@/components/home/featured-products";
import ContactUs from "@/components/home/contact-us";

export default function Home() {
	return (
		<div>
			<Hero />
			<Inspiration />
			<Services />
			<FeaturedProducts />
			<ContactUs />
		</div>
	);
}
