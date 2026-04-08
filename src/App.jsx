import './App.css'
import ControlField from './Components/ControlField/ControlField'
import FormAction from './Components/FormAction/FormAction'
import SimpleForm from './Components/SimpleForm/SimpleForm'

function App() {
  

  return (
    <>
      <h1>Explore React Form</h1>
      <SimpleForm></SimpleForm>
      <br />
      <h4>Form action </h4>
      <FormAction></FormAction>
      <br />
      <h4>Control Field</h4>
      <ControlField></ControlField>
    </>
  )
}

export default App
