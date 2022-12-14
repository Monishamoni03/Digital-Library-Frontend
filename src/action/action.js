import * as types from "./actionType";
import axios from "axios";
import axiosInstance from '../container/api/axios';

const getUsers = (users) => ({
    type: types.GET_USERS,
    payload: users,
});

const userDeleted = () => ({
  type: types.DELETE_USER,
});

const userAdded = () => ({
  type: types.ADD_USER,
});

//Register User
export const registerUser = (user) => {
    return function (dispatch) {
        axios.post(`http://localhost:5000/api/users/register`, user)
            .then((res) => {
                dispatch(userAdded())
                dispatch(loadUsers())
                dispatch(getSuccessMessage(res.data.message))
            })
            .catch((error) => {
                dispatch(getErrorMessage(error.response.data.error))
            })
    }
}

export const loadUsers = () => {
    return function (dispatch) {
        axios
        .get(`${process.env.REACT_APP_API}`)
        .then((resp) => {
            console.log("resp", resp)
            dispatch(getUsers(resp.data));
          })
          .catch((error) => {
            console.log(error)
          });
    };
}

export const deleteUser = (id) => {
  return function (dispatch) {
      axios
      .delete(`${process.env.REACT_APP_API}/${id}`)
      .then((resp) => {
          console.log("resp", resp)
          dispatch(userDeleted());
          dispatch(loadUsers());
        })
        .catch((error) => {
          console.log(error)
        });
  };
}

export const addUser = (user) => {
  return function (dispatch) {
      axios
      .post(``, user)
      .then((resp) => {
          console.log("resp", resp)
          dispatch(userAdded());
          dispatch(loadUsers());
        })
        .catch((error) => {
          console.log(error)
        });
  };
}