// listing all book entries sorted by name
// filtering entries
// take in entry and filter states
var getVisibleEntries = function (entries, _a) {
    var text = _a.text;
    var filteredEntries = entries.filter(function (_a) {
        var firstname = _a.firstname, lastname = _a.lastname;
        var textMatch = firstname.toLowerCase().includes(text.toLowerCase()) || lastname.toLowerCase().includes(text.toLowerCase());
        return textMatch;
    });
    filteredEntries.sort(function (a, b) {
        var lnameA = a.lastname.toLowerCase();
        var lnameB = b.lastname.toLowerCase();
        if (lnameA < lnameB)
            return -1;
        if (lnameA > lnameB)
            return 1;
        if (lnameA === lnameB) {
            var fnameA = a.firstname.toLowerCase();
            var fnameB = b.firstname.toLowerCase();
            if (fnameA < fnameB)
                return -1;
            if (fnameA > fnameB)
                return 1;
            if (fnameA === fnameB)
                return 0;
        }
    });
    return filteredEntries;
};
export default getVisibleEntries;
//# sourceMappingURL=addressBook.js.map