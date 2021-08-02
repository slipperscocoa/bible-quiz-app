import React from 'react'; 
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

function QC1S1App() {
    const Chapter1Verse1 = ['This', 'is', 'the', 'genealogy', 'of', 'Jesus', 'the', 'Messiah', 'the', 'son', 'of', 'David', 'the', 'son', 'of', 'Abraham'];
    
    const List = props => {
        const listItems = props.Chapter1Verse1.map((item, index) => (
            <li key={index}>{item}</li>
        ));
        return <DragDropContext>
                    <Droppable droppableId="Chapter1Verse1">
                        {(provided) => (
                            <ul className="Chapter1Verse1" {...provided.droppableProps} ref={provided.innerRef}>
                                {listItems}
                            </ul>
                        )}
                    </Droppable>
                </DragDropContext>
    }

    return(
        <div>
            <List Chapter1Verse1={Chapter1Verse1} />
        </div>
    )
}
// class QC1S1App extends React.Component {
//     // click() {
//     //     for (var i = 0; i < Chapter1Verse1.length; i++) {
//     //         <li>{(Chapter1Verse1[i])}</li>;
//     //     }
//     // }
//     render() {
//         return (
//             <div>
//                 <button onClick={this.click}>Click</button>
//             </div>
//         )
//     }
// }

export default QC1S1App; 