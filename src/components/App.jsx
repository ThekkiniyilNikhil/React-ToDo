import * as React from 'react';
import * as ReactDOM from 'react-dom';
import '../App.css';
import Note from './note';



export class App extends React.Component{
    static initUI(element)
    {
        ReactDOM.render(<App/>, element);
    }

    constructor(props) {
        super(props);
        this.state = {
            noteText: '',
            notes: []
        }
    }

    updateNoteText(noteText) {
        this.setState({ noteText: noteText.target.value })
    }
    handleKeyPress(event) {
      if(event.key === 'Enter'){
          let noteArr = this.state.notes;
          noteArr.push(this.state.noteText);
          this.setState({noteText: ''});
      }
    }s
    deleteNote(index) {
        let noteArr = this.state.notes;
        noteArr.splice(index, 1);
        this.setState({notes:noteArr});
    }
    addNote() {
        if(this.state.noteText === '') {return};
        let noteArr = this.state.notes;
        noteArr.push(this.state.noteText);
        this.setState({noteText: ''});
        this.textInput.focus();
    }


    render(){

        let notes = this.state.notes.map((val, key) => {
            return <Note key={key} text={val} deleteMethod={() => this.deleteNote(key)} />
        });

        return(
            <div className="container">
                <div className="header">React TODO Application</div>
                {notes}
                <button className="btn" onClick={this.addNote.bind(this)}>+</button>
                <input type="text"
                       ref={((input) => {this.textInput = input})}
                       className="textInput"
                       value={this.state.noteText}
                       onChange={noteText => this.updateNoteText(noteText)}
                       onKeyPress={this.handleKeyPress.bind(this)}/>
            </div>
        );
    }
}