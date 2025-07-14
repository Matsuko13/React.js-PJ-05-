import React, { useMemo } from "react";
import { Form } from "../form/form";
import { Task } from "../task/task";
import css from "./main.module.css";
import { useSelector } from "react-redux";

const Main = () => {
  const cards = useSelector((state) => state.tasks);
  const memoizedCards = useMemo(() => {
    return cards;
  }, [cards]);
  return (
    <main className={css.main}>
      <div className={css.container}>
      {memoizedCards.map((card) => (
  <div key={card.id} className={css.card}>
    <p className={css.title}>{card.title}</p>
    <ul className={css.list}>
      {card.tasks.map(task => <Task key={task.id} task={task} cardId={card.id} />)}
    </ul>
    <div>
      <Form card={card} />
    </div>
  </div>
))}
      </div>
    </main>
  );
};

export default Main;