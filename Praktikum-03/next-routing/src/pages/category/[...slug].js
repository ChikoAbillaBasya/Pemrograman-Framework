import { useRouter } from 'next/router';

const CategoryPage = () => {
    const { query } = useRouter();
    const { slug } = query;

    return (
        <div>
            <h1>Halaman Kategori</h1>
            {slug ? (
                <div>
                    <p>Parameter URL:</p>
                    <ul>
                        {slug.map((item, index) => (
                            <li key={index}>
                                Segment {index + 1}: {item}
                            </li>
                        ))}
                    </ul>
                </div>
            ) : (
                <p>Tidak ada parameter.</p>
            )}
        </div>
    );
};

export default CategoryPage;
