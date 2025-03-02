export default function Filter({ search, onSearch }) {
  return (
    <div style={{ marginBottom: '1rem' }}>
      <label htmlFor='search'>Filter shown with: </label>
      <input type='search' name='search' value={search} onChange={onSearch} />
    </div>
  );
}
