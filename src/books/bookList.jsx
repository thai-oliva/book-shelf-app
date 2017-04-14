import React from 'react'

export default props => {

    const renderRows = () => {
        const list = props.list.items || []
        return list.map(book => (
            <tr key={book.id}>
                <td>{book.volumeInfo.title}</td>
                <td><a href={book.volumeInfo.previewLink}>{book.volumeInfo.previewLink}</a></td>
            </tr>            
        ))
    }

    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Resume</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
 }
