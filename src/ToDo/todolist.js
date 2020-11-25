import React, {Component,useState} from 'react';
import styled from 'styled-components';

import Header from '../Header/Header';


class Todolist extends Component {

    constructor() {
        super();

        this.state= {
            userInput:'',
            date: '',
            categorie:'',
            done:false,
            priorite: 0,
            items:[]
        }
        
        
    }
    onChange(e) {
        // this.setState({
        //     userInput: e.target.value,
        //     date: e.target.value
            
        // });
        // console.log(e.target.value)
        this.setState({ [e.target.name]: e.target.value })
    }

    addTodo(e) {
        e.preventDefault();
        this.setState({
            
            items: [...this.state.items, {userInput: this.state.userInput, date: this.state.date, categorie: this.state.categorie, priorite: this.state.priorite}]
        });
    }
    
    renderTodo() {
        return this.state.items.map((item) => {
            return (
                <ListContainer>
                    <li>
                    <input type="checkbox" onChange={this.checked.bind(this)} checked={this.state.done}></input>    {item.userInput} - {item.date} | <ButtonDeleteContainer onClick={this.deleteTodo.bind(this)}>Supprimer</ButtonDeleteContainer>
                    </li>
                
                </ListContainer>
            )
        })
    }
    checked(e) {
        e.preventDefault();
        if (e.check === true)
        {
            alert("true")
            this.setState({
                done:this.state.done
             });
             console.log(this.state.done)
        }
        else 
        {
            alert("false")
             this.setState({
                done:this.state.done
             });
             console.log(this.state.done)
        }
        // toto = 'textDecoration: item.isChecked ? "line-through" : "none"';
    }

    deleteTodo(e) {
        e.preventDefault();

        const array= this.state.items;
        const index= array.indexOf(e.target.value);
        array.splice(index,1);

        this.setState({
            items: array
        });
    }
    render() {
        return (
            
            <div>
                <Header/>
                <FormContainer>
                <form>
                    <InputContainer 
                        type="text" 
                        name="userInput"
                        placeholder="Nouvelle tache" 
                        value={this.state.userInput} 
                        onChange={this.onChange.bind(this)}
                    />
                    <SelectContainer name="categorie" value={this.state.categorie} onChange={this.onChange.bind(this)}>
                        <option value="" selected></option>
                        <option value="Travail" >Travail</option>
                        <option value="Cours">Cours</option>
                        <option value="Sport">Sport</option>
                        <option value="Loisir">Loisir</option>
                    </SelectContainer>
                    <InputContainer
                        type="date"
                        name="date"
                        value={this.state.date}
                        onChange={this.onChange.bind(this)}
                        
                    />
                    <InputContainer type="radio" name="priorite" Value="1" onChange={this.onChange.bind(this)}/>
                    <label for="1">1</label>
                    <InputContainer type="radio" name="priorite" Value="2" onChange={this.onChange.bind(this)}/>
                    <label for="2">2</label>
                    <InputContainer type="radio" name="priorite" Value="3" onChange={this.onChange.bind(this)}/>
                    <label for="3">3</label>
                    <ButtonAddContainer onClick={this.addTodo.bind(this)}>Ajouter</ButtonAddContainer>
                </form>
                </FormContainer>
                
                <div>
                    {this.renderTodo()}
                </div>
                
            </div>
        )
    }
}

const FormContainer = styled.div`
padding:5px

`
const InputContainer = styled.input`
margin:5px
`
const SelectContainer = styled.select`
margin:5px
`
const ListContainer = styled.div `
margin:10px
`

const ButtonDeleteContainer = styled.button`
background-color: #f4511e;
  border: none;
  color: white;
  text-align: center;
  opacity: 0.6;
  transition: 0.3s;
  display: inline-block;
  text-decoration: none;
  cursor: pointer;

  :hover {opacity: 1}
`
const ButtonAddContainer = styled.button`
display: inline-block;
  border-radius: 4px;
  background-color: green;
  border: none;
  color: #FFFFFF;
  text-align: center;
  transition: all 0.5s;
  cursor: pointer;
  margin: 5px;
`


export default Todolist;