

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <div className="footer">
      <div className="copy">Caine Spiwak &copy;{currentYear}</div>
    </div>
  )
}

export default Footer