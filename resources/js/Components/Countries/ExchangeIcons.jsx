const ExchangeIcons = ({ exchange }) => {
  const { origin, destination } = exchange
  const { name: name_origin, url_flag: url_flag_origin } = origin
  const { name: name_destination, url_flag: url_flag_destination } = destination

  return (
    <div className="flex gap-1 items-center">
      <img className="w-6 h-6" src={url_flag_origin} alt={name_origin}/>
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 6l6 6l-6 6" /></svg>
      <img className="w-6 h-6" src={url_flag_destination} alt={name_destination}/>
    </div>
  )
}

export default ExchangeIcons
