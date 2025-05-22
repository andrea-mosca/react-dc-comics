import MainIcon from "./MainIcon";
// import Alert from "../user-interface/Alert";
import ProductList from "../products/productList";
export default function Main() {
  return (
    <main>
      <div id="jumbotron-section"></div>
      <div id="content">
        <ProductList />
      </div>
      <MainIcon />
    </main>
  );
}
