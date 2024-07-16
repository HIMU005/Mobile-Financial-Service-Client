import { useForm } from "react-hook-form"
import telephoneImage from './telephone 1.svg';
import emailImage from './Email.svg';
import padLock from './padlock .svg'

const RegisterForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const onSubmit = (data) => console.log(data)
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='flex gap-4'>
                    <img src={telephoneImage} alt="" />
                    <input
                        type='number'
                        {...register('phonoNumber', { required: true })}
                        className="input input-bordered border-0 border-b-2 input-primary w-full rounded-none focus:outline-none border-[#EC1C24] " />
                </div>
                <div className='flex gap-4'>
                    <img src={emailImage} alt="" />
                    <input
                        type="email"
                        {...register('email', { required: true })}
                        className="input input-bordered border-0 border-b-2 input-primary w-full rounded-none focus:outline-none border-[#EC1C24] " />
                </div>
                <div className='flex gap-4'>
                    <img src={padLock} alt="" />
                    <input
                        type="password"
                        {...register('password', {
                            required: 'Password is required',
                            pattern: {
                                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,15}$/,
                                message:
                                    'Password must be 6-15 characters long, include one uppercase letter, one lowercase letter, one number, and one special character',
                            },
                        }, { required: true })}
                        className="input input-bordered border-0 border-b-2 input-primary w-full rounded-none focus:outline-none border-[#EC1C24] " />
                </div>
                {errors.password && <h1 className="text-red-500 text-xs font-medium">This field is required. password must have one upper case one lower case one number one special character length must between 6 to 15</h1>}
                <input className='btn bg-[#EC1C24] text-white' type="submit" value="Register" />
            </form>
        </div>
    );
};

export default RegisterForm;