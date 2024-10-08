function handleAddNote(NoteText) {
  renderNewNoteCard(NoteText)
  model.addNote(NoteText)
  let number = model.noteCount()
  renderNoteCount(number)
}

function handleDeliteNote(noteText) {
  model.deleteNote(noteText)
  const number = model.noteCount()
  renderNoteCount(number)
}

function handleEditNote(oldText, newText) {
  model.editNote(oldText, newText)
}
