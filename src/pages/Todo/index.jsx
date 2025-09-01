import React, { useState } from "react";
import clsx from "clsx";

import styles from "./Todo.module.scss";

let uniqId = 0;

function TodoApp() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  const taskCompleted = () => {
    return todos.filter((todo) => todo.completed).length;
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value); // Lấy giá trị từ input
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Ngăn trang reload khi submit form
    if (inputValue.trim()) {
      setTodos([
        ...todos,
        { id: ++uniqId, text: inputValue, completed: false },
      ]);
      setInputValue(""); // Reset input sau khi thêm
    }
  };

  return (
    <div className={clsx(styles.todo)}>
      <h1 className={clsx("title")}>Todo List App</h1>
      <form className={clsx(styles.form)} onSubmit={handleSubmit}>
        <input
          className={clsx(styles.input)}
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Nhập task mới..."
        />
        <button className={clsx("btn increment")} type="submit">
          Thêm
        </button>
      </form>
      {todos.length === 0 && (
        <p className={styles.notification}>
          Chưa có task nào. Hãy thêm task đầu tiên!
        </p>
      )}
      <ul className={clsx("list", styles["list-todo"])}>
        {todos.map((todo) => (
          <li className={clsx("item", styles["item-todo"])} key={todo.id}>
            <div className={clsx(styles.content)}>
              <input
                className={clsx(styles.complete)}
                type="checkbox"
                onChange={() =>
                  setTodos(
                    todos.map((t) =>
                      t.id === todo.id ? { ...t, completed: !t.completed } : t
                    )
                  )
                }
              />
              <p
                style={{
                  textDecoration: todo.completed ? "line-through" : "none",
                }}
              >
                {todo.text}
              </p>
            </div>
            <div className={clsx("actions")}>
              <button
                className={clsx("btn ", styles.delete)}
                onClick={() => setTodos(todos.filter((t) => t.id !== todo.id))}
              >
                ❌
              </button>
            </div>
          </li>
        ))}
      </ul>

      <footer className={clsx(styles["todo-footer"])}>
        Tổng: {todos.length} task(s), Hoàn thành: {taskCompleted()} task(s), Còn
        lại: {todos.length - taskCompleted()} task(s)
      </footer>
    </div>
  );
}

export default TodoApp;
