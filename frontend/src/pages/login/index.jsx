import { Link, useNavigate } from 'react-router-dom';
import  Header  from '../../components/header';

const Login = () => {

    const navigate = useNavigate();
    const handleClickFeed = () => {
        navigate('/feed')
    }
    const handleClickForm = () => {
        navigate('/form')
    }

    return (<>
        <Header/>

    </>)
}


export { Login }