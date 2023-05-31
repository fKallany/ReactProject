import { Component } from 'react';
import './HomePage.css'

class HomePage extends Component {
  state = {
    users: [],
    posts: []
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        users: [
          {
            ID: 1,
            Nickname: 'Glauco',
            Email: 'glauco.almeida@gmail.com',
            Password: '1234',
            Created: '2023-05-29T21:11:23.8913112-03:00'
          },
          {
            ID: 2,
            Nickname: 'Kallany',
            Email: 'fabiokallany@gmail.com',
            Password: '4321',
            Created: '2023-01-29T21:12:23.8913112-03:00'
          },
          {
            ID: 3,
            Nickname: 'Luiz',
            Email: 'Luiz@gmail.com',
            Password: '1324',
            Created: '2023-07-29T21:11:23.8913112-03:00'
          }
        ],
        posts: [
          {
            ID: 1,
            Title: 'Título 1',
            Description: 'description 1',
            Body: 'body 1',
            UserID: 1,
            Created: '2023-05-29T21:11:23.8913112-03:00'
          },
          {
            ID: 2,
            Title: 'Título 2',
            Description: 'description 2',
            Body: 'body 2',
            UserID: 2,
            Created: '2023-01-29T21:11:23.8913112-03:00'
          },
          {
            ID: 3,
            Title: 'Título 3',
            Description: 'description 3',
            Body: 'body 3',
            UserID: 3,
            Created: '2023-07-29T21:11:23.8913112-03:00'
          }
        ]
      })
    }, 5000);
  }

  render() {
    const { users, posts } = this.state;

    return (
      <div className="container" >
        <div className='container-home'>
          <div className="users">
            {users.map(user => (
              <div key={user.ID}>
                <h1>{user.Nickname}</h1>
              </div>
            ))}
          </div>
          <div className="posts">
            {posts.map(post => (
              <div key={post.ID}>
                <h1>{post.Title}</h1>
                <p>{post.Body}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <span className="txt1">Go to</span>
          <a href="/" className='txt2'>Login Page</a>
        </div>

      </div>
    );
  }
}

export default HomePage;