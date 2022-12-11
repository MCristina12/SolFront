import React from "react"
import 'bootstrap/dist/css/bootstrap.css';
import { useHistory, useParams } from "react-router-dom";

export default function ANPDetail(){
    const {id_anp} = useParams();
    return(
        <div>
            <div className="row">
                <div className="col">
                    <img src="" className="img-fluid"></img>
                </div>
                <div className="col">
                    <h2>BOSQUE BERLIN</h2>
                    <p>Mucho texto</p>
                    <div className="row">
                        <div className="col">
                            <p>Cantidad</p>    
                        </div>
                        <div className="col">
                            <input type="number" id="cant" name="cant" min="1" max="50" defaultValue={1} className="d-flex flex-column"></input>
                        </div>
                        <div className="col">
                            <p>Importe total: </p>
                        </div>
                        <div className="col">
                            <p>20 PEN</p>
                        </div>     
                    </div>
                    <button type="button" class="btn btn-success">Success</button>
                </div>
            </div>
        </div>
    )
}