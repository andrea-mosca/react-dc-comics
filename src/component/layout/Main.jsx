import MainIcon from "./MainIcon";
import Alert from "./user-interface/Alert";

export default function Main() {
  return (
    <main>
      <div id="content">
        <Alert text="alert prova succesfull" type="success" textColor="success">
          ecco un elenco di link utili:
          <ul>
            <li>
              <a href="#">errori comuni</a>
            </li>
            <li>
              <a href="#">possibili soluzioni</a>
            </li>
            <li>
              <a href="#">servizio clienti</a>
            </li>
            <li>
              <a href="#">F.A.Q.</a>
            </li>
          </ul>
        </Alert>
        <div className="container py-5">content here</div>
      </div>
      <MainIcon />
    </main>
  );
}
