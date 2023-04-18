const DotGlow: React.FC<{color:string}> = ({color}) => {
  return (
    <span
      className={`inline-block h-3 w-3 rounded-full mr-1 ${color}`}
    ></span>
  );
};

export default DotGlow;
