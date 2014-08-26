module.exports = intersection

function intersection () {
    var filters = arguments;
    function intersectionFilter(item) {
        for(var i in filters) {
            var f = filters[i];
            if (!f(item)) {
                return false;
            }
        }
        return true;
    }
    return intersectionFilter;
}