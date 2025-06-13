import { classNames } from 'shared/lib/classNames/classNames';
import cls from './LoginForm.module.scss';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { memo, useCallback, useEffect } from 'react';
import { loginActions, loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
import { loginByUsername } from 'features/AuthByUsername/model/services/loginByUsername/loginByUsername';
import { Text } from 'shared/ui/Text/Text';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginLoading } from '../../model/selectors/getLoginLoading/getLoginLoading';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';

export interface LoginFormProps {
    className?: string;
}

const LoginForm = memo(({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch<any>();
    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const isLoading = useSelector(getLoginLoading);
    const error = useSelector(getLoginError);

    // useEffect(() => {
    //     store.reducerManager.add('loginForm', loginReducer);

    //     return () => {
    //         store.reducerManager.remove('loginForm')
    //     }
    // }, [])

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

export default LoginForm;