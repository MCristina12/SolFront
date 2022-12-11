import React from "react"
import 'bootstrap/dist/css/bootstrap.css';
import { useHistory, useParams } from "react-router-dom";
import Axios  from "axios"
import { Link } from "react-router-dom"

export default function ANPDetail(){
    const {id_anp} = useParams();
    const [loadingData, setLoadingData] = React.useState(false);
    const [anp, setAPN] = React.useState({
        nombre : "",
        descripcion : "",
        precio : "",
        imagen : ""
    });

    const getAPNByID = async ()=>{
        Axios.get(`https://solback-production.up.railway.app/getANP/${id_anp}`)
        .then(res=>{
            console.log(res.data)
            setLoadingData(true)
            setAPN(prevBody => ({
                ...prevBody, 
                nombre : res.data.nombre,
                descripcion: res.data.descripcion,
                precio : res.data.precio,
                imagen : res.data.imagen
            }));
        }).catch(console.log)
    }

    React.useEffect(() => {
        getAPNByID();
    }, []) 

    return(
        <div>
            <div className="row">
                {!loadingData ? <div className="d-flex align-items-center mt-3">
                                <strong>Loading...</strong>
                                <div className="spinner-border ml-auto ms-3" role="status" aria-hidden="true"></div>
                            </div> : 
                    <div>
                        <div className="col">
                            <img src={`${anp.imagen}`} className="img-fluid"></img>
                        </div>
                        <div className="col">
                            <h2>{anp.nombre}</h2>
                            <p>{anp.descripcion}</p>
                            <div className="row">
                                <div className="col">
                                    <p>Cantidad</p>    
                                </div>
                                <div className="col">
                                    <input type="number" id="cant" name="cant" min="1" max="50" defaultValue={1} className="d-flex flex-column"></input>
                                </div>
                                <div className="col">
                                    <p>Importe total:</p>
                                </div>
                                <div className="col">
                                    <p>{anp.precio}</p>
                                </div>     
                            </div>
                            <button type="button" class="btn btn-success">Success</button>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

