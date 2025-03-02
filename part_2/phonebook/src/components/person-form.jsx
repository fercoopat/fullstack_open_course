export default function PersonForm({ persons, onAddPerson }) {
  const handleSubmit = (e) => {
    e?.preventDefault();

    const formData = Object.fromEntries(new FormData(e?.target));

    if (persons?.some((person) => person?.name === formData?.name)) {
      window.alert(`${formData?.name} is already added to phonebook`);
    } else if (persons?.some((person) => person?.number === formData?.number)) {
      window.alert(`${formData?.number} is already added to phonebook`);
    } else {
      onAddPerson(formData);
    }

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
            pattern='[0-9]{10}'
          />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <button type='submit'>+ Add</button>
        </div>
      </fieldset>
    </form>
  );
}
