import React from 'react';

export default function Dropdown({ setCastleId, setSkylineId, setWaterfrontId }) {
  return (
    <section>
      <div className='castle'>
      Select a Castle
        <select onChange={(e) => setCastleId(e.target.value)}>
          <option value={1}>Serious</option>
          <option value={2}>Mysterious</option>
          <option value={3}>Regal</option>
        </select>
      </div>
      <div className='skyline'>
      Select a Skyline
        <select onChange={(e) => setSkylineId(e.target.value)}>
          <option value={1}>Pink</option>
          <option value={2}>Busy</option>
          <option value={3}>Foggy</option>
        </select>
      </div>
      <div className='waterfront'>
      Select a Waterfront
        <select onChange={(e) => setWaterfrontId(e.target.value)}>
          <option value={1}>Dock</option>
          <option value={2}>Sunset</option>
          <option value={3}>Boats</option>
        </select>
      </div>
    </section>
  );
}
