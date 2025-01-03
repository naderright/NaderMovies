'use client' // Error boundaries must be Client Components
 
export default function GlobalError({ error, reset }) {
  return (
    // global-error must include html and body tags
    <html>
      <body className=" flex justify-center items-center ">
        <h2>Something went wrong!</h2>
        <button  className='underline text-blue-500' onClick={() => reset()}>Try again</button>
      </body>
    </html>
  )
}