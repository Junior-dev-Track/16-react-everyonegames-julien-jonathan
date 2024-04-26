import { useState } from 'react';
import { FaRegArrowAltCircleUp, FaRegArrowAltCircleDown } from 'react-icons/fa';

export default function Sorting({ handleSort }) {

// TODO create component for sort button

	return (
		<>
			<div className="sort">
				<h3>Sort by</h3>
				<div className="sort__type">
					<button type="button" onClick={handleSort} value="released">
						<FaRegArrowAltCircleUp />
					</button>
					<p>Release date</p>
					<button type="button" onClick={handleSort} value="-released">
						<FaRegArrowAltCircleDown />
					</button>
				</div>
				<div className="sort__type">
					<button type="button" onClick={handleSort} value="added">
						<FaRegArrowAltCircleUp />
					</button>
					<p>Date added</p>
					<button type="button" onClick={handleSort} value="-added">
						<FaRegArrowAltCircleDown />
					</button>
				</div>
				<div className="sort__type">
					<button type="button" onClick={handleSort} value="name">
						<FaRegArrowAltCircleUp />
					</button>
					<p>Name</p>
					<button type="button" onClick={handleSort} value="-name">
						<FaRegArrowAltCircleDown />
					</button>
				</div>
			</div>
		</>
	);
}
