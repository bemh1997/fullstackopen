const Header = (props) => {
  // eslint-disable-next-line react/prop-types
  const { course } = props;

  return (
    <>
      <h2>{course}</h2>
    </>
  );
};

export default Header;