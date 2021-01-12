import { Component } from "react";
import React from 'react';


class Formulario extends Component{

    constructor(){
        super();
        this.state = {
            title: "",
            responsable: "",
            description: "",
            priority: "Baja"
        };
        this.capInput = this.capInput.bind(this);
        this.sendForm = this.sendForm.bind(this);
        this.validarForm = this.validarForm.bind(this);
        this.limpiarForm = this.limpiarForm.bind(this);
    }

    capInput(e){

        const { value, name} =e.target;
        this.setState({
           [name]: value 
        })
        
    }

    validarForm(e){
        e.preventDefault();
        const {title, responsable, description, priority} = this.state;
        if(title === '' || responsable === '' || description === '' || priority ===  ''){
            M.toast({html: 'Campos Vacios'})
        }else{
            this.sendForm();
        }
    }


    async sendForm(e){
        
        console.log(this.state);

        try {
            const res = await fetch('/api/task', {
                method: 'POST',
                body: JSON.stringify(this.state),
                headers: {
                    'Content-Type': 'application/json'
            }
            })
            const data = await res.json();
            M.toast({html: 'Tarea Guardada'});
            this.limpiarForm();
            
            
            
        } catch (error) {
            console.log(error)
        }
    }

    limpiarForm(){
            this.setState({
                title: "",
                responsable: "",
                description: "",
                priority: "Baja"
            });
    }
        
        render(){

            return (
                <div className="card">
                    <div className="card-content">
                        <form className="" onSubmit={this.validarForm}>
                            
                           
                            <div className="row">
                            <span className="card-title">Agregar Tarea</span>
                                <div className="input-fied col s12 ">
                                    <input type="text" name="title" className="" placeholder="Titulo" onChange={this.capInput} value={this.state.title}/>
                                </div>
                            
                                <div className="input-fied col s12">
                                    <input type="text" name="responsable" className="" placeholder="Responsable" onChange={this.capInput} value={this.state.responsable}/>
                                </div>
                                <div className="input-fied col s12">
                                    <textarea name="description" className="materialize-textarea" placeholder="Descripción" onChange={this.capInput} value={this.state.description}/>
                                </div>
                                
                                <div className="input-fied col s12">
                                    <div className="row">
                                        <p>
                                            <label>
                                                <input type="radio" name="priority" className="with-gap"  value="Alta" onChange={this.capInput}/>
                                                <span>Alta</span>
                                            </label>
                                        </p>
                                        <p>
                                            <label>
                                                <input type="radio" name="priority"  value="Media" onChange={this.capInput}/>
                                                <span>Media</span>
                                            </label>
                                        </p>
                                        <p>
                                            <label>
                                                <input type="radio" name="priority"  value="Baja" onChange={this.capInput} />
                                                <span>Baja</span>
                                            </label>
                                        </p>     
                                    </div>
                                </div>
                            </div>
                            
                        
                    
                            <button className="btn waves-effect waves-light" type="submit" name="action">Submit
                                <i className="material-icons right">send</i>
                            </button>
                        </form>
                    </div>
                </div>
                
    )
        }
       
    
}

export default Formulario;