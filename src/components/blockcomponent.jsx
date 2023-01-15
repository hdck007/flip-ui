const BlockComponent = ({ title, data, handleChange, filters }) => {
  return (
    <div className="m-4">
      <h3 className="text-lg">{title}</h3>
      {data.map((item) => (
        <div className="px-2 my-1">
          <input checked={filters[title.toLowerCase()].includes(item)} onChange={handleChange(title.toLowerCase())(item)} type="checkbox" />
          &nbsp;&nbsp;
          <label>{item}</label>
        </div>
      ))}
    </div>
  );
};

export default BlockComponent;
