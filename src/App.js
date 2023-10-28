import { useEffect, useState } from 'react';
import './App.css';
import Form from './Form';
import Table from './Table';

function App() {
  // object contact
  const contact = {
    id: 0,
    name: "",
    email: "",
    phone: ""
  }

  // states
  const [btnCreate, setBtnCreate] = useState(false)
  const [contacts, setContacts] = useState([])
  const [objContact, setObjContact] = useState(contact)

  // effect for contacts reading
  useEffect(() => {
    fetch("http://localhost:8080/read")
      .then(data => data.json())
      .then(converted => setContacts(converted))
  }, [])

  // peek data from form
  const typing = (e) => {
    setObjContact({...objContact, [e.target.name]:e.target.value})
  }

  return (
    <div>
      {/* test */}
      {/* <p>{JSON.stringify(objContact)}</p> */}

      {/* output */}
      <Form btn={btnCreate} eventKeyboard={typing} />
      <Table vector={contacts}/>
    </div>
  );
}

export default App;
