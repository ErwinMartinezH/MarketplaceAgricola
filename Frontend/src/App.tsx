import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Login from "./Login";
import Principal from "./Principal";
import Newaccount from "./Newaccount";
import Chat from "./Chat";
import Guardados from "./Guardados";
import Cuenta from "./Cuenta";
import PaginaDeActualizacion from "./pagina_de_actualizacion";
import NuevaPublicacion from "./NuevaPublicacion";
import PublicacionDetalleModal from "./Publicaciondetallemodal";
import { BrowserRouter } from "react-router-dom";
//import Plantilla2 from './';


function App() {
  //const histori = useHistory
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index path="/" element={<Login/>} />
          <Route index path="Principal" element={<Principal />} />
          <Route index path="Newaccount" element={<Newaccount/>} />
          <Route index path="Chat" element={<Chat/>} />
          <Route index path="Guardados" element={<Guardados/>}/>
          <Route index path="Cuenta" element={<Cuenta/>}/>
          <Route index path="Actualizacion" element={<PaginaDeActualizacion/>}/>
          <Route index path="Nueva publicacion" element={<NuevaPublicacion/>}/>
          <Route index path="/Publicacion" element={<PublicacionDetalleModal />}/>
          <Route index path="/Cuenta" element={<Cuenta/>}/>
          <Route index path="/Principal" element={<Principal/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
