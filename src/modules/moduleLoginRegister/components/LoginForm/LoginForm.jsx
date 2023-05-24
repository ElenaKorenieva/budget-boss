import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import { Formik, useFormik } from 'formik'; // Form, Field
import { loginUser } from 'redux/auth/authOperations';
import { ReactComponent as IconGoogle } from 'modules/shared/images/svg/google.svg';
import {
  AuthButton,
  AuthButtonWrapper,
  AuthDescr,
  AuthInput,
  AuthLabel,
  AuthWrapper,
  ErrorText,
  ErrorWrapper,
  Form,
  FormWrapper,
  GoogleBtnWrapper,
  GoogleButton,
  GoogleLink,
  GoogleTitle,
  LabelTitle,
} from 'modules/moduleLoginRegister/components/LoginForm/LoginForm.styled';

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email('E-mail must be valid email')
    .required('E-mail is a required field'),
  password: yup
    .string()
    .min(8, 'Password must be at least 6 characters')
    .required('Password is a required field'),
});

const LoginForm = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
  });

  //   const handleFormSubmit = event => {
  //     event.preventDefault();
  //     const form = event.currentTarget.elements;
  //     const formValues = {
  //       email: formik.values.email,
  //       password: formik.values.password,
  //     };
  //     const submit = event.nativeEvent.submitter.name;
  //     submit === 'login'
  //       ? dispatch(loginUser(formValues))
  //       : dispatch(registerUser(formValues));
  // 	};

  return (
    <AuthWrapper>
      <GoogleTitle>You can log in with your Google Account:</GoogleTitle>

      <GoogleButton type="button">
        <GoogleBtnWrapper>
          <IconGoogle />
          <GoogleLink href="https://kapusta-backend.goit.global/auth/google">
            Google
          </GoogleLink>
        </GoogleBtnWrapper>
      </GoogleButton>
      <AuthDescr>
        Or log in using an email and password, after registering:
      </AuthDescr>

      <Formik
        initialValues={formik.initialValues}
        onSubmit={(values, { resetForm }) => {
          dispatch(
            loginUser({
              email: values.email,
              password: values.password,
            })
          );
          resetForm();
        }}
        validationSchema={validationSchema}
      >
        {({
          errors,
          touched,
          values,
          handleSubmit,
          handleBlur,
          handleChange,
          isSubmitting,
        }) => (
          <FormWrapper>
            <Form autoComplete="on" onSubmit={handleSubmit}>
              <AuthLabel htmlFor={'email'}>
                <LabelTitle>Email</LabelTitle>
                <AuthInput
                  type="email"
                  name="email"
                  id="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  placeholder="your@email.com"
                />
                <ErrorWrapper>
                  <ErrorText>
                    {errors.email && touched.email && errors.email}
                  </ErrorText>
                </ErrorWrapper>
              </AuthLabel>

              <AuthLabel htmlFor={'password'}>
                <LabelTitle>Password</LabelTitle>
                <AuthInput
                  type="password"
                  name="password"
                  id="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  placeholder="• • • • • • • •"
                />
                <ErrorWrapper>
                  <ErrorText>
                    {errors.password && touched.password && errors.password}
                  </ErrorText>
                </ErrorWrapper>
              </AuthLabel>

              <AuthButtonWrapper>
                <AuthButton
                  type="submit"
                  onClick={e => console.log('Login', e)}
                >
                  Log in
                </AuthButton>
                <AuthButton type="submit">Registration</AuthButton>
              </AuthButtonWrapper>
            </Form>
          </FormWrapper>
        )}
      </Formik>
    </AuthWrapper>
  );
};

export default LoginForm;
