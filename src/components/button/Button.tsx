import type { ButtonHTMLAttributes } from 'react';
import styles from './Button.module.css';

type ButtonProps = {
    variant?: 'primary' | 'back' | 'position';
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ variant = 'primary', ...props }: ButtonProps) => {
    return <button {...props} className={`${styles.btn} ${styles[variant]}`} />;
};

export default Button;
