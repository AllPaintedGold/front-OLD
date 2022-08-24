import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';



const NavBar = () => {

    return(
        <div className="text-xl border-b border-gray-600 shadow-lg flex bg-[#23262c] bg-opacity-75
        fixed w-full text-gray-400 backdrop-blur-sm justify-center items-center">
            <a href="/" className=' hover:text-gray-200 '>
                Home
            </a>
            <a href="/CustomerAdd">
            <button className='ml-5 hover:text-gray-200' onClick={() => console.log("Add")}>
                <FontAwesomeIcon icon={faUserPlus} ></FontAwesomeIcon>
                
            </button>
            </a>
            
            
            
        </div>
        
    )
}

export default NavBar;