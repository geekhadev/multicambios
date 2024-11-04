const CountryWithIcon = ({ country: { name, url_flag } }) => {
  return (
    <div className="flex gap-2">
      <img className="w-6 h-6" src={url_flag} alt={name}/>
      {name}
    </div>
  )
}

export default CountryWithIcon
