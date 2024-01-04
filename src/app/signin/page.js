import Login from "~/components/login/Login";

export const metadata = {
  title: 'Đăng nhập',
  description: 'Đăng nhập mindmap',
  // openGraph: {
  //   title: 'Introduce | Mindmap',
  //   description: 'Đăng nhập mindmap',
  // },
}


function SignIn() {
  return (
    <>
      <Login />
    </>
  );
}

export default SignIn;