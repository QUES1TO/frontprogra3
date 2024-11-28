import React from "react";
import { Sidebar, Menu, MenuItem, sidebarClasses } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import HomeIcon from '@mui/icons-material/Home';
import AdUnitsIcon from '@mui/icons-material/AdUnits';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import StoreIcon from '@mui/icons-material/Store';  
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import InventoryIcon from '@mui/icons-material/Inventory'; // Importar ícono para inventario

const SideBarComponent = ({ changeCollapse, collapsed, authenticated }) => {
    const navigate = useNavigate();

    return (
        <>
            {authenticated && (
                <div className={`sidebar-container`} style={{ width: collapsed ? '80px' : '250px' }}>
                    <div className="sidebar-title">
                    
                    </div>
                    
                    <Sidebar
                        collapsed={collapsed}
                        rootStyles={{
                            height: 'inherit',
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
                            <MenuItem icon={<StoreIcon />} onClick={() => navigate("/produco")} className="sidebar-menu-item">
                                Productos
                            </MenuItem>
                           
                            
                        </Menu>
                    </Sidebar>
                </div>
            )}
        </>
    );
};

export default SideBarComponent;