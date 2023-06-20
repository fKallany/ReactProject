import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './HomePage.css'

const HomePage = ({ posts }) => {

  return (
    <div className="container" >
      <div className='container-home'>

        <section className='container-section'>
          <div className="posts">
            {posts.map((item, i) => (
              <div key={i} className="post">
                <button className='remove-btn'>l</button>
                <button className='update-btn'>l</button>
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
  );
}

export default HomePage;
