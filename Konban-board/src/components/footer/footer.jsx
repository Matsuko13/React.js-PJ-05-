import React from "react";
import css from "./footer.module.css";
import { useSelector } from "react-redux";

const Footer = () => {
  const cards = useSelector((state) => state.tasks);
  return (
    <div className={css.footer}>
      <footer className={css.container}>
        <div className={css.active}>
          <p className={css.para}>
            Active tasks: {cards[0].tasks.length}
          </p>
          <p className={css.para}>
            Finished tasks: {cards[3].tasks.length}
          </p>
        </div>
        <p className={css.author}>
          Kanban board by Veronika Seredinskay, 
          {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
};
export default Footer;