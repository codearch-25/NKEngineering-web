"use client";
import React, { useRef } from "react";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	type CarouselApi,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

function Hero() {
	const [api, setApi] = React.useState<CarouselApi | null>(null);
	const [current, setCurrent] = React.useState(0);
	const [showLeftIcon, setShowLeftIcon] = React.useState(false);
	const [showRightIcon, setShowRightIcon] = React.useState(false);
	const [showControls, setShowControls] = React.useState(false);

	// Store autoplay plugin reference
	const autoplayRef = useRef<ReturnType<typeof Autoplay>>(null);

	const Images = [
		{
			id: 0,
			src: "/images/gas-tanks-1.jpg",
			alt: "Fire Engineering Professionals",
			width: 2000,
			height: 2000,
		},
		{
			id: 1,
			src: "/images/fire-system.jpg",
			alt: "Fire Engineering Professionals",
			width: 2000,
			height: 2000,
		},
		{
			id: 2,
			src: "/images/gas-tanks.jpg",
			alt: "Fire Protection Systems",
			width: 2000,
			height: 2000,
		},
		{
			id: 3,
			src: "/images/smoker1.jpg",
			alt: "Fire Safety Equipment",
			width: 2000,
			height: 2000,
		},
		{
			id: 4,
			src: "/images/sprinklers.jpeg",
			alt: "Fire Safety Equipment",
			width: 2000,
			height: 2000,
		},
	];

	const scrollPrev = React.useCallback(() => {
		api?.scrollPrev();
		// Restart autoplay after user interaction
		setTimeout(() => {
			if (autoplayRef.current && autoplayRef.current.reset) {
				autoplayRef.current.reset();
			}
		}, 50);
	}, [api]);

	const scrollNext = React.useCallback(() => {
		api?.scrollNext();
		// Restart autoplay after user interaction
		setTimeout(() => {
			if (autoplayRef.current && autoplayRef.current.reset) {
				autoplayRef.current.reset();
			}
		}, 50);
	}, [api]);

	const scrollTo = React.useCallback(
		(index: number) => {
			api?.scrollTo(index);
			// Restart autoplay after user interaction
			setTimeout(() => {
				if (autoplayRef.current && autoplayRef.current.reset) {
					autoplayRef.current.reset();
				}
			}, 50);
		},
		[api],
	);

	// Track the current slide
	React.useEffect(() => {
		if (!api) {
			return;
		}

		const onSelect = () => {
			setCurrent(api.selectedScrollSnap());
		};

		api.on("select", onSelect);
		api.on("reInit", onSelect);

		return () => {
			api.off("select", onSelect);
			api.off("reInit", onSelect);
		};
	}, [api]);

	// Initialize autoplay plugin with options
	const autoplayOptions = React.useMemo(
		() => ({
			delay: 5000, // 5 seconds between slides
			stopOnInteraction: false, // Don't stop autoplay on user interaction
			stopOnMouseEnter: false, // Don't stop autoplay when mouse enters carousel area
			rootNode: (emblaRoot: HTMLElement) => emblaRoot.parentElement, // Use parent element as root
		}),
		[],
	);

	// Create plugin instance
	const autoplayPlugin = React.useMemo(() => {
		const plugin = Autoplay(autoplayOptions);
		autoplayRef.current = plugin;
		return plugin;
	}, [autoplayOptions]);

	return (
		<div>
			<section
				className="relative min-h-screen"
				onMouseEnter={() => setShowControls(true)}
				onMouseLeave={() => {
					setShowControls(false);
					setShowLeftIcon(false);
					setShowRightIcon(false);
				}}
			>
				{/* Full Screen Carousel */}
				<div className="absolute inset-0 z-0">
					<Carousel
						className="w-full h-full"
						opts={{
							loop: true,
							dragFree: true,
							containScroll: "trimSnaps",
						}}
						plugins={[autoplayPlugin]}
						setApi={setApi}
					>
						<CarouselContent className="h-full [&>*]:pl-0 [&>*]:pt-0 -ml-0 -mt-0">
							{Images.map((image) => (
								<CarouselItem key={image.id} className="h-full pl-0 pt-0">
									<div className="relative max-h-screen">
										<Image
											src={image.src}
											alt={image.alt}
											width={image.width}
											height={image.height}
											className="object-cover w-full h-dvh"
											priority={image.id === 1}
										/>
										<div className="absolute inset-0 bg-gradient-to-l from-black/30 to-black/70 flex items-center justify-center"></div>
									</div>
								</CarouselItem>
							))}
						</CarouselContent>

						{/* Side navigation areas with hover effects */}
						<div
							className={cn(
								"absolute left-0 top-0 h-full w-1/5 sm:w-1/4 z-10 cursor-pointer flex items-center px-2 sm:px-6 transition-opacity duration-300",
								showControls ? "opacity-100" : "opacity-0",
							)}
							onClick={scrollPrev}
							onMouseEnter={() => setShowLeftIcon(true)}
							onMouseLeave={() => setShowLeftIcon(false)}
							aria-label="Previous slide"
						>
							<div
								className={cn(
									"rounded-full bg-primary-white/30 p-2 sm:p-3 transition-all duration-300",
									showLeftIcon
										? "opacity-100 scale-110"
										: "opacity-50 scale-100",
								)}
							>
								<ChevronLeft className="text-primary-white h-5 w-5 sm:h-6 sm:w-6" />
							</div>
						</div>
						<div
							className={cn(
								"absolute right-0 top-0 h-full w-1/5 sm:w-1/4 z-10 cursor-pointer flex items-center justify-end px-2 sm:px-6 transition-opacity duration-300",
								showControls ? "opacity-100" : "opacity-0",
							)}
							onClick={scrollNext}
							onMouseEnter={() => setShowRightIcon(true)}
							onMouseLeave={() => setShowRightIcon(false)}
							aria-label="Next slide"
						>
							<div
								className={cn(
									"rounded-full bg-primary-white/30 p-2 sm:p-3 transition-all duration-300",
									showRightIcon
										? "opacity-100 scale-110"
										: "opacity-50 scale-100",
								)}
							>
								<ChevronRight className="text-primary-white h-5 w-5 sm:h-6 sm:w-6" />
							</div>
						</div>

						{/* Slide indicators */}
						<div
							className={cn(
								"absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-10 flex gap-2 transition-opacity duration-300",
								showControls ? "opacity-100" : "opacity-50",
							)}
						>
							{Images.map((_, index) => (
								<button
									key={index}
									className={cn(
										"h-2 rounded-full transition-all",
										index === current
											? "w-8 bg-primary-white"
											: "w-2 bg-primary-white/50",
									)}
									onClick={() => scrollTo(index)}
									aria-label={`Go to slide ${index + 1}`}
								/>
							))}
						</div>
					</Carousel>
				</div>

				{/* Hero Content Overlay */}
				<div className="relative container mx-auto px-4 min-h-screen flex items-center z-10">
					<div className="max-w-[800px] py-20">
						<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-yellow mb-6 uppercase">
							Expert Fire Engineering & Protection
						</h1>
						<p className="text-xl text-primary-white/90 mb-4">
							Protecting lives, assets, and infrastructure for over 12 years.
						</p>
						<p className="text-lg text-primary-white/80 mb-8">
							As Sri Lanka&apos;s trusted fire safety provider, we deliver
							compliant, end-to-end solutions from design and installation to
							ongoing maintenance.
						</p>
						<div className="flex flex-col sm:flex-row gap-4">
							<Button
								size="lg"
								className="bg-primary-amber hover:bg-primary-yellow text-primary-black"
							>
								Get Started
							</Button>
							<Button
								size="lg"
								className=" text-white bg-primary-red/70 hover:bg-primary-maroon"
							>
								Contact Us
							</Button>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Hero;
