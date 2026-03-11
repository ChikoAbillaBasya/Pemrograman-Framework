import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import TampilanProduk from "../views/produk";
import useSWR from "swr";
import fetcher from "../utils/swr/fetcher";

// const fetcher = (url: string) => fetch(url).then((res) => res.json());
const Kategori = () => {
  // const [isLogin, setIsLogin] = useState(false);
  // const { push } = useRouter();
  const [products, setProducts] = useState([]);
  // console.log("products:", products);

  const { data, error, isLoading } = useSWR("/api/produk", fetcher);
  //cek apakah data, error, dan isLoading sudah benar
  // console.log("data:", data);
  // console.log("error:", error);
  // console.log("isLoading:", isLoading);

  return (
    <div>
      <TampilanProduk products={isLoading ? [] : data.data} />
    </div>
  );
};

export default Kategori;

// import { useRouter } from "next/router";
// import { useEffect, useState } from "react";
// import TampilanProduk from "../views/produk";

// const Kategori = () => {
//   // const [isLogin, setIsLogin] = useState(false);
//   // const { push } = useRouter();
//   const [products, setProducts] = useState([]);
//   // console.log("products:", products);
//   // useEffect(() => {
//   //   if (!isLogin) {
//   //     push("/auth/login");
//   //   }
//   //   },[]);

//   useEffect(() => {
//     fetch("/api/produk")
//       .then((response) => response.json())
//       .then((responsedata) => {
//         setProducts(responsedata.data);
//         // console.log("Data produk:", responsedata.data);
//       })
//       .catch((error) => {
//         console.error("Error fetching produk:", error);
//       });
//   }, []);

//   return (
//     <div>
//       <TampilanProduk products={products} />
//     </div>
//   );
// };

// export default Kategori;

// import { useRouter } from "next/router";
// import { useEffect, useState } from "react";

// type ProductType = {
//   id: string;
//   name: string;
//   price: number;
//   size: string;
//   category: string;
//   image: string;
// };

// const Kategori = () => {
//   // const [isLogin, setIsLogin] = useState(false);
//   // const { push } = useRouter();
//   const [products, setProducts] = useState([]);

//   // useEffect(() => {
//   //   if (!isLogin) {
//   //     push("/auth/login");
//   //   }
//   // },[]);

//   const fetchProducts = () => {
//     fetch("/api/produk")
//       .then((response) => response.json())
//       .then((responsedata) => {
//         //console.log("Data produk:", responsedata.data);
//         setProducts(responsedata.data);
//       })
//       .catch((error) => {
//         console.error("Error fetching produk:", error);
//       });
//   };

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   return (
//     <div>
//       <h1>Daftar Produk</h1>
//       <button onClick={fetchProducts}>Refresh Data</button>
//       {products.map((product: ProductType) => (
//         <div key={product.id}>
//           <h2>{product.name}</h2>
//           <p>Harga: {product.price}</p>
//           <p>Ukuran: {product.size}</p>
//           <p>Kategori: {product.category}</p>
//           <img src={product.image} alt={product.name} />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Kategori;
