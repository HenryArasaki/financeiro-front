import { Formik, Field, Form } from 'formik';

interface Values{
    name:string
    email:string
    password:string
    confirmPassword:string
}

export default function SignUp(){
    const initialValues:Values = {
        name:"",
        email:"",
        password:"",
        confirmPassword:"",
    }

    return(
        <>
            <h1>SignUp</h1>
            <div className='flex items-center justify-center mt-20'>
            <Formik
            initialValues={initialValues}
            onSubmit={(values,action)=>{
                console.log({values,action})

            }}
            >
                <Form className="flex flex-col w-60 h-fit bg-green-500 p-10 rounded-lg text-white">
                    <div>
                        <label htmlFor="name">Name</label>
                        <Field className="w-full" id="name" name="name"></Field>
                    </div>
                    <div>
                        <label htmlFor="email">E-mail</label>
                        <Field className="w-full" type="email" id="email" name="email"></Field>
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <Field className="w-full" type="password" id="password" name="password"></Field>
                    </div>
                    <div>
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <Field className="w-full" type="password" id="confirmPassword" name="confirmPassword"></Field>
                    </div>



                    <button className="bg-green-600 mt-5 " type="submit">Submit</button>
                </Form>
            </Formik>
            </div>
        </>
        
    )
}