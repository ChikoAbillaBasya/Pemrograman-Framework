import { GetServerSideProps } from "next";
import { retrieveProducts } from "../utils/db/servicefirebase";
import TampilanProduk from "../views/produk";

type ProductType = {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
};

type Props = {
  products: ProductType[];
};

const HalamanProdukServer = ({ products }: Props) => {
  return (
    <div>
      <h1>Halaman Produk Server</h1>
      <TampilanProduk products={products} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const data = await retrieveProducts("products");
  return {
    props: {
      products: data,
    },
  };
};

export default HalamanProdukServer;
