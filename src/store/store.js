import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';
import { authReducer } from 'reducers/authReducer'
import { uiReducer } from 'reducers/uiReducer';
import { auditReducer } from 'reducers/auditReducer';
import { companyReducer } from 'reducers/companyReducer';
import { createtemplateReducer } from 'reducers/createtemplateReducer';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


const reducers = combineReducers({
    auth: authReducer,
    ui: uiReducer,
    audi: auditReducer,
    company: companyReducer,
    createTemplate: createtemplateReducer
})

export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)