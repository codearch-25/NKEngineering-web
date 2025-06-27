// src/components/layout/lenis-scroll.tsx
"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// Register the ScrollTrigger plugin with GSAP
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function LenisScroll() {
	useEffect(() => {
		const lenis = new Lenis({
			duration: 1.2,
			easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
			// Using the correct properties according to Lenis documentation
			wheelMultiplier: 1,
			touchMultiplier: 1,
			smoothWheel: true,
		});

		function raf(time: number) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}

		requestAnimationFrame(raf);

		lenis.on("scroll", ScrollTrigger.update);

		ScrollTrigger.scrollerProxy(document.body, {
			scrollTop(value) {
				if (arguments.length) {
					// Type safety for value
					if (value !== undefined) {
						lenis.scrollTo(value);
					}
					return 0;
				} else {
					return lenis.scroll;
				}
			},
			getBoundingClientRect() {
				return {
					top: 0,
					left: 0,
					width: window.innerWidth,
					height: window.innerHeight,
				};
			},
			pinType: document.body.style.transform ? "transform" : "fixed",
		});

		ScrollTrigger.defaults({ scroller: document.body });
		ScrollTrigger.refresh();

		return () => {
			// Clean up Lenis
			lenis.destroy();
			
			// Clean up ScrollTrigger - using the correct method
			ScrollTrigger.getAll().forEach(trigger => trigger.kill());
		};
	}, []);

	return null;
}
