import { classNames } from 'shared/lib/classNames/classNames';
import { FC, useCallback, useState } from 'react';
import cls from './Navbar.module.scss';
import { Modal } from 'shared/ui/Modal/Modal';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User';

interface NavbarProps {
    className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);
    const authData = useSelector(getUserAuthData);
    const dispath = useDispatch<any>();

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    const onLogout = useCallback(() => {
        dispath(userActions.logout());
    }, [dispath]);

    if (authData) {
        return (
            <div className={classNames(cls.Navbar, {}, [className!])}>
                <Button theme={ThemeButton.CLEAR} className={cls.links} onClick={onLogout}>
                    {t('Выйти')}
                </Button>
            </div>
        );
    }

    return (
        <div className={classNames(cls.Navbar, {}, [className!])}>
            <Button theme={ThemeButton.CLEAR} className={cls.links} onClick={onShowModal}>
                {t('Войти')}
            </Button>
            {isAuthModal && <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />}
        </div>
    );
};
