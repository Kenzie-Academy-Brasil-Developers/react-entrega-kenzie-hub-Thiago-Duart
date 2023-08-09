export const MyButton = ({ children, styleName, type, onClick }) => {
  return (
    <button type={type} className={styleName} onClick={onClick}>
      {children}
    </button>
  );
};
