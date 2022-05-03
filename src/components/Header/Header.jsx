import s from "./Header.module.scss";
import Logo from "../../assets/punk.png";
import { FaPhone, FaChrome, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

export const Header = () => {
  return (
    <div className={s.container}>
      <div className={s.main}>
        <img src={Logo} alt="headshot" className={s.logo} />
        <div className={s.nameSection}>
          <h1 className={s.name}>Michael Brock</h1>
          <h3 className={s.wallet}>MBrock29</h3>
        </div>
      </div>
      <div className={s.info}>
        <a
          href="https://www.linkedin.com/in/michael-brock-48909998/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn className={s.icon} />
        </a>
        <a
          href="https://github.com/MBrock29"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className={s.icon} />
        </a>
        <a className={s.link} href="tel:07902352381">
          <FaPhone className={s.icon} />
        </a>
        <a className={s.link} href="mailto:mbrock19@gmail.com">
          <MdOutlineMail className={s.icon} />
        </a>
      </div>
    </div>
  );
};
