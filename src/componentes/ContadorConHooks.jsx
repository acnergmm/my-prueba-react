import { useState, useEffect } from "react";

 
 
 
 function ContadorConHooks() {
 const [contador, setContador] = useState(0);


    useEffect(() => {
      document.title = ` Acner Has hecho click ${contador} veces....`;

    console.log("useEffect se ejecuta cada vez que cambia el contador");
    }, [contador]);
 

return (
    <div>
        <p> Has hecho click {contador} veces</p>
        <button onClick={() => setContador(contador+1)}>Incrementar</button>
    </div>
);

}

 export default ContadorConHooks;


