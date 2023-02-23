 //selectors
 export const getAllTopics = state => state.topics

// actions
const createActionName = actionName => `app/posts/${actionName}`;
const REMOVE_TOPIC = createActionName('REMOVE_TOPIC');
const ADD_TOPIC =createActionName('ADD_TOPIC');
const UPDATE_TOPICS = createActionName('UPDATE_TOPIC')

// action creators
export const removeTopic = payload =>({type:REMOVE_TOPIC, payload});
export const addTopic = payload =>({type:ADD_TOPIC, payload});
export const updateTopics= payload => ({type: UPDATE_TOPICS, payload})

const subreducera = (statePart = [], action) => {
    switch (action.type) {
        case REMOVE_TOPIC:
            return statePart.filter(topic=>topic.id !==action.payload)
        case ADD_TOPIC:
            return [...statePart, {...action.payload}]   
        case UPDATE_TOPICS:
            return [...action.payload]   
        default:
            return statePart;
    };
};
export default subreducera;