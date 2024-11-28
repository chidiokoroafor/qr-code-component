import './App.css'
import qrcodeimg from './assets/images/image-qr-code.png'
function App() {

  return (
    <main className='bg-slate-300 w-full min-h-screen flex justify-center items-center'>
      <div className="w-[90%] max-w-[380px] p-4 bg-white rounded-xl">
        <div className='rounded-xl overflow-hidden '>
          <img className='max-w-[100%]' src={qrcodeimg} alt='qr code' />
        </div>
        
        <div className='mt-3 font-sans  text-center p-4'>
          <h2 className='font-bold text-slate-900 text-2xl'>Improve your front-end skills by building projects</h2>
          <p className='mt-3 font-normal text-lg text-slate-500 mb-3'>
            Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
          </p>
        </div>
    </div>
    </main>
  )
}

export default App
