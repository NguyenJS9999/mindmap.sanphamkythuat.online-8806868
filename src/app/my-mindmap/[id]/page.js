import { getServerSession } from 'next-auth';
import MindmapDetail from './mindmapDetail';
import { getOneMindmap } from '~/services/apiMindmap';
import { redirect } from 'next/navigation';

export const metadata = {
	title: 'Mindmap detail 1',
	description: 'Mindmap detail vs id',
	openGraph: {
		title: 'Mindmap detail',
		description: 'Mindmap detail vs id'
	}
};

async function MyMindmapUsePage({ params: { id } }) {
	const session = await getServerSession();
	// console.log('server session', session);
	// console.log('id =>', id);

	let caseNumb = 0;
	let canEdit = false;
	let canView = false;

	const getThisMindmap = async () => {
		const response = await getOneMindmap(id);
		// console.log('response', response);
		if (response.status === 200) {
			const dataParsed = await response.json();

			const emailUserLogin = session?.user?.email;
			const emaiUserOwnMindmap = dataParsed?.userEmail;
			const statusMindmap = dataParsed?.status;

			if (statusMindmap && emailUserLogin && emaiUserOwnMindmap) {
				// console.log('Email Login =>', emailUserLogin);
				// console.log('Email create mind =>', emaiUserOwnMindmap);
				// console.log('status =>', statusMindmap);

				// 1 riêng tư - chưa đăng nhập -> Login
				if (statusMindmap === 'private' && !session) {
					caseNumb = 1;
					canView = false;
					canEdit = false;
					// console.log('1 riêng tư - chưa đăng nhập -> Login');
					redirect('/signin');
				}

				// 2 riêng tư - Đã đăng nhập 404 - không sở hữu mindmap -> 404 - không xem được
				if (statusMindmap === 'private' && session) {
					if (emailUserLogin === !emaiUserOwnMindmap) {
						caseNumb = 2;
						canView = false;
						canEdit = false;
						// console.log('2 riêng tư - Đã đăng nhập 404 - không sở hữu mindmap -> 404 - không xem được');
						redirect('/404');
					}
				}
				// 3 Công khai - chưa đăng nhập -> Xem được
				if (statusMindmap === 'public' && !session) {
					caseNumb = 3;
					canView = true;
					// console.log('3 Công khai - chưa đăng nhập -> Xem được');
				}

				// 4 Công khai - Đã đăng nhập (ko phải chủ)-> Xem được.
				if (statusMindmap === 'public' && session) {
					if (emailUserLogin !== emaiUserOwnMindmap) {
						caseNumb = 4;
						canView = true;
						// console.log('4 Mindmap không phải do user đang đăng nhập tạo');
					}
				}

				// 5 Công khai - Đã đăng nhập (Có phải chủ)-> Xem được và sửa được
				if (statusMindmap === 'public' && session) {
					if (emailUserLogin === emaiUserOwnMindmap) {
						caseNumb = 5;
						canEdit = true;
						canView = true;
						// console.log('5 Công khai - Đã đăng nhập (Có phải chủ)-> Xem được và sửa được');
					}
				}
				// 6 Riêng tư - Đã đăng nhập (Có phải chủ)-> Xem được và sửa được
				if (statusMindmap === 'private' && session) {
					if (emailUserLogin === emaiUserOwnMindmap) {
						caseNumb = 6;
						canEdit = true;
						canView = true;
						// console.log('6 Riêng tư - Đã đăng nhập (Có phải chủ)-> Xem được và sửa được');
					}
				}
			}
		}

		if (response.status === 404) {
			redirect('/404');
		}

	};
	await getThisMindmap();

	// const response = await getOneMindmap(id);

	return <MindmapDetail canView={canView}  canEdit={canEdit} caseNumb={caseNumb}/>;
}

export default MyMindmapUsePage;
