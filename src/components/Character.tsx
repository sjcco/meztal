import { FC, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { baseApi } from '../utils/utils';
import { cardProps } from '../utils/interfaces';

const Character:FC = () => {
  const params = useParams()
  const [character, setCharacter] = useState<cardProps>()

  const fetchData = async (page: string) => {
    if(page) {
      const response = await fetch(page)
      const data = await response.json()
      setCharacter(data)
    }
  }

  useEffect(() => {
    fetchData(`${baseApi}/character/${params.id}`)
  }, []);

  return (
    <div className='w-screen h-screen bg-gradient-to-r from-emerald-500 from-20% via-sky-500 via-60% to-indigo-500 to-90% flex items-center'>
      <div className='w-5/6 lg:w-2/3 h-3/4 lg:h-2/3 bg-white rounded-3xl mx-auto flex flex-col'>
        <Link className='text-blue-700 m-5 hover:underline ' to='/dashboard'>
          {'< back'}
        </Link>
        <div className='w-full flex flex-col lg:flex-row lg:mt-12 lg:mx-auto lg:w-10/12'>
          <img className='rounded-3xl mx-auto mb-5' src={character?.image} alt={character?.name} />
          <div className='w-4/6 mx-auto lg:w-3/6'>
            <ul className='list-none text-center border-b-2 border-gray-400/75 pb-5'>
              <li>{character?.name}</li>
              <li>{character?.species}</li>
              <li>{character?.origin.name}</li>
            </ul>
            <ul className='list-none text-center border-b-2 border-gray-400/75 py-5'>
              <li>status: {character?.status}</li>
              <li>gender: {character?.gender}</li>
              <li>location: {character?.location.name}</li>
            </ul>
            <ul className='list-none text-center pt-5'>
              <li>debut: episode {character?.episode[0].split('/').slice(-1)}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default Character;