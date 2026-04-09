export default function HeadingComp({title,ing}) {
  return (
    <>
      <h1 className=' font-bold text-7xl'>{title} <small className='ingradient'>{ing}</small></h1>
    </>
  )
}