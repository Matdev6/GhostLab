import { useParams } from 'react-router-dom';
import { beats } from '../components/beatsData'; // Certifique-se de que o caminho está correto
import { Link } from 'react-router-dom';

const BeatDetails = () => {
  const { name } = useParams(); // Captura o parâmetro "name" da URL
  const beat = beats.find((b) => b.name === name); // Encontra o beat correspondente pelo nome

  if (!beat) {
    return <h1 className="text-white">Beat não encontrado</h1>;
  }

  return (
    <div className="text-white p-4 bg-black h-screen w-screen flex">
      <div className='m-auto'>
        <h1 className="text-3xl">{beat.name}</h1>
        <img src={beat.img} alt={beat.name} className="w-96 mx-auto my-4" />
        <p>{beat.name}</p>
        <button className='text-white flex justify-center items-center p-4 bg-roxo-claro hover:bg-roxo-escuro transition-all w-48 h-10 rounded-lg mt-4 mx-auto font-bold'><Link className='px-16 py-2' to={'/home'}>Voltar</Link></button>
      </div>
    </div>
  );
};

export default BeatDetails;
