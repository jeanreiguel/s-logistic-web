import React from "react";
import { FiAlertCircle, FiXCircle } from "react-icons/fi";
import { Container, ToastElement } from "./style"

const Toast: React.FC = () => {

    return (
        <Container>
            <ToastElement type="error" hasDescription>
                <FiAlertCircle size={20} />

                <div>
                    <strong>Aconteceu o erro</strong>
                    <p>Não foi possível fazer login na aplicação</p>
                </div>

                <button>
                    <FiXCircle size={20}/>
                </button>
            </ToastElement>
            <ToastElement type="success" hasDescription>
                <FiAlertCircle size={20} />

                <div>
                    <strong>Aconteceu o erro</strong>
                    <p>Não foi possível fazer login na aplicação</p>
                </div>

                <button>
                    <FiXCircle size={20}/>
                </button>
            </ToastElement>
            <ToastElement type="info" hasDescription>
                <FiAlertCircle size={20} />

                <div>
                    <strong>Aconteceu o erro</strong>
                    <p>Não foi possível fazer login na aplicação</p>
                </div>

                <button>
                    <FiXCircle size={20}/>
                </button>
            </ToastElement>
            <ToastElement type="info" hasDescription={false}>
                <FiAlertCircle size={20} />

                <div>
                    <strong>Aconteceu o erro</strong>
                </div>

                <button>
                    <FiXCircle size={20}/>
                </button>
            </ToastElement>
        </Container>
    );
}

export default Toast;
