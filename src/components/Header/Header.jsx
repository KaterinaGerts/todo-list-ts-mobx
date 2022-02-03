import './Header.scss';

const Header = ({ title = 'Заметки' }) => {
  return (
    <div className="titleWrap">
      <h1>{title}</h1>
    </div>
  );
};

export default Header;
