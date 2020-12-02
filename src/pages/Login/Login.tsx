import React, { FC, useState } from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background: aliceblue;
  margin: auto;
`;

const CenterBox = styled.div`
  width: 250px;
  display: flex;
  padding: 20px;
  margin: 20px;
  background: azure;
  border: 2px solid #282c34;
  flex-direction: column;
`;

const isEmailValid = (email?: string): boolean =>
    Boolean(email && email.length > 3);

const isPasswordValid = (password?: string): boolean =>
    Boolean(password && password.length > 3);

const isLoginValidForPost = (email?: string, password?: string): boolean =>
    isEmailValid(email) && isPasswordValid(password);


const isNumber = (value?:string): boolean => {
    if (value && !isNaN(Number(value))) {
        return true;
    }

    return false;
}

export const Login: FC = () => {
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    // const [age, setAge] = useState('');
    //
    // const handleChangeEmail = (event: any) => {
    //     console.log(event.currentTarget.value);
    //     setEmail(event.currentTarget.value);
    // }
    //
    // const handleChangePassword = (event: any) => {
    //     console.log(event.currentTarget.value);
    //     setPassword(event.currentTarget.value);
    // }
    //
    // const handleChangeAge = (event: any) => {
    //     const newValue = event.currentTarget.value;
    //     if (isNumber(newValue)) {
    //         setAge(newValue);
    //     }
    //
    //     if (!newValue) {
    //         setAge('');
    //     }
    // }

    // const isLoginEnabled = isLoginValidForPost(email, password);

    return <Container>
        <CenterBox>
            <Input name="name" />
            <br/>
            <Input name="password" />
            {/*<input value={password} name="password" onChange={handleChangePassword}/>*/}
            <br/>
            {/*<input value={age} name="age" onChange={handleChangeAge}/>*/}
            <Input name="age" />
            <br/>
            {/*<button disabled={!isLoginEnabled}>Login</button>*/}
        </CenterBox>
    </Container>
};

interface InputProps {
    name:string;
    onChange?: () => void;
}

export const Input: FC<InputProps> = (props) => {
    const [value, setValue] = useState('');

    const handleChangeValue = (event: any) => {
        setValue(event.currentTarget.value);
    }

    return <input value={value}
                  name={props.name}
                  onChange={handleChangeValue}/>
};
