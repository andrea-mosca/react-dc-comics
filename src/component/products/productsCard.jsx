export default function ProductCard({ comic }) {
  return (
    <div className="col-2">
      <div className="card">
        <img src={comic.thumb} alt={comic.title}></img>
        <div>{comic.title}</div>
      </div>
    </div>
  );
}
