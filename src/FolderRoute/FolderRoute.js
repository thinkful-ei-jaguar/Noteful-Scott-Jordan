import React from 'react';
import FolderSidebar from '../FolderSidebar/FolderSidebar';
import NotesList from '../NotesList/NotesList';

function Main(props) {
  return(
    <div>
      <FolderSidebar />
      <NotesList />
    </div>
  )
}

export default Main;