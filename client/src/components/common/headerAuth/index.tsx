import Link from "next/link";
import { Container, Form, Input } from "reactstrap";
import styles from "./styles.module.scss";

const HeaderAuth = function () {
  return (
    <>
      <Container className={styles.nav}>
        <Link href="/home">
          <img
            src="/logoUnidev.svg"
            alt="logo Unidev"
            className={styles.imgLogoNav}
          />
        </Link>
        <div className="d-flex align-items-center">
          <Form>
            <Input
              name="search"
              type="search"
              placeholder="Pesquisar"
              className={styles.input}
            />
          </Form>





          {/* ícone com problema, verificar novo */}
          <img
            src="/iconSearch.svg"
            alt="lupaHeader"
            className={styles.searchImg}
          />




          
          <p className={styles.userProfile}>AB</p>
        </div>
      </Container>
    </>
  );
};

export default HeaderAuth;
