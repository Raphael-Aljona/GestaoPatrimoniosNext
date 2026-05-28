import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRightArrowLeft, faCircleInfo} from "@fortawesome/free-solid-svg-icons";
import styles from "./card-patrimonio-por-sala.module.css"

type Patrimonio = {
    patrimonioID: string,
    denominacao: string,
    numeroPatrimonio: string,
    valor: number,
    imagem: string,
    localizacaoID: string,
    statusPatrimonioID: string,
}

const CardPatrimonioPorSala = ({
                                   numeroPatrimonio,
                                   patrimonioID,
                                   statusPatrimonioID,
                                   denominacao,
                                   imagem,
                                   localizacaoID,
                                   valor
                               }: Patrimonio) => {
    return (
        <>
            <tbody>
            <tr>
                <td>{numeroPatrimonio}</td>
                <td>{denominacao}</td>
                <td>Mesa</td>
                <td>11/02/26</td>

                <td>
                    <a
                        href="#"
                        aria-label="Ver detalhes do patrimônio"
                    >
                        <FontAwesomeIcon icon={faCircleInfo}/>
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