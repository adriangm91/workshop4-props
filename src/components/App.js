import React from "react";
import Table from "./Table";

// al ser un componente se pone en mayuscula
class App extends React.Component { 
    render(){
      const characters = [
        {
          name: 'John',
          job: 'Smither'
        },
        {
          name: 'Clyde',
          job: 'Carpenter'
        },
        {
          name: 'Wanda',
          job: 'Engineer'
        },
        {
          name: 'Claudia',
          job: 'Manager'
        },
      ];
      return (
        <div className='container'>
          <Table characters={characters} />
        </div>
      );
    }
  }

  export default App;