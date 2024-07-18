import React, {useState} from 'react'

export const PrimerComponente = () => {

    //let nombre = "Mairon";
    let web = "www.CyarthPortfolio.com"

    let stack = [
        "SAP ABAP", "SAP BTP", "REACT", "JAVASCRIPT"
    ]

    const [nombre, setName] = useState("Mairon") 

    const cambiarNombre = (newName) =>{
        setName(newName);
    }

    return (
        <div>
            <h1>Bienvenido al curso de React <strong className={nombre.length>=4 ? 'verde' : 'rojo'}>{nombre} </strong></h1>
            <p>{web}</p>
            
            <ul>
                {
                    stack.map( (curso, index) => {
                        return (<li key={index}>{curso}</li>)
                    })
                }
            </ul>

            <input onChange={e=> cambiarNombre(e.target.value)} placeholder='Change your name'>
            </input>

            <button onClick={e=> cambiarNombre("Mairon Iturra")}>
                Change name
            </button>
        </div>
        
    
    )
}
