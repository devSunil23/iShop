import { createStore } from "redux";
import rootred from "./reducer/rootreducer";
const store = createStore(rootred);
export default store;
