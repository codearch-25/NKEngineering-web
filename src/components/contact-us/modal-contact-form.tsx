"use client";

import React, { useEffect } from "react";
import ContactUsForm from "./contact-us-form";
import { X } from "lucide-react";
import { Button } from "../ui/button";
import { motion, AnimatePresence } from "framer-motion";

interface ModalContactFormProps {
	isOpen: boolean;
	onClose: () => void;
}

export default function ModalContactForm({
	isOpen,
	onClose,
}: ModalContactFormProps) {
	// Add keyboard support for Escape key
	useEffect(() => {
		const handleEscKey = (e: KeyboardEvent) => {
			if (isOpen && e.key === "Escape") {
				onClose();
			}
		};

		if (isOpen) {
			// Add escape key listener when modal is open
			document.addEventListener("keydown", handleEscKey);
			// Prevent scrolling on the body when modal is open
			document.body.style.overflow = "hidden";
		}

		// Cleanup
		return () => {
			document.removeEventListener("keydown", handleEscKey);
			document.body.style.overflow = "";
		};
	}, [isOpen, onClose]);

	return (
		<AnimatePresence>
			{isOpen && (
				<div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden">
					{/* Backdrop with blur effect */}
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.3 }}
						className="fixed inset-0 bg-black/70 backdrop-blur-md"
						onClick={onClose}
					/>

					{/* Modal content */}
					<motion.div
						initial={{ scale: 0.9, opacity: 0, y: 20 }}
						animate={{ scale: 1, opacity: 1, y: 0 }}
						exit={{ scale: 0.95, opacity: 0, y: 10 }}
						transition={{
							type: "spring",
							stiffness: 300,
							damping: 30,
						}}
						className="relative z-10 w-full max-w-2xl mx-4"
					>
						<div className="relative bg-primary-maroon rounded-xl overflow-hidden shadow-2xl">
							{/* Close button */}
							<Button
								onClick={onClose}
								variant="ghost"
								size="icon"
								className="absolute right-2 top-2 z-20 text-primary-white hover:bg-primary-yellow/20 hover:text-primary-yellow"
							>
								<X className="h-5 w-5" />
							</Button>

							{/* Header with decoration */}
							<div className="bg-gradient-to-r from-primary-maroon via-primary-maroon to-primary-amber/30 p-6 pb-2">
								<motion.h2
									initial={{ y: -20, opacity: 0 }}
									animate={{ y: 0, opacity: 1 }}
									className="text-3xl font-bold text-primary-yellow text-center"
								>
									Contact Us
								</motion.h2>
								<p className="text-primary-white/80 text-center mt-2">
									We&apos;d love to hear from you
								</p>
							</div>

							{/* Decorative element */}
							<div className="h-1 w-full bg-gradient-to-r from-primary-yellow via-primary-amber to-primary-yellow/30"></div>

							<div className="py-12 px-20">
								<ContactUsForm onSubmitSuccess={onClose} />
							</div>

							{/* Bottom decorative element */}
							<div className="flex flex-wrap items-center justify-center gap-2 mb-4 text-xs text-primary-white/60 px-4">
								<span>Secure form</span>
								<span>•</span>
								<span>24h response time</span>
								<span>•</span>
								<span>Professional service</span>
							</div>
						</div>
					</motion.div>
				</div>
			)}
		</AnimatePresence>
	);
}
