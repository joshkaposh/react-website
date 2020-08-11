import React, { useState } from "react";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";

import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import img1 from "../images/pic01.jpg";
import img2 from "../images/pic02.jpg";
import img3 from "../images/pic03.jpg";
import img4 from "../images/pic04.jpg";

const images = [img1, img2, img3, img4];

const ADD_ROOM = gql`
	mutation(
		$title: String!
		$description: String!
		$group: String!
		$owner: String!
	) {
		addRoom(
			title: $title
			description: $description
			group: $group
			owner: $owner
		) {
			title
			description
			group
			owner
		}
	}
`;

export default function AddRoom() {
	const [addRoom, { data }] = useMutation(ADD_ROOM);
	const [state, setState] = useState({
		title: "",
		description: "",
		group: "",
		owner: "",
	});

	const refreshPage = () => {
		window.location.reload(false);
	};

	function handleChange(e) {
		const value = e.target.value;
		setState({
			...state,
			[e.target.name]: value,
		});
	}

	function handleSubmit(e) {
		e.preventDefault();
		addRoom({
			variables: {
				title: state.title,
				description: state.description,
				group: state.group,
				owner: state.owner,
			},
		});
		refreshPage();
	}

	function displayImages() {
		let i = 0;

		return images.map((image) => {
			return (
				<option key={image}>{i++ < images.length && `pic0${i}`}</option>
			);
		});
	}

	return (
		<form
			onSubmit={handleSubmit}
			className="room-section"
			style={{ backgroundColor: "rgb(245, 245, 245)", width: "50%" }}
		>
			{/* <div className="room-content room-image">
                <label style={{marginRight: '10px'}}>Image:</label>
                <select name="image">
                    {
                        displayImages()
                    }
                </select>
            </div> */}
			<div className="room-content room-title">
				<label style={{ marginRight: "10px" }}>Title:</label>
				<input
					style={{ padding: "3px 5px" }}
					type="text"
					name="title"
					value={state.title}
					onChange={handleChange}
				/>
			</div>
			<div className="room-content room-description">
				<label style={{ marginRight: "10px" }}>Description:</label>
				<input
					style={{ padding: "3px 5px" }}
					type="text"
					name="description"
					value={state.description}
					onChange={handleChange}
				/>
			</div>
			<div className="room-content room-group">
				<label style={{ marginRight: "10px" }}>Group:</label>
				<input
					style={{ padding: "3px 5px" }}
					type="text"
					name="group"
					value={state.group}
					onChange={handleChange}
				/>
			</div>
			<div className="room-content room-owner">
				<label style={{ marginRight: "10px" }}>Owner:</label>
				<input
					style={{ padding: "3px 5px" }}
					type="text"
					name="owner"
					value={state.owner}
					onChange={handleChange}
				/>
			</div>
			<div className="room-content room-connect">
				<input type="submit" value="Create Room" />
			</div>
		</form>
	);
}
