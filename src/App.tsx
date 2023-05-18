import { FC, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import LoginPage from './components/Login'
import Dashboard from './components/Dashboard'
import PrivateRoute from './components/PrivateRoute'
import { UserContext } from './utils/context'
import useStorage from './utils/useLocalStorage'

const App: FC = () => {
  const [accessToken] = useStorage('accessToken')
  const [username, setUsername] = useState<string>(accessToken)
  
  return (
    <UserContext.Provider value={{username, setUsername}}>
      <Routes>
      <Route path='/' element={<LoginPage />}/>
      <Route path='/dashboard' element={
        <PrivateRoute>
          <Dashboard />
        </PrivateRoute>
      }/>
    </Routes>
    </UserContext.Provider>
    
  );
}
 
export default App;

