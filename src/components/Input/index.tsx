import React, { InputHTMLAttributes, useEffect, useState, useCallback, useRef } from "react";
import { Container, Error } from "./style"
import { IconBaseProps } from 'react-icons'
import { useField } from '@unform/core'
import { FiAlertCircle } from 'react-icons/fi'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    icon?: React.ComponentType<IconBaseProps>
}

const Input: React.FC<InputProps> = ({name, icon: Icon, ...rest}) => {
    const inputRef = useRef<HTMLInputElement>(null);
    
    const [isFocused, setFocus] = useState(false);
    const [isFilled, SetFill] = useState(false);

    const { fieldName, defaultValue, error, registerField } = useField(name);

    const handleInputFocus = useCallback(() => {
        setFocus(true);
    }, []);

    const handleInputBlur = useCallback(() => {
        setFocus(false);

        SetFill(!!inputRef.current?.value);
        console.log(inputRef)
    }, []);

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: "value",
        });
    }, [ fieldName, registerField]);
    return (
        <Container hasError={!!error} isFocused={isFocused} isFilled={isFilled}>
            {Icon && <Icon size={16}/>}
            <input onFocus={handleInputFocus}
                   onBlur={handleInputBlur}
                   defaultValue={defaultValue}
                   ref={inputRef}
                    {...rest}/>
                    {error && (
                    <Error title={error}>
                        <FiAlertCircle color="c53030" size={ 20 }/>
                    </Error>)}
        </Container>
    );
}
export default Input;