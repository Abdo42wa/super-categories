
import React,{useState} from 'react'
import {Form, Button} from 'react-bootstrap'
import { auth, googleProvider } from '../firebase/firebase'
import {useDispatch} from 'react-redux'
import {setUser} from '../redux/actions/UserActions'


const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch();


    const handleLogin = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email,password);
    } 
     const handelLoginWithGoogle = (e) => {
        e.preventDefault();
        auth.signInWithPopup(googleProvider).then(async result => {
            const {user} = result
                dispatch(setUser({
                    email: user.email,
                    displayName: user.displayName,
                    id: user.uid
                }))
        })
    }
    return (
        <div>
           
            <Form>
        <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address / {email}</Form.Label>
            <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <Form.Text className="text-muted">
            We'll never share your email with anyone else.
            </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </Form.Group>
        <Button variant="primary" onClick={handleLogin}>Login</Button>
        <Button variant="danger" onClick={handelLoginWithGoogle}>Login With google</Button>
        </Form>
        </div>
    )
}

export default Login