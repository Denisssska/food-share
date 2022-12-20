import {useForm} from "react-hook-form";
import styles from "../login/Login.module.scss";
import {useNavigate} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../hook/hooks";


import {AuthPayload} from "../../api/profileAPI";
import {registerTC} from "../../store/slices/userReducer";
import {Avatar, Box, Button, FormControl, FormErrorMessage, FormLabel, Input} from "@chakra-ui/react";


export const Registration = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const {registration, isRegister} = useAppSelector(state => state.user);


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
    const onSubmit = async (value: AuthPayload) => {
        console.log(value)
        // const data = await dispatch(registerTC(value));
        // console.log(data)
        // if (!data.payload) {
        //     alert("Не удалось зарегистрироваться...");
        // }
        // if ("token" in data.payload) {
        //   localStorage.setItem("token", data.payload.token);
        // } else {
        //   alert("Не удалось зарегистрироваться...");
        // }
    };
    if (isRegister) {
        navigate("/");
    }
    return (
        <Box>
            <div>
                Registration
            </div>
            <div className={styles.avatar}>
                <Avatar sx={{width: 100, height: 100}}/>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormControl isInvalid={!!errors.fullName}>
                    <FormLabel htmlFor='fullName'>First name</FormLabel>
                    <Input
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
                    <Input
                        variant="filled"
                        {...register("email", {
                            required: "Enter email",

                        })}
                        placeholder="E-Mail"
                    />
                    <FormErrorMessage>
                        {errors.email && errors.email.message}
                    </FormErrorMessage>
                    <Input
                        variant="filled"
                        {...register("password", {required: "Enter password"})}
                        placeholder="Password"
                    />
                    <FormErrorMessage>
                        {errors.password && errors.password.message}
                    </FormErrorMessage>
                    <Button type="submit" disabled={isSubmitting}
                            className={!isSubmitting ? styles.disable : styles.enable}>
                        Register
                    </Button>
                </FormControl>
            </form>

        </Box>
    );
};
