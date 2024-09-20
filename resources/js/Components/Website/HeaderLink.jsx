const HeaderLink = ({ href, label }) => {
  return (
    <a
      href={href}
      className="
        flex h-full items-center px-4 font-bold scale-100
        hover:text-blue-500 transition duration-300
        hover:scale-[105%]
      "
    >
      {label}
    </a>
  )
}

export default HeaderLink
