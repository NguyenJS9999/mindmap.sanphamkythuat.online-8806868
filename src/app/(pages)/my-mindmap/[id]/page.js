// import MindmapComponent from "~/components/mindmap3";
// import MindmapControl from "~/components/mindmap2/MindmapControl";
import { getServerSession } from "next-auth";
// import { DataMindmapProvider } from '~/app/context/DataMindmapProvider';
import MindmapDetail from "./mindmapDetail";

export const metadata = {
	title: 'Mindmap detail',
	description: 'Mindmap detail vs id',
	openGraph: {
		title: 'Mindmap detail',
		description: 'Mindmap detail vs id'
	}
};

async function MyMindmapUsePage({ params: { id } }) {
  const session = await getServerSession();

	if (!session) {
		redirect("/signin");
	}

	return (
    // <DataMindmapProvider>
		<MindmapDetail />
		// </DataMindmapProvider>

	);
}

export default MyMindmapUsePage;
