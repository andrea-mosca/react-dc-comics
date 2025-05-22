export default function ProductCard({ title, thumb }) {
  return (
    <div className="col-2">
      <div className="card">
        <img src={thumb} alt={title}></img>
        <div>{title}</div>
      </div>
    </div>
  );
}

{
  /* <div className="col-2">
      <div className="card">
        <img src={thumb} className="card-img-top" alt={title}></img>
        <div className="card-body">{title}</div>
      </div>
    </div> */
}
