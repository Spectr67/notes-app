function handleAddNote(noteText) {
  model.addNote(noteText)
  let number = model.noteCount()
  let notes = model.notes

  renderNotes(notes)
  renderNotesCounter(number)
}

function handleDeliteNote(noteText) {
  model.deleteNote(noteText)
  const number = model.noteCount()
  renderNotesCounter(number)
}

function handleEditNote(oldText, newText) {
  model.editNote(oldText, newText)
  let notes = model.notes
  renderNotes(notes)
}
