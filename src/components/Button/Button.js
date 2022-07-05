import '../styles.css';

export default function Button({ onClick }) {
  // console.log(onClick);
  return (
    <button type="button" className="Button" onClick={onClick}>
      Load more
    </button>
  );
}
