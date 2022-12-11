import React from "react"
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';

const ANPItem=(props)=>{
    return(
        <div className="card d-flex flex-column " style={{ width: 200 }} >
            <h5 className="card-title">{props.item.nombre}</h5>
            <img src="" className="card-img-top" alt="Img item"/>
            <div className="card-body">
                <Link to={`/apm/${props.id}`}>
                    <button type="button" className="btn btn-primary">COMPRAR</button>
                </Link>
                <p className="card-text">{props.item.precio}</p>
            </div>
        </div>
    )
}
export default ANPItem