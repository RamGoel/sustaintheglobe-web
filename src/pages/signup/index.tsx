/* eslint-disable @typescript-eslint/no-explicit-any */
import appImage from '../../assets/res/login.svg';
import googleImage from '../../assets/google.png';
import fbImage from '../../assets/facebook.png';
import { ArrowRight } from 'lucide-react';
import { config } from './config';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import EcoInput from '../../components/input';
import { useState } from 'react';
import { createUser } from './signup.actions';



export default function SignupPage() {
    const [formData, setFormData] = useState<any>({})
    const navigate = useNavigate();
    const handleChange = (key: string, value: string | number) => {
        setFormData({ ...formData, [key]: value })
    }

    const handleSubmit = () => {
        createUser(formData, () => {
            navigate('/onboarding')
        })
    }
    return <div className='flex items-center flex-col justify-center my-auto h-screen '>
        <img src={appImage} width={200} height={200} />
        <div className="flex flex-col items-center min-h-[400px] w-full md:w-1/3 p-4">
            <h2 className='text-3xl font-semibold text-left w-11/12 text-green-500'>Register</h2>
            <div className='flex items-center justify-around my-3'>
                <div onClick={() => toast('Coming soon!')} className='p-3 border-[2px] rounded-lg px-7 mx-2 hover:bg-green-200 transition-all cursor-pointer border-green-500'>
                    <img src={googleImage} width={30} height={30} />
                </div>
                <div onClick={() => toast('Coming soon!')} className='p-3 border-[2px] rounded-lg px-7 mx-2 hover:bg-green-200 transition-all cursor-pointer border-green-500'>
                    <img src={fbImage} width={30} height={30} />
                </div>
            </div>
            <h4 className={`font-semibold text-lg text-black text-center mt-4`}>or register with email</h4>

            <form onSubmit={(e) => {
                e.preventDefault();
                handleSubmit()
            }} className='w-full mt-4 flex-1 items-between justify-between'>
                {
                    config.map((item: any) => {
                        return <EcoInput
                            type={item.type}
                            required={true}
                            value={formData[item.dataKey]}
                            placeholder={item.placeholder}
                            leftIcon={item.icon}
                            handleChange={(val) => {
                                handleChange(item.dataKey, val)
                            }}
                        />
                    })
                }

                <div className='flex items-center justify-end w-full'>
                    <h2 className='text-xl font-semibold text-left mr-2  text-green-500'>Register</h2>
                    <button type='submit' className='w-[100] h-[100] bg-green-500 p-4 rounded-full' >
                        <ArrowRight color='white' />
                    </button>
                </div>

            </form>



            <Link to={'/'}>
                <div className='flex justify-end my-4 pb-6'>
                    <h4 className={`font-semibold text-center text-lg text-green-500`}>
                        Have an account already?<br />
                        Login Here
                    </h4>
                </div>
            </Link>
        </div>
    </div >;
}