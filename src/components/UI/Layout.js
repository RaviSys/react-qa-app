const Layout = (props) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-10 mx-md-auto">
          {props.children}
        </div>
      </div>
    </div>
  )
}

export default Layout;