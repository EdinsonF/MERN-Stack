import React, { Component} from 'react';



import Navegacion from './components/navegacion';
import Formulario from './components/Formulario';
import Task from './components/tabTareas';
class App extends Component{

  

    render(){
        return (
            <div>
                <Navegacion titulo="Mis tareas"/>
                <div className="container">
                     <div className="row">    
                        <div className="col s5">
                            {/* <img className="App-logo" alt="logo" /> */} 
                                <Formulario />
                        </div>
                        <div className="col s7">
                                <Task/>
                                
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;