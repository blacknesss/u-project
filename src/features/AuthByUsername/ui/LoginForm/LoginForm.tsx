import { classNames } from 'shared/lib/classNames/classNames';
import cls from './LoginForm.module.scss';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { loginActions } from 'features/AuthByUsername/model/slice/loginSlice';
import { getLoginState } from 'features/AuthByUsername/model/selectors/getLoginState/getLoginState';
import { loginByUsername } from 'features/AuthByUsername/model/services/loginByUsername/loginByUsername';
import { Text } from 'shared/ui/Text/Text';

interface LoginFormProps {
    className?: string;
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch<any>();
    const {username, password, error, isLoading} = useSelector(getLoginState);

    const onChangeUsername = useCallback(
        (value: string) => {
            dispatch(loginActions.setUserName(value));
        },
        [dispatch],
    );

    const onChangePassword = useCallback(
        (value: string) => {
            dispatch(loginActions.setPassword(value));
        },
        [dispatch],
    );

    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({username, password}));
    }, [dispatch, username, password])

    return (
        <div className={classNames(cls.LoginForm, {}, [className!])}>
            <Text title={t('Форма авторизации')}/>
            {error && <Text text={error} >{error}</Text>}
            <Input
                onChange={onChangeUsername}
                autoFocus
                placeholder={t('Введите логин')}
                type='text'
                className={cls.input}
                value={username}
            />
            <Input
                onChange={onChangePassword}
                placeholder={t('Введите пароль')}
                type='text'
                className={cls.input}
                value={password}
            />
            <Button theme={ThemeButton.OUTLINE} onClick={onLoginClick} disabled={isLoading} className={cls.loginBtn}>{t('Войти')}</Button>
        </div>
    );
});
