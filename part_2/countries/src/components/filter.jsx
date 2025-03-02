export default function Filter({ search, onSearch }) {
  return (
    <div style={{ marginBottom: '1rem' }}>
      <label htmlFor='search'>Find countries </label>
      <input
        type='search'
        id='search'
        name='search'
        value={search}
        onChange={onSearch}
      />
    </div>
  );
}
