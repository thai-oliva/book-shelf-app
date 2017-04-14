import React from 'react'

import Grid from '../template/grid'
import IconButton from '../template/iconButton'

 export default props => (
    <div role='form' className='bookForm'>
        <Grid cols='12 9 10'>
            <input id='description' className='form-control'
                placeholder='Searching for a book?'
                onChange={props.handleChange}
                value={props.description}></input>
        </Grid>
        <Grid cols='12 3 2'>
            <IconButton style='info' icon='search'
                onClick={props.handleSearch}></IconButton>
        </Grid>
    </div>
 )