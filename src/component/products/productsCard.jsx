export default function ProductCard({ comic }) {
  return (
    <div className="col-2">
      <div className="comic-container">
        <img className="comic-img" src={comic.thumb} alt={comic.title}></img>
      </div>
      <div className="py-3">{comic.series}</div>
    </div>
  );
}
