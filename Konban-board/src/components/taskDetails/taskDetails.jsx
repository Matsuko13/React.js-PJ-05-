import React from "react";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { editTask } from "../storage/taskSlice.jsx";
import css from "./details.module.css";
import back from "./cross.svg";

const TaskDetails = () => {
  const cards = useSelector((state) => state.tasks);
  const { taskId } = useParams();
  const dispatch = useDispatch();
  const [edit, setEdit] = useState(false);
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const handleDescription = (description) => setDescription(description);
  const handleTitle = (title) => setTitle(title);
  const handleEdit = () => setEdit(true);
  const handleSave = () => {
    dispatch(editTask({ cardIndex: ind, id: issue.id, name: title, description: description }));
    setEdit(false);
  };
  let match = [cards[0], cards[1], cards[2], cards[3]];
  let issue = null;
  let ind = "";
  match.forEach((item) => {
    item.tasks.forEach((el) => {
      if (el.id === +taskId) {
        issue = el;
        ind = item.id;
      }
    });
  });
  let content = null;
  if (!edit && issue !== null) {
    content = (
      <div className={css.current}>
        <h2>{issue.name}</h2>
        <p>{issue.description}</p>
        <button onClick={handleEdit}>Change the content</button>
      </div>
    );
  } else if (edit && issue !== null) {
    content = (
      <div className={css.form}>
        <input
          className={css.input}
          type="text"
          value={title}
          onChange={(e) => handleTitle(e.target.value)}
          autoFocus={true}
        />
        <br />
        <textarea
          className={css.textarea}
          value={description}
          onChange={(e) => handleDescription(e.target.value)}
          rows="15"
          cols="23"
        ></textarea>
        <br />
        <button className={css.save} onClick={handleSave}>Save</button>
      </div>
    );
  } else if (issue === 0) {
    content = (
      <h1 className={css.empty}>
        Task with ID <em>{taskId}</em> was not found
      </h1>
    );
  }
  return (
    <div className={css.detailsWrapper}>
      <div className={css.container}>
        <Link title="back" className={css.back} to="/Kanban-board">
          <img src={back} alt="" />
        </Link>
        <br />
        {content}
      </div>
    </div>
  );
};

export default TaskDetails;
