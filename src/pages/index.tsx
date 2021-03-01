import Signup from './signup/signup';

const isUserLogged = false;

// will return the login/register/welcome page or the user`s feed
export default function Index() {
  return (
    !isUserLogged ? <Signup /> : <div></div>
  )
}
