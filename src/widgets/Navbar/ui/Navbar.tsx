import { classNames } from 'shared/lib/classNames/classNames';
import { FC, useCallback, useState } from 'react';
import cls from './Navbar.module.scss';
import { Modal } from 'shared/ui/Modal/Modal';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';

interface NavbarProps {
    className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);

    const onToggleModal = useCallback(() => {
        setIsAuthModal((prev) => !prev);
    }, []);

    return (
        <div className={classNames(cls.Navbar, {}, [className!])}>
            <Button theme={ThemeButton.CLEAR} className={cls.links} onClick={onToggleModal}>
                {t('Войти')}
            </Button>
            <Modal isOpen={isAuthModal} onClose={onToggleModal}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur explicabo ex
                exercitationem amet aut modi unde placeat soluta repudiandae accusantium, rem omnis
                deleniti magnam sapiente, voluptatibus repellendus consequuntur quia doloremque.
            </Modal>
        </div>
    );
};
