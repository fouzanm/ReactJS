import { Outlet } from "react-router-dom"
import MainNavigation from "../components/MainNavigation"
import style from './Root.module.css'

function RootLayout() {
    return (
        <>
            <MainNavigation />
            <main className={style.content}>
                <Outlet />
            </main>
            
        </>
    )
}

export default RootLayout