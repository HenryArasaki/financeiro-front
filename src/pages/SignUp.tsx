import { Formik, Field, Form } from "formik";
import api from "../services/api";

interface Values {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export default function SignUp() {
  const initialValues: Values = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  return (
    <div className="h-screen bg-green-100">
      <h1>SignUp</h1>
      <div className="flex items-center justify-center mt-20">
        <Formik
          initialValues={initialValues}
          onSubmit={(values: Values) => {
            if (values.password != values.confirmPassword) {
              throw "Senhas devem ser iguais";
            }

            api
              .post("/users", {
                id: Math.floor(Math.random() * 101),
                login: values.email,
                senha: values.password,
              })
              .then((response) => console.log(response))
              .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
              });
          }}
        >
          <Form className="flex flex-col w-60 h-fit bg-green-500 p-10 rounded-lg text-white">
            <div>
              <label htmlFor="name">Name</label>
              <Field
                className="w-full text-black rounded-sm"
                id="name"
                name="name"
              />
            </div>
            <div>
              <label htmlFor="email">E-mail</label>
              <Field
                className="w-full text-black rounded-sm"
                type="email"
                id="email"
                name="email"
              ></Field>
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <Field
                className="w-full text-black rounded-sm"
                type="password"
                id="password"
                name="password"
              ></Field>
            </div>
            <div>
              <label htmlFor="confirmPassword">Confirm Password</label>
              <Field
                className="w-full text-black rounded-sm"
                type="password"
                id="confirmPassword"
                name="confirmPassword"
              ></Field>
            </div>

            <button className="bg-green-600 mt-5 " type="submit">
              Submit
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
}
