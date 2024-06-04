import { createSlice } from "@reduxjs/toolkit";

const saveToLocalStorage = (state) => {
  localStorage.setItem("userTodoByZero", JSON.stringify(state));
  console.log(localStorage.getItem("userTodoByZero"));
};

const Todos = createSlice({
  name: "Todos",
  initialState: localStorage.getItem("userTodoByZero")
    ? JSON.parse(localStorage.getItem("userTodoByZero"))
    : {
        datas: [
          
        ],
      },
  reducers: {
    highlight: (state, actions) => {
      state.datas[actions.payload].isImp = true;
      saveToLocalStorage(state);
    },
    normalize: (state, actions) => {
      state.datas[actions.payload].isImp = false;
      saveToLocalStorage(state);
    },
    deleter: (state, actions) => {
      state.datas[actions.payload].isDraft = true;
      saveToLocalStorage(state);
    },
    redo: (state, actions) => {
      state.datas[actions.payload].isDraft = false;
      saveToLocalStorage(state);
    },
    updater: (state, actions) => {
      state.datas[actions.payload.index].todo = actions.payload.todo;
      saveToLocalStorage(state);
    },
    adder: (state, actions) => {
      state.datas.push(actions.payload.newTd);
      saveToLocalStorage(state);
    },
    deleteAll: (state) => {
      state.datas = state.datas.filter((item) => !item.isDraft);
      saveToLocalStorage(state);
    },
    allToDraft: (state) => {
      state.datas.forEach((element) => {
        element.isDraft = true;

        saveToLocalStorage(state);
      });
    },
  },
});

export const { deleter, redo, updater, adder, deleteAll, allToDraft , highlight ,normalize } =
  Todos.actions;

export default Todos.reducer;
