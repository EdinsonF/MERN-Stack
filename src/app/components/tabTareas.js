import React, {Component} from 'react';

class Task extends Component{

    constructor(){
        super();
        this.state = {
            tasks: []
            
        };


    }

 componentDidMount(){
        this.cargarTareas();
    }

  async cargarTareas(){

        const datos = await fetch('/api/task');
        const task = await datos.json();
        this.setState({
            tasks: task
        });
       
    }

    render(){

        return(
            <table>
                <thead>
                    <tr>
                        <th>Titulo</th><th>Responsable</th><th>Descripción</th><th>Prioridad</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.tasks.map(task =>{
                            return (
                                <tr key={task._id}>
                                    <td >{task.title}</td>
                                    <td>{task.responsable}</td>
                                    <td>{task.description}</td>
                                    <td>{task.priority}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        )
    }
}

export default Task;
