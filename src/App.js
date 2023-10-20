import {Component} from 'react'
import {AiOutlineSearch, AiOutlineDelete} from 'react-icons/ai'
import './App.css'

const initialTracksList = [
  {
    id: '3b22e3fd-3d12-4ad1-9e38-90314219c4f4',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-perfect-img.png',
    name: 'Perfect',
    genre: 'Pop',
    duration: '4:04',
  },
  {
    id: '40f97965-ff45-469e-a635-b2ef9f1642ed',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-shape-of-you-img.png',
    name: 'Shape of You',
    genre: 'Divide',
    duration: '4:24',
  },
  {
    id: '782f916b-4056-44ec-a95f-5115c3f84904',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-visiting-hours.png',
    name: 'Visiting Hours',
    genre: 'Folk-Pop',
    duration: '3:49',
  },
  {
    id: 'fcf0dc77-3427-457c-9ee0-91b1dc39fece',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-shivers-img.png',
    name: 'Shivers',
    genre: 'Dance-Pop',
    duration: '3:58',
  },
  {
    id: '9c1bb890-d4d5-4edf-9d95-6959d716b442',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-bad-habits-img.png',
    name: 'Bad Habits',
    genre: 'Dance-Pop',
    duration: '4:01',
  },
  {
    id: '2216db9c-647f-4814-b880-179740e4d748',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-castle-on-the-hill-img.png',
    name: 'Castle on the Hill',
    genre: 'Pop&Rock',
    duration: '4:48',
  },
  {
    id: 'a5e30966-b760-4660-bf08-073135f7d010',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-happier-img.png',
    name: 'Happier',
    genre: 'Pop',
    duration: '3:36',
  },
  {
    id: '2d5c9bc0-b8b0-41c6-aa55-cb3b659d8604',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-photograph-img.png',
    name: 'Photograph',
    genre: 'Folk music',
    duration: '4:26',
  },
  {
    id: 'efd3d621-2c05-4941-acdc-0a1a0786bc53',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-galway-girl-img.png',
    name: 'Galway Girl',
    genre: 'Pop',
    duration: '3:20',
  },
  {
    id: 'e4b8e3b8-7776-4c09-8abc-ba328a8babe9',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-i-dont-care-img.png',
    name: "I Don't Care",
    genre: 'Pop',
    duration: '3:38',
  },
]

class App extends Component {
  state = {search: '', tracksList: initialTracksList}

  render() {
    const {search, tracksList} = this.state

    const filterList = tracksList.filter(item =>
      item.name.toLowerCase().includes(search.toLowerCase()),
    )

    return (
      <div className="bg-container">
        <div className="singer-container">
          <h1 className="singer-name">Ed Sheeran</h1>
          <p className="singer-text">Singer</p>
        </div>
        <div className="albums-container">
          <div className="name-input-container">
            <h1 className="songs-heading">Songs Playlist</h1>
            <div className="input-icon-container">
              <input
                placeholder="Search"
                value={search}
                onChange={e => this.setState({search: e.target.value})}
                className="input"
                type="search"
              />
              <AiOutlineSearch size={20} color="#ffffff" />
            </div>
          </div>
          {filterList.length === 0 ? (
            <div className="no-lists-container">
              <p className="no-list-heading">No Songs Found</p>
            </div>
          ) : (
            <ul className="playlists-container">
              {filterList.map(item => (
                <li className="track" key={item.id}>
                  <div className="track-inner-container">
                    <img
                      src={item.imageUrl}
                      alt="track"
                      className="track-image"
                    />
                    <div className="track-heading-genre-container">
                      <p className="track-heading">{item.name}</p>
                      <p className="track-genre">{item.genre}</p>
                    </div>
                  </div>
                  <div className="track-inner-container">
                    <p className="track-dur">{item.duration}</p>
                    <button
                      className="delete-button"
                      type="button"
                      onClick={() => {
                        const filterLists = tracksList.filter(
                          song => song.id !== item.id,
                        )
                        this.setState({tracksList: filterLists})
                      }}
                      data-testid="delete"
                    >
                      <AiOutlineDelete size={20} />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default App
