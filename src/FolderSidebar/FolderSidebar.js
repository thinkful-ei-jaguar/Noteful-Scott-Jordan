import React, { Component } from 'react';
import Folder from '../Folder/Folder';

class FolderSidebar extends Component {
  render(){
    return (
      <section>
        <Folder />
        <Folder />
        <Folder />

        <button className='addFolder' type='button'>Add Folder</button>
      </section>
    )
  }
}

export default FolderSidebar;