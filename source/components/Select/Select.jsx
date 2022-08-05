import React from 'react';

const Select = ({options, defaultValue, value, onChange}) => {
    return (
        <select 
        value={value}
        onChange={event => onChange(event.target.value)}
        style={{marginTop: '15px'}}>
            <option disabled value=''>{defaultValue}</option>
            {options.map(option => 
                <option key={option.value} value={option.value}>
                    {option.name}
                </option>    
            )}
        </select>
    );
};

export default Select;