import React, { useState, useEffect } from 'react';
import './style.css';

const kf = []

export default function Checkbox(props) {
  const { t, products, mp, colorSet, unique, gender } = props;

  const [isChecked, setChecked] = useState(false);
  const [t1, isT] = useState('first');
  const [m, setM] = useState([]);

  const handleClick = (e) => {
    setChecked((prev) => !prev);
    let u = e.target.name;
    console.log(e.target.name);

    console.log(unique, 'u');
    console.log(gender, 'gn',);

    
    if (unique.includes(u)) {
      const k = products.filter((x) => x.color === u);
      
      setM(m.push(...k));
    } 

    if(u == 'Men' || 'Women'){

    
    const k2 = products.filter((x) => x.gender === u);
    setM(m.push(...k2));
    }
    if (u == 250) {
      const k3 = products.filter((x) => x.price == u);

      setM(m.push(...k3));
    }
    if (u == '251-449') {
      const k4 = products.filter((x) => x.price > 250 && x.price < 450);
      console.log(k4);
      setM(m.push(...k4));
    }
    if (u == '450+') {
      const k5 = products.filter((x) => x.price > 449);
      setM(m.push(...k5));
    }

    if(u == 'Polo' || 'Hoodie' || 'Basic'){
      const k6 = products.filter((x) => x.type == u);
      setM(m.push(...k6));
    }


    colorSet(m);
    console.log(u,'uuu')
     
    console.log(m,'mm')
    //console.log(products)

     
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          name={t}
          checked={isChecked}
          onChange={handleClick}
        />
        {t}
      </label>

      <div></div>
    </div>
  );
}
