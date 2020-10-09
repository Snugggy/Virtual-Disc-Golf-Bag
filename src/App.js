import React, { useState } from 'react';
import './App.css';

function Disc({ disc, index }) {
  return(
    <div className="disc">
      { disc.discBrand }
      { ": " }
      { disc.discName }
      { " - "}
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
  const [discBrand, setDiscBrand] = useState('');
  const [discName, setDiscName] = useState('');
  const [discType, setDiscType] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if(!discBrand) return;
    if(!discName) return;
    if(!discType) return;
    addDisc(discBrand, discName, discType);
    setDiscBrand('');
    setDiscName('');
    setDiscType('');
  }

  return (
    <form >
      <input type="text" className="input" name="discBrand" value={discBrand} placeholder = "Disc Brand" onChange={e => setDiscBrand(e.target.value)} />
      <input type="text" className="input" name="discName" value={discName} placeholder = "Disc Name" onChange={e => setDiscName(e.target.value)} />
      <input type="text" className="input" name="discType" value={discType} placeholder = "Disc Type" onChange={e => setDiscType(e.target.value)} />
      <input type="button" className="submitBtn" value="Submit New Disc" onClick={handleSubmit} /> 
    </form>
  )
}

function App() {
  const [discs, setDisc] = useState([
    {
      discBrand: 'Discraft',
      discName: 'Hades',
      discType: 'Driver',
    },
    {
      discBrand: 'Innova',
      discName: 'Star FL',
      discType: 'Driver',
    },
    {
      discBrand: 'Westside Discs',
      discName: 'Gatekeeper',
      discType: 'Midrange',
    }
  ]);

  const addDisc = (discBrand, discName, discType) => {
    const newDiscs = [...discs, { discBrand, discName, discType }];
    setDisc(newDiscs);
  };

  return (
    <div className="app">
      <div>
        <Header />
      </div>
      <div>
        <h3 className="discGolfHeader">My Disc Golf bag</h3>
      </div>
      <div className="disc-list">
        {discs.map((disc, index) => (
          <Disc key={index} index={index} disc={disc} />
        ))}
        <br></br>
        <DiscForm addDisc={addDisc} />
      </div>
    </div>  

  )

}

export default App;
