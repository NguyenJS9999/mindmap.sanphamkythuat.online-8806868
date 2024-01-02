// https://f86wpp-8080.csb.app/
import moment from 'moment';


async function getListMindMap() {
	const response = await fetch(`https://f86wpp-8080.csb.app/`);
	return response.json();
}

// export const postMindmap = async data => {
// 	const res = await fetch(`https://43jf2n-8080.csb.app/mindMap`, {
// 		method: 'POST',
// 		headers: {
// 			'Content-Type': 'application/json'
// 		},
// 		// body: JSON.stringify({
// 		// 	name: 'Xin chào'
// 		// })
// 		body: JSON.stringify(data)
// 	});
// 	console.log(res);
// };
//

const api = `${process.env.NEXT_PUBLIC_API}/mindmaps`;

export const getMindmaps = async id => {
	try {
		const response = await fetch(`${api}?user_id=${id}`);
		return response;
	} catch (error) {
		console.log(error);
	}
};

export async function putMindMap(data) {
  console.log('putMindMap export', data);
	try {
		const randomNum = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
		const currentTime = moment().format('YYYY-MM-DD hh:mm:ss');
		console.log('putMindMap currentTime: ', currentTime);

		const response = await fetch(`https://f86wpp-8080.csb.app/mindmaps`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
        id: data?.id,
        name: data.name ? data.name : `Mindmap không có tên`,
        description: data.description ? data.description : `Chưa có mô tả`,
        createdAt: data.createdAt,
        // map: {
        //   nodes: [],
        //   edges: [],
        // }
			})
		});
    // Nếu thành công
    if (!response.ok) {
      throw new Error(`Request been failed with status: ${response.status}`);
    }
    return response;
	} catch (error) {
		console.error('Error during fetch:', error);
	}
}

// export const postMindmap = async (data) => {
//   try {
//     const response = await fetch(`${api}`, {
//       method: 'POST',
//       mode: 'cors',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(data),
//     });
//
//     if (!response.ok) {
//       throw new Error(`Request been failed with status: ${response.status}`);
//     }
//     return response;
//   } catch (error) {
//     console.error('Error during fetch:', error);
//   }
// };

export const deleteMindmap = async data => {
	console.log('deleteMindmap');
};
