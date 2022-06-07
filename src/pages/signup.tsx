import { Input, Button, Flex, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import OAuthButtons from "../components/Modal/Auth/OAuthButtons";
import { useAuth } from "../context/AuthContext";
import { auth } from "../firebase/clientApp";

const SignUp = () => {
	// const { user, signup } = useAuth();
	// const { user } = useAuth();
	// console.log(user);

	const router = useRouter();

	const [signUpForm, setSignUpForm] = useState({
		email: "",
		password: "",
		confirmPassword: "",
	});

	const [error, setError] = useState("");
	const [createUserWithEmailAndPassword, user, loading, userError] =
		useCreateUserWithEmailAndPassword(auth);

	// Firebase logic
	const handleSignup = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (error) setError("");

		if (signUpForm.password !== signUpForm.confirmPassword) {
			setError("Passwords do not match");
			return;
		}

		try {
			createUserWithEmailAndPassword(signUpForm.email, signUpForm.password);
			// await signup(signUpForm.email, signUpForm.password);
		} catch (err) {
			console.log(err);
		}
		// passwords match
		console.log(signUpForm);
	};

	const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		// update form state
		setSignUpForm((prev) => ({
			...prev,
			[event.target.name]: event.target.value,
		}));
	};

	return (
		<>
			<OAuthButtons />
			<Text color="gray.500" fontWeight={700}>
				OR
			</Text>
			<form onSubmit={handleSignup}>
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
				<Input
					name="confirmPassword"
					placeholder="Confirm Password"
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
				{error || userError && (
					<Text textAlign="center" color="red" fontSize="10pt">
						{error || userError.message}
					</Text>
				)}
				<Button
					width="100%"
					height="36px"
					mt={2}
					mb={2}
					type="submit"
					isLoading={loading}>
					Sign Up
				</Button>

				<Flex fontSize="9pt" justifyContent="center">
					<Text mr={1}>Already in the community?</Text>
					<Text
						color="blue.500"
						fontWeight={700}
						cursor="pointer"
						onClick={() => router.push("./login")}>
						LOG IN
					</Text>
				</Flex>
			</form>
		</>
	);
};
export default SignUp;
