import { applyMiddleware, createStore } from 'redux';
import appRouter from 'reducers/index.js';

// const persistedState = () => {
//   try {
//     const serializedState = localStorage.getItem('state')
//     if(serializedState === null) {
//       return {}
//     }
//     return JSON.parse(serializedState)
//   } catch (err) {
//     return undefined
//   }
// }

const saveState = (state = {}) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
    } catch (err) {
        // Ignore write errors
        console.log('err', err);
    }
};

const logger = ({ getState }) => {
    return next => action => {

        // Call the next dispatch method in the middleware chain.
        const returnValue = next(action);

        // This will likely be the action itself, unless
        // a middleware further in chain changed it.
        return returnValue;
    };
};

export const store = createStore(
    appRouter,
    {},//persistedState(),
    applyMiddleware(logger)
);

store.subscribe(() => {
    saveState(store.getState());
});

export const dispatch = (type, payload) => {
    if (type.type) {
        return Promise.resolve(store.dispatch(type));
    } else {
        return Promise.resolve(store.dispatch({ type, payload }));
    }
};
if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    global.dispatch = dispatch;
}

export const getState = () => store.getState();
if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    global.getState = getState;
}
