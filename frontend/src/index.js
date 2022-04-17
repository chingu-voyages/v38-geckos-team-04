import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter as Router } from "react-router-dom";
import './sass/index.scss'

ReactDOM.render(
    <Router>
      <App />
    </Router>,
    document.getElementById('root')
)