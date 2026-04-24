import { useRouter } from "next/router";
import { Roboto } from "next/font/google";
import Navbar from "../navbar";


const disableNavbar = ['/auth/login', '/auth/register', '/404'];

const roboto = Roboto({
    subsets: ["latin"],
    weight: ["400", "500", "700"],
});

type AppShellProps = {
    children: React.ReactNode;
}


const AppShell = (props: AppShellProps) => {



    const { children } = props;
    const { pathname } = useRouter();
    const router = useRouter();
    console.log(router);
    return (
        <main className={roboto.className}>
            {!disableNavbar.includes(pathname) && <Navbar />}
            {children}

        </main>
    );
};



export default AppShell;
