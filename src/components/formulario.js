import React, { Component } from "react";
//hacemos el import del Router, link y switch
//import { Link } from "react-router-dom";
//import Tarea from "./tarea";
import {context, tareaInicial} from '../context';

class Formulario extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titulo: "",
      responsable: "",
      descripcion: "",
      prioridad: "",
      tarea:tareaInicial
    };
  }

  guardar = e => {
   
      this.setState({
          [e.target.name]: e.target.value
      });


    // switch (e.target.name) {
    //   case "titulo":
    //     return this.setState({
    //       titulo: e.target.value
          
    //     });

    //   case "responsable":
    //     return this.setState({
    //       responsable: e.target.value
    //     });

    //   case "descripcion":
    //     return this.setState({
    //       descripcion: e.target.value
    //     });

    //   case "prioridad":
    //     return this.setState({
    //       prioridad: e.target.value
    //     });

    //   default:
    //     return "";
    // }

  };
 

  crearTarea= e => {
    console.log("crear tarea");

    var tareaFinal = {
      id:"el que yo quiera",
      titulo: this.state.titulo,
      responsable: this.state.responsable,
      descripcion: this.state.descripcion,
      prioridad: this.state.prioridad
    }

    console.log(tareaFinal);

  
  //console.log(tarea);
  this.setState({
    tarea: tareaFinal
});
  
console.log(this.state.tarea);

    return(
      <context.Provider value={this.state.tarea}></context.Provider>
    )
  }

  render() {
    return (
      <div id="form">

          <div className="card bg-dark">
            <div className="form-group">
              <div className="card-body">
                <input
                  type="text"
                  className="form-control"
                  name="titulo"
                  id="titulo"
                  placeholder="Título"
                  onChange={this.guardar}
                />

                <input
                  type="text"
                  className="form-control"
                  name="responsable"
                  id="responsable"
                  placeholder="Responsable"
                  onChange={this.guardar}
                />

                <input
                  type="text"
                  className="form-control"
                  name="descripcion"
                  id="descripcion"
                  placeholder="Descripción"
                  onChange={this.guardar}
                />

                <select
                  className="form-control"
                  id="prioridad"
                  name="prioridad"
                  onChange={this.guardar}
                >
                  <option value="alta">Alta</option>
                  <option value="media">Media</option>
                  <option value="baja">Baja</option>
                </select>

                <button
                  href="#"
                  className="btn btn-success"
                  id="guardar_tarea"
                  onClick={this.crearTarea}
                >
                  Guardar tarea
                </button>
              </div>
            </div>
          </div>
      

        {/* comprobamos que se recogen los datos */}
        {/* <p>{JSON.stringify(this.state)}</p> */}
      </div>
    );
  }
}
export default Formulario;
