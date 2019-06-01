import { combineReducers } from "./node_modules/redux"
import messages from "./messages"
import users from "./users"


const chat = combineReducers( {
    messages,
    users
} )

export default chat
