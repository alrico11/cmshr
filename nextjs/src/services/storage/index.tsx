// Store data
const SetStorage = (key: string,value: any) => {
    return localStorage.setItem(key,JSON.stringify(value))
}


// Retrieve data

const GetStorage = (key: string) => {
    const data = localStorage.getItem(key)

    try{
        if(data){
            return JSON.parse(data)
        }
    }catch(err){
        console.log("ERROR GET DATA",err)
    }
}

export {SetStorage, GetStorage}