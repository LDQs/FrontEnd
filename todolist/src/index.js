import React from 'react';
import ReactDOM from 'react-dom'
import './index.css';
import List from './components/List'
import Computer from './components/Computer'

class ToDoList extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        term:{
          content:'',
          finished:false
        },
        items:[]
      };
    }

    onSubmit = (event) => {
      event.preventDefault();
      this.setState({
        term:{
          content:'',
          finished:false
        },
        items:[...this.state.items,this.state.term]
      })
    }

    onChange = (event) => {
      this.setState({
        term: { 
          content: event.target.value, 
          finished: false
        }
      })
    }

    handleDelete = () => {
      this.setState({
        items: [...this.state.items]
      })
    }

    handleChange = (chooseIndex) => {
      let newData = this.state.items.map((item,index) => {
        if (chooseIndex === index.toString()) {
          item.finished = true;
        }
        return item;
      })
      this.setState({
        items: newData
      })
    }

    render() {
      return (
        <div>
          <h1>TodoList是类组件</h1>
          <form className="todolist" onSubmit={this.onSubmit}>
            <input value={this.state.term.content} onChange={this.onChange} />
            <button className="btn">add</button>
          </form>
          <List items={this.state.items} deleteItem={this.handleDelete} changeItem={this.handleChange}></List>
          <h1>计数器是函数式组件</h1> 
          <Computer></Computer>
        </div>
      )
    }
}

ReactDOM.render(
    <ToDoList />,
    document.getElementById('root')
);