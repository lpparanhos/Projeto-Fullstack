import { Container } from "reactstrap";
import styles from "./styles.module.scss";

const CardsSection = function () {
  return (
    <>
      <p className={styles.sectionTitle}>O QUE VOCÊ VAI ACESSAR</p>
      <Container className="d-flex flex-wrap justify-content-center gap-4 pb-5">
        <div className={styles.card1}>
          <p className={styles.cardTitle}>FUNDAMENTOS</p>
          <p className={styles.cardDescription}>
            A Uni(dev) é uma faculdade que nasce 100% digital e tem como
            objetivo transmitir uma aprendizagem real que seja acessível a
            todos. Aqui você encontrará práticas básicas a avançadas de
            programação, atualizações de tecnologias e todo o suporte técnico
            necessário para ser um especialista no universo de TI.
          </p>
        </div>
        <div className={styles.card2}>
          <p className={styles.cardTitle}>FRONT-END</p>
          <p className={styles.cardDescription}>
            A Uni(dev) é uma faculdade que nasce 100% digital e tem como
            objetivo transmitir uma aprendizagem real que seja acessível a
            todos. Aqui você encontrará práticas básicas a avançadas de
            programação, atualizações de tecnologias e todo o suporte técnico
            necessário para ser um especialista no universo de TI.
          </p>
        </div>
        <div className={styles.card3}>
          <p className={styles.cardTitle}>BACK-END</p>
          <p className={styles.cardDescription}>
            A Uni(dev) é uma faculdade que nasce 100% digital e tem como
            objetivo transmitir uma aprendizagem real que seja acessível a
            todos. Aqui você encontrará práticas básicas a avançadas de
            programação, atualizações de tecnologias e todo o suporte técnico
            necessário para ser um especialista no universo de TI.
          </p>
        </div>
        <div className={styles.card4}>
          <p className={styles.cardTitle}>BANCO DE DADOS</p>
          <p className={styles.cardDescription}>
            A Uni(dev) é uma faculdade que nasce 100% digital e tem como
            objetivo transmitir uma aprendizagem real que seja acessível a
            todos. Aqui você encontrará práticas básicas a avançadas de
            programação, atualizações de tecnologias e todo o suporte técnico
            necessário para ser um especialista no universo de TI.
          </p>
        </div>
        <div className={styles.card5}>
          <p className={styles.cardTitle}>NUVEM</p>
          <p className={styles.cardDescription}>
            A Uni(dev) é uma faculdade que nasce 100% digital e tem como
            objetivo transmitir uma aprendizagem real que seja acessível a
            todos. Aqui você encontrará práticas básicas a avançadas de
            programação, atualizações de tecnologias e todo o suporte técnico
            necessário para ser um especialista no universo de TI.
          </p>
        </div>
        <div className={styles.card6}>
          <p className={styles.cardTitle}>CARREIRA</p>
          <p className={styles.cardDescription}>
            A Uni(dev) é uma faculdade que nasce 100% digital e tem como
            objetivo transmitir uma aprendizagem real que seja acessível a
            todos. Aqui você encontrará práticas básicas a avançadas de
            programação, atualizações de tecnologias e todo o suporte técnico
            necessário para ser um especialista no universo de TI.
          </p>
        </div>
      </Container>
    </>
  );
};

export default CardsSection;
