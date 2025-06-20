import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Text.module.scss';

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    children?: React.ReactNode;
}

export const Text = ({className, title, text}: TextProps) => {
    return (
        <div className={classNames(cls.Text, {}, [className!])}>
            {title && <p className={cls.title}>{title}</p>}
            {text && <p className={cls.text}>{text}</p>}
        </div>
    );
};