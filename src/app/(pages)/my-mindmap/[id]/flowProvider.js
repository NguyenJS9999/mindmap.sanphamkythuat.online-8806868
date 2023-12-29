'use client';
import { ReactFlowProvider } from 'reactflow';
import AddNodeOnEdgeDrop from './AddNodeOnEdgeDrop';

function FlowProvider({ id }) {

  async function createNewChildNode(nodes, edges) {
    console.log('parent event');

    // const res = await fetch(`https://43jf2n-8080.csb.app/users`, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({
    //     nodes: nodes,
    //     edges: edges
    //   })
    // });
    // console.log(res);

  };

  return (
    <ReactFlowProvider>
      <AddNodeOnEdgeDrop id={id} handleCreateNewChildNode={createNewChildNode} />
    </ReactFlowProvider>
  );
}

export default FlowProvider;
