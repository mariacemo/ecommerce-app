
import { useParams } from "react-router-dom";
import collectionsData from "./../collectionsData"

function Collections() {

const { name } = useParams();
const collection = collectionsData[name];


if (!collection) {
    return <div className="flex justify-center ">Collection not found</div>;
  }

   return (
      <div className="px-36 py-20 flex gap-4">
          {collection.map(item => (
            
            <div key={item.id}> 
                <img src={item.imagePath} alt={item.description} className="custom-size"></img>
                <div className="flex flex-col items-center pt-4 text-sm">
                    <p className="inline-block border-b border-transparent hover:border-current hover:text-black focus: text-black">{item.name}</p>
                    <p>$ {item.price}</p>
                </div>
            </div>
           
          ))}
      </div>
   );
}

export default Collections;