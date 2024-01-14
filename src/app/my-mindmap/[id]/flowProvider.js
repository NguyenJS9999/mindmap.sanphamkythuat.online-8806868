'use client';
import { ReactFlowProvider } from 'reactflow';
import CustomNode from './CustomNode';

function FlowProvider({ idMindmap, nodesApi, edgesApi, data }) {

  return (
    <ReactFlowProvider>
      {/* <AddNodeOnEdgeDrop id={id} handleChangeNode={createNewChildNode} /> */}
      <CustomNode
       idMindmap={idMindmap}
       nodesApi={nodesApi}
       edgesApi={edgesApi}
      />

    </ReactFlowProvider>
  );
}

export default FlowProvider;
