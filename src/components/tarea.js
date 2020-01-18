import React, { Component } from "react";
//hacemos el import del Router, link y switch
//import { Link } from "react-router-dom";
//importamos el json tareas
import { tareas } from "../tareas";

class Tarea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //recogemos mediante props, los atributos de cada tarea
      //titulo: "",
      // responsable: "",
      // descripcion: "",
      // prioridad: "",
      tareas: tareas.tareas,
      tarea: this.props.tarea
    };
  }


  // guardar = e => {
  //   switch (e.target.name) {
  //     case "titulo":
  //       return this.setState({
  //         titulo: e.target.value
  //       });

  //     case "responsable":
  //       return this.setState({
  //         responsable: e.target.value
  //       });

  //     case "descripcion":
  //       return this.setState({
  //         descripcion: e.target.value
  //       });

  //     case "prioridad":
  //       return this.setState({
  //         prioridad: e.target.value
  //       });

  //     default:
  //       return "";
  //   }
  //};
  crearTarea = e => {};

  imprimirTarea() {}

  render() {
    console.log("imprimimos la tarea en tarea.js");
    console.log(this.state.tarea);
    return (
      <div className="tareas">
        {this.state.tareas.map(tarea => (
          <main key={tarea.id}>
            <div className="card">
              <div className="card-header" >{tarea.titulo}</div>
              <div className="card-body">
                <h5 className="card-title">{tarea.descripcion}</h5>
                <p className="card-text">{tarea.responsable}</p>
              </div>
              <div className="card-footer">
                <button className="btn btn-primary">Borrar tarea</button>
              </div>
            </div>
          </main>
        ))}
      </div>
    );
  }
}
export default Tarea;
