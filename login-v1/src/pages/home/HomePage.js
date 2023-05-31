import { Component } from 'react';
import './HomePage.css'

class HomePage extends Component {
  state = {
    users: [],
    posts: []
  };

  async componentDidMount() {
    setTimeout(() => {
      this.setState({
        posts: [
          {
            ID: 1,
            Title: 'Back-End Developer',
            Description: 'description 1',
            Body: 'php, c#, java',
            UserID: 1,
            User: {
              ID: 1,
              Nickname: 'Glauco',
              Email: 'glauco.almeida@gmail.com',
              Password: '1234',
              Created: '2023-05-29T21:11:23.8913112-03:00'
            },
            Created: '2023-05-29T21:11:23.8913112-03:00'
          },
          {
            ID: 2,
            Title: 'Front-End Developer',
            Description: 'description 2',
            Body: 'web, js, react',
            UserID: 2,
            User: {
              ID: 2,
              Nickname: 'Kallany',
              Email: 'fabiokallany@gmail.com',
              Password: '4321',
              Created: '2023-01-29T21:12:23.8913112-03:00'
            },
            Created: '2023-01-29T21:11:23.8913112-03:00'
          },
          {
            ID: 3,
            Title: 'Data Engineer',
            Description: 'description 3',
            Body: 'spark, python, aws',
            UserID: 3,
            User: {
              ID: 3,
              Nickname: 'Luiz',
              Email: 'Luiz@gmail.com',
              Password: '1324',
              Created: '2023-07-29T21:11:23.8913112-03:00'
            },
            Created: '2023-07-29T21:11:23.8913112-03:00'
          },
          {
            ID: 4,
            Title: 'Back-End Developer',
            Description: 'description 1',
            Body: 'php, c#, java',
            UserID: 4,
            User: {
              ID: 4,
              Nickname: 'Glauco',
              Email: 'glauco.almeida@gmail.com',
              Password: '1234',
              Created: '2023-05-29T21:11:23.8913112-03:00'
            },
            Created: '2023-05-29T21:11:23.8913112-03:00'
          },
          {
            ID: 5,
            Title: 'Front-End Developer',
            Description: 'description 2',
            Body: 'web, js, react',
            UserID: 5,
            User: {
              ID: 5,
              Nickname: 'Kallany',
              Email: 'fabiokallany@gmail.com',
              Password: '4321',
              Created: '2023-01-29T21:12:23.8913112-03:00'
            },
            Created: '2023-01-29T21:11:23.8913112-03:00'
          },
          {
            ID: 6,
            Title: 'Data Engineer',
            Description: 'description 3',
            Body: 'spark, python, aws',
            UserID: 6,
            User: {
              ID: 6,
              Nickname: 'Luiz',
              Email: 'Luiz@gmail.com',
              Password: '1324',
              Created: '2023-07-29T21:11:23.8913112-03:00'
            },
            Created: '2023-07-29T21:11:23.8913112-03:00'
          },
          {
            ID: 7,
            Title: 'Back-End Developer',
            Description: 'description 1',
            Body: 'php, c#, java',
            UserID: 7,
            User: {
              ID: 7,
              Nickname: 'Glauco',
              Email: 'glauco.almeida@gmail.com',
              Password: '1234',
              Created: '2023-05-29T21:11:23.8913112-03:00'
            },
            Created: '2023-05-29T21:11:23.8913112-03:00'
          },
          {
            ID: 8,
            Title: 'Front-End Developer',
            Description: 'description 2',
            Body: 'web, js, react',
            UserID: 8,
            User: {
              ID: 8,
              Nickname: 'Kallany',
              Email: 'fabiokallany@gmail.com',
              Password: '4321',
              Created: '2023-01-29T21:12:23.8913112-03:00'
            },
            Created: '2023-01-29T21:11:23.8913112-03:00'
          },
          {
            ID: 9,
            Title: 'Data Engineer',
            Description: 'description 3',
            Body: 'spark, python, aws',
            UserID: 9,
            User: {
              ID: 9,
              Nickname: 'Luiz',
              Email: 'Luiz@gmail.com',
              Password: '1324',
              Created: '2023-07-29T21:11:23.8913112-03:00'
            },
            Created: '2023-07-29T21:11:23.8913112-03:00'
          },
          {
            ID: 10,
            Title: 'Back-End Developer',
            Description: 'description 1',
            Body: 'php, c#, java',
            UserID: 10,
            User: {
              ID: 10,
              Nickname: 'Glauco',
              Email: 'glauco.almeida@gmail.com',
              Password: '1234',
              Created: '2023-05-29T21:11:23.8913112-03:00'
            },
            Created: '2023-05-29T21:11:23.8913112-03:00'
          },
          {
            ID: 11,
            Title: 'Front-End Developer',
            Description: 'description 2',
            Body: 'web, js, react',
            UserID: 11,
            User: {
              ID: 11,
              Nickname: 'Kallany',
              Email: 'fabiokallany@gmail.com',
              Password: '4321',
              Created: '2023-01-29T21:12:23.8913112-03:00'
            },
            Created: '2023-01-29T21:11:23.8913112-03:00'
          },
          {
            ID: 12,
            Title: 'Data Engineer',
            Description: 'description 3',
            Body: 'spark, python, aws',
            UserID: 12,
            User: {
              ID: 12,
              Nickname: 'Luiz',
              Email: 'Luiz@gmail.com',
              Password: '1324',
              Created: '2023-07-29T21:11:23.8913112-03:00'
            },
            Created: '2023-07-29T21:11:23.8913112-03:00'
          },
          {
            ID: 13,
            Title: 'Back-End Developer',
            Description: 'description 1',
            Body: 'php, c#, java',
            UserID: 13,
            User: {
              ID: 13,
              Nickname: 'Glauco',
              Email: 'glauco.almeida@gmail.com',
              Password: '1234',
              Created: '2023-05-29T21:11:23.8913112-03:00'
            },
            Created: '2023-05-29T21:11:23.8913112-03:00'
          },
          {
            ID: 14,
            Title: 'Front-End Developer',
            Description: 'description 2',
            Body: 'web, js, react',
            UserID: 14,
            User: {
              ID: 14,
              Nickname: 'Kallany',
              Email: 'fabiokallany@gmail.com',
              Password: '4321',
              Created: '2023-01-29T21:12:23.8913112-03:00'
            },
            Created: '2023-01-29T21:11:23.8913112-03:00'
          },
          {
            ID: 15,
            Title: 'Data Engineer',
            Description: 'description 3',
            Body: 'spark, python, aws',
            UserID: 15,
            User: {
              ID: 15,
              Nickname: 'Luiz',
              Email: 'Luiz@gmail.com',
              Password: '1324',
              Created: '2023-07-29T21:11:23.8913112-03:00'
            },
            Created: '2023-07-29T21:11:23.8913112-03:00'
          }
        ]
      })
    }, 2000);
  }

  render() {
    const { posts } = this.state;

    return (
      <div className="container" >
        <div className='container-home'>

          <section className='container-section'>
            <div className="posts">
              {posts.map(post => (
                <div key={post.ID} className="post">
                  <div className='post-content'>
                    <p className='user-nickname'>{post.User.Nickname}</p>
                    <p className='user-title'>{post.Title}</p>
                    <p className='user-body'>{post.Body}</p>
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
}

export default HomePage;