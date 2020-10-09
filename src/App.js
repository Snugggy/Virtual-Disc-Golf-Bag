import React, { useState } from 'react';
import './App.css';
import logo from './disc-golf-basket.jpg'

function Disc({ disc, index }) {
  return(
    <div className="disc">
      { disc.discBrand }
      { ": " }
      { disc.discName }
      { " - "}
      { disc.discType}
      {"    "}
      {disc.discWeight}
    </div>
  )
}

function Header() {
  return (
    <div>
      <h1 className="headerStyle">
        <img className="basketImgLeft" src={logo} alt='' />
        Virtual Disc Golf Bag
        <img className="basketImgRight" src={logo} alt='' />
      </h1>
    </div>
  
  )
}



function DiscForm({ addDisc }) {
  const [discBrand, setDiscBrand] = useState('');
  const [discName, setDiscName] = useState('');
  const [discType, setDiscType] = useState('');
  const [discWeight, setDiscWeight] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if(!discBrand) return;
    if(!discName) return;
    if(!discType) return;
    if(!discWeight) return;
    addDisc(discBrand, discName, discType, discWeight);
    setDiscBrand('');
    setDiscName('');
    setDiscType('');
    setDiscWeight('');
  }

  return (
    <form >
      <input type="text" className="input" name="discName" value={discName} placeholder = "Disc Name" onChange={e => setDiscName(e.target.value)} />
      <select value={discBrand} className="dropDown" onChange={e => setDiscBrand(e.target.value)}>
        <option value="" selected disabled>Select Disc Brand</option>
        <option>Innova</option>
        <option>Discraft</option>
        <option>Dynamic Discs</option>
        <option>MVP</option>
        <option>Prodigy</option>
        <option>Westside</option>
        <option>Gateway</option>
        <option>Streamline</option>
        <option>DGA</option>
        <option>Millennium</option>
        <option>Mint Discs</option>
      </select>
      <select value={discType} className="dropDown" onChange={e => setDiscType(e.target.value)}>
        <option value="" selected disabled>Select Disc Type</option>
        <option>Distance Driver</option>
        <option>Fairway Driver</option>
        <option>Midrange</option>
        <option>Approach Putter</option>
        <option>Putter</option>
      </select>
      <select value={discWeight} className="dropDown" onChange={e => setDiscWeight(e.target.value)}>
        <option value="" selected disabled>Select Disc Weight</option>
        <option>Under 150</option>
        <option>150-160</option>
        <option>161</option>
        <option>162</option>
        <option>163</option>
        <option>164</option>
        <option>165</option>
        <option>166</option>
        <option>167</option>
        <option>168</option>
        <option>169</option>
        <option>170</option>
        <option>171</option>
        <option>172</option>
        <option>173</option>
        <option>174</option>
        <option>175</option>
        <option>176</option>
        <option>177</option>
        <option>178</option>
        <option>179</option>
        <option>180</option>
      </select>
      <input type="button" className="submitBtn" value="Submit New Disc" onClick={handleSubmit} /> 
    </form>
  )
}

function App() {
  const [discs, setDisc] = useState([
    {
      discBrand: 'Discraft',
      discName: 'Hades',
      discType: 'Distance Driver',
      discWeight: '174'
    },
    {
      discBrand: 'Innova',
      discName: 'Star FL',
      discType: 'Fairway Driver',
      discWeight: '175'
    },
    {
      discBrand: 'Westside Discs',
      discName: 'Gatekeeper',
      discType: 'Midrange',
      discWeight: '175'
    }



  ]);

  const addDisc = (discBrand, discName, discType, discWeight) => {
    const newDiscs = [...discs, { discBrand, discName, discType, discWeight }];
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
