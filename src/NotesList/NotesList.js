import React, { Component } from 'react';
import Note from '../notes/Note';

class NotesList extends Component {
  
  createNotes = () => {
    if(this.props.match.params.folder_id) {
      return this.props.notes.filter(note => note.folderId === this.props.match.params.folder_id).map(note => 
        <Note 
          name={note.name} 
          id={note.id}
          modified={note.modified}
          folderId={note.folderId}
          key={note.id}
        />
          )
    } else {
      return this.props.notes.map(note =>
        <Note 
          name={note.name} 
          id={note.id}
          modified={note.modified}
          folderId={note.folderId}
          key={note.id}
        /> 
      );
    }
  }
  
  
  render(){
    return(
      <section>
        {/* Call each note */}
        {this.createNotes()}
        
        <button className='addNote' type='button'>
          Add note
        </button>
      </section>
    )
  }
}

export default NotesList;