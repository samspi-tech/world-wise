import type { ButtonHTMLAttributes, ReactNode } from 'react';
import styles from './Button.module.css';

type ButtonProps = {
    children: ReactNode;
    style?: 'primary' | 'back' | 'position';
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ style = 'primary', children, ...props }: ButtonProps) => {
    return (
        <button {...props} className={`${styles.btn} ${styles[style]}`}>
            {children}
        </button>
    );
};

export default Button;
