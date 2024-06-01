'use client'

import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

// Initial items
const initialItems = [
    { id: '1', content: 'Item 1', inputValue: '', submit: false },
    { id: '2', content: 'Item 2', inputValue: '', submit: false },
    { id: '3', content: 'Item 3', inputValue: '', submit: false },
    { id: '4', content: 'Item 4', inputValue: '', submit: false },
  ];

const page = () => {
    const [items, setItems] = useState(initialItems);
    const [input, setInput] = useState('')

    // Function to handle drag end event
    const handleOnDragEnd = (result) => {
        // If no destination, return
        if (!result.destination) return;

        // Create a copy of the items
        const reorderedItems = Array.from(items);

        // Splice the dragged item
        const [reorderedItem] = reorderedItems.splice(result.source.index, 1);

        // Insert it into the new position
        reorderedItems.splice(result.destination.index, 0, reorderedItem);

        // Update state with the new order of items
        setItems(reorderedItems);
    };


    const handleInputChange = (id, value) => {
        const updatedItems = items.map(item =>
            item.id === id ? { ...item, inputValue: value } : item
        );
        setItems(updatedItems);
    };

    const handleBtn = (id) => {
        const updatedItems = items.map((e) => {
          if (e.id === id) {
            return { ...e, submit: true };
          } else {
            return e;
          }
        });
        console.log(updatedItems); // You can keep this log to verify the changes
        setItems(updatedItems);
      };


    return (
        <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId="droppable" direction="horizontal">
                {(provided) => (
                    <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        style={{ display: 'flex', padding: '16px', width: '100%', maxHeight: '400px', backgroundColor: '#f0f0f0' }}
                    >
                        {items.map((item, index) => (
                            <Draggable key={item.id} draggableId={item.id} index={index}>
                                {(provided) => (
                                    <div
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                        style={{
                                            userSelect: 'none',
                                            padding: '16px',
                                            margin: '0 8px 0 0', // Horizontal margin between items
                                            minHeight: '50px',
                                            backgroundColor: '#fff',
                                            color: '#333',
                                            border: '1px solid lightgrey',
                                            width: '200px',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            ...provided.draggableProps.style,
                                        }}
                                    >
                                        <div>
                                            {item.content}
                                            <input
                                                type="text"
                                                value={item.inputValue}
                                                onChange={(e) => handleInputChange(item.id, e.target.value)}
                                                className='border border-solid border-orange-600 w-full outline-none'
                                            />
                                            <div className='flex items-end'>
                                                <button className='bg-orange-600 text-white px-2 py-0 rounded my-2' onClick={() => handleBtn(item.id)}>
                                                    Submit
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </Draggable>
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </DragDropContext>
    );
};

export default page;
