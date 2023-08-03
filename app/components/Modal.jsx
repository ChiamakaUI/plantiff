const Modal = ({ children, bgColor, customStyles }) => {

  return (
    <div className={`${bgColor} font-merriweather ${customStyles} fixed z-[1000] top-0 left-0 w-full h-full`}>
      {children}
    </div>
  );
};

export default Modal;
