interface Props {
  value: any;
}

function Comp2({ value }: Props) {
  return (
    <div>
      <div className="text-red-600">Comp 2</div>
      <div>{value}</div>
    </div>
  );
}

export default Comp2;
