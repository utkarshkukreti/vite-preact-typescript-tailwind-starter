import './index.css'

import * as Preact from 'preact'

const App = () => <div className="text-center m-16 text-4xl">Hello!</div>

Preact.render(<App />, document.querySelector('main')!)
