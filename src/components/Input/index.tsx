import React, { InputHTMLAttributes, useEffect, useState, useCallback, useRef } from "react";
import { Container } from "./style"
import { IconBaseProps } from 'react-icons'
import { useField } from '@unform/core'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    icon?: React.ComponentType<IconBaseProps>
}
const Input: React.FC<InputProps> = ({name, icon: Icon, ...rest}) => {
    const inputRef = useRef<HTMLInputElement>(null);

    const [isFocused, setFocus] = useState(false);
    const [isFilled, SetFill] = useState(false);

    const { fieldName, defaultValue, error, registerField } = useField(name);

    const handleInputBlur = useCallback(() => {
        setFocus(false);

        SetFill(!! inputRef.current?.value);
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
        <Container isFocused={isFocused} isFilled={isFilled}>
            {Icon && <Icon size={16}/>}
            <input onFocus={() => setFocus(true)} 
                   onBlur={handleInputBlur}
                   defaultValue={defaultValue}
                   ref={inputRef}
                    {...rest}/>
                    {error}
        </Container>
    );
}
export default Input;