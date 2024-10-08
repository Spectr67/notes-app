function generateNote(NoteText) {
  const elDivNoteCard = document.createElement('div')
  const elDivNoteContent = document.createElement('div')
  const elDivNoteActions = document.createElement('div')
  const elPNoteTextContent = document.createElement('p')
  const elBtnDeleteNote = document.createElement('button')

  elDivNoteCard.classList.add('note-card')
  elDivNoteContent.classList.add('note-content')
  elDivNoteActions.classList.add('note-actions')
  elBtnDeleteNote.textContent = 'Удалить'
  elPNoteTextContent.textContent = NoteText
  elBtnDeleteNote.onclick = onClickDeleteNote

  elDivNoteCard.appendChild(elDivNoteContent)
  elDivNoteCard.appendChild(elDivNoteActions)
  elDivNoteContent.appendChild(elPNoteTextContent)
  elDivNoteActions.appendChild(elBtnDeleteNote)

  elDivNoteContent.addEventListener('dblclick', () => {
    const p = elDivNoteContent.querySelector('p')
    const textarea = document.createElement('textarea')
    textarea.value = NoteText
    elDivNoteContent.replaceChild(textarea, p)

    textarea.addEventListener('blur', () => {
      NoteText = textarea.value
      const newP = document.createElement('p')
      newP.textContent = NoteText
      elDivNoteContent.replaceChild(newP, textarea)

      handleEditNote(p.textContent, NoteText)
    })
  })

  return elDivNoteCard
}

function renderNewNoteCard(NoteText) {
  const elDivNotes = document.querySelector('.notes')
  const elDivNoteCard = generateNote(NoteText)
  elDivNotes.appendChild(elDivNoteCard)
}

const ElBtnAddNote = document.querySelector('#add-note')
ElBtnAddNote.onclick = onClickAddNote

function onClickAddNote() {
  let NoteText = document.querySelector('#note-content').value
  handleAddNote(NoteText)
  const elTextArea = document.querySelector('#note-content')
  elTextArea.value = ' '
}

function onClickDeleteNote(e) {
  const noteCard = e.target.closest('.note-card')
  const noteContent = noteCard.querySelector('.note-content p')
  const noteText = noteContent.textContent

  handleDeliteNote(noteText)
  noteCard.remove()
}

function renderNoteCount(number) {
  const elSpanNoteCount = document.querySelector('.notes-count')
  elSpanNoteCount.textContent = `Всего заметок: ${number}`
}
