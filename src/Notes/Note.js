import React, { Component } from 'react';

class Note extends Component{
  render(){
    return(
      <div className='Note_item'>
        <h2 className='noteTitle'>Note 1</h2>
        <p className='dateModified'>Date Modified: 01/01/2020</p>
        <button className='deleteNote'>Delete Note</button>
      </div>
    )
  }
}

export default Note;