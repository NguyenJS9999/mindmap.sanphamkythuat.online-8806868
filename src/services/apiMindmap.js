
async function getListMindMap() {
	const response = await fetch(`${API}/`);
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

// const API = process.env.API_MINDMAP;
export const API = 'https://f86wpp-8080.csb.app';
// export const API = 'http://localhost:5000';

export const getListMindmaps = async (query = {}) => {
	try {
		const response = await fetch(`${API}/mindmaps?_sort=createdAt&_order=desc`);
    // const dataParsed = await response.json();
    // console.log('getListMindmaps', response);
    // console.log('getListMindmaps', dataParsed);

		if (response.ok || response.status === 200) {
			return response;
    } else {
			throw new Error(`Get mindmaps been failed with status: ${response.status}`);
		}
	} catch (error) {
		console.log(error);
	}
};

export const getOneMindmap = async (id) => {
	try {
		if (id) {
			const response = await fetch(`${API}/mindmaps/${id}`);
			if (response.ok || response.status === 200) {
				return response;
			} else {
				throw new Error(`Get mindmap been failed with status: ${response.status}`);
			}
		}
	} catch (error) {
		console.log(error);
	}
};

// Thêm 1 bản ghi vào đầu mảng
export async function postOneMindMap(data) {
	if (data) {
		try {
			const response = await fetch(`${API}/mindmaps?_prepend=1`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(data)
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
}

// Cập nhập 1
export async function updateOneMindMap(id, data) {
	if (id && data) {
		try {
			const response = await fetch(`${API}/mindmaps/${id}`, {
				method: 'PATCH',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(data)
			});
			// Nếu thành công
			if (!response.ok) {
				throw new Error(`Request been failed with status: ${response.status}`);
			}
			// console.log('putMindMap response', response);

			return response;
		} catch (error) {
			console.error('Error during fetch:', error);
		}
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

export const deleteMindmap = async (id) => {
 if (id) {
	try {
		const response = await fetch(`${API}/mindmaps/${id}`, {
			method: 'DELETE',
		});

		if (!response.ok) {
			throw new Error(`Request been failed with status: ${response.status}`);
		}

		return response;

	 } catch (error) {
		console.log('Delete failue',error);
	 }
 }
};
