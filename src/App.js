import React from 'react'
import { Star } from 'react-github-buttons';
import './App.css'

var reactButtonStyle = {
  textAlign: 'center',
  fontFamily: 'sans-serif',
  display: 'inline-flex',
  justifyContent: 'center'
};

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            url: 'https://github.com/blog'
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
                <header className="header" role="contentinfo">
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

                <div className="environment" aria-label="Macbook Pro preview environment">
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
                    <p>Try your site in a small computer on a desk. * Many sites don't allow their sites to be loaded in iframes. Meant to be used on desktop.</p>
                    <p>A project by <a href="https://twitter.com/urre">@urre</a>. Code on <a href="https://github.com/urre/tinybrowse">Github</a></p>

                     <div style={reactButtonStyle}>
                        <Star owner='urre' repo='tinybrowse' />
                     </div>
                </footer>
            </main>
        )
    }
}

export default App
