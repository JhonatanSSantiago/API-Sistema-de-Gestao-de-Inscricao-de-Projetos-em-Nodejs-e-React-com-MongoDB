import { Link, useNavigate } from 'react-router-dom';
import  Header  from '../../components/header';


const Home = () => {

    const navigate = useNavigate();

    const handleClickSignIn = () => {
        navigate('/login')
    }

    return (<>
        <Header/>
        
    </>)
}

export { Home }