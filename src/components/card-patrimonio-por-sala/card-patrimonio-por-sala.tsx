import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRightArrowLeft, faCircleInfo} from "@fortawesome/free-solid-svg-icons";
import styles from "./card-patrimonio-por-sala.module.css"

const CardPatrimonioPorSala = () => {
    return (
        <>
            <tbody>
            <tr>
                <td>1236808</td>
                <td>MESA TRAPEZOIDAL DC-1987a</td>
                <td>Mesa</td>
                <td>11/02/26</td>

                <td>
                    <a
                        href="#"
                        aria-label="Ver detalhes do patrimônio"
                    >
                        <FontAwesomeIcon icon={faCircleInfo} />
                    </a>
                </td>

                <td>
                    <a
                        href="#"
                        aria-label="Transferir patrimônio"
                    >
                        <FontAwesomeIcon
                            icon={faArrowRightArrowLeft}
                        />
                    </a>
                </td>
            </tr>
            </tbody>

        </>
    )
}

export default CardPatrimonioPorSala