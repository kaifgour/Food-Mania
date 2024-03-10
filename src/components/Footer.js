const Footer = () => {
  const date = new Date();
  return (
    <div className="bottom-0 left-0 font-bold bg-yellow-500 w-screen h-6 text-center align-middle">
      <span>KaifGour-&copy;Copyright {date.getFullYear()}</span>
    </div>
  );
};

export default Footer;
