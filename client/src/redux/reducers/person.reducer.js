import ACTIONS from "../../constants/constants.actions";

const { PERSON } = ACTIONS;

const initialState = {
    columns: [],
    isLoadingColumns: false,
    results: [],
    isLoadingResults: false,
}

const actionsMap = {
    // get tweet batches
    [PERSON.GET_COLUMNS_REQUEST]: (state, action) => ({
        ...state,
        isLoadingColumns: true
    }),
    [PERSON.GET_COLUMNS_SUCCESS]: (state, action) => ({
        ...state,
        columns: action.result,
        isLoadingColumns: false
    }),
    [PERSON.GET_COLUMNS_FAIL]: (state, action) => ({
        ...state,
        isLoadingColumns: false
    }),

    // create tweet batches
    [PERSON.FIND_BY_COLUMN_REQUEST]: (state, action) => ({
        ...state,
        isLoadingResults: true
    }),
    [PERSON.FIND_BY_COLUMN_SUCCESS]: (state, action) => ({
        ...state,
        results: action.result,
        isLoadingResults: false
    }),
    [PERSON.FIND_BY_COLUMN_FAIL]: (state, action) => ({
        ...state,
        isLoadingResults: false
    }),
};

const getColumns = state => state.person.columns;
const getIsLoadingColumns = state => state.person.isLoadingColumns;
const getResults = state => state.person.results;
const getIsLoadingResults = state => state.person.isLoadingResults;

export default (state = initialState, action) => {
    const handler = actionsMap[action.type];

    return handler ? handler(state, action) : state;
};

export {
    getColumns,
    getIsLoadingColumns,
    getResults,
    getIsLoadingResults,
};
