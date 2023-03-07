import { useState,useEffect } from "react";
import FormNewNames from "./FormNewNames";
import TagNames from "./TagNames";
import ButtonChooseIt from "./ButtonChooseIt";
import '../stylesheets/CanvaBase.css'
import { v4 as uuidv4 } from 'uuid';



function CanvaBase(props){
    const [nombres,setNombres] = useState([]);
    const agregarNombre = (nombre)=>{
        if(nombre.trim()){
            const nuevoUsuario = {
                name:nombre.trim(),
                id:uuidv4(),
                circle:"circle-erase"
            }
            const nombresActualizados = [nuevoUsuario,...nombres];
            setNombres(nombresActualizados);
        }    
    };



    const borrarNombre = (id)=>{
        const nombresActualizados = nombres.filter(usuario =>usuario.id !== id);
        setNombres(nombresActualizados);
        
    };

    const funcionRandom = (max)=>{
        return Math.floor(Math.random() * max)
    }

    const reiniciarRandom = ()=>{
        const nombresActualizados = nombres.map((nombre)=>{
            nombre.className=undefined;
            nombre.circle="circle-erase"
            return nombre;
        })
        setNombres(nombresActualizados);
        
    }

    const randomIt = ()=>{
        for (let i=0;i<20;i++){
            setTimeout(()=>{
                reiniciarRandom()
                const indexRandom = funcionRandom(nombres.length);
                const nombresActualizados = nombres.map((nombre,index)=>{
                    nombre.circle="circle-erase oculto"
                    if(index === indexRandom){
                        nombre.className='select-tag';
                        console.log(nombre.name);
                    }
                    if (i===19){
                        nombre.circle='circle-erase'
                    } 
                    return nombre;
                })
                setNombres(nombresActualizados);
                console.log(indexRandom);
            },200*(i+1));
        }

    };

    

    if(nombres.length === 1){
        return(
            <div className="container-app">  
            <FormNewNames agregar={agregarNombre} volver={props.start}/>
            <div className="list-of-names">list of names</div>
            {nombres.map(nombre=>
                <TagNames name={nombre.name}
                key={nombre.id}
                id={nombre.id}
                className={nombre.className}
                borrar={borrarNombre}
                circle={nombre.circle}/>
            )}
            </div>
        )
    }else if(nombres.length===0){
        return(
            <div className="container-app">  
            <FormNewNames agregar={agregarNombre} volver={props.start}/>
            </div>
        )
        
    }else{
        return(
            <div className="container-app">  
            <FormNewNames agregar={agregarNombre} volver={props.start}/>
            <div className="list-of-names">list of names</div>
            {nombres.map((nombre)=>
                <TagNames name={nombre.name}
                key={nombre.id}
                id={nombre.id}
                className={nombre.className}
                borrar={borrarNombre}
                circle={nombre.circle}/>
            )}
            <ButtonChooseIt elegir={randomIt}/>
            </div>
        )
    }
    
};

export default CanvaBase;