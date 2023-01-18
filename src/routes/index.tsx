import AuthRoutes from './auth.routes'
import AppRoutes from './app.routes'

export default function Routes(){

    const user = false
        return(<>
         { user ? <AppRoutes/> : <AuthRoutes/>}
         </>)
}