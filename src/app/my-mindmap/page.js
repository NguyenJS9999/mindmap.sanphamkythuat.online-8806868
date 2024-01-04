import { Fragment } from 'react';
import MindmapListComponent from "~/components/minmap-list/MindmapList";
// import { getMindMap2 } from '../../../../lib/CallApiServer';
// import { getMindMap2 } from "~/lib/CallApiServer";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const api = process.env.NEXT_PUBLIC_API;
console.log('MyMindmapPage api', api);

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
		<Fragment>
			<MindmapListComponent session={session}/>
		</Fragment>
	);
}

export default MyMindmapPage;
