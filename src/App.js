import { Header } from "./components/Header/Header.jsx";
import { Main } from "./components/Main/Main.jsx";
import { useEffect, useState } from "react";
import { api } from "./services/api.js";



function App() {

  const [data, setData] = useState([])
  const [filtredData, setFiltredData] = useState([])

  useEffect( () =>{

    async function SearchInApi(){

        try{

            const response = await api.get("products")
            setData(response.data)

        }catch (error){

        }
    }

    SearchInApi()

}, [])

  return (
    <>
      <Header data={data} setData={setData} setFiltredData={setFiltredData}/>
      <Main filtredData={filtredData} setData={setData} />
    </>
  );
}

export default App;
