function generateNote(noteText, isEditable) {
  const elDivCard = document.createElement('div')
  const elDivContent = document.createElement('div')
  const elDivActions = document.createElement('div')
  const elTextarea = document.createElement('textarea')
  const elP = document.createElement('p')
  const elButtonDelete = document.createElement('button')

  elDivCard.classList.add('note-card')
  elDivContent.classList.add('note-content')
  elDivActions.classList.add('note-actions')
  elButtonDelete.textContent = 'Удалить'
  elP.textContent = noteText
  elTextarea.value = noteText
  elButtonDelete.onclick = onClickDeleteNote

  elTextarea.addEventListener('blur', onBlurTextarea)
  elP.addEventListener('dblclick', onDblClickNoteP)

  elDivCard.appendChild(elDivContent)
  elDivCard.appendChild(elDivActions)
  elDivActions.appendChild(elButtonDelete)

  if (isEditable) {
    elDivContent.appendChild(elTextarea)
  } else {
    elDivContent.appendChild(elP)
  }

  return elDivCard
}

let oldText = ''

function onDblClickNoteP(e) {
  const noteText = e.target.textContent
  oldText = noteText
  renderNotes(model.notes)
}

function onBlurTextarea(e) {
  const noteText = e.target.value
  handleEditNote(oldText, noteText)
}

function renderNotes(notes, isEditable) {
  const elDivNotes = document.querySelector('.notes')
  elDivNotes.textContent = ''
  notes.forEach(noteText => {
    const elDivNoteCard = generateNote(noteText, isEditable)
    elDivNotes.appendChild(elDivNoteCard)
  })
}

function onClickAddNote() {
  const elTextArea = document.querySelector('#note-content')
  handleAddNote(elTextArea.value)
  elTextArea.value = ' '
}

function onClickDeleteNote(e) {
  const elNoteCard = e.target.closest('.note-card')
  const elNoteContent = elNoteCard.querySelector('.note-content p')
  const noteText = elNoteContent.textContent

  handleDeliteNote(noteText)
  elNoteCard.remove()
}

function renderNotesCounter(number) {
  const elSpanNoteCount = document.querySelector('.notes-count')
  elSpanNoteCount.textContent = `Всего заметок: ${number}`
}

const elBtnAddNote = document.querySelector('#add-note')
elBtnAddNote.onclick = onClickAddNote
