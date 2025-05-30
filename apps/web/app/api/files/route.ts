import { NextResponse } from "next/server";

// TODO: feel free to delete this sample API route when we have a real API

export async function GET(request: Request) {
	const sampleData = [
		{
			id: "1",
			name: "Documents",
			type: "folder",
			modified: "May 15, 2024",
		},
		{
			id: "2",
			name: "Images",
			type: "folder",
			modified: "May 12, 2024",
		},
		{
			id: "3",
			name: "Project Proposal",
			type: "document",
			size: "2.4 MB",
			modified: "May 10, 2024",
		},
		{
			id: "4",
			name: "Quarterly Report",
			type: "document",
			size: "4.2 MB",
			modified: "May 8, 2024",
		},
		{
			id: "5",
			name: "Meeting Notes",
			type: "document",
			size: "1.1 MB",
			modified: "May 5, 2024",
		},
		{
			id: "6",
			name: "Videos",
			type: "folder",
			modified: "May 3, 2024",
		},
	];

	const { searchParams } = new URL(request.url);
	const type = searchParams.get("type")?.toLowerCase() || "";

	const filteredData = sampleData.filter(item => !type || item.type.toLowerCase().includes(type));

	await new Promise(resolve => setTimeout(resolve, 1000));

	return NextResponse.json(filteredData);
}
