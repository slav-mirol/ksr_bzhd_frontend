import React, { useState } from 'react';
import './style.css';

export default function SearchInput({
    loading,
    options,
    requests,
    placeholder,
    pick,
    setPower
}) {
    const [nameValue, setNameValue] = useState('');
    const [powerValue, setPowerValue] = useState('');

    const updateValue = (newValue) => {
        setNameValue(newValue);
        requests(newValue);
    };

    return (
        <div>
            <div className='row-btn-device'>
                <input className='input_name'
                    value={nameValue}
                    onChange={(input) => updateValue(input.target.value)}
                    placeholder={placeholder}
                />
            <div className='grid_power_input'>
                  <input className='input_power'
                  value={powerValue}
                  placeholder='Мощность'
                  onChange={(input) => {
                    setPower(input.target.value);
                    setPowerValue(input.target.value);
                    }}/>
                  <p className='Vatts_text'>Вт</p>
              </div>
              </div>
            
            {loading && <button className='Li'>Loading...</button> }
            {options?.length > 0 && !loading &&
                <div className='SuggestContainer'>
                    <div className='Ul'>
                        {options?.map((value, index) => {
                            return <button className='Li' key={`${value.power}-${index}`}
                                onClick={() => {
                                    pick(value);
                                    setPowerValue(value.power);
                                    setNameValue(value.name);
                                }}>{value.name}, {value.power} Вт</button>
                        })}
                </div>
            </div>}
        </div>
    );
}