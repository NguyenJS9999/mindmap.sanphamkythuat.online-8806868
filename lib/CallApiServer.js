"use server";

import { revalidateTag } from "next/cache";

const getMindMap = async (email) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API}/mindmap?userEmail=${email}`, {
        next: {
          tags: ["mindmap"],
        },
      });
      if (response.ok) {
        const data = await response.json();
        revalidateTag(`mindmapDetails`);
        return {
          status: response.status,
          mindMapData: data || []
        }
      }
    } catch(e){
      return { status: 500 }
    }
};


const getMindMap2 = async () => {
  try {
    const response = await fetch(`https://f86wpp-8080.csb.app/nodes`, {
      // next: {
      //   tags: ["mindmap"],
      // },
    });
    if (response.ok) {
      const data = await response.json();
      revalidateTag(`mindmapDetails`);
      return {
        status: response.status,
        mindMapData: data || []
      }
    }
  } catch(e){
    return { status: 500 }
  }
};


const getMindMapDetails = async (id, email) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API}/mindMap?mindMapId=${id}`, {
        next: {
          tags: ["mindmapDetails"],
        },
      });
      if (response.ok)
      {
        const data = await response.json();
        const details = [...data];
        revalidateTag(`mindmap`);
        return {
          status: response.status,
          mindMapDetails: details[0] || null,
          isAccountValid: details[0]?.userEmail !== email && details[0]?.isAccessible ? false : true,
        }
      }
      return {
        status: response.status,
        mindMapDetails: null
      }
    } catch(e) {
      return { status: 500 }
    }

};

export { getMindMap, getMindMapDetails, getMindMap2 }
