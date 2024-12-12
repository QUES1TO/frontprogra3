import React, { useState, useEffect } from "react";
import { Sidebar, Menu, MenuItem, sidebarClasses } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import StoreIcon from '@mui/icons-material/Store';
import LogoutIcon from '@mui/icons-material/Logout'; 
import { Box, Button, AppBar, Toolbar } from '@mui/material';

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

    return (
        <>
            {isSidebarVisible && ( 
                <div >
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
                                    <MenuItem icon={<AccountCircleIcon />} onClick={() => navigate("/home")} className="sidebar-menu-item">
                                        Usuarios
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
                </div>
            )}
        </>
    );
};

export default SideBarComponent;
