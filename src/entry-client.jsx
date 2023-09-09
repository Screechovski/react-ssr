import React from 'react'
import ReactDOM from 'react-dom/client'
import createApp from './app'

createApp().then(app => {
	ReactDOM.createRoot(document.getElementById('root')).render(
		<React.StrictMode>
			{app}
		</React.StrictMode>,
	)
})

