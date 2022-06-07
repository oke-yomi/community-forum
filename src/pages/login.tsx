import { Button, Flex, Input, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useState } from "react";
import OAuthButtons from "../components/Modal/Auth/OAuthButtons";

interface LoginProps {
	//
}

const Login: React.FC<LoginProps> = () => {
	const router = useRouter();

	const [loginForm, setLoginForm] = useState({
		email: "",
		password: "",
	});

	const [error, setError] = useState("");

	const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (error) setError("");

		console.log(loginForm);
	};

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		// update form state
		setLoginForm((prev) => ({
			...prev,
			[e.target.name]: e.target.value,
		}));
	};

	return (
		<>
			<OAuthButtons />
			<Text color="gray.500" fontWeight={700}>
				OR
			</Text>
			<form onSubmit={handleLogin}>
				<Input
					name="email"
					placeholder="email"
					type="email"
					mb={2}
					onChange={onChange}
					required
					fontSize="10pt"
					_placeholder={{ color: "gray.500" }}
					_hover={{
						bg: "white",
						border: "1px solid",
						borderColor: "blue.500",
					}}
					_focus={{
						outline: "none",
						bg: "white",
						border: "1px solid",
						borderColor: "blue.500",
					}}
					bg="gray.50"
				/>
				<Input
					name="password"
					placeholder="password"
					type="password"
					mb={2}
					onChange={onChange}
					required
					fontSize="10pt"
					_placeholder={{ color: "gray.500" }}
					_hover={{
						bg: "white",
						border: "1px solid",
						borderColor: "blue.500",
					}}
					_focus={{
						outline: "none",
						bg: "white",
						border: "1px solid",
						borderColor: "blue.500",
					}}
					bg="gray.50"
				/>
				<Button width="100%" height="36px" mt={2} mb={2} type="submit">
					Log In
				</Button>

				<Flex fontSize="9pt" justifyContent="center">
					<Text mr={1}>New here?</Text>
					<Text
						color="blue.500"
						fontWeight={700}
						cursor="pointer"
						onClick={() => router.push("./signup")}>
						SIGN UP
					</Text>
				</Flex>
			</form>
		</>
	);
};
export default Login;
