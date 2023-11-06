import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Container, Header, Link, Main } from "./Layout.styled";

const Layout = ({ tabs }) => {
    return (
        <Container>
            <Header>
                <nav>
                    { tabs.map(tab => (
                        <Link key={tab.id} to={tab.id}>
                            {tab.title}
                        </Link>
                    ))}
                </nav>
            </Header>

            <Suspense fallback={<div>Loading..</div>}>
                <Main>
                    <Outlet/>
                </Main>
            </Suspense>
        </Container>
    )
}

export default Layout;