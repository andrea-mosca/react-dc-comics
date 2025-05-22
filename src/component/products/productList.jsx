import ProductCard from "./productsCard";
import comics from "../../data/comics";
export default function ProductList() {
  return (
    <div className="container py-5">
      <div className="row">
        {comics.map((comic) => (
          <ProductCard title={comic.title} thumb={comic.thumb} />
        ))}
      </div>
    </div>
  );
}
