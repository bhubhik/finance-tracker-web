import { Entry } from '@/types';
import { MdDeleteForever } from 'react-icons/md';

interface EntryItemProps {
  entry: Entry;
  onDelete: (id: number) => void;
}

export default function EntryItem({ entry, onDelete }: EntryItemProps) {
  const handleDelete = (id: number) => {
    onDelete(id);
  };

  return (
    <div className='bg-white shadow-md rounded-lg overflow-hidden mb-4 w-80'>
      <div className='p-3 flex justify-between'>
        <div>
          <h2 className='text-xl font-semibold text-gray-800 mb-2'>
            {entry.description}
          </h2>
          <p className='text-gray-600 mb-2'>{entry.type}</p>
        </div>
        <div>
          <p className='text-2xl font-bold text-green-600'>${entry.amount}</p>
          <button onClick={() => handleDelete(entry.id)}>
            <MdDeleteForever className='text-red-500 text-2xl mt-2' />
          </button>
        </div>
      </div>
    </div>
  );
}
