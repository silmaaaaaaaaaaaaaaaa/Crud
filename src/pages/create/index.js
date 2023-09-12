import {useState} from 'react';
import axios from 'axios';
import './index.css'
export default function CreatePage () {
    const [Name, setName] = useState('');
  const [Writter, setWritter] = useState('');
  const [Genre, setGenre] = useState('');
  const [Price, setPrice] = useState('');

  function Create() {
    axios.post('http://localhost:3030/book_library', {
      name: Name,
      writer: Writter,
      genre: Genre,
      price: Price,
    });
  }
    return(
        <div className='container-create'>
          <div className='nama'>
            <p>Nama</p>
            <input
        type='text'
        placeholder='Masukan Nama'
        onChange={(e) => setName(e.target.value)}
      />
          </div>
       <div className='writer'>
        <p>Penulis</p>
        <input
        type='text'
        placeholder='Masukan Penulis'
        onChange={(e) => setWritter(e.target.value)}
      />
       </div>
    <div className='kategori'>
      <p>Genre</p>
      <input
        type='text'
        placeholder='Masukan Genre'
        onChange={(e) => setGenre(e.target.value)}
      />
    </div>
      <div className='price'>
        <p>Harga</p>
        <input
        type='number'
        placeholder='Masukan Harga'
        onChange={(e) => setPrice(e.target.value)}
      />
      </div>
      <button onClick={() => Create()}>Create</button>
        </div>
    );
}