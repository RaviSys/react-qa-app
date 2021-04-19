const QuestionFilter = (props) => {

  const dropdownChangeHandler = (event) => {
    props.onChangeSelected(event.target.value);
  }

  return (
    <div>
      <div className="row">
        <div className="col-md-4">
          <div className="form-group">
            <select className="form-control" selected={props.selected} onChange={dropdownChangeHandler}>
              <option value="all">All</option>
              <option value="React Js">React Js</option>
              <option value="Ruby">Ruby</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuestionFilter;