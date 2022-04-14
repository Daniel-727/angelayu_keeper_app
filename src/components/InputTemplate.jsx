import React from 'react';

function InputTemplate(props) {

    const [note, setNote] = React.useState({
        title: '',
        content: ''
    }); //note is an object that has a title and content (which are empty strings)

    function handleChange(e){
        const {name, value} = e.target; //e.target is an object, if I want to desctucture it, it must be with {} instead of [] like an array
        if (name === 'title') {
            setNote(prevNote => {
                return (
                    {
                        title: value,
                        content: prevNote.content
                    }
                );
            });
        } else {
            setNote(prevNote => {
                return (
                    {
                        title: prevNote.title,
                        content: value
                    }
                );
            });
        }
    }

    function handleClick(e){ //once handleClick is executed we want our addNote function from App to execute as well
        
        props.click(note);//this is the addNote function we passed in through props */

        e.preventDefault(); //since this button is in a form, this prevents the default form behavior of refreshing the page after 'submitting' a form
    }

    return(
        <form default>
            <input 
                onChange={handleChange}placeholder='Title'
                name='title'>
            </input>
            <textarea 
                onChange={handleChange}placeholder='Take a note...' name='content'>
            </textarea>
            <button onClick={handleClick}>Add</button> {/*we must use an arrow function to pass the global event into our handleClick function for some reason, ask a friend about this (got rid of the code for the because I don't actually need it, but still ask friend)*/}
        </form>
    )
}

export default InputTemplate;