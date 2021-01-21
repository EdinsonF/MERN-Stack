import React, {Component} from 'react';


class Task extends Component{
    constructor(props){
        super(props);

        //this.hizoClic = this.hizoClic.bind(this);

    }

    render(){

        return(
            
            
                <table id="#table">
                    <thead>
                        <tr>
                            <th>Titulo</th><th>Responsable</th><th>Descripción</th><th>Prioridad</th><th colSpan="2">Opción</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            
                            this.props.tasks.map(task =>{
                            return (
                                <tr key={task._id}>
                                    <td >{task.title}</td>
                                    <td>{task.responsable}</td>
                                    <td>{task.description}</td>
                                    <td>{task.priority}</td>
                                    <td>
                                        <button className="btn editar" data-id={task._id}>
                                        <i className="Small material-icons editar" data-id={task._id}>create</i>
                                        </button>
                                    </td>
                                    <td> 
                                        <button className="btn eliminar" data-id={task._id} > 
                                        <i className="Small material-icons eliminar" data-id={task._id}>delete_sweep</i>
                                        </button>
                                    </td>
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
