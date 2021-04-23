export const Error = props => {
  return (
    <div>
      <h4 style={{ color: 'red' }}>{props.msg}</h4>
    </div>
  );
};

export const EmptyData = props => {
  return (
    <div>
      <h4 style={{ color: 'blue' }}>{props.msg}</h4>
    </div>
  )
}

export const Acces = props => {
  return (
    <div>
      <h4 style={{ color: 'lime' }}>{props.msg}</h4>
    </div>
  )
}