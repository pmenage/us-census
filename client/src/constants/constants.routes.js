export default {
    build: (path, ...params) => {
        return path.replace(/(:\w+)/g, () => params.shift());
    },

    API: {
        GET_COLUMNS: "/person/columns",
        FIND_BY_COLUMN: "/person/find/:column",
    }
}