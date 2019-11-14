import axios from "axios";
import ACTIONS from "../../constants/constants.actions";
import config from "../../constants/constants.config";

const apiMiddleware = ({ dispatch, getState }) => next => action => {
    if (action.type !== ACTIONS.API_CALL) {
        return next(action);
    }

    const { promise, types } = action.payload;
    const [REQUEST, SUCCESS, FAILURE] = types;

    next({ type: REQUEST });

    return promise(axios.create({ baseURL: config.apiURL }))
        .then(result => {
            console.log(result.data, `Action: ${SUCCESS}`);
            next({ result: result.data, type: SUCCESS });
            return result;
        })
        .catch(error => {
            if (error) {
                const { response } = error;
                console.log(response && response.data, " error console data - action: " + REQUEST);
                console.log(response && response.status, " error console status - action: " + REQUEST);
            }
            next({ error, type: FAILURE });
        });
};

export default apiMiddleware;
