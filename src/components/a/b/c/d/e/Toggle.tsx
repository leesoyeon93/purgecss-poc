import { useToggle } from '@hooks/useToggle';
// import { useToggle } from '../../../../../../hooks/useToggle';

function Toggle() {
  const [value, toggle] = useToggle();
  return (
    <>
      <p>{value ? 'true' : 'false'}</p>
      <button type="button" onClick={toggle}>toggle</button>
    </>
  );
}

export default Toggle;
