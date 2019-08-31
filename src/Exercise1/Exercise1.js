import React, {Component} from 'react';

export class Exercise1 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  rotarline(alphabet, spaces) {
    //recorre letras
    const new_line = alphabet.substring(0, spaces) + alphabet.substring(spaces, alphabet.length);
    return  new_line
  }

  printline() {
    //imprime las lineas del alfabeto 
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const alphabetArray =  Array.from(alphabet)
   return alphabetArray.map((letter, index) => {
        const line = this.rotarline(alphabet, index + 1);
        return <div key={letter + index}>{line}</div>;
    });
  }
  
  render() {
    return (
      <div className="container">
        Exercise1 page
        {this.printline()}
      </div>
    );
  }
}

export default Exercise1;
