import React, {FC, useContext, useRef, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import security from './../assets/security.png'
import { UserContext } from '../utils/context'

const LoginPage:FC = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState('');
  const {setUsername} = useContext(UserContext);
  const handleLogin = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
    if(user){
      setUsername(user)
      localStorage.setItem('accessToken', JSON.stringify(user))
      navigate('/dashboard')
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser(e.target.value)
  }

  return (
    <div className='w-screen h-screen bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% flex items-center'>
      <div className='w-5/6 lg:w-2/3 h-1/4 lg:h-2/3 bg-white rounded-3xl mx-auto flex'>
        <div className='w-full lg:w-1/2 flex flex-col my-auto mx-5 text-center'>
          <h1 className='font-mono text-3xl font-bold'>Login</h1>
          <input
            className='border-b-2 focus:outline-none focus:border-slate-400 my-3 py-2 text-center'
            id="username"
            type="text"
            placeholder='Username'
            onChange={handleInputChange}
            />
          <button className='rounded-full my-3 py-2 bg-cyan-500/75 text-white' onClick={handleLogin}>Login</button>
        </div>
        <img src={security} className='hidden lg:block lg:w-1/2 rounded-r-3xl'></img>
      </div>
    </div>
  );
}
 
export default LoginPage;