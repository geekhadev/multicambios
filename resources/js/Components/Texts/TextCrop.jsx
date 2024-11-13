const TextCrop = ({ text, maxLength }) => {
  return (
    <span className='text-xs'>
      {text.length > maxLength ? text.substring(0, maxLength) + '...' : text}
    </span>
  )
}

export default TextCrop
