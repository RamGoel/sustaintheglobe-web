import { AtSignIcon, CakeIcon, LockIcon, PhoneCallIcon, User2Icon } from "lucide-react";

export const config = [
    {
        type: 'text',
        placeholder: 'Display Name',
        icon: <User2Icon color='black' className="my-2" />
    },
    {
        type: 'tel',
        placeholder: 'Phone Number',
        icon: <PhoneCallIcon color='black' className="my-2" />
    },
    {
        type: 'date',
        placeholder: 'Date of Birth',
        icon: <CakeIcon color='black' className="my-2" />
    },
    {
        type: 'email',
        placeholder: 'Email Address',
        icon: <AtSignIcon color='black' className="my-2" />
    },
    {
        type: 'password',
        placeholder: 'Password',
        icon: <LockIcon color='black' className="my-2" />
    }
];
