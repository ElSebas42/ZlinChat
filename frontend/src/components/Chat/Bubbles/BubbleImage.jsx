import imagen from '../../../assets/example.jpg'

function BubbleImage() {
  return (
    <img src={imagen} className='w-[130px] me-2 shrink-0 object-contain self-start'/>
  )
}

export default BubbleImage