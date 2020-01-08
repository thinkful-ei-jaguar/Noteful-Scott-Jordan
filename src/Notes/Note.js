import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Note extends Component{
  render(){
    return(
      <Link to={`/note/${this.props.id}`}>
        <div className='Note_item' folderid={this.props.folderId}>
          <h2 className='noteTitle'>{this.props.name}</h2>
          <p className='dateModified'>Date Modified: {this.props.modified} </p>
          <button className='deleteNote'>Delete Note</button>
        </div>
      </Link>
    )
  }
}

export default Note;