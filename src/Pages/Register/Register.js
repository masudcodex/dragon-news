import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';

const Register = () => {
    useTitle('Register');
    const [error, setError] = useState('');
    const [accepted, setAccepted] = useState(false);
    const {createUser, updateUserProfile, verifyEmail} = useContext(AuthContext);

    const handleSubmit = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password)
        .then(result=>{
            const user = result.user;
            console.log(user);
            setError('');
            handleUpdateUserProfile(name, photo);
            form.reset();
            handleEmailVerification();
            toast.success('Please Check your email for verification!');
        })
        .catch(error=>setError(error.message))
    }

    const handleCheck = event => {
        setAccepted(event.target.checked);
    }

    const handleUpdateUserProfile = (name, photo) => {
        const profile = {displayName: name, photoURL: photo};
        updateUserProfile(profile)
        .then(()=>{})
        .catch(error=>console.error(error))
    }
    
    const handleEmailVerification = () => {
        verifyEmail()
        .then(()=>{})
        .catch(error=>console.error(error))
    }
    
    return (
        <div className='container w-75'>
            <h2 className='mb-4'>Register Here</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control name='name' type="text" placeholder="Enter your name" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control name="photoURL" type="text" placeholder="Enter photo url" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" required/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" required/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Check onClick={handleCheck} type="checkbox" label={<Link to='/terms-and-conditions'>Terms and Conditions</Link>} />
                </Form.Group>
                <Button variant="primary" type="submit" disabled={!accepted}>
                    Register
                </Button>
                <Form.Text className="text-danger">
                    {error}
                </Form.Text>
            </Form>
        </div>
    );
};

export default Register;