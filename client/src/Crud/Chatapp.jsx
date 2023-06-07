import React, { useState } from 'react';
import { posttodo } from '../Service/Api';

export default function TodoForm() {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
    await posttodo(title, desc);
  
    } catch (error) {
      console.error('Error occurred while creating todo', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />
      <button type="submit">search</button>
    </form>
  );
}