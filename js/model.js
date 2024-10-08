const model = {
  notes: [
    // {
    //   id: 42,
    //   text: 'hello',
    //   isEditable: true,
    // },
  ],

  addNote(note) {
    this.notes.push(note)
  },

  deleteNote(noteText) {
    this.notes = this.notes.filter(note => note !== noteText)
  },

  editNote(oldText, newText) {
    const index = this.notes.indexOf(oldText)
    if (index !== -1) {
      this.notes[index] = newText
    }
  },

  noteCount() {
    let number = this.notes.length
    return number
  },
}
