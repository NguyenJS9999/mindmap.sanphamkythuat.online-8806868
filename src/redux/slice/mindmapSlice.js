import { createSlice } from '@reduxjs/toolkit';
import { getLocalStorage } from '~/utils/actionLocalstorage';

const initialState = {
	nodes: [],
	edges: [],
};
export const mindmapSlice = createSlice({
	name: 'mindmap',
	initialState,
	reducers: {
		changeNode: (state, action) => {
			console.log('slice mindmap changeNode', action.payload);
			state.nodes = action.payload;
		},
		changeEdges: (state, action) => {
			state.edges = action.payload;
		},
    // Thay đổi text của từng nodes 1
		changeTextNode: (state, action) => {
			state.nodes.find(item => {
				if (Number(item.id) === Number(action.payload.id)) {
					item.data.label = action.payload.label;
				}
			});
		}
	}
});
