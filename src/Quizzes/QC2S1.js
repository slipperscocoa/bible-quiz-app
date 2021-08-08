import React from 'react';
import {sortableContainer, sortableElement} from 'react-sortable-hoc';
import arrayMove from 'array-move';

const SortableItem = sortableElement(({value}) => <li style={{ border: 'solid black', padding: '10px' }}>{value}</li>);

const SortableContainer = sortableContainer(({children}) => {
  return <ul style={{ listStyleType: 'none', padding: '20px'}}>{children}</ul>;
});

class QC2S1App extends React.Component {
    state = {
        items: ['When', 'in', 'the', 'course', 'of', 'human', 'events', ],
      };

      // state = {
      //   items: [
      //     {
      //       value: 'When', 
      //       id: 0
      //     }, 
      //     {
      //       value: 'in',
      //       id: 1
      //     }, 
      //     {
      //       value: 'the',
      //       id: 2
      //     }, 
      //     {
      //       value: 'course', 
      //       id: 3
      //     }, 
      //     {
      //       value: 'of',
      //       id: 4
      //     }, 
      //     {
      //       value: 'human',
      //       id: 5
      //     }, 
      //     {
      //       value: 'events',
      //       id: 6
      //     }
      //   ]
      // };
    
      onSortEnd = ({oldIndex, newIndex}) => {
        this.setState(({items}) => ({
          items: arrayMove(items, oldIndex, newIndex),
        }));
        // if ({items} === 'When' && newIndex === 0 ) {
        //   console.log("This");
        // };
      };
    
      render() {
        const {items} = this.state;
    
        return (
          <SortableContainer onSortEnd={this.onSortEnd}>
            {items.map((value, index) => (
              <SortableItem key={`item-${value}`} index={index} value={value} />
            ))}
          </SortableContainer>
        );
      }
}

export default QC2S1App;