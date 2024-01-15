'use client';

import React, { Fragment, useState } from 'react';
import { usePathname } from 'next/navigation';

// import Mindmap from '~/components/mindmap3/Mindmap';
import { FaRegSave, FaShare } from 'react-icons/fa';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import './index.scss';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FlowProvider from './flowProvider';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { API, getOneMindmap, updateOneMindMap } from '~/services/apiMindmap';
import { useEffect } from 'react';
import { mindmapSlice } from '~/redux/slice/mindmapSlice';
const { changeNode, changeEdges } = mindmapSlice.actions;

function MindmapDetail({ caseNumb, canView, canEdit }) {
	// console.log('caseNumb', caseNumb);
	// console.log('canView', canView);
	// console.log('canEdit', canEdit);
	const pathname = usePathname();
	const dispatch = useDispatch();

	const nodesStore = useSelector(state => state.mindmap.nodes);
	const edgesStore = useSelector(state => state.mindmap.edges);

	const [idMindmap, setIdMindmap] = useState('');
	const [dataMindmap, setDataMindmap] = useState({});

	const [nameMindMap, setNameMindMap] = useState('');
	const [decriptionMindMap, setDecriptionMindMap] = useState('');
	const [nameMindMapShow, setNameMindMapShow] = useState(
		'Mindmap không có tên'
	);
	const [decriptionMindMapShow, setDecriptionMindMapShow] =
		useState('Chưa có mô tả');
	const [statusMindmap, setStatusMindmap] = useState('private');

	const [showModalShare, setShowModalShare] = useState(false);

	const [nodesApi, setNodesApi] = useState([]);
	const [edgesApi, setEdgesApi] = useState([]);

	const [typeShowShare, setTypeShowShare] = useState('private');

	const [urlShareMindMap, setUrlShareMindMap] = useState(`${API}${pathname}`);

	// const [dataShareMindmap, setDataShareMindmap] = useState({
	// 	url: `${API}${pathname}`,
	// 	title: nameMindMap,
	// 	decription: decriptionMindMap,
	// 	image: `http://f8-mindmap.sanphamkythuat.online:880/_next/static/media/so-do-tu-duy.95dad645.jpg`
	// });

	useEffect(() => {
		getIDFromURL();
		getThisMindmap();
	}, []);

	// Lấy ra ID từ URL
	const getIDFromURL = () => {
		const pathname = window.location.pathname;
		const idThisMindmap = pathname.substring(pathname.lastIndexOf('/') + 1);
		// console.log('Hàm id: ', idThisMindmap);

		setIdMindmap(idThisMindmap);
		return idThisMindmap;
	};

	const getThisMindmap = async () => {
		const id = getIDFromURL();

		if (id || idMindmap) {
			const response = await getOneMindmap(id);
			const dataParsed = await response.json();

			// console.log('getThisMindmap res', response);
			// console.log('getThisMindmap dataParsed', dataParsed);

			if (response.status === 200) {
				if (canView) {
					dispatch(changeNode(dataParsed?.map.nodes));
					dispatch(changeEdges(dataParsed?.map.edges));

					setNodesApi(dataParsed?.map.nodes);
					setEdgesApi(dataParsed?.map?.edges);
					//
					setNameMindMap(dataParsed?.name);
					setDecriptionMindMap(dataParsed?.description);
					setStatusMindmap(dataParsed?.status);
					setDataMindmap(dataParsed);
					// console.log('node ', dataParsed);
				}
			}
		}
	};

	async function handleSave() {
		if (canEdit) {
			const dataSave = {
				...dataMindmap,
				name: nameMindMap,
				description: decriptionMindMap,
				map: {
					nodes: nodesStore,
					edges: edgesStore
				},
				status: statusMindmap
			};

			const response = await updateOneMindMap(getIDFromURL(), dataSave);
			// const dataParsed = await response.json();
			// console.log('handleSave response', response);

			if (response.status === 200) {
				toast.success('Updated mindmap success!');
			}
		}
	}

	function handleShare() {
		setShowModalShare(true);
	}

	const handleSetStatus = status => {
		// console.log('handleSetStatus', status);
		setStatusMindmap(status);
	};

	const handleCloseModalShare = () => {
		setShowModalShare(false);
	};

	const handleSaveShareMindmap = () => {
		handleSave();
	};

	return (
		<div className="mindmap-page">
			<div className="mindmap-page__head">
				<div className="mindmap-page-name-edit mt-4">
					<input
						id="name-mindmap"
						type="text"
						value={nameMindMapShow}
						onChange={event => {
							setNameMindMapShow(event.target.value),
								setNameMindMap(event.target.value);
						}}
						placeholder="Mindmap name"
					/>
					<div className="mindmap-head-controler">
						{canEdit && (
							<button
								onClick={handleSave}
								id="save-mind-map"
								className="mindmap-btn-head"
							>
								<FaRegSave />
								<span>Lưu thay đổi</span>
							</button>
						)}

						{canEdit && (
							<button
								onClick={handleShare}
								id="share-mind-map"
								className="mindmap-btn-head"
							>
								<FaShare />
								<span>Chia sẻ</span>
							</button>
						)}
					</div>
				</div>

				{/*  */}
				<div className="mindmap-page-decription-edit my-4">
					<input
						id="decription-mindmap"
						onChange={event => {
							setDecriptionMindMapShow(event.target.value);
							setDecriptionMindMap(event.target.value);
						}}
						type="text"
						value={decriptionMindMapShow}
						placeholder="Mindmap decription"
					/>
				</div>
			</div>

			<div
				className="modal show"
				style={{ display: 'block', position: 'initial' }}
			>
				<Modal
					show={showModalShare}
					onHide={handleCloseModalShare}
					// centered
					size="md"
					backdrop="static"
					id="showModalShare"
				>
					<Modal.Header closeButton>
						<div className="share-modal__header">
							<div>
								<input
									type="radio"
									id="private"
									className="mr-1"
									name="type"
									onChange={() => handleSetStatus('private')}
									checked={statusMindmap === 'private'}
									value="private"
								/>
								<label htmlFor="private">Riêng tư</label>
							</div>

							<div>
								<input
									type="radio"
									id="public"
									className="mr-1"
									name="type"
									onChange={() => handleSetStatus('public')}
									checked={statusMindmap === 'public'}
									value="public"
								/>
								<label htmlFor="public">Công khai</label>
							</div>
						</div>
					</Modal.Header>
					<Modal.Body>
						{statusMindmap === 'private' && (
							<div>
								Nếu chọn riêng tư, chỉ có bạn mới được quyền xem
								Mindmap này
							</div>
						)}

						{statusMindmap === 'public' && (
							<Fragment>
								{/*  */}
								{/* 1 Url */}
								<Form.Label htmlFor="url-share-mindmap">
									Liên kết chia sẻ
								</Form.Label>
								<InputGroup className="mb-3">
									{/* <InputGroup.Text id="basic-addon1">@</InputGroup.Text> */}
									<Form.Control
										id="url-share-mindmap"
										placeholder="Username"
										aria-label="Username"
										aria-describedby="basic-addon1"
										value={urlShareMindMap}
									/>
								</InputGroup>
								{/* 2 Title */}
								<Form.Label htmlFor="title-mindmap">
									Tiêu đề
								</Form.Label>
								<InputGroup className="mb-3">
									{/* <InputGroup.Text id="basic-addon1">@</InputGroup.Text> */}
									<Form.Control
										id="title-mindmap"
										placeholder="Tiêu đề"
										aria-label="Username"
										aria-describedby="Username"
										value={nameMindMap}
										onChange={event =>
											setNameMindMap(event.target.value)
										}
									/>
								</InputGroup>
								{/* 3 Mô tả */}
								<Form.Label htmlFor="description-mindmap">
									Mô tả
								</Form.Label>
								<InputGroup className="mb-3">
									<Form.Control
										id="description-mindmap"
										placeholder="Mô tả"
										aria-label="description"
										aria-describedby="description"
										value={decriptionMindMap}
										onChange={event =>
											setDecriptionMindMap(
												event.target.value
											)
										}
									/>
								</InputGroup>
								{/* 4 Ảnh chia sẻ */}
								<Form.Label htmlFor="photo-mindmap">
									Ảnh chia sẻ
								</Form.Label>
								<InputGroup className="mb-3">
									<Form.Control
										id="photo-mindmap"
										placeholder="Username"
										aria-label="photo-mindmap"
										aria-describedby="photo-mindmap"
										value={
											'http://f8-mindmap.sanphamkythuat.online:880/_next/static/media/so-do-tu-duy.95dad645.jpg'
										}
									/>
								</InputGroup>
							</Fragment>
						)}
						{/*  */}
					</Modal.Body>
					<Modal.Footer>
						<Button
							variant="secondary"
							onClick={handleCloseModalShare}
						>
							x Đóng
						</Button>
						<Button
							variant="primary"
							onClick={handleSaveShareMindmap}
						>
							+ Lưu lại
						</Button>
					</Modal.Footer>
				</Modal>
			</div>
			{/* <Mindmap id={idMindmap} /> */}
			<FlowProvider
				idMindmap={idMindmap}
				nodesApi={nodesApi}
				edgesApi={edgesApi}
			/>
			<ToastContainer />
		</div>
	);
}

export default MindmapDetail;
