import { BotoneraList, IndicadoresGrid } from "../components"

export const HomePage = () => {
  return (
    <>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h2>Hola, te estábamos esperando</h2>
                    <p>¿En qué te podemos ayudar hoy?</p>
                </div>

                <BotoneraList/>
                <IndicadoresGrid/>

                <div className="col-md-12">
                    <h6>Pronto contaremos con más funciones y sorpresas</h6>
                </div>
            </div>
        </div>
    </>
  )
}
