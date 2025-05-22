import MainIcon from "./MainIcon";
// import Alert from "../user-interface/Alert";
import ProductList from "../products/productList";
export default function Main() {
  return (
    <main>
      <div id="jumbotron-section"></div>
      <div id="content">
        <div className="container">
          <button type="button" class="btn btn-primary current-series-btn">
            CURRENT SERIES
          </button>
        </div>
        <ProductList />
        <div className="container d-flex justify-content-center pb-4">
          <button type="button" class="btn btn-primary">
            Load More
          </button>
        </div>
      </div>
      <MainIcon />
    </main>
  );
}
