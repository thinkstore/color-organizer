import React from 'react';

const AddColorForm = ({ onNewColor = f => f }) => {
    let _title , _color ;

    const submit =  e  => {
        e.preventDefault()
        onNewColor( _title.value , _color.value );
        _color.value = '#000000'
        _title.value = ''
        _title.focus()
    }

    return (
        <form className="color" onSubmit={ submit }>
            <input 
                ref = { input => _title = input }
                type="text"
                placeholder="color title..." 
                required />
            <input 
                ref = { input => _color = input }
                type="color" 
                required />

            <input type="submit" value="Add"/>
        </form>
    )
}  

export default AddColorForm;