import React from 'react';
import { NavLink } from 'react-router-dom';
import NotesList from '../NotesList/NotesList';


function Folder(props){

  return(
    <div className='folder_item' >
      <NavLink to={`/folder/${props.id}`}> 
         {props.name}
      </NavLink>
    </div>
  )
}

export default Folder;