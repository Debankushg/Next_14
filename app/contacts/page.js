'use client'

import React, { useState, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import postDataStore from '../../zustand/store';

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
    const { data, loading, error, fetchData } = postDataStore();
    const deletePost = postDataStore((state) => state.deletePost);


    useEffect(() => {
        fetchData();
    }, [fetchData]);



    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

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
        <>

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


            <div className="container mx-auto p-4">
                <h1 className="text-2xl font-bold mb-4">Posts of Employee</h1>
                {data ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {data.map(({ id, title, body, userId }) => (<div className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-4">
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2 text-gray-800">Title: {title}</div>
                                <p className="text-gray-700 text-base">{body}</p>
                            </div>
                            <div className="px-6 pt-4 pb-2">
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                    User ID: {userId}
                                </span>
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                    Post ID: {id}
                                </span>

                                <button
                                    onClick={() => deletePost(id)}
                                    className="mt-2 bg-red-500 text-white px-3 py-1 rounded"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>))}
                    </div>
                ) : (
                    <div className="text-center text-gray-500">No data available</div>
                )}
            </div>
        </>
    );
};

export default page;
