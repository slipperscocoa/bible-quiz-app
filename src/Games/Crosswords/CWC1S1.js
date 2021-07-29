import React from 'react';
import Crossword from '@jaredreisinger/react-crossword';

// var resetRef = React.createRef();

// var resetPuzzle = () => {
//     reset(); 
// };

const data = {
    across: {
        2: {
            clue: 'Author of War and Peace',
            answer: 'TOLSTOY',
            row: 1,
            col: 1,
        },
        4: {
            clue: 'Author of Ben-Hur',
            answer: 'WALLACE',
            row: 3,
            col: 0,
        }
    },
    down: {
        1: {
            clue: 'Author of Holmes',
            answer: 'DOYLE',
            row: 0,
            col: 2,
        },
    },
}

export default function CWC1S1App() {
    return (
        <div>
            <Crossword
                data={data}
                theme={{
                    columnBreakpoint: '9999px',
                    cellBackground: 'white',
                    cellBorder: '#fca',
                    textColor: 'black',
                    numberColor: 'black',
                    focusBackground: '#ffbf00',
                    highlightBackground: '#ffbf00',
                }}
                // ref={this.reset()}
            />
            {/* <button ref={this.resetRef} onClick={this.resetPuzzle}>Reset</button> */}
        </div>
    )
}