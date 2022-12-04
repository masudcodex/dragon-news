import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub, FaFacebook, FaWhatsapp, FaTwitter, FaYoutube, FaLinkedin } from 'react-icons/fa';
import { ListGroup } from 'react-bootstrap';
import BrandCarousel from '../BrandCarousel/BrandCarousel';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';


const RightNav = () => {

    const {providerLogin} = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
        .then(result =>{
            const user = result.user;
            console.log(user);
        })
        .catch(error => console.error(error))
    }
    return (
        <div>
            <ButtonGroup vertical>
                <Button onClick={handleGoogleSignIn} className='mb-4' variant= "outline-primary"><FcGoogle className='me-2'/>Login with Google</Button>
                <Button variant = "outline-dark"><FaGithub className='me-2'/>Login with Github</Button>
            </ButtonGroup>
            <div className='mt-5'>
                <h5 className='mb-3'>Find us on</h5>
                <ListGroup>
                    <ListGroup.Item className='mb-3'><FaFacebook className='me-2' />Facebook</ListGroup.Item>
                    <ListGroup.Item className='mb-3'><FaTwitter className='me-2'/>Twitter</ListGroup.Item>
                    <ListGroup.Item className='mb-3'><FaWhatsapp className='me-2'/>Whatsapp</ListGroup.Item>
                    <ListGroup.Item className='mb-3'><FaLinkedin className='me-2'/>Linkedin</ListGroup.Item>
                    <ListGroup.Item className='mb-3'><FaYoutube className='me-2'/>Youtube</ListGroup.Item>
                </ListGroup>
            </div>
            <div>
                <BrandCarousel></BrandCarousel>
            </div>
        </div>
    );
};

export default RightNav;