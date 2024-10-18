import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="sticky z-[100] h-14 inset-x-0  top-0 w-full border-b border-gray-200  bg-white/75
        backdrop-blur-lg transition-all
    ">
        <div className="h-full mx-auto w-full max-w-screen-xl px-2.5 md:px-3 ">
            <div className="flex h-14 items-center justify-between border-zinc-200">
                <Link to='/' className='flex z-40 font-semibold'>
                    dev<span className="text-green-600 ">Julie</span>
                </Link>
                
            </div>
        </div>
    </nav>
  )
}

export default Navbar