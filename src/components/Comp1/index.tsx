import Comp2 from "../Comp2";

function Comp1() {
  return (
    <div>
      <div>Comp 1</div>

      <Comp2 value="info passed from Comp1 to Comp2 checking" />
    </div>
  );
}

export default Comp1;
