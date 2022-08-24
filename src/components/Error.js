import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSadCry } from '@fortawesome/free-solid-svg-icons';


const Error = () => {
    return (
        <div class="text-red-400">
            <h1>CANT FIND THE PAGE</h1>
            <FontAwesomeIcon icon={faSadCry}></FontAwesomeIcon>
        </div>
    )
}

export default Error