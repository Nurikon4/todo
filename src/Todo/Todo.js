import './Todo.scss'

const Todo = (props) => {
    

    return (
        <div className='content'>
            <div className='text'>
                {props.name}
                <div className='img'>
                    <button onClick={()=>props.done(props.index)}>Выполнено</button>
                    <button onClick={()=>props.remove(props.index)}>Удалить</button>
                </div>
            </div>
        </div>
    )
}

export default Todo