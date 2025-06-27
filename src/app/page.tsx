import React from "react";

import Hero from "@/components/home/hero";
import Inspiration from "@/components/home/inspiration";
import Services from "@/components/home/services";
import ContactUs from "@/components/contact-us";

export default function Home() {
	return (
			<div>
				<Hero />
				<Inspiration />
				<Services />
				<ContactUs />
			</div>
	);
}
