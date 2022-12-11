import React from "react"
import 'bootstrap/dist/css/bootstrap.css';
import Axios  from "axios"
import { Link } from "react-router-dom"
import HomeDescp from "./HomeDescp";

export default function CompraFinal(){
    return(
        <div>
            <HomeDescp title = "Finalizar!"/>
            <div className="d-inline-flex p-2 justify-content-center bg-success p-2 text-dark bg-opacity-50" style={{width : 500}}>
                <div className="col p-3">
                    <h1>FELICIDADES!</h1>
                    <p>Tu compra ha sido concretada</p>
                    <p>Revisa tu correo para ver la info de la compra</p>
                    <Link to={"/"}>
                        <p className="text-end">Voler a inicio</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}