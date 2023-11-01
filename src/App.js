import React, { lazy } from 'react';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
import tabs from './tabs.json';

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Navigate to={`/${tabs[0].id}`} />} />

                {tabs.map(tab => (
                <Route key={tab.id} path={`/${tab.id}`} element={lazy(() => import(`${tab.path}`))}  />
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