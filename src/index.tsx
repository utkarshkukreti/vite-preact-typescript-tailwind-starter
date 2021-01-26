import './index.css'

import * as Preact from 'preact'

const App = () => <div className="text-center m-16 text-4xl">Hello!</div>

const main = document.querySelector('main')
main && Preact.render(<App />, main)
