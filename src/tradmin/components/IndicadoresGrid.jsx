import { Dolar, Euro, UF, UTM } from "../helpers/indicadores";

export const IndicadoresGrid = () => {

    return (
        <>
            <div className="container">
                <div className="row py-5">
                    <div className="col-md-12">
                        <h2>Indicadores diarios</h2>
                    </div>
                    <hr />
                    <div className="col-md-3">
                        <Dolar />
                    </div>
                    <div className="col-md-3">
                        <Euro />
                    </div>
                    <div className="col-md-3">
                        <UF />
                    </div>
                    <div className="col-md-3">
                        <UTM />
                    </div>
                </div>
            </div>

        </>
    )
}