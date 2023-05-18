import { FC } from "react"
import useStorage from "../utils/useLocalStorage"
import { Navigate } from 'react-router-dom'

const PrivateRoute: FC<any> = ({children}) => {
  const [accessToken] = useStorage('accessToken');

  return accessToken ? children : <Navigate to='/' />;
}
 
export default PrivateRoute;