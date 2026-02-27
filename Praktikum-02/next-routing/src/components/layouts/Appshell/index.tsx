import Navbar from "../navbar";

type AppShellProps = {
    children: React.ReactNode;
}

const AppShell = (props: AppShellProps) => {
    const { children } = props;
    return (
        <main>
            <Navbar />
            {children}
            <footer>
                <p>Footer - Next Routing App</p>
            </footer>
        </main>
    );
};

export default AppShell;
