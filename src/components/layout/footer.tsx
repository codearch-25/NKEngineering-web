import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { MdLocationOn, MdPhone, MdEmail } from "react-icons/md";

export default function Footer() {
	return (
		<div>
			<footer
				id="contact"
				className="bg-primary-white shadow-lg shadow-primary py-12"
			>
				<div className="container mx-auto px-4">
					<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
						<div className="md:col-span-2">
							<div className="mb-4">
								<Image
									src="/images/logo.jpg"
									alt="NK Engineering"
									width={50}
									height={30}
									className="dark:invert"
								/>
							</div>
							<p className="text-primary-black/70 mb-4 max-w-md">
								Providing innovative engineering solutions since 2010.
								We&apos;re committed to excellence and customer satisfaction.
							</p>
							<div className="flex space-x-4">
								<Link
									href="#"
									className="text-primary-black/70 hover:text-primary-maroon"
									aria-label="Twitter"
								>
									<FaTwitter size={24} />
								</Link>
								<Link
									href="#"
									className="text-primary-black/70 hover:text-primary-maroon"
									aria-label="Facebook"
								>
									<FaFacebook size={24} />
								</Link>
								<Link
									href="#"
									className="text-primary-black/70 hover:text-primary-maroon"
									aria-label="Instagram"
								>
									<FaInstagram size={24} />
								</Link>
								<Link
									href="#"
									className="text-primary-black/70 hover:text-primary-maroon"
									aria-label="LinkedIn"
								>
									<FaLinkedin size={24} />
								</Link>
							</div>
						</div>
						<div>
							<h3 className="font-bold text-lg mb-4 text-primary-black">
								Quick Links
							</h3>
							<ul className="space-y-2">
								<li>
									<Link
										href="/"
										className="text-primary-black/70 hover:text-primary-maroon"
									>
										Home
									</Link>
								</li>
								<li>
									<Link
										href="/about"
										className="text-primary-black/70 hover:text-primary-maroon"
									>
										About Us
									</Link>
								</li>
								<li>
									<Link
										href="/products"
										className="text-primary-black/70 hover:text-primary-maroon"
									>
										Products
									</Link>
								</li>
								<li>
									<Link
										href="/clients"
										className="text-primary-black/70 hover:text-primary-maroon"
									>
										Clients
									</Link>
								</li>
							</ul>
						</div>
						<div>
							<h3 className="font-bold text-lg mb-4 text-primary-black">
								Contact Us
							</h3>
							<ul className="space-y-3">
								<li className="flex items-center gap-2">
									<MdLocationOn
										size={30}
										className="shrink-0 text-primary-maroon bg-primary-maroon/20 rounded-full p-1.5"
									/>
									<span className="text-primary-black/70">
										123 Engineering Ave, Suite 100
									</span>
								</li>
								<li className="flex items-center gap-2">
									<MdPhone
										size={30}
										className="shrink-0 text-primary-maroon bg-primary-maroon/20 rounded-full p-1.5"
									/>
									<span className="text-primary-black/70">(555) 123-4567</span>
								</li>
								<li className="flex items-center gap-2">
									<MdEmail
										size={30}
										className="shrink-0 text-primary-maroon bg-primary-maroon/20 rounded-full p-1.5"
									/>
									<span className="text-primary-black/70">
										info@nkengineering.com
									</span>
								</li>
							</ul>
						</div>
					</div>
					<div className="border-t border-primary-maroon/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
						<p className="text-sm text-primary-black/70">
							© 2025 NK Engineering. All rights reserved.
						</p>
						<div className="flex gap-4 mt-4 md:mt-0">
							<Link
								href="/privacy-policy"
								className="text-sm text-primary-black/70 hover:text-primary-amber"
							>
								Privacy Policy
							</Link>
							<Link
								href="/terms-of-service"
								className="text-sm text-primary-black/70 hover:text-primary-amber"
							>
								Terms of Service
							</Link>
							<Link
								href="/sitemap"
								className="text-sm text-primary-black/70 hover:text-primary-amber"
							>
								Sitemap
							</Link>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
}
