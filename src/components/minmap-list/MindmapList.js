"use client"

import React, { Fragment, useEffect, useLayoutEffect, useState } from 'react';
import moment from 'moment';
import Link from 'next/link';
import { useSession } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";
import { v4 as uuidv4 } from 'uuid';
import Loading from '~/components/Loading';
import ModalConfirmDelete from '~/components/ModalConfirmDelete';
import { getListMindmaps, postOneMindMap } from '~/services/apiMindmap';
import { FaTrashAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import './minmap-list.scss';


const api = process.env.NEXT_PUBLIC_API;

function MindmapListComponent({ session }) {
  const [loading, setLoading] = useState(false);
  const [mindmapList, setMindmapList] = useState([]);

  const [dataMaps, setDataMaps] = useState([]);
  const [idRemove, setIdRemove] = useState(null);
  const [showConfirm, setShowConfirm] = useState(false);

  const router = useRouter();

  useLayoutEffect(() => {
    getMindmaps();
  }, []);

	const [ loaddding, setDidLogin ] = useState(true);

  async function createMindMap() {
    const randomMindMapId = uuidv4();
    if (randomMindMapId && session) {
      // API crate
      const currentTime = new Date();
      const dataCreateNewMindmap = {
        id: randomMindMapId,
        name: 'Mindmap không có tên',
			  description: 'Chưa có mô tả',
        createdAt: currentTime,
        auth: false,
        status: 'private',
        userEmail: session.user.email,
        map: {
          nodes: [
            {
              id: '0',
              type: 'textUpdater',
              data: { label: `My Mindmap` },
              position: { x: 0, y: 0 },
              typeOrigin: true // Đánh dấu là node gốc
            }
          ],
          edges: [],
        },
      }
      await postOneMindMap(dataCreateNewMindmap);
      router.push(`/my-mindmap/${randomMindMapId}`);
      // redirect(`/my-mindmap/${randomMindMapId}`);
      await getMindmaps();
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
  }

  const getMindmaps = async () => {
    const response = await getListMindmaps();
    const dataParsed = await response.json();
    // console.log('getMindmaps ', dataParsed);
    if (response.status === 200) {
      setMindmapList(dataParsed);
    }
  }

  const convertStatus = (status) => {
    if (status === 'public') {
      return 'Công khai'
    } else if (status === 'private') {
      return 'Riêng tư'
    }
  };

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
              <th scope="col">Tên</th>
              <th scope="col">Tạo lúc</th>
              <th scope="col">Trạng thái</th>
              <th scope="col">Hành động</th>
            </tr>
          </thead>

          <tbody>

            {
              mindmapList && mindmapList.map((item) => {
                return (
                  <tr key={item?.id} className='mindmap-item'>

                    <th scope="row">
                      <input className="form-check-input" type="checkbox" value="" id="1" />
                    </th>

                    <td>
                      <div>
                        <div><Link href={`/my-mindmap/${item.id}`}>{item?.name}</Link></div>
                        <div>{item?.description}</div>
                        <div>ID: {item?.id}</div>
                      </div>
                    </td>

                    <td>{moment((item?.createdAt)).format('YYYY-MM-DD hh:mm:ss')}</td>
                    <td>{item.status && convertStatus(item.status) }</td>
                    {}

                    <td className='table-action'>
                      <div className='w-100 d-flex gap-4 '>
                        <button onClick={() => handleEditMindmap(item?.id)} className='mindmap-icon'><FaEdit /></button>
                        <button onClick={() => handleDelelteMindmap(item?.id)} className='mindmap-icon'><FaTrashAlt /></button>
                      </div>
                    </td>

                  </tr>
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
