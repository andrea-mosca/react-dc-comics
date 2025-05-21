export default function Alert({ text, type, textColor }) {
  return (
    <div className="container">
      <div
        className={
          type
            ? `alert alert-${type} text-${textColor} text-center`
            : `alert alert-danger text-danger text-center`
        }
      >
        {text || "Si è verificato un errore"}
      </div>
    </div>
  );
}
