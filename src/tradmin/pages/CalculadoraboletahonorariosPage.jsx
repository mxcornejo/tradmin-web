import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const CalculadoraboletahonorariosPage = () => {

    const navigate = useNavigate();

    const onNavigateBack = () => {
        navigate(-1);
    }

    const [formState, setFormState] = useState({
        montoname: '',
    });

    const { montoname } = formState;

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value
        });
    }

    // captura de retencion

    const retenciones = {
        reten1: 12.25,
        reten2: 11.5,
        reten3: 10.75,
        reten4: 10,
    }

    const [retencion, setRetencion] = useState(retenciones.reten1)

    const retencionselect = retencion;

    // /captura de retencion

    // calculo boleta

    const liquido1 = 100 - retencionselect;
    const liquido2 = liquido1 / 100;
    const liquido3 = liquido2;
    const liquido = (montoname / liquido3).toFixed(0);
    const montonameliquido = montoname * 1;

    const bruto1 = retencionselect;
    const bruto2 = montoname * bruto1;
    const bruto3 = bruto2 / 100;
    const bruto = montoname - bruto3;
    const montonamebruto = montoname * 1;

    // /calculo boleta



    return (
        <>
            <div className="container">
                <div className="row my-4">
                    <div className="col">
                        <button className="btn btn-outline-primary" onClick={onNavigateBack}>
                            Regresar
                        </button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-8">
                        <h4>Calcula tu boleta de honorarios</h4>
                        <div className="input-group">
                            <span className="input-group-text">
                                $
                            </span>
                            <input
                                type="number"
                                className="form-control"
                                placeholder="Ingresa el monto que quieres calcular"
                                name="montoname"
                                value={montoname}
                                onChange={onInputChange}
                            />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <h4>Retención</h4>

                        <select className="form-select" value={retencion} onChange={e => setRetencion(e.target.value)}>
                            {Object.entries(retenciones).map(c => (
                                <option key={c[1]} value={c[1]}>{c[1]}</option>
                            ))}
                        </select>

                        <a className="form-text d-flex justify-content-end">¿Qué es esto?</a>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-md-6">
                        <h4>Líquido</h4>
                        <p>Si lo pactado fue en valores líquidos, deberás hacer la boleta por ${liquido} y recibirás:</p>
                        <h2>${montonameliquido}</h2>
                        <p>en efectivo.</p>
                    </div>
                    <div className="col-md-6">
                        <h4>Bruto</h4>
                        <p>Si lo pactado fue en valores brutos, deberás hacer la boleta por ${montonamebruto} y recibirás:</p>
                        <h2>${bruto}</h2>
                        <p>en efectivo.</p>
                    </div>
                </div>
                <hr />
                <div className="row my-5">
                    <div className="col-md-12 text-center">
                        <button className="btn btn-primary">compartir</button>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-md-12 text-center">
                        <p>Tradmin es un proyecto mart.cl y no tiene ninguna relación con el SII.cl</p>
                        <p>Desarrollado por @mxcornejo</p>
                    </div>
                </div>
            </div>
        </>
    )
}
