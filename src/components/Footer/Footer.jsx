import s from "./Footer.module.scss";
import { FaHeart, FaCoffee } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className={s.footer}>
      <p>
        Built with <FaHeart className={s.altColor} /> and{" "}
        <FaCoffee className={s.altColor} /> by{" "}
        <span className={s.altText}>MBrock29</span>
      </p>
    </footer>
  );
};
