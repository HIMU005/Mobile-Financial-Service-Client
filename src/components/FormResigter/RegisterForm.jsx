import { useForm } from "react-hook-form"
import telephoneImage from './telephone 1.svg';
import emailImage from './Email.svg';
import padLock from './padlock .svg'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import useAxiosCommon from "../../hooks/useAxiosCommon";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
const RegisterForm = () => {
    const axiosCommon = useAxiosCommon();
    const navigate = useNavigate();
    const phoneInputRef = useRef(null); // Create a ref for PhoneInput

    const {
        register,
        handleSubmit,
        reset,
        setValue,
        formState: { errors },
    } = useForm({
        defaultValues: {
            phone: '', // Initialize the phone field with an empty value
        }
    })

    const onSubmit = async (data) => {
        const { email, password, phone, role } = data;
        const newUser = { email, phone, password, role };
        console.log(newUser);

        try {
            const emailUser = await axiosCommon.get(`/user/${email}`);
            const phoneUser = await axiosCommon.get(`/user/phone/${phone}`)

            if (emailUser || phoneUser) {
                toast.error('This user is in use. Please use different email of PhoneNumber')
                resetForm();
                return;
            }
            const { data } = await axiosCommon.post('/users', newUser)
            if (data.insertedId) {
                toast.success('Registration Successful (-_-)');
                resetForm();
                navigate('/login')
            }
            console.log('clicked');
        }
        catch (err) {
            console.log(err.message);
            toast.error(err.message);
        }
    }


    const resetForm = () => {
        reset();
        if (phoneInputRef.current) {
            phoneInputRef.current.setNumber(''); // Reset the PhoneInput field
        }
    };
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
                {errors.password && <h1 className="text-red-600 text-lg font-medium">This field is required. password must have one upper case one lower case one number one special character length must between 6 to 15</h1>}
                <div className="col-span-6 ">
                    <label htmlFor="Role" className="block text-sm font-medium text-gray-700">
                        Choose your role
                    </label>

                    <select className="border-2 border-red-400 px-5 py-3" {...register("role", { required: true })} id="role">
                        <option value="user">User</option>
                        <option value="agent">Agent</option>
                        <option value="admin">Admin</option>
                    </select>
                </div>
                <input className='btn bg-[#EC1C24] text-white' type="submit" value="Register" />
            </form>
        </div>
    );
};

export default RegisterForm;