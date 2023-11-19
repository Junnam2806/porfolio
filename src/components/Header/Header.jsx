import React from 'react'

const Header = () => {
  return <header className='w-full h-[80px] leading-[80px] flex items-center'>
    <div className="container">
        <div className='flex items-center justify-between'>
            <div className="flex items-center gap-[10px]">
                <span className='w-[35px] h-[35px] bg-primaryColor text-white'></span>
            </div>
        </div>
    </div>
  </header>
}

export default Header