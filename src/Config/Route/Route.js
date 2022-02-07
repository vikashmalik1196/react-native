import  ONBOARDING from '../Constant/Constant'
import { Signup ,Signin,Profile} from '../../Container';


const Route = [
    {
        name: ONBOARDING.SIGNUP,
        component: Signup,
    },
    {
        name: ONBOARDING.PROFILE,
        component: Profile,
      },
]
export default Route;