import React from "react";
import { FaFileAlt, FaGlobe, FaWindowMaximize } from "react-icons/fa";
import { FaFireExtinguisher } from "react-icons/fa6";

export default function Inspiration() {
	return (
		<div className="w-full bg-primary-maroon py-16">
			<div className="container mx-auto px-4">
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-white">
					<div className="flex flex-col items-center text-center">
						<div className="mb-3 text-primary-amber">
							<FaFileAlt size={48} />
						</div>
						<h3 className="text-5xl font-bold mb-2 text-white">
							300<span className="text-primary-amber">+</span>
						</h3>
						<p className="text-gray-300">Successfull Projects</p>
					</div>

					<div className="flex flex-col items-center text-center">
						<div className="mb-3 text-primary-amber">
							<FaFireExtinguisher size={48} />
						</div>
						<h3 className="text-5xl font-bold mb-2 text-white">
							93<span className="text-primary-amber">%+</span>
						</h3>
						<p className="text-gray-300">Trusted Client</p>
					</div>

					<div className="flex flex-col items-center text-center">
						<div className="mb-3 text-primary-amber">
							<FaGlobe size={48} />
						</div>
						<h3 className="text-5xl font-bold mb-2 text-white">
							150<span className="text-primary-amber">+</span>
						</h3>
						<p className="text-gray-300">Trained Staff</p>
					</div>

					<div className="flex flex-col items-center text-center">
						<div className="mb-3 text-primary-amber">
							<FaWindowMaximize size={48} />
						</div>
						<h3 className="text-5xl font-bold mb-2 text-white">
							12<span className="text-primary-amber">+</span>
						</h3>
						<p className="text-gray-300">Years Experience</p>
					</div>
				</div>
			</div>
		</div>
	);
}
