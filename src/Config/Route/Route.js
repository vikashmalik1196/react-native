import ONBOARDING from '../Constant/Constant'
import { Signup, Profile, Register ,Otp} from '../../Container';


const Route = [
    {
        name: ONBOARDING.SIGNUP,
        component: Signup,
    },
    {
        name: ONBOARDING.PROFILE,
        component: Profile,
    },
    // {
    //     name: ONBOARDING.REGISTER,
    //     component: Register,
    // },
    {
        name: ONBOARDING.OTP,
        component: Otp,
    },
]
export default Route;