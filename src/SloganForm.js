export default function SloganForm({ sloganInput, setSloganInput, handleSubmit }) {

  return (
    <section>
      {/* on submit, call the handleSubmit function, defined above */}
      <form onSubmit={handleSubmit}>
        Add a slogan to the list!
        {/* on change, set the sloganInput in state to be the input value */}
        {/* also, weirdly, set the value of this input to the sloganInput tracked in state to make this a 'controlled' form input */}
        <input value={sloganInput} onChange={e => setSloganInput(e.target.value)}/>
        <button>Submit</button>
      </form>
    </section>
  );
}
