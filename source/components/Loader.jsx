import React from 'react';
import BeatLoader from 'react-spinners/BeatLoader'

const Loader = ({loading}) => {
    return (
        <div style={{display: 'flex', justifyContent: 'center', marginTop: '30px'}}>
            <BeatLoader color={'black'} loading={loading} size={10} />
        </div>
    );
};

export default Loader;