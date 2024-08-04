import { useQuery } from "@tanstack/react-query";
import { TbCurrencyTaka } from "react-icons/tb";
import { axiosSecure } from "../../../hooks/useAxiosSecure";
import useRole from "../../../hooks/useRole";
import { useForm } from "react-hook-form";

const SendMoney = () => {
    const { data: users = [], isPending, error
    } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const { data } = await axiosSecure.get('/users');
            return data;
        }
    })
    const user = useRole();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        console.log(data);
    }
    return (
        <div>
            <h2 className="text-[#6D6D6D] text-xs font-medium">Recipient</h2>

            <form onSubmit={handleSubmit(onSubmit)}>
                <select className="border-2 border-red-400 px-5 py-3 w-fit mx-auto" id="role"  {...register('receiver', { required: true })}
                >
                    <option value="">Select recipient</option>
                    {
                        users.map((user, idx) => <option key={idx} value={user?.email}>{user.phone}</option>)
                    }
                </select>

                <div className="flex items-center gap-5 w-fit mx-auto">
                    <span><TbCurrencyTaka className="text-red-500" /></span> <input className='border-0 border-b-2 border-red-700' type="text" {...register('amount', { required: true })}
                    />
                </div>
                <h3 className="mx-auto text-black text-sm font-medium mt-4 w-fit">Available balance: <span className="font-bold">{user[0]?.balance} Tk.</span></h3>
                <input type="submit" value='Send' className="btn rounded-3xl w-[160px] md:w-[200px] lg:w-[240px] btn-outline border-[#EC1C24] bg-[#EC1C24]" />
            </form>

        </div>
    );
};

export default SendMoney;