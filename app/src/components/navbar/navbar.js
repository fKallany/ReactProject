import './navbar.css'

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="row">
          <textarea name="post-title" id="post-title" cols="20" rows="1"></textarea>
          <textarea name="post-title" id="post-title" cols="20" rows="1"></textarea>
          <div className="post-crud">
            <span>Create</span>
          </div>
          <div className="post-crud">
            <span>Remove</span>
          </div>
          <div className="post-crud">
            <span>Update</span>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;