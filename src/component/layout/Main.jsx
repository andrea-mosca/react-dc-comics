import MainIcon from "./MainIcon";
import Alert from "./user-interface/Alert";

export default function Main() {
  return (
    <main>
      <div id="content">
        <Alert />
        <div className="container py-5">content here</div>
      </div>
      <MainIcon />
    </main>
  );
}
