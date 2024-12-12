import React from "react";
import { Sidebar, Menu, MenuItem, sidebarClasses } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";
import logo from '../img/logo.png';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import StoreIcon from '@mui/icons-material/Store';
import { Box, Button, AppBar, Toolbar } from '@mui/material';
import { Link } from 'react-router-dom';

const SideBarComponent = ({ changeCollapse, collapsed, authenticated }) => {
    const navigate = useNavigate();

    return (
        <>
            {authenticated && (
                <div>
                  

                    {/* Sidebar */}
                    <div style={{ position: 'fixed', bottom: 0, left: 0, width: '100%' }}>
                        <div style={{ width: collapsed ? '80px' : '250px', backgroundColor: '',color: '#01aaff'  }}>
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
