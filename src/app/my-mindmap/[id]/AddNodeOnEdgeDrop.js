"use client"
import React, { useCallback, useEffect, useRef } from "react";
import ReactFlow,{
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  useReactFlow,
  getIncomers,
  getOutgoers,
  getConnectedEdges,
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
} from 'reactflow'
import "reactflow/dist/style.css";
import "./index.scss";
import { useSelector, useDispatch } from "react-redux";
import { mindmapSlice } from "~/redux/slice/mindmapSlice";
const { changeNode, changeEdges } = mindmapSlice.actions;
import CustomNode from './CustomNode'

import TextUpdaterNode from './TextUpdaterNode/TextUpdaterNode.js';
const nodeTypes = { textUpdater: TextUpdaterNode };

const initialNodes = [
  {
    id: "0",
    type: "input",
    data: { label: "My Mindmap" },
    position: { x: 0, y: 50 },
  }
];

let id = 1;
const getId = () => `${id++}`;

const AddNodeOnEdgeDrop = () => {
  const dispatch = useDispatch();

  // Lấy ra ID từ URL
  const getIDFromURL = () => {
    const pathname = window.location.pathname;
    const idThisMindmap = pathname.substring(pathname.lastIndexOf('/') + 1);
    // console.log('idThisMindmap', idThisMindmap);
    return idThisMindmap;
  }


  const reactFlowWrapper = useRef(null);
  const connectingNodeId = useRef(null);
  const [nodes, setNodes] = useNodesState([]);
  const [edges, setEdges] = useEdgesState([]);
  const { screenToFlowPosition } = useReactFlow();

  useEffect(() => {
    getThisNode();
  }, []);

  const getThisNode = async () => {
    const response = await fetch(`https://f86wpp-8080.csb.app/mindmaps/${getIDFromURL()}`);
    const dataParsed = await response.json();
    // console.log('getThisNode', dataParsed);
    if (response) {
      if(dataParsed?.map?.nodes && dataParsed.map.nodes.length > 0) {
        setNodes(dataParsed?.map?.nodes);
        setEdges(dataParsed?.map?.edges);
      } else {
        setNodes(initialNodes);
      }
    }
  }

  // 1
  const onConnect = useCallback((params) => {
    // reset the start node on connections
    connectingNodeId.current = null;
    setEdges((eds) => addEdge(params, eds));
  }, []);
  // 2
  const onConnectStart = useCallback((_, { nodeId }) => {
    connectingNodeId.current = nodeId;
  }, []);

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes]
  );
  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [setEdges]
  );

  // 3
  const onConnectEnd = useCallback( (event) => {
    // console.log('onConnectEnd', event);

      if (!connectingNodeId.current) return;

      const targetIsPane = event.target.classList.contains("react-flow__pane");

      if (targetIsPane) {
        // we need to remove the wrapper bounds, in order to get the correct position
        const id = getId();

        const newNode = {
          id,
          position: screenToFlowPosition({
            x: event.clientX,
            y: event.clientY,
          }),

          data: { label: `Node ${id}` },
          origin: [0.5, 0.0],
        };

        setNodes((nds) => nds.concat(newNode));
        setEdges((eds) => eds.concat({ id,source: connectingNodeId.current,target: id }));
      }
    },
    [screenToFlowPosition]
  );

  const onNodesDelete = useCallback((deleted) => {
      console.log('onNodesDelete deleted', deleted);
      setEdges(
        deleted.reduce((acc, node) => {
          const incomers = getIncomers(node, nodes, edges);
          const outgoers = getOutgoers(node, nodes, edges);
          const connectedEdges = getConnectedEdges([node], edges);

          const remainingEdges = acc.filter((edge) => !connectedEdges.includes(edge));

          const createdEdges = incomers.flatMap(({ id: source }) =>
            outgoers.map(({ id: target }) => ({ id: `${source}->${target}`, source, target }))
          );

          return [...remainingEdges, ...createdEdges];
        }, edges)
      );
    },
    [nodes, edges]
  );

  useEffect(() => {
    const timeoutId = setTimeout(function() {
      // console.log('nodes', nodes);
      // dispatch(changeNode(nodes));
      // dispatch(changeEdges(edges));

      clearTimeout(timeoutId);
    }, 1000);
  }, [nodes, edges]);

  const rfStyle = {
    backgroundColor: 'rgba(000,000,000,0.1)',
  };

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
        fitViewOptions={{ padding: 0.5 }}
        nodeOrigin={[0.5, 0]}
        deleteKeyCode={['Delete']}
        // style={rfStyle}
        // className="custom-node"
      >
        <MiniMap />
        <Controls />
        <Background color="#ccc" variant="dots" gap={12} size={1} />
      </ReactFlow>
    </div>
  );
};

export default AddNodeOnEdgeDrop;
