import { Alert,Link, AlertIcon, Button, Input } from "@chakra-ui/react";
import { useState } from "react";
import useLogin from "../../hooks/useLogin";
import { auth } from "../../firebase/firebase";
import { sendPasswordResetEmail } from "firebase/auth"; 


const Login = () => {
	const [inputs, setInputs] = useState({
		email: "",
		password: "",
	});
	const { loading, error, login } = useLogin();

	const handleForgotPassword = () => {
		const email = inputs.email;
		if (email) {
		  sendPasswordResetEmail(auth, email)
			.then(() => {
			  alert("Password reset email sent. Please check your inbox.");
			})
			.catch((error) => {
			  alert(error.message);
			});
		} else {
		  alert("Please enter your email address.");
		}
	  };
	return (
		<>
			<Input
				placeholder='Email'
				fontSize={14}
				type='email'
				size={"sm"}
				value={inputs.email}
				onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
			/>
			<Input
				placeholder='Password'
				fontSize={14}
				size={"sm"}
				type='password'
				value={inputs.password}
				onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
			/>
			{error && (
				<Alert status='error' fontSize={13} p={2} borderRadius={4}>
					<AlertIcon fontSize={12} />
					{error.message}
				</Alert>
			)}
			<Button
				w={"full"}
				colorScheme='blue'
				size={"sm"}
				fontSize={14}
				isLoading={loading}
				onClick={() => login(inputs)}
			>
				Log in
			</Button>
			<Link
        mt={2}
        fontSize={10}
        p={1}
        color={"white"}
        cursor={"pointer"}
        onClick={handleForgotPassword}
        _hover={{ backgroundColor: "red.200", border:"1px solid black", color: "black" }}
        background={"red"}
        borderRadius={5}
		
        px={3}
        py={1}
      >
        Forgot password?
      </Link>
		</>
	);
};

export default Login;
