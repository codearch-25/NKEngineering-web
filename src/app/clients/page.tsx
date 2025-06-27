import React from "react";

export default function ClientsPage() {
	// Sample client data - in a real app, this would come from a database
	const clients = [
		{
			id: 1,
			name: "ABC Corporation",
			industry: "Commercial Real Estate",
			project: "Fire Safety Systems Installation",
		},
		{
			id: 2,
			name: "XYZ Developments",
			industry: "Residential Construction",
			project: "Building Services Engineering",
		},
		{
			id: 3,
			name: "City Hospital",
			industry: "Healthcare",
			project: "Safety Compliance Consulting",
		},
		{
			id: 4,
			name: "Metro Shopping Mall",
			industry: "Retail",
			project: "Fire Engineering Solutions",
		},
		{
			id: 5,
			name: "Horizon Hotels",
			industry: "Hospitality",
			project: "Engineering Consultancy",
		},
	];

	return (
		<div className="container mx-auto px-4 py-20">
			<h1 className="text-4xl font-bold mb-6">Our Clients</h1>
			<p className="text-lg mb-8">
				We are proud to work with a diverse range of clients across various
				industries. Our commitment to excellence has earned us the trust of
				these distinguished organizations.
			</p>

			<div className="overflow-x-auto">
				<table className="min-w-full bg-white">
					<thead className="bg-gray-100">
						<tr>
							<th className="py-3 px-4 text-left">Client</th>
							<th className="py-3 px-4 text-left">Industry</th>
							<th className="py-3 px-4 text-left">Project</th>
						</tr>
					</thead>
					<tbody>
						{clients.map((client) => (
							<tr key={client.id} className="border-b hover:bg-gray-50">
								<td className="py-3 px-4 font-medium">{client.name}</td>
								<td className="py-3 px-4">{client.industry}</td>
								<td className="py-3 px-4">{client.project}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>

			<div className="mt-12">
				<h2 className="text-2xl font-bold mb-4">Work With Us</h2>
				<p className="text-lg">
					Join our growing list of satisfied clients. Contact us today to
					discuss how we can help with your engineering needs.
				</p>
			</div>
		</div>
	);
}
