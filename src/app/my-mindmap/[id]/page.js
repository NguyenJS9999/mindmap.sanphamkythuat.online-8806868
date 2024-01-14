import { getServerSession } from "next-auth";
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
		<MindmapDetail />

	);
}

export default MyMindmapUsePage;
