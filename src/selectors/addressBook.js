// listing all book entries sorted by name
// filtering entries
// take in entry and filter states

const getVisibleEntries = (entries, { text }) => {
	let filteredEntries = entries.filter(({ firstname, lastname }) => {
		const textMatch =
			firstname.toLowerCase().includes(text.toLowerCase()) || lastname.toLowerCase().includes(text.toLowerCase());
		return textMatch;
	});

	filteredEntries.sort((a, b) => {
		const lnameA = a.lastname.toLowerCase();
		const lnameB = b.lastname.toLowerCase();
		if (lnameA < lnameB) return -1;
		if (lnameA > lnameB) return 1;
		if (lnameA === lnameB) {
			const fnameA = a.firstname.toLowerCase();
			const fnameB = b.firstname.toLowerCase();
			if (fnameA < fnameB) return -1;
			if (fnameA > fnameB) return 1;
			if (fnameA === fnameB) return 0;
		}
	});

	return filteredEntries;
};

export default getVisibleEntries;
