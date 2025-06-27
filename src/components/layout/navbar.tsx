import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
	return (
		<div>
			<header className="fixed top-6 z-50 w-full">
				<div className="mx-auto max-w-[1440px] px-20 rounded-full py-3 flex bg-primary-white/70 backdrop-blur-sm shadow-md items-center justify-between">
					<div className="flex items-center">
						<Image
							src="/images/logo.jpg"
							alt="NK Engineering"
							width={50}
							height={30}
							priority
						/>
					</div>
					<nav className="hidden md:flex items-center space-x-8">
						<Link
							href="/"
							className="text-sm font-medium hover:text-primary-maroon transition-colors"
						>
							Home
						</Link>
						<Link
							href="/about"
							className="text-sm font-medium hover:text-primary-maroon transition-colors"
						>
							About Us
						</Link>
						<Link
							href="/products"
							className="text-sm font-medium hover:text-primary-maroon transition-colors"
						>
							Products
						</Link>
						<Link
							href="/clients"
							className="text-sm font-medium  hover:text-primary-maroon transition-colors"
						>
							Clients
						</Link>
					</nav>
				</div>
			</header>
		</div>
	);
}
