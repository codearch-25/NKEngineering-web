"use client";

import ContactUsForm from "@/components/contact-us/contact-us-form";

export default function ContactUs() {
	return (
		<section className="py-20 mb-10 px-4 md:px-8 max-w-[1440px] mx-auto">
			<div className="grid md:grid-cols-7 gap-16">
				<div className="md:col-span-4 flex flex-col justify-center">
					<h2 className="text-4xl font-bold text-primary-maroon mb-4">
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
				<div className="md:col-span-3 mt-10">
					<ContactUsForm />
				</div>
			</div>
		</section>
	);
}
