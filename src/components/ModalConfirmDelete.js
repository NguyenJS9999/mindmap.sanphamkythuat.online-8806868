'use client';
import { useState } from 'react';
import { IoWarningOutline } from 'react-icons/io5';
import { useSWRConfig } from 'swr';
import { deleteMindmap } from '~/services/apiMindmap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ModalConfirmDelete({
  onShowConfirm,
  id,
  onGetMindmaps,
  fetchApi,
  dataMaps,
  onLoading,
  onRemove,
}) {
  const { mutate } = useSWRConfig();

  const handleDelete = async () => {
    onShowConfirm(false);
    // try {
    //   onLoading(true);
    //   await deleteMindmap(id);
    //   mutate(fetchApi);
    //   toast.success('Delete success!');
    //   const newDataMaps = dataMaps.filter((m) => m.id !== id);
    //   onRemove(newDataMaps);
    // } catch (error) {
    //   console.log(error);
    //   toast.error('Have something wrong, please try again!');
    // } finally {
    //   onLoading(false);
    // }
    // console.log('handleDelelteMindmap modal', id);
    const response = await deleteMindmap(id);
    // console.log('Delete users response', response);

    if (response.status === 200) {
      toast.success("Updated mindmap success!");
      onGetMindmaps();
		} else {
      toast.warning("Updated mindmap failed!");
    }
  };
  return (
    <div
      className="fixed inset-0 h-[100vh] w-full !z-50"
      style={{ background: 'rgba(17,24,39,0.6)' }}
    >
      <div className="bg-[#fff] !z-[51] absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 p-8 rounded-xl">
        <div className="flex items-center gap-2 !opacity-100 text-black">
          {/* <div className="p-3 border grid place-items-center border-solid border-[#333] rounded-full">
            <IoWarningOutline fontSize={'2rem'} color="red" />
          </div> */}
          <div className="flex flex-column items-center justify-center">
            <h3 className="text-2xl font-bold">Bạn chắc chắn xóa mindmap này?</h3>
            <h4 className="mt-2 text-lg font-thin">
              Dữ liệu sẽ bị xóa vĩnh viễn
            </h4>
          </div>
        </div>
        <div className="flex items-center justify-center gap-3 mt-6">
          <button className="px-5 py-2 rounded-md bg-[#ced6e0]" onClick={() => onShowConfirm(false)} > Từ chối </button>
          <button className="px-5 py-2 rounded-md bg-[#f8d0d3f7] text-[#ff4757]" onClick={handleDelete} > Xác nhận </button>
        </div>
      </div>
			<ToastContainer />
    </div>
  );
}

export default ModalConfirmDelete;
