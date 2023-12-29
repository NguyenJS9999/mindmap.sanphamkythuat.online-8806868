// https://f86wpp-8080.csb.app/

async function getListMindMap() {
	const response = await fetch(
    `https://f86wpp-8080.csb.app/`,
  );
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

export const getMindmaps = async (id) => {
  try {
    const response = await fetch(`${api}?user_id=${id}`);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const postMindmap = async (data) => {
  try {
    const response = await fetch(`${api}`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Request been failed with status: ${response.status}`);
    }
    return response;
  } catch (error) {
    console.error('Error during fetch:', error);
  }
};

export const deleteMindmap = async (data) => {
  console.log('deleteMindmap');
}