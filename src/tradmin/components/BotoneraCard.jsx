import { useNavigate } from "react-router-dom"

export const BotoneraCard = () => {

    const navigate = useNavigate();

    const onCalculadora = () =>{
        navigate('calculadora');
    }

    return (
        <>
            <button className="btn btn-primary" onClick={onCalculadora} >Calcula tu boleta de honorarios</button>
        </>
    )
}
