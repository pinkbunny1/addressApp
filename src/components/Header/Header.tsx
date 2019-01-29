import React from 'react';
import { Link } from 'react-router-dom';

type Props = {
	filter: {
		text: string
	},
	textFilter(text:string): void
}

const Header = ({ filter, textFilter }:Props) => {
	const onSearchHandle = (e:any) => {
		const text = e.target.value;
		textFilter(text);
	};

	return (
		<header className="addressList_header">
			<span className="header__title">Address Book</span>
			<span>
				<Link className="createNew" to="/create" type="button">
					<button> + </button>
				</Link>
			</span>
			<span>
				<input type="search" placeholder="Search" value={filter.text} onChange={onSearchHandle} />
			</span>
		</header>
	);
};

export default Header;
