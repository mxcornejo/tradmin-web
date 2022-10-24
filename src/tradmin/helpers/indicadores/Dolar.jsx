import { useEffect, useState } from "react";

export const Dolar = () => {

    const [todos, setTodos] = useState()

    const indicadorApi = async () => {
        const url = `https://api.cmfchile.cl/api-sbifv3/recursos_api/dolar?apikey=f6ca25ae8b0788921f5a6cde924a645c0debeb74&formato=json`;
        const response = await fetch(url)
        const { Dolares } = await response.json()
        setTodos(Dolares)
    }

    useEffect(() => {
        indicadorApi()
    }, [])

    return (
        <>
            <div className="card">
                <div className="card-body">
                    <h2>Valor Dolar</h2>
                    {!todos ? 'Cargando...' :
                        todos.map(({ Valor }) => {
                            return <h5 className="card-title" key={Valor}>{Valor}</h5>
                        })
                    }

                    {!todos ? 'Cargando...' :
                        todos.map(({ Fecha }) => {
                            return <p className="card-text" key={Fecha}>{Fecha}</p>
                        })
                    }
                </div>
            </div>

        </>
    )
}