import React from 'react';

// 待办事项
class List extends React.Component{
    handleDelete(event) {
        let delIndex = event.target.getAttribute('data-key');
        this.props.items.splice(delIndex,1);
        this.props.deleteItem(this.props.items);
    }

    handleFinish(event) {
        this.props.changeItem(event.target.getAttribute('data-key'))
    }

    render() {
        return (
            <div>
                {
                    this.props.items.map((item, index) => {
                        return (
                            <div key={index}>
                                <span 
                                    style={{ textDecoration: item.finished ? "line-through" : ""}}
                                    onClick={this.handleFinish.bind(this)} 
                                    data-key={index}
                                    className="itemContent">
                                    {item.content}
                                </span>
                                <button 
                                    onClick={this.handleDelete.bind(this)} 
                                    data-key={index}
                                    className="btn">
                                    delete
                                </button>
                            </div>
                        )  
                    })
                }
            </div>
        )       
    }
} 

export default List;