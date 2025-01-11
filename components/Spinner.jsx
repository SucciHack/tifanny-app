export default function Spinner() {
  return (
    <>
            <div className='flex justify-center items-center bg-black h-screen fixed inset-0 z-50'>
                <div className='flex justify-center items-center w-24 h-22 gap-[6px]'>
                <span className='w-1 h-12 bg-[#4c86f9] animate-scale'></span>
                <span
                className='w-1 h-10 bg-[#49a84c] animate-scale'
                style={{ animationDelay: '-0.8s' }}
                ></span>
                <span
                className='w-1 h-10 bg-[#f6bb02] animate-scale'
                style={{ animationDelay: '-0.7s' }}
                ></span>
                <span
                className='w-1 h-10 bg-[#f6bb02] animate-scale'
                style={{ animationDelay: '-0.6s' }}
                ></span>
                <span
                className='w-1 h-10 bg-[#2196f3] animate-scale'
                style={{ animationDelay: '-0.5s' }}
                ></span>
            </div>

        </div>
    </>
  )
}
