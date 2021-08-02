import React from 'react';
import { DragDropContainer, DropTarget } from 'react-drag-drop-container';

class QC1S2App extends React.Component {
    render() {
        return (
            <div>
                <DragDropContainer targetKey="this" >
                    <div style={{ margin: '10px', borderStyle: 'solid' }}>This</div>
                </DragDropContainer>

                <DragDropContainer targetKey="is">
                    <div style={{ margin: '10px', borderStyle: 'solid' }}>is</div>
                </DragDropContainer>



                <DropTarget targetKey="this" >
                    <p style={{ margin: '10px', borderStyle: 'solid' }}>    </p>
                </DropTarget>

                <DropTarget targetKey="is" >
                    <p style={{ margin: '10px', borderStyle: 'solid' }}>    </p>
                </DropTarget>
            </div>
        )
    }
}

export default QC1S2App;