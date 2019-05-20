export const ADD_POST = "ADD_POST"
export const CLAP_POST = "CLAP_POST"
export const DELETE_POST = "DELETE_POST"

// Action Reducers
export const addPost = (text) => ({
  type: ADD_POST,
  payload: {
    text
  },
  meta: "Action untuk menambah postingan"
})
export const clapPost = (clap) => ({
  type: CLAP_POST,
  payload: {
    clap
  },
  meta: "Action untuk menambah clap postingan"
})
export const deletePost = (id) => ({
  type: DELETE_POST,
  payload: {
    id
  },
  meta: "Action untuk menghapus postingan"
})