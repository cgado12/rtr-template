import React from 'react';
import {Button} from 'react-bootstrap'
// @ts-ignore
import {Typeahead} from 'react-bootstrap-typeahead'

const TypeAhead: React.FC = () => {

    return(
        <>
        <Typeahead
        labelKey={(option:any) => `${option.firstName} ${option.lastName}`}
        options={[
          {firstName: 'Art', lastName: 'Blakey'},
          {firstName: 'John', lastName: 'Coltrane'},
          {firstName: 'Miles', lastName: 'Davis'},
          {firstName: 'Herbie', lastName: 'Hancock'},
          {firstName: 'Charlie', lastName: 'Parker'},
          {firstName: 'Tony', lastName: 'Williams'},
        ]}
        minLength={1}
        placeholder="Who's the coolest cat?"
      />
      <Button variant="outline-success">Search</Button>
      </>
    )
}
export default TypeAhead