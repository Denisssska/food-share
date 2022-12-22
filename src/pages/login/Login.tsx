import React, {useState} from "react";
import {loginTC} from "../../store/slices/userReducer";
import {NavLink, useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import {AuthPayload} from "../../api/profileAPI";
import {useAppDispatch, useAppSelector} from "../../hook/hooks";
import {
    Avatar,
    Box,
    Button,
    Flex,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Input,
    InputGroup, InputRightElement,
    Text
} from "@chakra-ui/react";
import {ViewIcon, ViewOffIcon} from "@chakra-ui/icons";

export const Login = () => {

    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const {isAuth} = useAppSelector(state => state.user);

    const {
        register,
        handleSubmit,
        formState: {errors, isSubmitting}
    } = useForm({
        defaultValues: {
            email: "",
            password: "",
            fullName: ""
        },
        mode: "onChange"
    });
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)

    const onSubmit = async (values: AuthPayload) => {
        const data = await dispatch(loginTC(values));
        if (!data.payload) {
            alert("Не удалось авторизироваться...");
        }
        // if (localStorage.getItem("token") || "token" in data.payload) {
        //   window.localStorage.setItem("token", data.payload.token);
        // } else {
        //   alert("Не удалось авторизоваться...");
        // }
    };

    if (isAuth) {
        navigate("/");
    }

    return (
        <Box w="50%" m="0 auto" textAlign="center" fontSize={40} fontWeight={600}>
            <Box mb={5}>
                Welcome to Foodshare
            </Box>
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormControl isInvalid={!!errors.email && !!errors.password}>
                    <Input mb={3}
                           variant="filled"
                           {...register("email", {
                               required: "Enter email",

                           })}
                           placeholder="E-Mail"
                    />
                    <FormErrorMessage>
                        {errors.email && errors.email.message}
                    </FormErrorMessage>

                    <InputGroup>
                        <Input
                            variant="filled"
                            {...register("password", {required: "Enter password"})}
                            placeholder="Password"
                            type={show ? "text" : "password"}
                        />
                        <InputRightElement width='4.5rem'>
                            <Button h='1.75rem' size='sm' onClick={handleClick}>
                                {show ? <ViewOffIcon/> : <ViewIcon/>}
                            </Button>
                        </InputRightElement>
                    </InputGroup>

                    <FormErrorMessage>
                        {errors.password && errors.password.message}
                    </FormErrorMessage>
                    <Button fontSize={25} variant="solid" m={"5% 0"} w="100%" alignSelf="center" type="submit"
                            disabled={isSubmitting}>
                        Login
                    </Button>
                </FormControl>
                <Flex align="center" justify="space-around" color={"red.500"} fontSize={15}>
                    <NavLink to={"#"}>Forgot password?</NavLink>
                    <NavLink to={"#"}>Forgot username?</NavLink>
                </Flex>
                <Flex alignSelf={"center"} align="center" justify="center">
                    <hr style={{width: "40%"}}/>
                    <Text mx={3} fontSize={17}>or</Text>
                    <hr style={{width: "40%"}}/>
                </Flex>
                <Button _hover={{bg: 'red.100'}} fontSize={20} variant="outline" mb={3} w="100%" alignSelf="center"
                        disabled={isSubmitting}>
                    Continue with Facebook
                </Button>
                <Button _hover={{bg: 'red.100'}} fontSize={20} variant="outline" mb={3} w="100%" alignSelf="center"
                        disabled={isSubmitting}>
                    Continue with Apple
                </Button>
                <Button _hover={{bg: 'red.100'}} fontSize={20} variant="outline" m={0} w="100%" alignSelf="center"
                        disabled={isSubmitting}>
                    Continue with Google
                </Button>
            </form>
        </Box>
    );
};
