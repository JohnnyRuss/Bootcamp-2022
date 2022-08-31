import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import { Landing, AddNote } from './Pages';
import { Spinner } from './components/Layouts';

const AddCollaboratorInfo = lazy(() => import('./Pages/AddCollaboratorInfo'));
const AddPcInfo = lazy(() => import('./Pages/AddPcInfo'));
const ProductsList = lazy(() => import('./Pages/ProductsList'));
const ProductPage = lazy(() => import('./Pages/ProductPage'));

function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/add-note' element={<AddNote />}>
          <Route path='collaborator-info' element={<AddCollaboratorInfo />} />
          <Route path='pc-info' element={<AddPcInfo />} />
        </Route>
        <Route path='/note-list' element={<ProductsList />} />
        <Route path='/note-list/:id' element={<ProductPage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
