import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav>
      <Link to="/">ホーム</Link> | 
	  <Link to="/about">このサイトについて</Link> |
	  <Link to="/list">list</Link> | 
	  <Link to="/upload">upload</Link> 
    </nav>
  )
}

export default Header

