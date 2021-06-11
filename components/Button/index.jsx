import ButtonWrap from "./styled";

const Button = ({ children, onClick, darkMode }) => {
  return (
    <ButtonWrap onClick={onClick} darkMode={darkMode}>
      {children}
    </ButtonWrap>
  );
};

export default Button;
