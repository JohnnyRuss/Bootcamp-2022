import { Container, AddNoteNavigation } from '../components/AddNotePage';
import { Outlet } from 'react-router-dom';

function AddNote() {
  return (
    <Container>
      <AddNoteNavigation />
      <Outlet />
    </Container>
  );
}

export default AddNote;
