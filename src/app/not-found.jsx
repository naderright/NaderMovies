import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='h-lvh flex justify-center items-center flex-col'>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link className='font-bold underline text-blue-600' href="/">Return Home</Link>
    </div>
  )
}