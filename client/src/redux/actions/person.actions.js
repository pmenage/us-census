import ACTIONS from "../../constants/constants.actions";
import ROUTES from "../../constants/constants.routes";

const { PERSON } = ACTIONS;

const getColumns = () => ({
    type: ACTIONS.API_CALL,
    payload: {
        types: [
            PERSON.GET_COLUMNS_REQUEST,
            PERSON.GET_COLUMNS_SUCCESS,
            PERSON.GET_COLUMNS_FAIL,
        ],
        promise: client => client.get(ROUTES.API.GET_COLUMNS)
    }
});

const findByColumn = column => ({
    type: ACTIONS.API_CALL,
    payload: {
        types: [
            PERSON.FIND_BY_COLUMN_REQUEST,
            PERSON.FIND_BY_COLUMN_SUCCESS,
            PERSON.FIND_BY_COLUMN_FAIL,
        ],
        promise: client => client.get(ROUTES.build(ROUTES.API.FIND_BY_COLUMN, column))
    }
});

export {
    getColumns,
    findByColumn,
}