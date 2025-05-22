import MainIcon from "./MainIcon";
import Alert from "../user-interface/Alert";

export default function Main() {
  return (
    <main>
      <div id="jumbotron-section"></div>
      <div id="content">
        <div className="container py-5">
          <div>content here</div>
        </div>
      </div>
      <MainIcon />
    </main>
  );
}
