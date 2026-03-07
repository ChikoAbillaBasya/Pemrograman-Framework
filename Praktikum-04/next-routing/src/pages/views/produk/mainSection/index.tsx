import { useRouter } from 'next/router';

const daftarProduk = [
    { id: 1, nama: 'Produk A' },
    { id: 2, nama: 'Produk B' },
    { id: 3, nama: 'Produk C' },
];

const MainSection = () => {
    const { push } = useRouter();

    const handleLogout = () => {
        localStorage.removeItem('isLogin');
        push('/auth/login');
    };

    return (
        <div className="max-w-4xl mx-auto px-5 py-10">
            <h2 className="text-2xl font-semibold text-gray-700 mb-5">Daftar Produk</h2>
            <div className="grid grid-cols-3 gap-4">
                {daftarProduk.map((produk) => (
                    <div key={produk.id} className="border border-gray-200 rounded-lg p-4 text-center bg-gray-50">
                        <h3 className="font-medium text-gray-600 mb-2">{produk.nama}</h3>
                        <p className="text-sm text-gray-400">ID: {produk.id}</p>
                    </div>
                ))}
            </div>
            <button className="mt-8 px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-600" onClick={handleLogout}>
                Logout
            </button>
        </div>
    );
};

export default MainSection;
