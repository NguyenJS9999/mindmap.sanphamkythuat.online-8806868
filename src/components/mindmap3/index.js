'use client';

import React, { Fragment, useState } from 'react';
import { usePathname } from 'next/navigation'

import Mindmap from '~/components/mindmap3/Mindmap';
import { FaRegSave, FaShare } from 'react-icons/fa';
import Toast from 'react-bootstrap/Toast';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function MindmapComponent({ id }) {
	const pathname = usePathname();

	const idMindmap = (pathname).replace(/^\/my-mindmap\//, "");
	console.log('idMindmap', idMindmap);


	const [nameMindMap, setNameMindMap] = useState('Mindmap không có tên');
	const [decriptionMindMap, setDecriptionMindMap] = useState('Chưa có mô tả');
	const [statusModalShare, setStatusModalShare] = useState(true);
	const [showModalShare, setShowModalShare] = useState(false);

	const [typeShowShare, setTypeShowShare] = useState("private");
	const [ dataShareMindmap, setDataShareMindmap ]	= useState(
		{
			url: `https://f86wpp-8080.csb.app${pathname}`,
			title: nameMindMap,
			decription: decriptionMindMap,
			image: `http://f8-mindmap.sanphamkythuat.online:880/_next/static/media/so-do-tu-duy.95dad645.jpg`
		}
	);

	console.log('pathname', pathname);
	function handleChangeType() {

	}

	// onClick={setTypeShowShare("private")}
	// onClick={setTypeShowShare("public")}

	// const postUser = async () => {
	// 	const res = await fetch(`https://43jf2n-8080.csb.app/users`, {
	// 		method: 'POST',
	// 		headers: {
	// 			'Content-Type': 'application/json'
	// 		},
	// 		body: JSON.stringify({
	// 			name: 'Xin chào'
	// 		})
	// 	});
	// 	console.log(res);
	// };
	// postUser();

	function handleSave() {
		console.log('handleSave node');
	}
	function handleShare() {
		console.log('handleShare node');
		setStatusModalShare(decriptionMindMap);
		setShowModalShare(true);
	}

	function handChangeInput(event, typeInput) {
		const valueInput = event.target.value;
		console.log('handleShare node', valueInput, typeInput);
		switch (typeInput) {
			case "name-mindmap":
				setNameMindMap(valueInput)
				break;
			case "decription-mindmap":
				setDecriptionMindMap(valueInput)
				break;
			default:
				break;
		}
	}

	const handleCloseModalShare = () => {
		console.log("handleCloseModalShare");
		setStatusModalShare(false);
		setShowModalShare(false);

	}
	const handleSaveShareMindmap = () => {
		console.log("handleSaveShareMindmap");
	}

	return (
		<div className="mindmap-page">
			<div className="mindmap-page__head">
				<div className="mindmap-page-name-edit mt-4">
					<input
						id="name-mindmap"
						type="text"
						value={nameMindMap}
						onChange={(event) => handChangeInput(event, 'name-mindmap')}
						placeholder="Mindmap name"
					/>
					<div className="mindmap-head-controler">
						<button
							onClick={handleSave}
							id="save-mind-map"
							className="mindmap-btn-head"
						>
							<FaRegSave />
							<span>Lưu thay đổi</span>
						</button>

						<button
							onClick={handleShare}
							id="share-mind-map"
							className="mindmap-btn-head"
						>
							<FaShare />
							<span>Chia sẻ</span>
						</button>
					</div>
				</div>

				{/*  */}
				<div className="mindmap-page-decription-edit my-4">
					<input
						id="decription-mindmap"
						onChange={(event) => handChangeInput(event, 'decription-mindmap')}
						type="text"
						value={decriptionMindMap}
						placeholder="Mindmap decription"
					/>
				</div>
			</div>

			{/* <div className="overlay" /> */}

			{/* { statusModalShare && <div className="share-modal">
				<div className="share-modal__header">
					<div><input type="radio" id="private" name="private" className='mr-1'/><label htmlFor="private">Riêng tư</label></div>
					<div><input type="radio" id="public" name="private" className='mr-1'/><label htmlFor="public">Công khai</label></div>
				</div>

				<div className="share-modal__body">

				</div>
				<div className="share-modal__footer">
					<button onClick={handleCloseModalShare}>x Đóng</button>
					<button onClick={handleSaveShareMindmap}>+ Lưu lại</button>
				</div>
			</div>} */}

			<div
				className="modal show"
				style={{ display: 'block', position: 'initial' }}
			>
				<Modal
					show={showModalShare}
					onHide={handleCloseModalShare}
					centered
					size="md"
					backdrop="static"
					id="showModalShare"
				>
					<Modal.Header closeButton>
						<div className="share-modal__header">
							<div>
								<input type="radio" id="private" name="private" className='mr-1' onChange={handleChangeType}/>
								<label htmlFor="private">Riêng tư</label>
							</div>
							<div>
								<input type="radio" id="public" name="private" className='mr-1'/>
								<label htmlFor="public">Công khai</label>
							</div>
						</div>
					</Modal.Header>
					<Modal.Body>

					{ typeShowShare && typeShowShare === "private" &&
						<div>Nếu chọn riêng tư, chỉ có bạn mới được quyền xem Mindmap này</div>
					}

					{ typeShowShare && typeShowShare === "public" &&
						<Fragment>
							{/*  */}
							{/* 1 Url */}
							<Form.Label htmlFor="url-share-mindmap">Liên kết chia sẻ</Form.Label>
							<InputGroup className="mb-3">
								{/* <InputGroup.Text id="basic-addon1">@</InputGroup.Text> */}
								<Form.Control
									id="url-share-mindmap"
									placeholder="Username"
									aria-label="Username"
									aria-describedby="basic-addon1"
									// value={'http://f8-mindmap.sanphamkythuat.online:880/my-mindmap/a51fd63b-2945-4008-b655-3d2d2536219d'}
									value={dataShareMindmap.url}
								/>
							</InputGroup>
							{/* 2 Title */}
							<Form.Label htmlFor="title-mindmap">Tiêu đề</Form.Label>
							<InputGroup className="mb-3">
								{/* <InputGroup.Text id="basic-addon1">@</InputGroup.Text> */}
								<Form.Control
									id="title-mindmap"
									placeholder="Tiêu đề"
									aria-label="Username"
									aria-describedby="Username"
									value={nameMindMap}
								/>
							</InputGroup>
							{/* 3 Mô tả */}
							<Form.Label htmlFor="description-mindmap">Mô tả</Form.Label>
							<InputGroup className="mb-3">
								<Form.Control
									id="description-mindmap"
									placeholder="Mô tả"
									aria-label="description"
									aria-describedby="description"
									value={decriptionMindMap}
								/>
							</InputGroup>
							{/* 4 Ảnh chia sẻ */}
							<Form.Label htmlFor="photo-mindmap">Ảnh chia sẻ</Form.Label>
							<InputGroup className="mb-3">
								<Form.Control
									id="photo-mindmap"
									placeholder="Username"
									aria-label="photo-mindmap"
									aria-describedby="photo-mindmap"
									value={'http://f8-mindmap.sanphamkythuat.online:880/_next/static/media/so-do-tu-duy.95dad645.jpg'}
								/>
							</InputGroup>
						</Fragment>
					}

					{/*  */}
					</Modal.Body>
					<Modal.Footer>
						<Button variant="secondary" onClick={handleCloseModalShare}>
							x Đóng
						</Button>
						<Button variant="primary" onClick={handleSaveShareMindmap}>
							+ Lưu lại
						</Button>
					</Modal.Footer>
				</Modal>
			</div>
			{/* <Mindmap id={idMindmap} /> */}
			{/* <FlowProvider id={idMindmap} /> */}

			{/* <Toast>
				<Toast.Header>
					<img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
					<strong className="me-auto">Bootstrap</strong>
					<small>11 mins ago</small>
				</Toast.Header>
				<Toast.Body>Hello, world! This is a toast message.</Toast.Body>
			</Toast> */}

		</div>
	);
}

export default MindmapComponent;
