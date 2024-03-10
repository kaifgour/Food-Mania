const Footer = () => {
  const date = new Date();
  return (
    <div className="fixed bottom-0 left-0 bg-yellow-500 w-screen h-6 text-center align-middle font-semibold">
      <span>KaifGour-&copy;Copyright {date.getFullYear()}</span>
    </div>
  );
};

export default Footer;
