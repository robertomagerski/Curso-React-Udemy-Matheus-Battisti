import styles from "./Car.module.css";
const CarView = ({ id, nome, marca }) => {
  return (
    <div>
      <ul className={styles.list_cars}>
        <li>Key: {id}</li>
        <li>Nome: {nome}</li>
        <li>Marca: {marca}</li>
      </ul>
    </div>
  );
};

export default CarView;
