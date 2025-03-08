export default function PersonForm({ onSubmit }) {
  const handleSubmit = (e) => {
    e?.preventDefault();

    const formData = Object.fromEntries(new FormData(e?.target));

    onSubmit(formData);

    e?.target?.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend style={{ fontWeight: 600 }}>Add a new</legend>
        <div style={{ marginBlock: '1rem' }}>
          <label htmlFor='name'>Name: </label>
          <input required type='text' id='name' name='name' />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor='number'>Number: </label>
          <input
            required
            type='tel'
            id='number'
            name='number'
            pattern='^\d{2,3}-\d{6,}$'
            title='Please enter a valid phone number in the format: 09-1234556 or 040-12345678.'
          />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <button type='submit'>+ Add</button>
        </div>
      </fieldset>
    </form>
  );
}
