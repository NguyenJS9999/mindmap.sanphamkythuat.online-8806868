"use client"

import React, { Fragment, useEffect, useLayoutEffect, useState } from 'react';
import moment from 'moment';
import Link from 'next/link';
// import { useSession } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";
import { v4 as uuidv4 } from 'uuid';
import Loading from '~/components/Loading';
import ModalConfirmDelete from '~/components/ModalConfirmDelete';
import { getMindmaps, putMindMap } from '~/services/apiMindmap';
import { FaTrashAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import './minmap-list.scss';


const api = process.env.NEXT_PUBLIC_API;

function MindmapListComponent({ session }) {
  // console.log('MindmapListComponent session', session);
  // const fetchApi = `${api}/mindmaps?user_id=${user?.sub}`;
  const [loading, setLoading] = useState(false);
  const [mindmapList, setMindmapList] = useState([]);

  const [dataMaps, setDataMaps] = useState([]);
  const [idRemove, setIdRemove] = useState(null);
  const [showConfirm, setShowConfirm] = useState(false);


  const router = useRouter();

  const data = [
    {
      id: 1,
      name: 'Mindmap 1',
      create_at: '20/11/2023 23:54:26',
      description: 'Description',
    },
    {
      id: 2,
      name: 'Mindmap 2',
      create_at: '20/12/2023 23:54:26',
      description: 'Description 2',
    },
  ];

  useLayoutEffect(() => {
    getMindmaps();
  }, []);

	const [ loaddding, setDidLogin ] = useState(true);

  async function createMindMap() {
    const randomMindMapId = uuidv4();
    console.log('randomMindMapId', randomMindMapId);
    if (randomMindMapId) {
      // API crate

      const currentTime = moment().format('YYYY-MM-DD hh:mm:ss');
      const dataCreateNewMindmap = {
        id: randomMindMapId,
        name: 'Mindmap không có tên',
        createdAt: currentTime,
        auth: false,
      }
      await putMindMap(dataCreateNewMindmap);
      // router.push(`/my-mindmap/${randomMindMapId}`);
      // redirect(`/my-mindmap/${randomMindMapId}`);

    }
  };

  function saveNode() {
    console.log('saveNode');
  }

  function handleEditMindmap(id) {
    console.log('handleEditMindmap', id);
    router.push(`/my-mindmap/${id}`);
  }
  async function handleDelelteMindmap(id) {
    console.log('handleDelelteMindmap', id);
    setShowConfirm(true);
    setIdRemove(id);
    // const response = await fetch(`https://f86wpp-8080.csb.app/mindmaps/${id}`, {
    //   method: 'DELETE',
    // });
    // console.log('Delete users response', response);
    // if (response) {
    //   getMindmaps();
    // }
  }

  // const getUsers = async () => {
  //   const res = await fetch(`https://f86wpp-8080.csb.app/users`);
  //   const users = await res.json();
  //   console.log(users);
  // }

  const getMindmaps = async () => {
    const response = await fetch(`https://f86wpp-8080.csb.app/mindmaps`);
    const dataParsed = await response.json();
    if (response) {
      console.log('getMindmaps: ', dataParsed);
      setMindmapList(dataParsed);
    }
  }

  // async function postUser() {
  //   const response = await fetch(`https://f86wpp-8080.csb.app/users`,
  //     {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //        name: 'Name 3'
  //       }),
  //     }
  //   );
  //   // const data = await response.json();
  //   console.log('postUser response', response);
  // }


//   async function putMindMap(data) {
//       // const randomNum = Math.floor(Math.random() * ((100) - (1) + 1)) + (1);
//       const response = await fetch(`https://f86wpp-8080.csb.app/mindmaps`,
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           id: data?.id,
//           name: data.name ? data.name : `Mindmap không có tên`,
//           description: data.description ? data.description : `Chưa có mô tả`,
//           createdAt: data.createdAt,
//           // map: {
//           //   nodes: [],
//           //   edges: [],
//           // }
//         }),
//       }
//     );
//
//     const data = await response.json();
//     // console.log('putMindMap res', data);
//     if (response) {
//       getMindmaps();
//     }
//   }

	return (
    <>
      <div className='container mindmap-list-component'>
        <div>
          <h1>Mindmap của tôi</h1>
        </div>

        <button onClick={createMindMap} type="button" class="btn btn-primary create-mindmap">
          {/* <Link href={`/my-mindmap/0`} >Thêm mới</Link> */}
          Thêm mới
        </button>

        <table class="table mindmap-list-table">
          <thead>
            <tr>
              <th scope="col">
                <input className="form-check-input" type="checkbox" value="" id="1" />
              </th>
              <th scope="col">TÊN</th>
              <th scope="col">TẠO LÚC</th>
              <th scope="col">HÀNH ĐỘNG</th>
            </tr>
          </thead>

          <tbody>

            { mindmapList && mindmapList.map((item) => {
              return (
                <Fragment>
                  <tr key={item?.id} className='mindmap-item'>

                    <th scope="row">
                      <input className="form-check-input" type="checkbox" value="" id="1" />
                    </th>

                    <td>
                      <div>
                        <div><Link href={`/my-mindmap/${item.id}`}>{item?.name}</Link></div>
                        <div>{item?.description}</div>
                        <div>{item?.id}</div>
                      </div>
                    </td>

                    <td>{moment((item?.createdAt)).format('YYYY-MM-DD hh:mm:ss')}</td>

                    <td className='table-action'>
                      <div className='w-100 d-flex gap-4 '>
                        <button onClick={() => handleEditMindmap(item?.id)} className='mindmap-icon'><FaEdit /></button>
                        <button onClick={() => handleDelelteMindmap(item?.id)} className='mindmap-icon'><FaTrashAlt /></button>
                      </div>
                    </td>

                  </tr>
                </Fragment>
              )
            })

            }


          </tbody>
        </table>
        {loading && (
          <div
            className={`fixed opacity-60 bg-white w-full top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center h-full `}
          >
            <Loading />
          </div>
        )}
        {showConfirm && (
          <ModalConfirmDelete
            onLoading={setLoading}
            onRemove={setDataMaps}
            dataMaps={dataMaps}
            id={idRemove}
            onShowConfirm={setShowConfirm}
            onGetMindmaps={getMindmaps}
          />
        )}

		</div>
    </>

	);
}

export default MindmapListComponent;
