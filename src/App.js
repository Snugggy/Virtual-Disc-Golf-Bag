import React, { useState } from 'react';
import './App.css';

function Disc({ disc, index }) {
  return(
    <div className="disc">
      { disc.brand }
      { ": " }
      { disc.text }
      { "- "}
      { disc.discType}
    </div>
  )
}

function Header() {
  return (
    <h1 className="headerStyle">Virtual Disc Golf Bag</h1>

  
  )
}

function DiscForm({ addDisc }) {
  const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if(!value) return;
    addDisc(value);
    setValue('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" className ="input" value={value} placeholder = "Add Disc" onChange={e => setValue(e.target.value)} />
    </form>
  )
}

function App() {
  const [discs, setDisc] = useState([
    {
      brand: 'Discraft',
      text: 'Hades',
      discType: 'Driver',
      isCompleted: false
    },
    {
      brand: 'Innova',
      text: 'Star FL',
      discType: 'Driver',
      isCompleted: false
    },
    {
      brand: 'Westside Discs',
      text: 'Gatekeeper',
      discType: 'Midrange',
      isCompleted: false
    }
  ]);

  const addDisc = text => {
    const newDiscs = [...discs, { text }];
    setDisc(newDiscs);
  };

  return (
    <div className="app">
      <Header />
      <div>
        <h3 className="discGolfHeader">My Disc Golf bag</h3>
      </div>
      <div className="disc-list">
        {discs.map((disc, index) => (
          <Disc key={index} index={index} disc={disc} />
        ))}
        <DiscForm addDisc={addDisc} />
      </div>
    </div>  

  )

}

export default App;
