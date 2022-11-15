import { Container } from "reactstrap";
import styles from "./styles.module.scss";

const Footer = function () {
  return (
    <>
      <Container className={styles.footer}>
        <img
          src="/logoGithub.svg"
          alt="logoFooter"
          className={styles.footerLogo}
        />
        <a
          href="https://github.com/lpparanhos"
          target={"blank"}
          className={styles.footerLink}
        >
          Github
        </a>
      </Container>
    </>
  );
};

export default Footer;
