"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const pathname = usePathname();

	// Toggle mobile menu
	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	// Check if link is active
	const isActive = (path: string) => {
		return pathname === path;
	};

	return (
		<div className="relative">
			<header className="sticky top-0 z-50 bg-primary-white w-full transition-all duration-300 shadow-sm">
				<div
					className={`mx-auto max-w-[1440px] px-6 md:px-20 py-3 flex bg-primary-white items-center justify-between`}
				>
					<div className="flex items-center">
						<Link href="/" className="flex items-center">
							<Image
								src="/images/logo.jpg"
								alt="NK Engineering"
								width={50}
								height={30}
								priority
								className="transition-transform scale-90 lg:scale-100"
							/>
							<span className="ml-3 text-lg lg:text-2xl font-bold text-primary-maroon">
								NK Engineering
							</span>
						</Link>
					</div>

					{/* Desktop Navigation */}
					<nav className="hidden md:flex items-center space-x-8">
						{[
							{ href: "/", label: "Home" },
							{ href: "/about", label: "About Us" },
							{ href: "/products", label: "Products" },
							{ href: "/clients", label: "Clients" },
						].map((link) => (
							<Link
								key={link.href}
								href={link.href}
								className={`text-sm font-medium relative py-2 transition-all
									${
										isActive(link.href)
											? "text-primary-maroon font-bold"
											: "hover:text-primary-maroon"
									}
									after:content-[''] after:absolute after:h-[2px] after:w-0 after:bg-primary-maroon 
									after:left-0 after:-bottom-1 after:transition-all after:duration-300
									${isActive(link.href) ? "after:w-full" : "hover:after:w-full"}
								`}
							>
								{link.label}
							</Link>
						))}
					</nav>

					{/* Mobile menu button */}
					<button
						className="md:hidden flex flex-col space-y-1.5 p-2 z-50"
						onClick={toggleMenu}
						aria-label="Toggle menu"
					>
						<span
							className={`block h-0.5 w-6 bg-black transition-transform duration-300 ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`}
						></span>
						<span
							className={`block h-0.5 w-6 bg-black transition-opacity duration-300 ${isMenuOpen ? "opacity-0" : "opacity-100"}`}
						></span>
						<span
							className={`block h-0.5 w-6 bg-black transition-transform duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
						></span>
					</button>
				</div>

				{/* Mobile Navigation */}
				<div
					className={`fixed inset-0 bg-white z-40 md:hidden flex flex-col justify-center items-center space-y-8 transform transition-transform duration-300 ${isMenuOpen ? "translate-y-0" : "-translate-y-full"}`}
				>
					{[
						{ href: "/", label: "Home" },
						{ href: "/about", label: "About Us" },
						{ href: "/products", label: "Products" },
						{ href: "/clients", label: "Clients" },
					].map((link) => (
						<Link
							key={link.href}
							href={link.href}
							className={`text-xl font-medium relative py-2 ${isActive(link.href) ? "text-primary-maroon" : "hover:text-primary-maroon"}`}
							onClick={() => setIsMenuOpen(false)}
						>
							{link.label}
						</Link>
					))}
				</div>
			</header>
		</div>
	);
}
