import Link from "next/link"

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-[100vh]">
      <p className="mt-[5rem] text-[2rem] font-semibold">404 - Không tìm thấy trang</p>
      <p className="mt-[5rem] text-[1rem] font-semibold">Xin lỗi, trang bạn đang tìm kiếm không tồn tại</p>
    <Link href={'/'} className="px-4 py-2 bg-yellow-500 rounded-md">Quay lại trang chủ</Link>
    </div>
  )
}

export default NotFound