import TampilanProduk from "../../views/produk";
import { ProductType } from "../../types/Product.type";

export const dynamic = "force-dynamic";

const halamanProdukStatic = (props: { products: ProductType[] }) => {
  const { products } = props;
  return (
    <div>
      <h1>Halaman Produk Static</h1>
      <TampilanProduk products={products} />
    </div>
  );
};

export default halamanProdukStatic;

export async function getServerSideProps() {
  try {
    const res = await fetch("http://127.0.0.1:3000/api/produk");
    const response: { data: ProductType[] } = await res.json();

    return {
      props: {
        products: response.data,
      },
    };
  } catch {
    return {
      props: {
        products: [],
      },
    };
  }
}
