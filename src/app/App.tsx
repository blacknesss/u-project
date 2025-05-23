import { Suspense } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import './styles/index.scss';
import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { useTheme } from 'app/providers/ThemeProvider/lib/useTheme';
import { classNames } from 'shared/lib/classNames/classNames';

export default function App() {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>TOGGLE THEME</button>
            <Link to='/'>Main</Link>
            <Link to='/about'>About</Link>

            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path='/' element={<MainPage />} />
                    <Route path='/about' element={<AboutPage />} />
                </Routes>
            </Suspense>
        </div>
    );
}
