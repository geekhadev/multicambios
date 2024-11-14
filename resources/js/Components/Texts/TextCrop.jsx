const TextCrop = ({ text, maxLength }) => {
  return (
    <span title={text}>
      {text.length > maxLength ? text.substring(0, maxLength) + '...' : text}
    </span>
  )
}

export default TextCrop
