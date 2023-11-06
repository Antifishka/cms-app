import React, { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout/Layout.jsx';
import { GlobalStyle } from './globalStyles/globalStyle';
import tabs from './tabs.json';

const App = () => {
    const sortedTabs = tabs.sort((a, b) => a.order - b.order);
    
    return (
        <>
            <Routes>
                <Route path='/' element={<Layout tabs={sortedTabs} />}>
                    <Route index element={<Navigate to={sortedTabs[0].id} />} />
                    {sortedTabs.map((tab) => {
                        const Page = lazy(() => import(`${tab.path}`));
                        return (
                            <Route key={tab.id} path={tab.id} element={<Page />} />
                        )})
                    }
                    <Route path="*" element={<div>Page not found</div> } />
                </Route>
            </Routes>

            <GlobalStyle />
        </>
    );
};

export default App;