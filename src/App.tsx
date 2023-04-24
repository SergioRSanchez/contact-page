import { ReactComponent as Add } from './assets/add.svg';
import { ReactComponent as Pencil } from './assets/pencil.svg';
import { ReactComponent as Trash } from './assets/trash.svg';
import { ReactComponent as Search } from './assets/search.svg';

import Abraao from './assets/abraao.png';
import Beatriz from './assets/beatriz.png';
import Brenda from './assets/brenda.png';
import Caio from './assets/caio.png';
import Cleiton from './assets/cleiton.png';
import Daniel from './assets/daniel.png';


function App() {

  return (
    <div className='font-["Roboto"] bg-[#1E1E1E] h-screen flex items-center justify-center'>
      <div className='w-screen sm:w-[430px] flex flex-col bg-[#1A1924] rounded-lg'>
        <div className='bg-[#16151E] p-10 flex flex-col gap-6 rounded-lg'>
          <div className='flex justify-between'>
            <p className='font-bold text-xl text-[#E1E1E6]'>Meus contatos</p>
            <div className='flex gap-4'>
              <Add className='hover:scale-125 transition-all duration-300' />
              <Pencil className='hover:scale-125 transition-all duration-300' />
              <Trash className='hover:scale-125 transition-all duration-300' />
            </div>
          </div>
          
          <div>
            <form className='flex gap-[10px] py-4 px-6 bg-[#24243D] rounded-md border-[2px] border-[#24243D] focus-within:border-[#E1E1E6] box-border'>
              <Search />
              <input 
                type="text" 
                placeholder='Busque por nome ou por dados de contato...' 
                className='text-xs text-[#E1E1E6] bg-[#24243D] w-[270px] focus:outline-none'
                name='contact'
              />
            </form>
          </div>
        </div>

        <div 
          className='pl-10 mr-10 my-12 flex flex-col gap-[60px] max-h-[442px] overflow-y-auto scroll-smooth'
        >
          <div className='flex gap-[52px] mt-1'>
            <p className='px-[14px] py-[10px] flex items-center h-fit bg-[#633BBC] text-[#E1E1E6] font-bold rounded-lg'>A</p>
            <div className='flex flex-col gap-8'>
              <div className='flex  gap-4 items-center hover:scale-105 duration-300'>
                <img src={Abraao} />
                <div className='flex flex-col gap-1'>
                  <p className='font-bold text-[#E1E1E6]'>Abraão Sena</p>
                  <p className='text-[#8C8CBA] text-xs'>(11) 90876-1234</p>
                </div>
              </div>
            </div>
          </div>

          <div className='flex gap-[52px]'>
            <p className='px-[14px] py-[10px] flex items-center h-fit bg-[#07847E] text-[#E1E1E6] font-bold rounded-lg'>B</p>
            <div className='flex flex-col gap-8'>
              <div className='flex  gap-4 items-center hover:scale-105 duration-300'>
                <img src={Beatriz} />
                <div className='flex flex-col gap-1'>
                  <p className='font-bold text-[#E1E1E6]'>Beatriz Clasen</p>
                  <p className='text-[#8C8CBA] text-xs'>(48) 90876-1123</p>
                </div>
              </div>
            
              <div className='flex  gap-4 items-center hover:scale-105 duration-300'>
                <img src={Brenda} />
                <div className='flex flex-col gap-1'>
                  <p className='font-bold text-[#E1E1E6]'>Brenda Mendes</p>
                  <p className='text-[#8C8CBA] text-xs'>(21) 90876-8765</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className='flex gap-[52px]'>
            <p className='px-[14px] py-[10px] flex items-center h-fit bg-[#9A00B3] text-[#E1E1E6] font-bold rounded-lg'>C</p>
            <div className='flex flex-col gap-8'>
              <div className='flex  gap-4 items-center hover:scale-105 duration-300'>
                <img src={Caio} />
                <div className='flex flex-col gap-1'>
                  <p className='font-bold text-[#E1E1E6]'>Caio Vinícius</p>
                  <p className='text-[#8C8CBA] text-xs'>(71) 90876-2435</p>
                </div>
              </div>
            
              <div className='flex  gap-4 items-center hover:scale-105 duration-300'>
                <img src={Cleiton} />
                <div className='flex flex-col gap-1'>
                  <p className='font-bold text-[#E1E1E6]'>Cleiton Souza</p>
                  <p className='text-[#8C8CBA] text-xs'>(11) 90876-1209</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className='flex gap-[52px]'>
            <p className='px-[14px] py-[10px] flex items-center h-fit bg-[#0088B3] text-[#E1E1E6] font-bold rounded-lg'>D</p>
            <div className='flex flex-col gap-8'>
              <div className='flex  gap-4 items-center hover:scale-105 duration-300'>
                <img src={Daniel} />
                <div className='flex flex-col gap-1'>
                  <p className='font-bold text-[#E1E1E6]'>Daniel Duarte</p>
                  <p className='text-[#8C8CBA] text-xs'>(82) 90876-6534</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default App
