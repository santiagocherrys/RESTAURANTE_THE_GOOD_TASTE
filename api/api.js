const url = 'http://localhost:3000/usuarios'

/* Funcion obtener*/
export const getUsers = async () =>{
    try{
        const result =await fetch(url);
        const users = await result.json();
        return users;
    }catch(error){
        console.log(error);
    }
}

/* Funcion guardar usuario */

export const newUser = async (user) =>{
    try{
        await fetch(url,{
            method: 'POST',
            headers:{
                'Content-type':'application/json'
            },
            body: JSON.stringify(user)
        })
    }catch(error){
        console.log(error);
    }
}

