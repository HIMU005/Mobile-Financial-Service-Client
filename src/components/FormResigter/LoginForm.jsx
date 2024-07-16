import { useNavigate } from "react-router-dom";
import useAxiosCommon from "../../hooks/useAxiosCommon";
import { useForm } from "react-hook-form";
import telephoneImage from './telephone 1.svg';
import emailImage from './Email.svg';
import padLock from './padlock .svg'
import { toast } from "react-toastify";
import useAuth from "../../hooks/useAuth";
const LoginForm = () => {
    const axiosCommon = useAxiosCommon();
    const navigate = useNavigate();
    const { user, setUser, loading, setLoading } = useAuth();
    console.log(user);
    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {
        console.log(data);
        const { email, password } = data;

        try {
            const emailUser = await axiosCommon.get(`/user/${email}`);
            const phoneUser = await axiosCommon.get(`/user/phone/${email}`);

            if (!emailUser.data && !phoneUser.data) {
                toast.error('No user with that email or phone number')
                reset();
                return;
            }
            const loggedUser = emailUser.data || phoneUser.data;
            if (loggedUser.password === password) {
                toast.success('Login successfully')
                setUser(loggedUser);
                reset();
                navigate('/dashboard');
            }
            else {
                toast.error('No user with that email or phone number')
                reset();
                return;
            }

        } catch (err) {
            toast.error(err.message);
        }
    }
    return (
        <div>
            here

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='flex gap-4'>
                    <img src={telephoneImage} alt="" /> <span className="text-xs font-semibold my-auto"> Or </span>
                    <img src={emailImage} alt="" />

                    <input
                        type="text"
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

                <input className='btn bg-[#EC1C24] text-white' type="submit" value="Login" />
            </form>
        </div>
    );
};

export default LoginForm;