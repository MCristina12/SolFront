import dummy from "../../dummy.js";
import ANPItem from "./ANPItem.js";
import React from "react"
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom'


export default function ANPList(){
    /*const items = dummy.map(item => {return(
        <ANPItem
            key = {item.id}
            item = {item}
        />
    )})*/

    const [anps, setANP] = React.useState([])
    const [loadingData, setLoadingData] = React.useState(false)

    async function getANPs(){
        const res = await fetch("https://solback-production.up.railway.app/getANPs")
        const data = await res.json()
        console.log(data)
        setLoadingData(true)
        setANP(data)
    }

    React.useEffect(() => {
        getANPs()
    }, [])

    return(
        <div className="d-flex flex-wrap justify-content-center gap-2 my-5 mx-5">
            <div className="card-body d-flex flex-wrap">
                {!loadingData ?
                    <div className="d-flex align-items-center mt-3">
                                <strong>Loading...</strong>
                                <div className="spinner-border ml-auto ms-3" role="status" aria-hidden="true"></div>
                    </div> :

                    <div>
                        {anps.map((anp) => (
                        <div className="card d-flex flex-column p-2" style={{ width: 300 }} key = {anp.id} >
                            <h5 className="card-title">{anp.nombre}</h5>
                            <img src={`${anp.imagen}`} className="card-img-top" alt="Img item"/>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col">
                                        <Link to={"/anp/"+anp.id}>
                                            <button type="button" className="btn btn-primary">COMPRAR</button>
                                        </Link>
                                    </div>
                                    <div className="col">
                                        <p className="card-text">{anp.precio} PEN</p>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        ))}
                    </div>
                    
                }
            </div>
        </div>
    )
}