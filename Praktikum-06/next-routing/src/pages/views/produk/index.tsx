import { useEffect } from 'react';
import { useRouter } from 'next/router';
import HeroSection from './heroSection';
import MainSection from './mainSection';

const TampilanProduk = () => {
    const { push } = useRouter();

    useEffect(() => {
        const isLogin = localStorage.getItem('isLogin');
        if (!isLogin) {
            push('/auth/login');
        }
    }, []);

    return (
        <div>
            <HeroSection />
            <MainSection />
        </div>
    );
};

export default TampilanProduk;
