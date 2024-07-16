import { useForm } from "react-hook-form"
import telephoneImage from './telephone 1.svg';
import emailImage from './Email.svg';
import padLock from './padlock .svg'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import useAxiosCommon from "../../hooks/useAxiosCommon";
import { toast } from "react-toastify";
const RegisterForm = () => {
    const axiosCommon = useAxiosCommon();
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm()
    const onSubmit = async (data) => {
        const { email, password, phone } = data;
        // console.log(email);
        // console.log(password);
        // console.log(phone);

        const newUser = { email, phone, password }
        try {
            const { data } = await axiosCommon.post('/users', newUser)
            if (data.insertedId) {
                toast.success('Registration Successful (-_-)')
            }
            console.log('clicked');
        }
        catch (err) {
            console.log(err);
            toast.error(err.message);
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='flex gap-4'>
                    <img src={telephoneImage} alt="" />
                    <PhoneInput
                        country={'bd'}
                        inputProps={{
                            name: 'phone',
                            required: true,
                        }}
                        onChange={(value) => setValue('phone', value)}
                    />
                    {/* <input
                        type='number'
                        {...register('phonoNumber', { required: true })}
                        className="input input-bordered border-0 border-b-2 input-primary w-full rounded-none focus:outline-none border-[#EC1C24] " /> */}
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
                            // pattern: {
                            //     value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,15}$/,
                            //     message:
                            //         'Password must be 6-15 characters long, include one uppercase letter, one lowercase letter, one number, and one special character',
                            // },
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