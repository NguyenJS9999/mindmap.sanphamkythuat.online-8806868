'use client';
import { ReactFlowProvider } from 'reactflow';
import AddNodeOnEdgeDrop from './AddNodeOnEdgeDrop';

function FlowProvider({ id }) {

  async function createNewChildNode(nodes, edges) {
    // console.log('parent event', event);
    console.log('nodes', nodes);
    console.log('edges', edges);

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
      <AddNodeOnEdgeDrop id={id} handleChangeNode={createNewChildNode} />
    </ReactFlowProvider>
  );
}

export default FlowProvider;
