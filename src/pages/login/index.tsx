import Button from '@mui/material/Button';
import appImage from '../../assets/res/login.svg';
import googleImage from '../../assets/google.png';
import fbImage from '../../assets/facebook.png';
import { COLORS } from '../../utils/colors';
import { AtSignIcon, LockIcon } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { toast } from 'react-toastify';
import EcoInput from '../../components/input';
import { loginUser } from './login.actions';
import { useUserStore } from '../../store/user.store';


export default function LoginPage() {
    const navigate = useNavigate();
    const { saveUser } = useUserStore();
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })
    const handleForgotPasssword = () => {
        if (!formData.email) {
            toast('Please enter email!')
        } else {
            toast('Check your email for login link!')
        }
    }

    const handleLogin = () => {
        const { email, password } = formData;
        if (!email || !password) {
            toast('Both details are required');
            return;
        }
        loginUser(email, password, (user: any) => {
            saveUser(user)
            navigate('/profile')
        })
    }

    return <div className="flex flex-col items-center min-h-[400px] p-4">
            <img src={appImage} width={200} height={200} />
            <h2 className='text-3xl font-semibold'>Login</h2>
            <form onSubmit={(e) => {
                e.preventDefault()
                handleLogin();
            }} className='w-full'>
                <EcoInput
                    type="email"
                    value={formData.email}
                    placeholder='Email Address'
                    leftIcon={<AtSignIcon color='black' />}
                    handleChange={(val) => setFormData({ ...formData, email: val })}
                    required={true}
                />
                <EcoInput
                    type="password"
                    value={formData.password}
                    placeholder='Password'
                    leftIcon={<LockIcon color='black' />}
                    handleChange={(val) => setFormData({ ...formData, password: val })}
                    required={true}
                />

                <div className='flex justify-end mb-3'>
                    <h4 onClick={() => handleForgotPasssword()} className={`cursor-pointer font-semibold text-lg text-green-500`}>Forgot your password?</h4>
                </div>

                <Button type='submit' color='success' style={{
                    padding: '10px',
                    borderRadius: '20px',
                    backgroundColor: COLORS.primary
                }} variant="contained" className='w-full' > Login</Button>
            </form>


            <h4 className={`font-semibold text-lg text-black text-center mt-4`}>or login with</h4>
            <div className='flex items-center justify-around my-3'>
                <div className='p-3 border-[2px] rounded-lg px-5 mx-2 hover:bg-green-200 transition-all cursor-pointer border-green-500'>
                    <img src={googleImage} width={30} height={30} />
                </div>
                <div className='p-3 border-[2px] rounded-lg px-5 mx-2 hover:bg-green-200 transition-all cursor-pointer border-green-500'>
                    <img src={fbImage} width={30} height={30} />
                </div>
            </div>
            <Link to={'/signup'}>
                <div className='flex justify-end mb-3 cursor-pointer'>
                    <h4 className={`font-semibold text-lg text-green-500`}>New to EcoEcho? Register Now</h4>
                </div>
            </Link>
    </div>
}