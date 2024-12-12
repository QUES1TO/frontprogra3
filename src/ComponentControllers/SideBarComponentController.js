import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Asegúrate de importar useNavigate para redireccionar
import SideBarComponent from "../Components/SideBarComponent";

const SideBarComponentController = ({ authenticated }) => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate(); // Hook para redirección

  // Cambia el estado de colapsado de la barra lateral
  const changeCollapse = () => {
    setCollapsed(!collapsed);
  };

  // Manejo del cierre de sesión
  const handleLogOut = () => {
    localStorage.removeItem("token"); // Elimina el token del almacenamiento local
    navigate("/login", { replace: true }); // Redirige a la página de inicio de sesión
  };

  return (
    <SideBarComponent
      changeCollapse={changeCollapse}
      collapsed={collapsed}
      authenticated={authenticated}
      handleLogOut={handleLogOut}
    />
  );
};

export default SideBarComponentController;
