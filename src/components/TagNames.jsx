import '../stylesheets/TagNames.css';
function TagNames(props){
    return(
        <div className={props.className === undefined ? 'tag-name-container' :`tag-name-container ${props.className}`}>
            <div className="name-display">
                {props.name}
            </div>
            <button className={props.circle} onClick={()=>props.borrar(props.id)}>
                X
            </button>
        </div>
    )
};


export default TagNames;