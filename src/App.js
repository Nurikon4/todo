import React, { Component } from 'react'
import './App.css';
import Todo from './Todo/Todo';

class App extends Component {

  state = {
    text: '',
    tasks: [],
    done: []
  }

  onChange = (e) => {
    this.setState({
      text: e.target.value
    })
  }

  onAdd = () => {
    let tasks = this.state.tasks
    tasks.push(this.state.text)
    this.setState({ tasks: tasks, text: '' })
  }

  onDone = (index) => {    
    const newTasks = this.state.tasks.concat()
    const newDone = this.state.done.concat()

    const removedItem = newTasks.splice(index, 1)
    newDone.push(removedItem)
    
    this.setState({
      done: newDone,
      tasks: newTasks
    })
  }
  onRemove = (index) =>{
    const tasks = this.state.tasks
    tasks.splice(index, 1)
    this.setState({
      tasks
    })
  }

  render() {
    
    const input = ['input']
    if(this.state.text !== ''){
      input.push('green')
    } else {
      input.push('red')
    }

    return (
      <div className="container">
        <h1>ToDoList</h1>
        <input className={input.join(' ')} onChange={this.onChange} value={this.state.text} type="text" placeholder='Введите задачу...'></input>
        <button className='AddButton' onClick={this.onAdd}>Добавить</button>

        {this.state.tasks.map( (task, index) => (
          <Todo key={index} name={task} index={index} done={this.onDone} remove={this.onRemove} />
        ))}

        <div className='Done'>
            <p className='Done_p'> <strong>Выполнено:</strong></p>
          {this.state.done.map( (name, index) => {
            return ( 
            <div key={index} className='Done__text'>{name}</div>
            )
          })}
        </div>
        
      </div>
    )
  }
}

export default App;
