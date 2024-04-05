import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Questions = () => {
    const [active1, setActive1] = useState();
    const [active2, setActive2] = useState();
    const [active3, setActive3] = useState();
    const [active4, setActive4] = useState();
    const navigate = useNavigate();
    const routeChange = () => {
        navigate('/suggestion');
    }
    const [isOpen, setIsOpen] = useState(false);

    function closeModal() {
        setIsOpen(false)
        routeChange();

      }
    
      function openModal() {
        setIsOpen(true)
      }
    return (

        <div className="questions bg-black w-full h-screen bg-cover bg-center">

            <div className="flex flex-column pt-36 pl-8">
                <div className="flex flex-col">
            <div className="pb-12" role="group">
            <p className='text-white'> {"When I’m happy, I like to watch"}</p>
            <div className="flex justify-around" role="group" id='test'>
            <button className={`text-white hover:text-white border border-yellow focus:text-black  ${active1 === 'b1' ? 'bg-yellow text-black' : 'bg-black'} font-medium 
            text-sm px-5 py-2.5 text-center me-2 mb-2 w-36 rounded-3xl`} type='checkbox' id='check1' onClick={() => setActive1('b1')} >
                Action
            </button>
            <button className={`text-white hover:text-white border border-yellow focus:text-black  ${active1 === 'b2' ? 'bg-yellow text-black' : 'bg-black'} font-medium 
            text-sm px-5 py-2.5 text-center me-2 mb-2 w-36 rounded-3xl`} type='checkbox' id='check1' onClick={() => setActive1('b2')}>
                Comedy
            </button><button className={`text-white hover:text-white border border-yellow focus:text-black  ${active1 === 'b3' ? 'bg-yellow text-black' : 'bg-black'} font-medium 
            text-sm px-5 py-2.5 text-center me-2 mb-2 w-36 rounded-3xl`} type='checkbox' id='check1' onClick={() => setActive1('b3')}>
                Romance
            </button>
            <button className={`text-white hover:text-white border border-yellow focus:text-black  ${active1 === 'b4' ? 'bg-yellow text-black' : 'bg-black'} font-medium 
            text-sm px-5 py-2.5 text-center me-2 mb-2 w-36 rounded-3xl`} type='checkbox' id='check1' onClick={() => setActive1('b4')}>
                Horror
            </button>
            <button className={`text-white hover:text-white border border-yellow focus:text-black  ${active1 === 'b5' ? 'bg-yellow text-black' : 'bg-black'} font-medium 
            text-sm px-5 py-2.5 text-center me-2 mb-2 w-36 rounded-3xl`} type='checkbox' id='check1' onClick={() => setActive1('b5')}>
                Sports
            </button>
            </div>
            </div>


            <div className="pb-12" role="group" id='test2'>
            <p className='text-white'>  {"When I’m angry, I like to watch"} </p>
            <button className={`text-white hover:text-white border border-yellow focus:text-black  ${active2 === 'b1' ? 'bg-yellow text-black' : 'bg-black'} font-medium 
            text-sm px-5 py-2.5 text-center me-2 mb-2 w-36 rounded-3xl`} type='checkbox' id='check1' onClick={() => setActive2('b1')}>
                Action
            </button>
            <button className={`text-white hover:text-white border border-yellow focus:text-black  ${active2 === 'b2' ? 'bg-yellow text-black' : 'bg-black'} font-medium 
            text-sm px-5 py-2.5 text-center me-2 mb-2 w-36 rounded-3xl`} type='checkbox' id='check1' onClick={() => setActive2('b2')}>
                Comedy
            </button>
            <button className={`text-white hover:text-white border border-yellow focus:text-black  ${active2 === 'b3' ? 'bg-yellow text-black' : 'bg-black'} font-medium 
            text-sm px-5 py-2.5 text-center me-2 mb-2 w-36 rounded-3xl`} type='checkbox' id='check1' onClick={() => setActive2('b3')}>
                Romance
            </button>
            <button className={`text-white hover:text-white border border-yellow focus:text-black  ${active2 === 'b4' ? 'bg-yellow text-black' : 'bg-black'} font-medium 
            text-sm px-5 py-2.5 text-center me-2 mb-2 w-36 rounded-3xl`} type='checkbox' id='check1' onClick={() => setActive2('b4')}>
                Horror
            </button>
            <button className={`text-white hover:text-white border border-yellow focus:text-black  ${active2 === 'b5' ? 'bg-yellow text-black' : 'bg-black'} font-medium 
            text-sm px-5 py-2.5 text-center me-2 mb-2 w-36 rounded-3xl`} type='checkbox' id='check1' onClick={() => setActive2('b5')}>
                Sports
            </button>
            </div>


            <div className="pb-12">
            <p className='text-white'>  {"When I’m stressed, I like to watch"} </p>
            <button className={`text-white hover:text-white border border-yellow focus:text-black  ${active3 === 'b1' ? 'bg-yellow text-black' : 'bg-black'} font-medium 
            text-sm px-5 py-2.5 text-center me-2 mb-2 w-36 rounded-3xl`} type='checkbox' id='check1' onClick={() => setActive3('b1')}>
                Action
            </button>
            <button className={`text-white hover:text-white border border-yellow focus:text-black  ${active3 === 'b2' ? 'bg-yellow text-black' : 'bg-black'} font-medium 
            text-sm px-5 py-2.5 text-center me-2 mb-2 w-36 rounded-3xl`} type='checkbox' id='check1' onClick={() => setActive3('b2')}>
                Comedy
            </button>
            <button className={`text-white hover:text-white border border-yellow focus:text-black  ${active3 === 'b3' ? 'bg-yellow text-black' : 'bg-black'} font-medium 
            text-sm px-5 py-2.5 text-center me-2 mb-2 w-36 rounded-3xl`} type='checkbox' id='check1' onClick={() => setActive3('b3')}>
                Romance
            </button>
            <button className={`text-white hover:text-white border border-yellow focus:text-black  ${active3 === 'b4' ? 'bg-yellow text-black' : 'bg-black'} font-medium 
            text-sm px-5 py-2.5 text-center me-2 mb-2 w-36 rounded-3xl`} type='checkbox' id='check1' onClick={() => setActive3('b4')}>
                Horror
            </button>
            <button className={`text-white hover:text-white border border-yellow focus:text-black  ${active3 === 'b5' ? 'bg-yellow text-black' : 'bg-black'} font-medium 
            text-sm px-5 py-2.5 text-center me-2 mb-2 w-36 rounded-3xl`} type='checkbox' id='check1' onClick={() => setActive3('b5')}>
                Sports
            </button>
            </div>


            <div className="pb-12">
            <p className='text-white'>  {"When I’m sad, I like to watch"} </p>
            <button className={`text-white hover:text-white border border-yellow focus:text-black  ${active4 === 'b1' ? 'bg-yellow text-black' : 'bg-black'} font-medium 
            text-sm px-5 py-2.5 text-center me-2 mb-2 w-36 rounded-3xl`} type='checkbox' id='check1' onClick={() => setActive4('b1')}>
                Action
            </button>
            <button className={`text-white hover:text-white border border-yellow focus:text-black  ${active4 === 'b2' ? 'bg-yellow text-black' : 'bg-black'} font-medium 
            text-sm px-5 py-2.5 text-center me-2 mb-2 w-36 rounded-3xl`} type='checkbox' id='check1' onClick={() => setActive4('b2')}>
                Comedy
            </button>
            <button className={`text-white hover:text-white border border-yellow focus:text-black  ${active4 === 'b3' ? 'bg-yellow text-black' : 'bg-black'} font-medium 
            text-sm px-5 py-2.5 text-center me-2 mb-2 w-36 rounded-3xl`} type='checkbox' id='check1' onClick={() => setActive4('b3')}>
                Romance
            </button>
            <button className={`text-white hover:text-white border border-yellow focus:text-black  ${active4 === 'b4' ? 'bg-yellow text-black' : 'bg-black'} font-medium 
            text-sm px-5 py-2.5 text-center me-2 mb-2 w-36 rounded-3xl`} type='checkbox' id='check1' onClick={() => setActive4('b4')}>
                Horror
            </button>
            <button className={`text-white hover:text-white border border-yellow focus:text-black  ${active4 === 'b5' ? 'bg-yellow text-black' : 'bg-black'} font-medium 
            text-sm px-5 py-2.5 text-center me-2 mb-2 w-36 rounded-3xl`} type='checkbox' id='check1' onClick={() => setActive4('b5')}>
                Sports
            </button>
            </div>
            </div>
                
            </div>
            <div className="justify-end items-end pl-96 bottom-12 right-12 absolute">
            <button className='text-white hover:text-white border border-yellow  font-medium 
            text-sm px-5 py-2.5 text-center me-2 mb-2 w-36 rounded-3xl' onClick={openModal}>
                Submit
            </button>
            </div>

            <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Want to improve your experience
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Connect your Apple watch or Health Device to improve
                      your Mountaineer content experience.
                    </p>
                  </div>

                  <div className="mt-4 flex justify-around">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-yellow px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Sync Data
                    </button>
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-yellow px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Not Now
                    </button>

                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>

        </div>

    );
    }

export default Questions;