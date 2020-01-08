import React, { Component } from 'react';


class FolderSidebarGoBack extends Component {
  render(){
    return (
      <section>
        <button className='goBack' type='button'>Go Back</button>
        <h2 className='currentFolder'>Folder 1</h2>
      </section>
    )
  }
}

export default FolderSidebarGoBack;