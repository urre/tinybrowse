import React from 'react'
import './App.css'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            url: 'https://css-tricks.com'
        }
    }

    filterHistory = event => {
        this.setState({ url: event.currentTarget.value.toLowerCase() })
        this.setQueryString(event.currentTarget.value.toLowerCase())
    }

    getQueryString() {
        const urlParams = new URLSearchParams(window.location.search)
        return urlParams.get('url')
    }

    setQueryString(url) {
        window.history.pushState('', '', `?url=${url}`)
        this.setState({ url: url })
    }

    componentDidMount() {
        this.getQueryString() && this.setQueryString(this.getQueryString());
    }

    render() {
        return (
            <main>
                <header className="header">
                    <input
                        type="text"
                        onChange={this.filterHistory}
                        placeholder="Paste URL"
                        disableautocomplete="true"
                        autoComplete="off"
                        data-lpignore="true"
                        spellCheck="false"
                        autoFocus
                        value={this.state.url}
                    />
                </header>

                <div className="environment">
                <div className="phone"><div className="phone-screen">
                                            <iframe
                                title="Website"
                                id="frame-content"
                                sandbox="allow-scripts allow-same-origin"
                                className="style-scope device-view"
                                src={this.state.url}
                            />
                </div></div>
                    <div className="window">
                        <div className="device">
                            <iframe
                                title="Website"
                                id="frame-content"
                                sandbox="allow-scripts allow-same-origin"
                                className="style-scope device-view"
                                src={this.state.url}
                            />
                        </div>
                    </div>

                </div>

                <footer>
                    <p>Try your site in a small computer on a desk. * Many sites don't allow their sites to be loaded in iframes.</p>
                    <p>10 min project by <a href="https://twitter.com/urre">@urre</a>. This site is not responsive ;). <a href="https://unsplash.com/@agkdesign?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge">Photo: agkdesign</a></p>
                </footer>
            </main>
        )
    }
}

export default App
