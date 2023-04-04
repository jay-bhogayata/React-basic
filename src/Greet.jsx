const Greet = (props) => {
  return (
    <div className="text-purple-500 text-2xl text-center p-5 font-bold">
      <h1>{`Hello ${props.fname} ${props.lname}`} </h1>

      {props.children}
    </div>
  );
};

export default Greet;
// defaut export can import with anyname

/*
export const Greet = () => {
  return (
    <div>
      <h1>Hello jay</h1>
    </div>
  );
};
above is named export can not chage component name in import;
*/

/**
 * prop is immutable
 * */
