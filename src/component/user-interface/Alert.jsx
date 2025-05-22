export default function Alert({ text, type, textColor, children }) {
  const content = children || text || "Si è verificato un errore";
  return (
    <div className="container">
      <div
        className={
          type
            ? `alert alert-${type} text-${textColor} text-center`
            : `alert alert-danger text-danger text-center`
        }
      >
        {content}
      </div>
    </div>
  );
}
