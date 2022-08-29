import { Routes, Route } from 'react-router-dom';
import {
  Landing,
  AddCollaboratorInfo,
  AddPcInfo,
  AddNote,
  Success,
  ProductsList,
  ProductPage,
} from './Pages';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/add-note' element={<AddNote />}>
          <Route path='collaborator-info' element={<AddCollaboratorInfo />} />
          <Route path='pc-info' element={<AddPcInfo />} />
          <Route path='success' element={<Success />} />
        </Route>
        <Route path='/note-list' element={<ProductsList />} />
        <Route path='/note-list/:id' element={<ProductPage />} />
      </Routes>
    </>
  );
}

export default App;
