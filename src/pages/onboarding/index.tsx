import { ArrowRight, MapPinned, PinIcon, UserCircle2Icon, UserRound, VenetianMask } from 'lucide-react'
import profileImage from '../../assets/res/ic_default_profile.svg'
import editImage from '../../assets/res/ic_edit.svg'
import manImage from '../../assets/res/ic_male.svg'
import womenImage from '../../assets/res/ic_female.svg'
import otherImage from '../../assets/res/ic_other.svg'
import EcoInput from '../../components/input'
import { useState } from 'react'
import TextField from '@mui/material/TextField'
import { Link } from 'react-router-dom'


const OnboardingPage = () => {
    const [formData, setFormData] = useState({
        username: '',
        about: '',
        gender: '',
        location: ''
    })
    return (
        <div className='flex items-center flex-col justify-center my-auto h-screen '>
            <div className="flex flex-col items-center min-h-[400px] w-full md:w-1/3 p-4">
                <div className='relative p-5'>
                    <img src={profileImage} width={100} height={100} />
                    <img src={editImage} className=' absolute bottom-4 -right-1' width={60} height={60} />
                </div>
                <h1 className='text-3xl font-bold text-purple-800'>About You</h1>

                <EcoInput
                    placeholder='Username'
                    type='text'
                    leftIcon={<UserCircle2Icon color='black' />}
                    required={true}
                    value={formData.username}
                    handleChange={(val) => setFormData({ ...formData, username: val })}
                />

                <div className='p-4 bg-white rounded-lg border-2 w-10/12 shadow-lg mx-auto'>
                    <div className='flex items-center justify-center'>
                        <UserRound className='mr-2' />
                        <h4 className='text-lg'> Tell us about yourself</h4>
                    </div>
                    <TextField
                        type={'text'}
                        required={true}
                        placeholder={'I would like to help by....'}
                        style={{
                            padding: '10px',
                            width: '100%',
                            margin: '10px auto'
                        }}
                        onChange={(ev) => setFormData({ ...formData, about: ev.target.value })}
                        variant="standard"
                    />
                </div>

                <div className='p-4 bg-white mt-5 rounded-lg border-2 w-10/12 shadow-lg mx-auto'>
                    <div className='flex items-center justify-center'>
                        <VenetianMask className='mr-2' />
                        <h4 className='text-lg'> Gender</h4>
                    </div>
                    <div className='flex items-center justify-around my-3'>
                        <div onClick={() => {
                            setFormData({ ...formData, gender: 'male' })
                        }} className={` border-2 flex items-center justify-center border-gray-500 rounded-xl w-[80px] h-[80px] cursor-pointer ${formData.gender === 'male' ? 'bg-green-200' : 'bg-white'}`}>
                            <img className='w-3/4' src={manImage} />
                        </div>
                        <div onClick={() => {
                            setFormData({ ...formData, gender: 'female' })
                        }} className={` border-2 flex items-center justify-center border-gray-500 rounded-xl w-[80px] h-[80px] cursor-pointer ${formData.gender === 'female' ? 'bg-green-200' : 'bg-white'}`}>
                            <img className='w-3/4' src={womenImage} />
                        </div>
                        <div onClick={() => {
                            setFormData({ ...formData, gender: 'other' })
                        }} className={` border-2 flex items-center justify-center border-gray-500 rounded-xl w-[80px] h-[80px] cursor-pointer ${formData.gender === 'other' ? 'bg-green-200' : 'bg-white'}`}>
                            <img className='w-3/4' src={otherImage} />
                        </div>
                    </div>
                </div>

                <EcoInput
                    placeholder='Tap to get location'
                    type='text'
                    leftIcon={<MapPinned color='black' />}
                    required={true}
                    value={formData.username}
                    handleChange={(val) => setFormData({ ...formData, username: val })}
                />

                <div className='flex items-center justify-end w-10/12 py-4'>
                    <h2 className='text-xl font-semibold text-left mr-2  text-purple-600'>Continue</h2>
                    <button type='submit' className='w-[100] h-[100] bg-green-500 p-4 rounded-full' >
                        <ArrowRight color='white' />
                    </button>
                </div>

                <Link to={'/'}>
                    <div className='flex justify-end my-4 pb-6'>
                        <h4 className={`font-semibold text-center text-lg text-purple-600`}>
                            Not your profile?<br />
                            Sign out
                        </h4>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default OnboardingPage