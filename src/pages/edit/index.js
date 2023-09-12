import { useState, useEffect } from 'react';
import axios from 'axios';
import './index.css';
import { useParams } from 'react-router-dom';

export default function EditPage() {
  const params = useParams();
  const id = params.id;
  const [Name, setName] = useState('');
  const [Writter, setWritter] = useState('');
  const [Genre, setGenre] = useState('');
  const [Price, setPrice] = useState('');

  useEffect(() => {
    axios.get(`http://localhost:3030/book_library/${id}`).then((ress) => {
      setName(ress.data.name);
      setWritter(ress.data.writer);
      setGenre(ress.data.genre);
      setPrice(ress.data.price);
    });
  }, [id]);

  function Edit() {
    axios.put(`http://localhost:3030/book_library/${id}`, {
      name: Name,
      writer: Writter,
      genre: Genre,
      price: Price,
    });
  }
  return (
    <div className='container-edit'>
      <div className='nama'>
      <p>Name</p>
      <input
        type='text'
        value={Name}
        placeholder='Masukan Nama'
        onChange={(e) => setName(e.target.value)}
      />
      </div>
      <div className='penulis'>
        <p>Penulis</p>
      <input
        type='text'
        value={Writter}
        placeholder='Masukan Penulis'
        onChange={(e) => setWritter(e.target.value)}
      />
      </div>
      <div className='genre'>
        <p>Genre</p>
        <input
        type='text'
        value={Genre}
        placeholder='Masukan Genre'
        onChange={(e) => setGenre(e.target.value)}
      />
     </div>
      <div className='Harga'>
        <p>Harga</p>
        <input
        type='number'
        value={Price}
        placeholder='Masukan Harga'
        onChange={(e) => setPrice(e.target.value)}
      />
      </div>
      <button onClick={() => Edit()}>Edit</button>
    </div>
  );
}