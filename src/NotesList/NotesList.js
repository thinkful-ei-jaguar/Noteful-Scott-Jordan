import React, { Component } from 'react';
import Note from '../Notes/Note';

class NotesList extends Component {
  render(){
    return(
      <section>
        {/* Call each note */}
        <Note />
        <Note />
        <Note />
        <Note />
        
        <button className='addNote' type='button'>
          Add note
        </button>
      </section>
    )
  }
}

export default NotesList;