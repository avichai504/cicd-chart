interface BoxProps {
  children: React.ReactNode
  title?: string
}

export default function Box({ children, title }: BoxProps) {
  return (
    <div className='w-auto min-w-[620px] h-auto justify-self-center bg-white shadow-lg rounded p-2 mb-4'>
      {title && <h2 className='mx-auto text-center text-gray-600 font-semibold border-b mb-1'>{title}</h2>}
      {children}
    </div>
  )
}
