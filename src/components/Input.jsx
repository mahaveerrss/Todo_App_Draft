import React ,  {useId} from 'react'

function Input({
  label='Input',
  type='text',
  placeholder='Enter Input' ,
  readOnly= false ,
   
  ...props}
  ,ref) {
  console.log('Child Component')
  const id = useId()
  
  return (
    <div>
    <label className='text-white' htmlFor={id} >{label}</label>
      <input id={id} placeholder={placeholder}  className='px-1 py-0.5 placeholder:text-white placeholder:opacity-55 ' {...props} ref={ref} />
    </div>
  )
}

export default React.forwardRef(Input)
 