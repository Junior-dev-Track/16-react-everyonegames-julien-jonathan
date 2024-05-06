import SortingButton from './SortingButton';

export default function Sorting({ handleSort }) {
	
	return (
		<>
			<div className='sort'>
				<h3>Sort by</h3>
				<div className='sort__types'>
					<SortingButton
						handleSort={handleSort}
						value={'released'}
						title={'Release date'}
					/>
					<SortingButton
						handleSort={handleSort}
						value={'added'}
						title={'Date added'}
					/>
					<SortingButton
						handleSort={handleSort}
						value={'name'}
						title={'Name'}
					/>
					<SortingButton
						handleSort={handleSort}
						value={'rating'}
						title={'Rating'}
					/>
				</div>
			</div>
		</>
	);
}
