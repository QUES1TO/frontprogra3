import React from "react";
import { FormHelperText, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import AirplanemodeInactiveIcon from '@mui/icons-material/AirplanemodeInactive';
import FormControl from '@mui/material/FormControl';
const LoginComponent = ({handleEmailChange,
    handlePasswordChange,
    authenticate,
    emailErrorState,
    emailErrorMessage
    }) => {
        const errorEmail = () => {
            return (
                emailErrorState && <FormHelperText error>
                    {emailErrorMessage}
                </FormHelperText>
            );
        }
    return (
        <>
            <div className="card-container">
                <Card>
                    <CardContent>
                        <h1>Login</h1>
                        <form>
                            <FormControl className="login-form-control">
                                <TextField  
                                    className="login-input"                                   
                                    id="outlined-basic" 
                                    label="Email" 
                                    variant="outlined" 
                                    placeholder="Introduzca su Email" 
                                    error={emailErrorState} 
                                    onChange={handleEmailChange}/>
                                    {errorEmail()} 
                                <TextField  
                                    className="login-input"  
                                    type="password"                                  
                                    id="outlined-basic" 
                                    label="Password" 
                                    variant="outlined" 
                                    placeholder="Introduzca su Contraseña" 
                                    error={false} 
                                    onChange={handlePasswordChange}/>
                                <Button onClick={authenticate} variant="outlined" startIcon={<AirplanemodeInactiveIcon />}>
                                    Ingresar
                                </Button>
                            </FormControl>
                        </form>
                    </CardContent>
                    
                </Card>
            </div>
        </>
    );
}
export default LoginComponent;