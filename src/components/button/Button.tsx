import type { ButtonHTMLAttributes } from 'react';
import styles from './Button.module.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'back' | 'position';
}

const Button = ({ variant = 'primary', ...props }: ButtonProps) => {
    return <button {...props} className={`${styles.btn} ${styles[variant]}`} />;
};

export default Button;
