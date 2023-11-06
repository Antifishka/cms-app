import React, { Suspense } from "react";
import { Outlet, NavLink, } from "react-router-dom";

const Layout = ({ tabs }) => {
    return (
        <>
            <header>
                <nav>
                    { tabs.map(tab => (
                        <NavLink key={tab.id} to={tab.id}>
                            {tab.title}
                        </NavLink>
                    ))}
                </nav>
            </header>

            <Suspense fallback={<div>Loading..</div>}>
                <main>
                    <Outlet/>
                </main>
            </Suspense>
        </>
    )
}

export default Layout;