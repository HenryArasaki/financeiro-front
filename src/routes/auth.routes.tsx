import {Routes,Route} from 'react-router-dom'
import SignUp from '../pages/SignUp'



export default function AuthRoutes(){
    return(<Routes>
        
        <Route path="/signup" element={<SignUp/>}/>
        {/* <Route path="*" element={<SignIn/>}/> */}

    </Routes>)
}