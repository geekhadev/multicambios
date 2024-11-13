const TextCurrency = ({ currency = '$', amount }) => {
  // TODO: arreglar el formato de la moneda
  const amount_cleared = amount.includes('.') ? amount.split('.')[0] : amount
  return (
    <span className='text-xs'>
      {currency === '$' ? currency + '' : currency + ' '}
      {amount_cleared}
    </span>
  )
}

export default TextCurrency