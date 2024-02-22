import Button from '@mui/material/Button';
import appImage from '../../assets/res/login.svg';
import googleImage from '../../assets/google.png';
import fbImage from '../../assets/facebook.png';
import InputAdornment from '@mui/material/InputAdornment';
import { TextField } from '@mui/material';
import { COLORS } from '../../utils/colors';
import { AtSign, LockIcon } from 'lucide-react';
import { Link } from 'react-router-dom';


export default function LoginPage() {
    return <div className='flex items-center flex-col justify-center my-auto h-screen '>
        <div className="flex flex-col items-center min-h-[400px] w-1/3 p-4">
            <img src={appImage} width={200} height={200} />
            <h2 className='text-3xl font-semibold'>Login</h2>
            <div className=' mt-4 flex-1 items-between justify-between'>
                <TextField
                    id="input-with-icon-textfield"
                    type="email"
                    placeholder='Email Address'
                    style={{
                        padding: '10px',
                        width: '100%',
                        margin: '10px auto'
                    }}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <AtSign color='black' />
                            </InputAdornment>
                        ),
                    }}
                    variant="standard"
                />
                <TextField
                    id="input-with-icon-textfield"
                    placeholder="Password"
                    type='password'
                    style={{
                        padding: '10px',
                        width: '100%',
                        margin: '10px auto'
                    }}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <LockIcon color='black' />
                            </InputAdornment>
                        ),
                    }}
                    variant="standard"
                />
                <div className='flex justify-end mb-3'>
                    <h4 className={`font-semibold text-lg text-green-500`}>Forgot your password?</h4>
                </div>
            </div>
            <Button color='success' style={{
                padding: '10px',
                borderRadius: '20px',
                backgroundColor: COLORS.primary
            }} variant="contained" className='w-11/12 py-2' > Login</Button>

            <h4 className={`font-semibold text-lg text-black text-center mt-4`}>or login with</h4>
            <div className='flex items-center justify-around my-3'>
                <div className='p-3 border-[3px] rounded-lg px-5 mx-2 hover:bg-green-200 transition-all cursor-pointer border-green-500'>
                    <img src={googleImage} width={30} height={30} />
                </div>
                <div className='p-3 border-[3px] rounded-lg px-5 mx-2 hover:bg-green-200 transition-all cursor-pointer border-green-500'>
                    <img src={fbImage} width={30} height={30} />
                </div>
            </div>
            <Link to={'/signup'}>
                <div className='flex justify-end mb-3 cursor-pointer'>
                    <h4 className={`font-semibold text-lg text-green-500`}>New to EcoEcho? Register Now</h4>
                </div>
            </Link>
        </div>
    </div >;
}