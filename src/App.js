import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './Header/Header';
import State from './state';
import Main from './Main/Main';
import FolderSidebar from './FolderSidebar/FolderSidebar';
import NoteExtended from './notes/NoteExtended';
import FolderSidebarGoBack from './FolderSidebar/FolderSidebarGoBack';
import NotesList from './NotesList/NotesList';
import ComponentNotFound from './ComponentNotFound/ComponentNotFound';


class App extends Component {
  state = State
  render(){
    return (
      <div className="App">
        <Switch>
          <Route 
              exact 
              path='/'
              render={(routeprops) => 
                <Main {...routeprops} folders={this.state.folders} notes={this.state.notes}/>
            }
          />
          <Route 
            exact 
            path='/folder/:folder_id'
            render={(routeprops) => {
              console.log(this.state.notes)
              console.log(this.state.folders)
                return <>
                <Header />
                <FolderSidebar folders={this.state.folders} notes={this.state.notes}/>
                <NotesList {...routeprops} folders={this.state.folders} notes={this.state.notes}/>
                </>
              }  
            }
          />
          <Route 
            exact 
            path='/note/:note_id'
            render={() => {
              return <>
                  <Header />
                  <FolderSidebarGoBack />
                  <NoteExtended />
                </>
              }
            }
          />
            <Route 
              render={() => 
                <>
                <Header />
                <ComponentNotFound />  
                </>
            }
          />
        </Switch>

      </div>
    );
  }
}

export default App;
