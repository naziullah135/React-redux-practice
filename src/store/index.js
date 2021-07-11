// import { createStore } from "redux";

// const reducer = (state = 0, action) =>{
//   switch(action.type){
//     case "INCREMENT":
//       return state + action.payload;
//     case "DECREMENT":
//       return state - action.payload;
//     default:
//     return state;
//   }
// }

// const store = createStore(reducer);

// store.subscribe(()=> {
//   console.log("current state",store.getState());
// })

// store.dispatch({
//   type: "INCREMENT",
//   payload: 1
// })
// store.dispatch({
//   type: "INCREMENT",
//   payload: 5
// })
// store.dispatch({
//   type: "DECREMENT",
//   payload: 2
// })



import { createStore } from 'redux'

const initialState = {
  posts: [{id: 1, title: 'Test Post'}],
  loginModal: {
    open: false
  }
}

const reducer = (state = initialState, action) => {
  if (action.type === 'ADD_POST') {
    return Object.assign({}, state, {
      posts: state.posts.concat(action.payload)
    })
  }

  return state
}

const store = createStore(reducer)

export default store