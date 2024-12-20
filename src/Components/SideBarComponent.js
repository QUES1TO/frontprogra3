import React, { useState, useEffect } from "react";
import { Sidebar, Menu, MenuItem, sidebarClasses } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import StoreIcon from '@mui/icons-material/Store';
import LogoutIcon from '@mui/icons-material/Logout'; 
import { Box, Button, AppBar, Toolbar } from '@mui/material';
import { ArrowForwardIos, ArrowBackIos } from '@mui/icons-material'; // Importar íconos de flechas

const SideBarComponent = ({ changeCollapse, collapsed, authenticated, handleLogOut }) => {
    const [isSidebarVisible, setIsSidebarVisible] = useState(authenticated); 
    const navigate = useNavigate();

    useEffect(() => {
        setIsSidebarVisible(authenticated); 
    }, [authenticated]);

    const handleLogoutAndRedirect = () => {
        handleLogOut(); 
        setIsSidebarVisible(false); 
        navigate("/login"); 
    };

    const handleSidebarToggle = () => {
        changeCollapse(!collapsed); // Cambia el estado de colapso
    };

    return (
        <>
            {isSidebarVisible && ( 
                <div style={{ position: 'relative' }}>
                    {/* Sidebar */}
                    <div style={{ position: 'fixed', bottom: 0, left: 0, width: '100%' }}>
                        <div style={{ width: collapsed ? '80px' : '250px', backgroundColor: '', color: '#01aaff' }}>
                            <Sidebar
                                collapsed={collapsed}
                                rootStyles={{
                                    height: '100%',
                                    [`.${sidebarClasses.container}`]: {
                                        overflowX: 'visible',
                                        overflowY: 'visible',
                                        backgroundColor: 'inherit',
                                    },
                                }}
                            >
                                <Menu>
                                    <MenuItem icon={<HomeIcon />} onClick={() => navigate("/perfil")} className="sidebar-menu-item">
                                        Información
                                    </MenuItem>
                                    <MenuItem icon={<AccountCircleIcon />} onClick={() => navigate("/guardar")} className="sidebar-menu-item">
                                        vender
                                    </MenuItem>
                                    <MenuItem icon={<StoreIcon />} onClick={() => navigate("/home")} className="sidebar-menu-item">
                                        Productos
                                    </MenuItem>
                                    <MenuItem icon={<LogoutIcon />} onClick={handleLogoutAndRedirect} className="sidebar-menu-item">
                                        Cerrar sesión
                                    </MenuItem>
                                </Menu>
                            </Sidebar>
                        </div>
                    </div>

                    {/* Botón para colapsar o expandir el Sidebar */}
                    <div 
                        style={{
                            position: 'absolute',
                            top: '520px',
                            left: collapsed ? '20px' : '20px', // Posiciona la flecha según el estado
                            transform: 'translateY(-50%)',
                            cursor: 'pointer',
                            zIndex: 1000,
                            backgroundColor: 'black',
                            borderRadius: '50%',
                            color: 'white',
                            padding: '5px',
                            boxShadow: '0 4px 8px rgb(13, 158, 255)',
                        }}
                        onClick={handleSidebarToggle}
                    >
                        {collapsed ? <ArrowForwardIos /> : <ArrowBackIos />} {/* Cambia el ícono según el estado */}
                    </div>
                </div>
            )}
        </>
    );
};

export default SideBarComponent;
