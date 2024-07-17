import DashNav from "../../../components/DashNav";
import addMoneyImg from './Add money.svg';
import cashOutImg from './Cash out.svg';
import sendMoneyImg from './send money.svg';
import historyImg from './History.svg';
import balanceImg from './Balance.svg';
import Icon from "../../../components/Icon";
const UserDashboard = () => {
    return (
        <div>
            <DashNav />
            <h2 className="text-[#6E6E6E] text-lg font-semibold my-4">Services</h2>

            <div className='grid grid-cols-3 gap-4'>
                <Icon goingTo={'/dashboard/sendMoney'} img={sendMoneyImg} title={'Send Money'} />
                <Icon goingTo={'/dashboard/cashOut'} img={cashOutImg} title={'Cash Out'} />
                <Icon goingTo={'/dashboard/cashIn'} img={addMoneyImg} title={'Cash In'} />
                <Icon goingTo={'/dashboard/balance'} img={balanceImg} title={'Balance'} />
                <Icon goingTo={'/dashboard/history'} img={historyImg} title={'History'} />
            </div>
        </div>
    );
};

export default UserDashboard;