import React, { Component } from "react";
import "./App.css";
//hacemos el import del Router, link y switch
//import { Route, Link, Switch } from "react-router-dom";
//importamos los componentes
//importamos la librería redirect
//import { Redirect } from "react-router-dom";
//importamos el formulario
import Formulario from "./components/formulario";
import Tarea from "./components/tarea";
import Header from "./components/header";
//importamos el json tareas
//import { tareas } from "./tareas";

//Convertimos App en componente
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //guardamos el json en una variable
     // tareas: tareas.tareas
    };
  }

  render() {
    return (
      <div>
        <Header></Header>
        <Formulario></Formulario>
        {/* iteramos el json tareas, llamando al componente tarea para imprimir cada tarea, pasándole los atributos */}
        {/* {this.state.tareas.map(tarea => (
          <Tarea
            titulo={tarea.titulo}
            key={tarea.titulo}
            responsable={tarea.responsable}
            descripcion={tarea.descripcion}
            prioridad={tarea.prioridad}
          />
        ))} */}
        <Tarea></Tarea>
      </div>
    );
  }
  //{/* <p>{JSON.stringify(this.state.tareas)}</p>  */}
}

export default App;
