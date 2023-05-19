import { FC, useEffect,useContext, useState } from 'react'
import { UserContext } from '../utils/context'
import { cardProps, infoType } from '../utils/interfaces'
import {Card, LoadingCard} from './Card'
import rickandmorty from './../assets/rickandmorty.jpg'
import { Link } from 'react-router-dom'
import { baseApi } from '../utils/utils'

const Dashboard:FC = () => {
  const {username} = useContext(UserContext)
  const [characters, setCharacters] = useState<cardProps[]>([])
  const [info, setInfo] = useState<infoType>()
  const [loading, setLoading] = useState<boolean>(true)

  const fetchData = async (page: string) => {
    if(page) {
      setLoading(true);
      const response = await fetch(page)
      const data = await response.json()
      setInfo(data.info)
      setCharacters((prev) => [...prev, ...data.results])
      setLoading(false)
    }
  }

  const handleScroll = (e: React.UIEvent<HTMLElement>) => {
    console.log(e.currentTarget.scrollHeight, e.currentTarget.offsetHeight, e.currentTarget.scrollTop)
    if (e.currentTarget.scrollHeight <= (e.currentTarget.offsetHeight + Math.ceil(e.currentTarget.scrollTop))){
      fetchData(info?.next ? info.next : '')
    } 
  }

  const handleLogOut = () => {
    localStorage.removeItem('accessToken')
  }

  useEffect(() => {
    fetchData(`${baseApi}/character`)
  },[])

  return (
    <div className='w-full h-screen m-0 overflow-hidden'>
      <nav className='w-full flex justify-end bg-gray-900 py-8 z-50 fixed left-0 top-0'>
        <p className='text-white text-xl font-bold mr-10'>Hello {username}!</p>
        <Link className='text-white text-xl mr-10' to='/' onClick={handleLogOut}>log out</Link>
      </nav>
      <div className='w-full h-full flex m-0'>
        <aside className='hidden lg:block w-96 bg-slate-300/25 shadow-xl shadow-gray-500 h-screen fixed left-0 top-0 flex z-0'>
          <img className='w-10/12 rounded-xl m-44 mx-auto' src={rickandmorty} alt="" />
        </aside>
        <main className='lg:ml-96 w-full h-full overflow-auto' onScroll={handleScroll} >
            {
              characters.map((character) => (
                <Link to={`/character/${character.id}`}>
                  <Card key={`${character.name}-${character.id}`} {...character}/>
                </Link>
              ))
            }
            {loading && 
              <>
                <LoadingCard />
                <LoadingCard />
              </>
            }
        </main>
        <div className='hidden lg:block lg:w-1/3'>hi</div>
      </div>
    </div>
  );
}
 
export default Dashboard;