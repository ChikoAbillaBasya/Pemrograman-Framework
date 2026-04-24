import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import useSWR from "swr";
import fetcher from "../../utils/swr/fetcher";

const TampilanProduk = dynamic(() => import("../../views/produk"), {
  loading: () => <p>Memuat produk...</p>,
});

// const fetcher = (url: string) => fetch(url).then((res) => res.json());
const Kategori = () => {
  // const [isLogin, setIsLogin] = useState(false);
  const { push } = useRouter();
  const [products, setProducts] = useState([]);
  // console.log("products:", products);

  const { data, error, isLoading } = useSWR("/api/produk", fetcher);
  //cek apakah data, error, dan isLoading sudah benar


  return (
    <div>
      <h1 data-testid="title">Product Page</h1>
      <TampilanProduk products={isLoading || !data ? [] : data.data} />
    </div>
  );
};

export default Kategori;
