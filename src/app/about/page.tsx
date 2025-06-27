import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import {
	Briefcase,
	Target,
	Eye,
	CheckCircle2,
	Users,
	Building,
} from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
	return (
		<div className="container mx-auto mt-28 px-4 py-12 space-y-10">
			{/* Hero Section */}
			<div className="flex flex-col gap-6 items-center text-center max-w-3xl mx-auto mb-8">
				<h1 className="text-4xl md:text-5xl font-bold text-primary-maroon uppercase">
					About N & K Engineering
				</h1>
				<p className="text-xl text-muted-foreground">
					A leading provider of engineering services and solutions, specializing
					in fire engineering, building services, and compliance.
				</p>
			</div>

			{/* Main Content */}

			<div className="grid grid-cols-5 gap-6">
				<Image
					src="/images/about-us.jpg"
					alt="About N & K Engineering"
					width={600}
					height={400}
					className="col-span-2 rounded-lg"
				/>
				<Card className="bg-primary-maroon text-primary-white border-0 col-span-3 shadow-md">
					<CardContent className="px-8 text-justify">
						<div className="">
							<p className="text-lg">
								At N & K Engineering, we are dedicated to protecting lives,
								assets, and infrastructure through expert fire engineering
								services. With over 12 years of experience in the industry, we
								have earned a solid reputation as a trusted and professional
								fire safety solutions provider in Sri Lanka. We offer end-to-end
								fire protection services—from system design and installation to
								commissioning, testing, and long-term maintenance. Our expertise
								spans across multiple sectors, including commercial, industrial,
								residential, and institutional projects.
							</p>
							<p className="text-lg mt-4">
								Our team is composed of qualified fire safety professionals and
								engineers who are deeply familiar with both local and
								international fire protection standards. All our solutions are
								designed and implemented in full compliance with globally
								recognized frameworks, such as the National Fire Protection
								Association (NFPA) and British Standards (BS). We don&apos;t
								just meet requirements—we exceed them. Whether it&apos;s a
								simple alarm system or a complex suppression network, our focus
								is on delivering custom-engineered, reliable, and compliant fire
								protection systems tailored to each client&apos;s unique needs.
							</p>
						</div>
					</CardContent>
				</Card>
			</div>

			{/* Mission & Vision Section with Cards */}
			<div className="grid md:grid-cols-2 gap-6 my-12">
				<Card className="transition-all bg-primary-maroon text-white hover:shadow-lg">
					<CardHeader>
						<div className="flex items-center gap-3">
							<div className="p-2 rounded-md bg-primary-white/10">
								<Target className="h-6 w-6 text-primary-yellow" />
							</div>
							<CardTitle className="text-2xl text-primary-yellow">
								Our Mission
							</CardTitle>
						</div>
					</CardHeader>
					<CardContent>
						<p className="text-lg">
							To be our customers&apos; first choice in the building services
							industry by consistently exceeding expectations, delivering
							innovative and technology-driven solutions, achieving operational
							excellence, fostering lasting partnerships, and upholding the
							highest standards of quality, safety, integrity, and ethical
							business practices across every project we undertake.
						</p>
					</CardContent>
				</Card>

				<Card className="transition-all bg-primary-maroon text-primary-white hover:shadow-lg">
					<CardHeader>
						<div className="flex items-center gap-3">
							<div className="p-2 rounded-md bg-white/10">
								<Eye className="h-6 w-6 text-primary-yellow" />
							</div>
							<CardTitle className="text-2xl text-primary-yellow">
								Our Vision
							</CardTitle>
						</div>
					</CardHeader>
					<CardContent>
						<p className="text-lg">
							To be the leading fire engineering company in Sri Lanka and
							beyond—renowned for protecting lives and infrastructure through
							cutting-edge, reliable, and compliant fire safety solutions. We
							envision a future where every project we undertake sets the
							benchmark for safety, innovation, and service excellence, creating
							safer environments for generations to come.
						</p>
					</CardContent>
				</Card>
			</div>

			{/* Core Values Section */}
			<div className="my-16">
				<div className="text-center max-w-xl mx-auto mb-8">
					<h2 className="text-3xl font-bold text-primary-black mb-4">
						Our Core Values
					</h2>
					<p className="text-muted-foreground">
						The principles that guide our work and relationships
					</p>
				</div>

				<div className="grid md:grid-cols-3 gap-6">
					<Card className="transition-all bg-primary-maroon text-white hover:shadow-xl">
						<CardContent className="pt-6">
							<div className="flex flex-col items-center text-center p-4">
								<div className="p-3 rounded-full bg-primary-white/10 mb-4">
									<CheckCircle2 className="h-6 w-6 text-primary-yellow" />
								</div>
								<h3 className="text-xl font-semibold mb-2 text-primary-yellow">
									Excellence
								</h3>
								<p>
									We strive for excellence in everything we do, delivering
									high-quality solutions that meet and exceed expectations.
								</p>
							</div>
						</CardContent>
					</Card>

					<Card className="transition-all bg-primary-maroon text-white hover:shadow-lg">
						<CardContent className="pt-6">
							<div className="flex flex-col items-center text-center p-4">
								<div className="p-3 rounded-full bg-primary-white/10 mb-4">
									<Users className="h-6 w-6 text-primary-yellow" />
								</div>
								<h3 className="text-xl font-semibold mb-2 text-primary-yellow">
									Integrity
								</h3>
								<p>
									We conduct our business with honesty, transparency, and
									ethical standards, building trust with our clients and
									partners.
								</p>
							</div>
						</CardContent>
					</Card>

					<Card className="transition-all bg-primary-maroon text-white hover:shadow-lg">
						<CardContent className="pt-6">
							<div className="flex flex-col items-center text-center p-4">
								<div className="p-3 rounded-full bg-primary-white/10 mb-4">
									<Building className="h-6 w-6 text-primary-yellow" />
								</div>
								<h3 className="text-xl font-semibold mb-2">Innovation</h3>
								<p>
									We embrace innovative thinking and creative solutions to solve
									complex engineering challenges effectively.
								</p>
							</div>
						</CardContent>
					</Card>
				</div>
			</div>

			{/* Call to Action */}
			<Alert className="bg-primary-black/10 border border-primary/20 my-12">
				<Briefcase className="scale-125 mt-1.5" />
				<AlertTitle className="text-xl">Ready to work with us?</AlertTitle>
				<AlertDescription className="mt-2 flex flex-col md:flex-row gap-4 items-start md:items-center">
					<p className="text-lg">
						Let&apos;s collaborate on your next engineering project and achieve
						exceptional results together.
					</p>
					<Button className="md:ml-auto">Contact Us</Button>
				</AlertDescription>
			</Alert>
		</div>
	);
}
