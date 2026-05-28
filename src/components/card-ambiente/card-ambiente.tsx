import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleInfo} from "@fortawesome/free-solid-svg-icons";
import styles from "./card-ambiente.module.css";

type CardAmbiente = {
    nomeLocal: string;
    responsavel: string;
    nomeArea: string;
}

const CardAmbiente = ({nomeArea, responsavel, nomeLocal}: CardAmbiente) => {
    return (
        <>
            <tbody className={styles.environment_table}>
            <tr>
                <td>{nomeLocal}</td>
                <td>{nomeArea}</td>
                <td>{responsavel}</td>
            </tr>
            </tbody>

        </>
    );
}

export default CardAmbiente;