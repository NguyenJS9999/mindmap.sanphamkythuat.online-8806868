"use client"
import React, { useCallback, useEffect, useLayoutEffect, useRef } from "react";
import ReactFlow, {
  useNodesState,
  useEdgesState,
  addEdge,
  useReactFlow,
  ReactFlowProvider,
  Controls,
  MiniMap,
} from "reactflow";
import "reactflow/dist/style.css";

import "./index.scss";

const initialNodes = [
  {
    id: "0",
    type: "input",
    data: { label: "Node" },
    position: { x: 0, y: 50 },
  }
];

let id = 1;
const getId = () => `${id++}`;

const AddNodeOnEdgeDrop = ({handleCreateNewChildNode}) => {

  const reactFlowWrapper = useRef(null);
  const connectingNodeId = useRef(null);
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const { screenToFlowPosition } = useReactFlow();

  useEffect(() => {
    getThisNode();
  }, []);

  const getThisNode = async () => {
    const response = await fetch(`https://f86wpp-8080.csb.app/mindmaps/c33494a6-f4a9-413e-a864-7a283d5fab9e`);
    const dataParsed = await response.json();
    console.log('getThisNode', dataParsed);
    if (response) {
      setNodes(dataParsed?.map?.nodes);
      setEdges(dataParsed?.map?.edges);
    }
  }

  const onConnect = useCallback((params) => {
    // reset the start node on connections
    connectingNodeId.current = null;
    setEdges((eds) => addEdge(params, eds));
  }, []);

  const onConnectStart = useCallback((_, { nodeId }) => {
    connectingNodeId.current = nodeId;
  }, []);

  const onConnectEnd = useCallback( (event) => {
    console.log('onConnectEnd', event);

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
        handleCreateNewChildNode(nodes, edges);

      }
    },
    [screenToFlowPosition]
  );

  useLayoutEffect(() => {
    // console.log('nodes', nodes);
    // console.log('edges', edges);
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
        fitView
        fitViewOptions={{ padding: 2 }}
        nodeOrigin={[0.5, 0]}
        style={rfStyle}
        className="custom-node"
      >
        <MiniMap />
        <Controls />

      </ReactFlow>
    </div>
  );
};

export default AddNodeOnEdgeDrop;
