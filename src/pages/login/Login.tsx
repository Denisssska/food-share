import React from "react";
import {loginTC} from "../../store/slices/userReducer";
import {NavLink, useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import {AuthPayload} from "../../api/profileAPI";
import {useAppDispatch, useAppSelector} from "../../hook/hooks";
import {Avatar, Box, Button, FormControl, FormErrorMessage, Input} from "@chakra-ui/react";

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
        <Box w="50%" m="0 auto" textAlign="center" fontSize={25} fontWeight={600}>
            <Box mb={5}>
                Login
            </Box>
            <Avatar m={"2% 0 5% 0"} sx={{width: 100, height: 100}}/>
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormControl isInvalid={!!errors.fullName}>
                    <Input mb={3}
                           id={"fullName"}
                           variant="filled"
                           {...register("fullName", {
                               required: "Enter name please",
                               minLength: {value: 4, message: 'Minimum length should be 4'},
                           })}
                           placeholder="Full name"
                    />
                    <FormErrorMessage>
                        {errors.fullName && errors.fullName.message}
                    </FormErrorMessage>
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
                    <Input mb={3}
                           variant="filled"
                           {...register("password", {required: "Enter password"})}
                           placeholder="Password"
                    />
                    <FormErrorMessage>
                        {errors.password && errors.password.message}
                    </FormErrorMessage>
                    <Button fontSize={25} variant="solid" m={"5% 0"} w="100%" alignSelf="center" type="submit"
                            disabled={isSubmitting}>
                        Login
                    </Button>
                </FormControl>
                <Box fontSize={15}>
                    <NavLink to={"#"}>forgot password?</NavLink>
                    <NavLink to={"#"}>Forgot username?</NavLink>
                </Box>
            </form>

        </Box>
    );
};
