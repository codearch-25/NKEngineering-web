"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
	contactFormSchema,
	type ContactFormValues,
} from "@/lib/validation/contact-form";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { AlertCircle, Check, Loader2 } from "lucide-react";

export default function ContactUs() {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitSuccess, setSubmitSuccess] = useState(false);
	const [submitError, setSubmitError] = useState<string | null>(null);

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<ContactFormValues>({
		resolver: zodResolver(contactFormSchema),
		defaultValues: {
			name: "",
			email: "",
			subject: "",
			message: "",
		},
	});

	const onSubmit = async (data: ContactFormValues) => {
		setIsSubmitting(true);
		setSubmitSuccess(false);
		setSubmitError(null);

		try {
			const response = await fetch("/api/send-email", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data),
			});

			const result = await response.json();

			if (!response.ok) {
				throw new Error(result.error || "Failed to send message");
			}

			// Success! Clear the form and show success message
			setSubmitSuccess(true);
			reset();
		} catch (error) {
			console.error("Error submitting form:", error);
			setSubmitError(
				error instanceof Error ? error.message : "Failed to send message",
			);
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<section className="py-20 mt-10 px-4 md:px-8 max-w-[1440px] mx-auto">
			<div className="grid md:grid-cols-2 gap-20">
				<div>
					<h2 className="text-3xl font-bold text-primary-maroon mb-4">
						Get in Touch
					</h2>
					<p className="text-gray-600 mb-6">
						Have a question or want to discuss a project? Fill out the form and
						we&apos;ll get back to you as soon as possible.
					</p>
					<div>
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15835.728847702592!2d79.86531327948316!3d7.133837771186404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2f1d514e41f3d%3A0x7963491ce5079de7!2sN%20%26%20K%20Engineering%20-%20Project%20Office!5e0!3m2!1sen!2slk!4v1751015165691!5m2!1sen!2slk"
							width="600"
							height="450"
							className="rounded-lg shadow-lg w-full"
						/>
					</div>
				</div>

				<Card className="p-6 shadow-lg bg-primary-maroon text-primary-white">
					<form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
						{submitSuccess && (
							<div className="bg-green-50 text-green-700 p-3 rounded-md flex items-center mb-4">
								<Check className="h-5 w-5 mr-2" />
								<span>Your message has been sent successfully!</span>
							</div>
						)}

						{submitError && (
							<div className="bg-red-50 text-red-700 p-3 rounded-md flex items-center mb-4">
								<AlertCircle className="h-5 w-5 mr-2" />
								<span>{submitError}</span>
							</div>
						)}

						<div>
							<label htmlFor="name" className="block text-sm font-medium mb-1">
								Name *
							</label>
							<input
								id="name"
								{...register("name")}
								className={`w-full px-3 py-2 border rounded-md ${
									errors.name ? "border-red-500" : "border-gray-300"
								}`}
								disabled={isSubmitting}
							/>
							{errors.name && (
								<p className="text-red-500 text-sm mt-1">
									{errors.name.message}
								</p>
							)}
						</div>

						<div>
							<label htmlFor="email" className="block text-sm font-medium mb-1">
								Email *
							</label>
							<input
								id="email"
								type="email"
								{...register("email")}
								className={`w-full px-3 py-2 border rounded-md ${
									errors.email ? "border-red-500" : "border-gray-300"
								}`}
								disabled={isSubmitting}
							/>
							{errors.email && (
								<p className="text-red-500 text-sm mt-1">
									{errors.email.message}
								</p>
							)}
						</div>

						<div>
							<label
								htmlFor="subject"
								className="block text-sm font-medium mb-1"
							>
								Subject
							</label>
							<input
								id="subject"
								{...register("subject")}
								className="w-full px-3 py-2 border border-gray-300 rounded-md"
								disabled={isSubmitting}
							/>
						</div>

						<div>
							<label
								htmlFor="message"
								className="block text-sm font-medium mb-1"
							>
								Message *
							</label>
							<textarea
								id="message"
								{...register("message")}
								rows={5}
								className={`w-full px-3 py-2 border rounded-md ${
									errors.message ? "border-red-500" : "border-gray-300"
								}`}
								disabled={isSubmitting}
							/>
							{errors.message && (
								<p className="text-red-500 text-sm mt-1">
									{errors.message.message}
								</p>
							)}
						</div>

						<Button
							type="submit"
							className="w-full bg-primary-yellow text-primary-black hover:bg-primary-amber transition-colors"
							disabled={isSubmitting}
						>
							{isSubmitting ? (
								<>
									<Loader2 className="mr-2 h-4 w-4 animate-spin" />
									Sending...
								</>
							) : (
								"Send Message"
							)}
						</Button>
					</form>
				</Card>
			</div>
		</section>
	);
}
