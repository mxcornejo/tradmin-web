import { useEffect, useState } from "react";

export const Euro = () => {

    const [todos, setTodos] = useState()

    const indicadorApi = async () => {
        const url = `https://api.cmfchile.cl/api-sbifv3/recursos_api/euro?apikey=f6ca25ae8b0788921f5a6cde924a645c0debeb74&formato=json`;
        const response = await fetch(url)
        const { Euros } = await response.json()
        setTodos(Euros)
    }

    useEffect(() => {
        indicadorApi()
    }, [])

    return (
        <>
            <div className="card">
                <div className="card-body">
                    <h2>Valor Euro</h2>
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