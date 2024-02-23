/* eslint-disable @typescript-eslint/no-explicit-any */
export type EcoInputProps = {
    placeholder?: string,
    leftIcon?: any,
    required?: boolean,
    type: string,
    value: any,
    handleChange: (val: string) => void,
    extraStyle?: string
}
const EcoInput = ({
    placeholder,
    leftIcon,
    required,
    type,
    value,
    handleChange,
    extraStyle
}: EcoInputProps) => {

    return (
        <div className={"flex items-center justify-start border-[.2px] shadow-lg px-4 rounded-xl my-4 w-10/12 mx-auto " + extraStyle}>
            {leftIcon ? leftIcon : null}
            <input
                placeholder={placeholder}
                value={value}
                type={type ?? 'text'}
                required={required}
                className="p-4 mt-0 w-full outline-none text-lg"
                onChange={(ev) => handleChange(ev.target.value)}
            />
        </div>
    )
}

export default EcoInput