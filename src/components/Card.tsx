import { FC } from "react"
import { cardProps } from "../utils/interfaces";


const LoadingCard: FC = () => {
  return (
    <div className={`w-11/12 m-0 bg-white h-28 shadow-xl rounded-lg shadow-gray-400/50 mb-5 mx-auto flex`}>
      <div className="w-20 rounded-full m-4 bg-gray-400/25" />
      <div className="mx-5 flex flex-col justify-center">
        <div className="w-40 h-4 mb-2 bg-gray-400 rounded-full"></div>
        <div className="w-32 h-2 mb-2 bg-gray-400/50 rounded-full"></div>
        <div className="w-28 h-2 mb-2 bg-gray-400/25 rounded-full"></div>
      </div>
    </div>
  );
}

const Card: FC<cardProps> = (props) => {
  const { name, image, origin, species } = props
  return (
    <div className={`w-11/12 m-0 bg-white shadow-xl rounded-lg shadow-gray-400/50 mb-5 mx-auto flex`}>
      <img src={image} alt={name} className="w-1/4 rounded-full m-4" />
      <div className="mx-5 flex flex-col justify-center">
        <p className="text-lg">{name}</p>
        <p className="text-base">{species}</p>
        <p className="text-sm text-gray-400">{origin.name}</p>
      </div>
    </div>
  );
}
 
export {Card, LoadingCard};