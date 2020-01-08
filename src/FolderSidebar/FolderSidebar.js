import React, { Component } from 'react';
import Folder from '../Folder/Folder';
import { Link } from 'react-router-dom';



class FolderSidebar extends Component {


  findFolder = () => {
    return this.props.folders.map(folder => 
    <Folder 
      name={folder.name} 
      id={folder.id}
      notes={this.props.notes}
      key={folder.id}
    />
      )
  }

  render(){
    return (
      <section>
        {this.findFolder()}

        <Link to={'/add-folder'} className='addFolder' type='button'>Add Folder
        </Link>
      </section>
    )
  }
}

export default FolderSidebar;