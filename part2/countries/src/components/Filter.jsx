export default function Filter({ label, disabled, value, onChange }) {
  return (
    <div>
      {label}{' '}
      <input
        type='text'
        disabled={disabled}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
