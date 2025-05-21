export default function Alert({ text, type }) {
  return (
    <div className="container">
      <div
        className={
          type
            ? `alert alert-${type} text-center`
            : `alert alert-danger text-center`
        }
      >
        {text || "Si è verificato un errore"}
      </div>
    </div>
  );
}
