//ControlledInput
// value and onChange function of controlled component is a prop from father component

const ControlledInput = ({ label, value, onChange }) => (
  <div>
    <label>{label}</label>
    <input type="text" value={value} onChange={onChange} />
  </div>
)

export default ControlledInput;
