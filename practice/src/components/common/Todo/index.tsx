import React, { useEffect, useState } from "react";
import { IArray, ITodo, ITodoResponse } from "../../../interface";
import { deleteTask, getTodo, postTodo } from "../../../api";
import AddTodo from "./addTodo";

const TodoCompo = () => {
  const [task, setTask] = useState<ITodo[]>([]);
  const array: IArray = [
    { id: "number", name: "dfadf" },
    { place: "fadsf" },
    { location: "sfasdf" },
    { status: 4 },
    { dumy: false },
  ];

  const handleGetTodo = () => {
    getTodo().then((res: ITodoResponse) => {
      setTask(res.data);
    });
  };

  const handleAddTodo = (text: string) => {
    const payload = { task: text, status: false };
    return postTodo(payload).then((res) => {
      if (res.data) {
        alert("Task Added");
      }
      alert("Something went wrong!! ");
    });
  };

  const handleAdd = (text: string) => {
    handleAddTodo(text).then(() => handleGetTodo());
  };

  const handleDeleteTodo = (id: number) => {
    return deleteTask(id).then((res) => {
      console.log(res.data);
    });
  };

  const deleteTodo = (id: number) => {
    handleDeleteTodo(id).then(() => handleGetTodo());
  };

  useEffect(() => {
    handleGetTodo();
  }, []);

  return (
    <section>
      <h1 className="text-center mt-4 text-[30px]">Todo App</h1>
      <AddTodo handleAdd={handleAdd} />
      <div className="text-center mt-5">
        {task &&
          task.map((item: ITodo) => {
            return (
              <div key={item.id} className="flex justify-around mt-4">
                <p>{item?.task}</p>
                <p>{`${item.status ? "Done" : "Not Done"}`}</p>
                <button
                  className="border px-2 py-2 rounded-md"
                  onClick={() => deleteTodo(item.id)}
                >
                  Delete
                </button>
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default TodoCompo;
