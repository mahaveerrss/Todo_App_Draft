import React, { useState } from "react";
import {
  deleter,
  redo,
  updater,
  highlight,
  normalize,
} from "../../store/DataSlice";
import { useDispatch } from "react-redux";

import { useRef } from "react";

function Card({ todo, index, isDraft, isImp }) {
  const usedispatch = useDispatch();
  const [input, setInput] = useState(todo);
  const [onEdit, setOnEdit] = useState(false);

  const inputRef = useRef();

  return (
    <div className="flex gap-2 flex-wrap justify-center   text-white border-zinc-500 w-full  border-b-2 pb-2   ">
      {!isDraft ? (isImp ? "⭐" : null) : null}

      <input
        className={
          onEdit
            ? "flex flex-nowrap px-1 bg-slate-600 rounded-sm text-white "
            : "flex flex-nowrap  w-1/3  bg-transparent  text-white focus:outline-none cursor-default"
        }
        ref={inputRef}
        value={onEdit ? input : todo}
        readOnly={onEdit ? false : true}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />

      <button
        className={
          isDraft
            ? "bg-green-500 text-black px-2 py-0 rounded-sm text-md text-center "
            : "px-2 rounded-sm text-center py-0 text-sm bg-red-500 text-white"
        }
        onClick={() => {
          isDraft
            ? usedispatch(redo(Number(index)))
            : usedispatch(deleter(Number(index)));
        }}
      >
        {isDraft ? "redo" : "Delete"}
      </button>

      {isDraft ? null : (
        <button
          onClick={() => {
            setOnEdit((prev) => !prev);
            if (!onEdit) {
              inputRef.current.focus();
              inputRef.current.select();
            } else {
              usedispatch(updater({ index: index, todo: input }));
            }
          }}
          className="bg-green-500 text-black  rounded-sm text-center text-sm px-2 py-0"
        >
          {onEdit ? "Save" : "Edit"}
        </button>
      )}

      {!isDraft ? (
        isImp ? (
          <button
            onClick={() => {
              usedispatch(normalize(Number(index)));
            }}
            className="bg-slate-400 text-black  rounded-sm text-center text-sm px-2 py-0"
          >
            Normal
          </button>
        ) : (
          <button
            onClick={() => {
              usedispatch(highlight(Number(index)));
            }}
            className="bg-yellow-500 text-black  rounded-sm text-center text-sm px-2 py-0"
          >
            Highlight
          </button>
        )
      ) : null}
    </div>
  );
}

export default Card;
