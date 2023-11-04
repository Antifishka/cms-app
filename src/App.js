import React, { lazy, Suspense, useEffect, useState, startTransition  } from 'react';
import { Routes, Route, NavLink, Navigate, useNavigate } from 'react-router-dom';
import tabs from './tabs.json';

const DummyList = lazy(() => import('./components/DummyList.js'));
const DummyTable = lazy(() => import('./components/DummyTable.js'));
const DummyChart = lazy(() => import('./components/DummyChart.js'));

const App = () => {
    const navigate = useNavigate();
    const [defaultTab, setDefaultTab] = useState(null);

    // useEffect(() => {
    //     startTransition(() => {
    //         // Отримайте поточний ідентифікатор вкладки з URL
    //         const current = window.location.pathname;
    //         console.log(current, 'current');

    //         const currentTabId = window.location.pathname.replace('/', '');
    //         console.log(currentTabId, 'currentTabId');

    //         // Перевірте, чи поточний ідентифікатор вкладки дійсний та існує в масиві вкладок
    //         const tabExists = tabs.some(tab => tab.id === currentTabId);
    //         console.log(tabExists, 'tabExists');

    //         // Якщо поточний ідентифікатор вкладки є дійсним, встановіть його як вкладку за замовчуванням
    //         if (tabExists) {
    //             setDefaultTab(currentTabId);
    //         } else {
    //             // Якщо поточний ідентифікатор вкладки недійсний, перенаправте на першу вкладку
    //             navigate(`/${tabs[0].id}`);
    //         }
    //     });
    // }, [navigate]);
    
    return (
        <>
            <Routes>
                <Route path="/" element={<Navigate to={`/${defaultTab || tabs[0].id}`} />} />

                {tabs.map(tab => (
                    <Route
                        key={tab.id}
                        path={`/${tab.id}`}
                        element={
                            <Suspense fallback={<div>Loading...</div>}>
                                {tab.id === 'dummyList' && <DummyList />}
                                {tab.id === 'dummyTable' && <DummyTable />}
                                {tab.id === 'dummyChart' && <DummyChart />}
                            </Suspense>
                        }
                    />
                ))}
            </Routes>

            <ul>
                {tabs.sort((a, b) => a.order - b.order).map(tab => (
                <li key={tab.id}>
                    <NavLink to={`/${tab.id}`}>{tab.title}</NavLink>
                </li>
                ))}
            </ul>
        </>
    );
};

export default App;