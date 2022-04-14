import './App.css';
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import InputTemplate from './components/InputTemplate';
import Note from './components/Note';

function App() {

    const [notes, setNotes] = React.useState([]);//notes is an array that will hold the *not sure how to describe it*

    function addNote(note) { //I have successfully passed in my note object from the InputTemplate component
        setNotes([...notes, note]); //adding my note object into the notes array
    }

    function deleteNote(id){
        //console.log('hi');
        setNotes(notes => {
            return notes.filter((e,i) => { //filter takes a function as an argument
                return id !== i;
                }
            )
        })
    }

  return (
    <>
        <Header/>
        <InputTemplate click={addNote}/>
        {notes.map((note,i) => {
            return <Note key={i} id={i} clickDelete={deleteNote} title={note.title} content={note.content} />
        })}
        <Footer/>
    </>
  );
}

export default App;
