import AppFooter from "./footer";
import AppHeader from "./header";


export default function Layout({ children }) {
    const navItems = ["Home", "About", "Pricing", "Login"];
    const routes = ["/", "/about", "/pricing", "/login"];

    return (
        <>
            <AppHeader navItems={navItems} routes={routes} />
            <main>{children}</main>
            {/* <AppFooter /> */}
        </>
    );
}
