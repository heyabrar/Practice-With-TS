import React, { useState } from "react";

type Props = {
  handleAdd: (text: string) => void;
};

const AddTodo = ({ handleAdd }: Props) => {
  const [text, setText] = useState("");

  const addTask = (text: string) => {
    if (text) {
      handleAdd(text);
    } else {
      alert("No Input");
    }
  };

  return (
    <section>
      <div className="flex justify-center mt-4 gap-x-2">
        <input
          type="text"
          placeholder="Add New Task"
          className="border p-1"
          onChange={(e) => setText(e.target.value)}
        />
        <button className="border p-2 rounded-md" onClick={() => addTask(text)}>
          ADD
        </button>
      </div>
    </section>
  );
};

export default AddTodo;
