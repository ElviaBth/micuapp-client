import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import MainButton from "../../components/mainButton/MainButton";
import Layout from "../../components/layout/Layout";
import VowelsContainer from "../../components/vowels/VowelsContainer";


function App() {
  return (
    
    <div className="App">
      <Layout >
{/*       <h1 className="mt-5">
      Home  */}
      <VowelsContainer/>
      <MainButton class='bt' text='Aprende todo el abecedario'/>
      <MainButton class='bt' text='¡Vamos a jugar memory!'/>
 {/*      </h1> */}
      </Layout>
    </div>
  );
}

export default App;
