import './HomePage.css'
import Navbar from '../../components/navbar/navbar.js'
const HomePage = ({ posts }) => {

  return (
    <>
      <Navbar />
      <div className="container" >
        <div className='container-home'>
          <section className='container-section'>

            <div className="posts">
              {posts.map((item, i) => (
                <div key={i} className="post">
                  <div className='post-content'>
                    <p className='user-nickname'>{item.nickname}</p>
                    <p className='user-title'>{item.title}</p>
                    <p className='user-body'>{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <div className="text-center">
            <span className="txt1">Go to</span>
            <a href="/" className='txt2'>Login Page</a>
          </div>

        </div>
      </div>
    </>
  );
}

export default HomePage;
