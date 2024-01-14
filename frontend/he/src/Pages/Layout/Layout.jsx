import { Link, Outlet } from 'react-router-dom';

export const Layout = () => {
    return (
        <>
            <header>
                <Link to="/habbits"> HABBITS</Link>
                <Link to="/habit/:id">habbit</Link>
            </header>
            <main>
                <Outlet></Outlet>
            </main>
        </>
    )
}

