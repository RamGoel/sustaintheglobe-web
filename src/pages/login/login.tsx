import Button from '@mui/material/Button';
import appImage from '../../assets/res/login.svg';
import InputAdornment from '@mui/material/InputAdornment';
import { TextField } from '@mui/material';
import { COLORS } from '../../utils/colors';
import { AtSign, LockIcon } from 'lucide-react';


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
            <div>
                <div>

                </div>
            </div>
        </div>
    </div >;
}