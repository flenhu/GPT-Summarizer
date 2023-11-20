import logo from '../assets/summarizer_90h.png'

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
        <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt='sumz_logo' className="w-28 object-contain" />

        <button 
            type='button'
            onClick={() => window.open('https://github.com/flenhu', '_blank')}
            className='black_btn'
            >
                GitHub
            </button>

        </nav>
        <h1 className='head_text'>
            Summarize Articles with <br 
            className='max-md:hidden' />
            <span className='pink_gradient'>GPT-4</span>
        </h1>
        <h2 className='desc'>
            <span className='orange_gradient'>Summarize any article</span> with the GPT-4.

        </h2>


    </header>
    
  )
}

export default Hero