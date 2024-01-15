import { Fragment } from 'react';
import MindmapListComponent from "~/components/minmap-list/MindmapList";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export const metadata = {
	title: 'Mindmap của tôi - Mindmap Flow',
	description: 'Description',
	openGraph: {
		title: 'Mindmap của tôi - Mindmap Flow',
		description: 'Description'
	}
};

async function MyMindmapPage () {
  const session = await getServerSession();
	if (!session) {
		redirect("/signin");
	}

  // const data = await getMindMap2();
	// console.log('MyMindmapPage', data);

	return (
		<MindmapListComponent session={session}/>
	);
}

export default MyMindmapPage;
