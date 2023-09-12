import {useState,useEffect} from 'react';
import './index.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
export default function LandingPage () {
    const [Data, setData] = useState([]);
  useEffect(() => {
    axios
      .get('http://localhost:3030/book_library')
      .then((ress) => setData(ress));
    }, []);
    function Delete(id) {
        axios.delete(`http://localhost:3030/book_library/${id}`).then(() => {
          axios
            .get('http://localhost:3030/book_library')
            .then((ress) => setData(ress));
        });
      }
    console.log(Data);
    return(
        <>
        <h3> DATA SISWA </h3>
        <div className='container'>
        
            <table className='table'>
                <tr>
                  <th>No</th>
                  <th>Judul Buku</th>
                  <th>Penulis</th>
                  <th>Genre</th>
                  <th>Harga</th>
                  <th colSpan={2}>aksi</th>
                </tr>
                {Data?.data?.map((data, indexData) => (
            <tr key={indexData}>
              <td>{indexData}</td>
              <td>{data.name}</td>
              <td>{data.writer}</td>
              <td>{data.genre}</td>
              <td>{data.price}</td>
              <td>
                <Link to={`/edit/${data.id}`}>
                  <button className='update'>Update</button>
                </Link>
              </td>
              <td>
              <button className='delete' onClick={() => Delete(data.id)}>Delete</button>
              </td>
            </tr>
          ))}
            </table>
            <Link to='/create'>
              <button className='create'>Create</button>
            </Link>
        </div>
        </>
        )
    
}
       
