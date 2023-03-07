import {useState,useEffect} from 'react';
import '../stylesheets/FormNewNames.css'

function FormNewNames(props){

    const [name,setName]= useState('');
    const handleChange = (e)=>{
        setName(e.target.value);
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        props.agregar(name);
        setName('')

        
    }
    return(
        <>
            <div className="chooser-logo-small" onClick={()=>props.volver()}>CHOOSER</div>
            <form className='form-container' onSubmit={handleSubmit}>
                <input className='input-add' onChange={handleChange} value={name} placeholder='enter a name and press + for add' autoFocus/>
                <button className='button-add'>+</button>
            </form>
        </>
    )
};

export default FormNewNames;