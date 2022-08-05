import React from 'react'

import Input from './Input/Input'
/* import Select from './components/Select/Select'; */

const PostFilter = ({filter, setFilter}) => {
    return (
        <div>
            <Input
                placeholder='Search posts'
                value={filter.query}
                onChange={event => setFilter({...filter, query: event.target.value})
            }>
            </Input>
            {/* <Select
                value={filter.sort}
                onChange={selectedSort => setFilter({...filter, sort: seletedSort})}     
                defaultValue="Choose"
                options={[
                    {value: 'title', name: 'Name'},
                    {value: 'body', name: 'Description'}
                ]}>
            </Select> */}
        </div>
    );
};

export default PostFilter;