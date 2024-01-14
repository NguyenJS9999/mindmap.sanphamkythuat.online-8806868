import { useCallback } from 'react';
import { Handle, Position, useReactFlow } from 'reactflow';
import './text-updater-node.scss';
import { useState } from 'react';
import { useEffect } from 'react';
import { mindmapSlice } from '~/redux/slice/mindmapSlice';
import { useDispatch } from 'react-redux';
import { getLocalStorage } from '~/utils/actionLocalstorage';
const { changeTextNode } = mindmapSlice.actions;

function TextUpdaterNode({ id, data, isConnectable, ...rest }) {

	// console.log('TextUpdaterNode id', id);
	// console.log('TextUpdaterNode data', data);
	// console.log('TextUpdaterNode isConnectable', isConnectable);
  // console.log('rest', rest);


	const [disabled, setDisabled] = useState(true);
	const [text, setText] = useState(data.label);
	const dispatch = useDispatch();
	const { setNodes } = useReactFlow();

	// const onChange = useCallback((event) => {
	//   console.log(event.target.value);
	//   setEditing(event.target.value)
	// }, []);

	// console.log('getLocalStorage: ', getLocalStorage('nodes'));

	const handleDoubleClick = () => {
		// console.log('handleDoubleClick disabled', disabled);
		// if (id === id) {
		//   console.log('Là node hiện tại');
		//   setDisabled(false);
		// } else {
		//   setDisabled(true);
		// }

		setDisabled(false);
		window.addEventListener('DOMContentLoaded', function () {
			const inputNode = document.getElementById('inputNode');
			inputNode.focus();
		});
	};

// 	const onChange = useCallback(
// 		evt => {
// 			if (evt.target.value) {
// 				const { id } = rest;
// 				setNodes(nodes => {
// 					return nodes.map(item => {
//             console.log('return nodes item', item);
//             // console.log('return rest id', id);
//             // console.log('return nodes item.id', item.id);
//
// 						if (item.id === id) {
// 							item.data.label = evt.target.value;
// 						}
// 						return item;
// 					});
// 				});
// 			}
// 		},
// 		[rest, setNodes]
// 	);

	const handleChangeText = event => {
		setText(event.target.value);
	};

	const onBlur = () => {
		setDisabled(true);
		// console.log('onBlur disabled', disabled);
	};

	// const onFocus = () => {
	//   console.log('onFocus  disabled', disabled);
	// };

	useEffect(() => {
		const changeText = setTimeout(function () {
			// console.log('Gửi lên store text: ', text);

			dispatch(
				changeTextNode({
					id: id,
					label: text
				})
			);

			clearTimeout(changeText);
		}, 100);
	}, [text, id, dispatch]);

	return (
		<div className="text-updater-node">
			<Handle
				type="target"
				position={Position.Top}
				isConnectable={isConnectable}
			/>
			<input
				id="inputNode"
				name="text"
				onChange={handleChangeText}
				onBlur={onBlur}
				readOnly={disabled}
				className="nodrag node-input"
				spellCheck="false"
				value={text}
        // defaultValue={data.label}
			/>

			{disabled && (
				<div
					className="status-wraper"
					htmlFor="inputNode"
					onDoubleClick={handleDoubleClick}
				></div>
			)}

			<Handle
				type="source"
				position={Position.Bottom}
				id="a"
				isConnectable={isConnectable}
			/>
			<Handle
				type="target"
				position={Position.Bottom}
				id="b"
				isConnectable={isConnectable}
			/>
		</div>
	);
}

export default TextUpdaterNode;
