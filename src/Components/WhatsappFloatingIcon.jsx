function WhatsappFloatingIcon() {
  return (
    <a
      href="https://api.whatsapp.com/send/?phone=923162508712&text=I'm%20interested%20in%20your%20services" 
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
        className="w-15 h-15 rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
      />
    </a>
  );
}

export default WhatsappFloatingIcon;
