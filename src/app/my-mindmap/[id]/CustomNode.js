'use client';
import React, { useEffect } from 'react';
import { useCallback, useState } from 'react';
import ReactFlow, {
	MiniMap,
	Controls,
	Background,
	addEdge,
	applyEdgeChanges,
	applyNodeChanges,
	useReactFlow,
	getIncomers,
	getOutgoers,
	getConnectedEdges
} from 'reactflow';
import 'reactflow/dist/style.css';

import { useRef } from 'react';

import TextUpdaterNode from './TextUpdaterNode/TextUpdaterNode.js';
import { useSelector, useDispatch } from 'react-redux';
import { mindmapSlice } from '~/redux/slice/mindmapSlice';
import { setLocalStorage } from '~/utils/actionLocalstorage.js';
const { changeNode, changeEdges } = mindmapSlice.actions;

const rfStyle = {
	backgroundColor: '#B8CEFF'
};

const initialNodes = [
	{
		id: '0',
		type: 'textUpdater',
		data: { label: `My Mindmap init` },
		position: { x: 0, y: 0 },
		typeOrigin: true // Đánh dấu là node gốc
	}
];
// we define the nodeTypes outside of the component to prevent re-renderings
// you could also use useMemo inside the component
const nodeTypes = { textUpdater: TextUpdaterNode };

let id = 1;
const getId = () => `${id++}`;

function CustomNode({ idMindmap, nodesApi, edgesApi }) {


	const reactFlowWrapper = useRef(null);
	const connectingNodeId = useRef(null);

	// const nodesStore = useSelector((state) => state.mindmap.nodes);
	// const edgesStore = useSelector((state) => state.mindmap.edges);

	const [nodes, setNodes] = useState([]);
	const [edges, setEdges] = useState([]);
	const { screenToFlowPosition } = useReactFlow();

	const dispatch = useDispatch();

	useEffect(() => {
		setNodes(nodesApi);
		setEdges(edgesApi);
	}, [nodesApi, edgesApi]);

	useEffect(() => {
		const timeoutId = setTimeout(function () {
			dispatch(changeNode(nodes));
			dispatch(changeEdges(edges));
			clearTimeout(timeoutId);
		}, 1000);
	}, [nodes, edges, dispatch]);



	// const getInitData = async () => {
  //   console.log('Gán nodesStore', nodesStore);
  //   setNodes(nodesStore);
  //   setEdges(edgesStore);
	// };

	const onNodesChange = useCallback(
		changes => setNodes(nds => applyNodeChanges(changes, nds)),
		[setNodes]
	);
	const onEdgesChange = useCallback(
		changes => setEdges(eds => applyEdgeChanges(changes, eds)),
		[setEdges]
	);
	const onConnect = useCallback(
		connection => setEdges(eds => addEdge(connection, eds)),
		[setEdges]
	);

	const onConnectStart = useCallback((_, { nodeId }) => {
		connectingNodeId.current = nodeId;
	}, []);

	// 3
	const onConnectEnd = useCallback(
		event => {
			if (!connectingNodeId.current) return;

			const targetIsPane =
				event.target.classList.contains('react-flow__pane');

			if (targetIsPane) {
				// we need to remove the wrapper bounds, in order to get the correct position
				const id = getId();

				const newNode = {
					id,
					type: 'textUpdater',
					deletable: true,
					position: screenToFlowPosition({
						x: event.clientX,
						y: event.clientY
					}),
					isEditing: true,
					data: { label: `Text ${id}` },
					origin: [0.5, 0.0]
				};

				setNodes(nds => nds.concat(newNode));
				setEdges(eds =>
					eds.concat({
						id,
						source: connectingNodeId.current,
						target: id
					})
				);
			}
		},
		[screenToFlowPosition]
	);

	const onNodesDelete = useCallback(
		deleted => {
			console.log('onNodesDelete deleted', deleted);
			setEdges(
				deleted.reduce((acc, node) => {
					const incomers = getIncomers(node, nodes, edges);
					const outgoers = getOutgoers(node, nodes, edges);
					const connectedEdges = getConnectedEdges([node], edges);

					const remainingEdges = acc.filter(
						edge => !connectedEdges.includes(edge)
					);

					const createdEdges = incomers.flatMap(({ id: source }) =>
						outgoers.map(({ id: target }) => ({
							id: `${source}->${target}`,
							source,
							target
						}))
					);

					return [...remainingEdges, ...createdEdges];
				}, edges)
			);
		},
		[nodes, edges]
	);

	return (
		<div className="mindmap-component" ref={reactFlowWrapper}>
			<ReactFlow
				nodes={nodes}
				edges={edges}
				onNodesChange={onNodesChange}
				onEdgesChange={onEdgesChange}
				onConnect={onConnect}
				onConnectStart={onConnectStart}
				onConnectEnd={onConnectEnd}
				onNodesDelete={onNodesDelete}
				nodeTypes={nodeTypes}
				fitView
				style={rfStyle}
			>
				<MiniMap />
				<Controls />
				<Background color="#ccc" variant="dots" gap={12} size={1} />
			</ReactFlow>
		</div>
	);
}

export default CustomNode;
