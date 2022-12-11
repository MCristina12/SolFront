import React from "react"
import 'bootstrap/dist/css/bootstrap.css';
import { useHistory, useParams } from "react-router-dom";
import Axios  from "axios"
import { Link, useNavigate } from "react-router-dom"
import HomeDescp from "../General/HomeDescp";

export default function ANPDetail(){
    const nav = useNavigate();
    const {id_anp} = useParams();
    const [loadingData, setLoadingData] = React.useState(false);
    const [cantidad, setCantidad] = React.useState([1]);
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

    const sendPago = (event) =>{
        event.preventDefault();
        console.log(id_anp)
        console.log(cantidad)
        console.log(cantidad*anp.precio)
        Axios.post("https://solback-production.up.railway.app/postPago",{
            id_anp : id_anp,
            total : cantidad*anp.precio,
            cantidad_boletos : cantidad
        }).then(res =>{
            console.log(res.data);
            nav("/finalizar")
        }).catch(console.log)
    }

    const handleChangeCantidad = (event)=>{
        setCantidad(event.target.value);  
    }

    React.useEffect(() => {
        getAPNByID();
    }, []) 

    return(
        <div>
            <HomeDescp title = "Compra"></HomeDescp>
        <div className="d-inline-flex p-4 bg-success p-2 text-dark bg-opacity-25" >
            <div className="row">
                {!loadingData ? <div className="d-flex align-items-center mt-3">
                                <strong>Loading...</strong>
                                <div className="spinner-border ml-auto ms-3" role="status" aria-hidden="true"></div>
                            </div> : 
                    <div className="row">
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
                                    <input 
                                        type="number" 
                                        id="cantidad" 
                                        name="cantidad" 
                                        value = {cantidad[0]}
                                        className="d-flex flex-column"
                                        onChange={handleChangeCantidad}>    
                                    </input>
                                </div>
                                <div className="col">
                                    <p>Importe total:</p>
                                </div>
                                <div className="col">
                                    {cantidad*anp.precio} PEN                               
                                </div>     
                            </div>
                            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                                <button type="button" className="btn btn-success " onClick={sendPago}>PAGAR</button>
                            </div>
                    

                        </div>
                    </div>
                }
            </div>
        </div>
        </div>
    )
}

