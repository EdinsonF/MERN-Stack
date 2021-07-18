import React, { Component} from 'react';
import Navegacion from './components/navegacion';
import Task from './components/tabTareas';
import Formulario from './components/Formulario';

class App extends Component{

    constructor(props){
        super(props);
        this.state = {
            tasks : [],
            title: "",
            responsable: "",
            description: "",
            priority: ""
        };


        this.cargarTareas = this.cargarTareas.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
    }

    

    async deleteTask(e) {
        const id = e.target.dataset.id;
        if(id !== undefined){
            if(e.target.classList.contains('eliminar')){
                try {
                    const res = await fetch(`/api/task/${id}`, {
                        method: 'DELETE'
                    });
                    
                    M.toast({html: 'Tarea Eliminada'});
                    this.cargarTareas();
                     
                } catch (error) {
                    console.log(error)
                }
            }
        }       
    }

 componentDidMount(){
        this.cargarTareas();
        window.addEventListener('submit', this.validarSubmit)
        window.addEventListener('click', this.deleteTask);
    }

    validarSubmit = (e) =>{
        console.log("ESCUCHANDO");
        const {title, responsable, description, priority } = e.target;
        if(title.value !== '' || responsable.value !== '' || description.value !== '' || priority.value !==  ''){
            this.cargarTareas();
        console.log("tareas");

        }

    }

    async cargarTareas(){
        const datos = await fetch('/api/task');
        const task = await datos.json();
        
        this.setState({
            tasks: task
        });
        
       
    }


    render(){
        return (
            <div>
                <Navegacion/>
                <div className="container">
                    <div className="row">    
                        <div className="col s5">
                            {/* <img className="App-logo" alt="logo" /> */} 
                            <Formulario/>
                        </div>
                        <div className="col s7">
                      
                            <Task tasks={this.state.tasks} />
                                 
                         
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;