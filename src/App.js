import { useState } from 'react'

import initialEmails from './data/emails'

import './App.css'
import Header from './components/Header'
import LeftNav from './components/LeftNav'
import Emails from './components/Emails'

const getReadEmails = emails => emails.filter(email => !email.read)

const getStarredEmails = emails => emails.filter(email => email.starred)

function App() {
  const [emails, setEmails] = useState(initialEmails)
  const [hideRead, setHideRead] = useState(false)
  const [currentTab, setCurrentTab] = useState('inbox')
  const [searchInput, setSearchInput] = useState('')

  const unreadEmails = emails.filter(email => !email.read)
  const starredEmails = emails.filter(email => email.starred)

  const toggleStar = targetEmail => {
    const updatedEmails = emails =>
      emails.map(email =>
        email.id === targetEmail.id
          ? { ...email, starred: !email.starred }
          : email
      )
    setEmails(updatedEmails)
  }

  const toggleRead = targetEmail => {
    const updatedEmails = emails =>
      emails.map(email =>
        email.id === targetEmail.id ? { ...email, read: !email.read } : email
      )
    setEmails(updatedEmails)
  }

  let filteredEmails = emails

  if (hideRead) filteredEmails = getReadEmails(filteredEmails)

  if (currentTab === 'starred')
    filteredEmails = getStarredEmails(filteredEmails)

  const handleChange = e => {
    setSearchInput(e.target.value)
  }

  // option one
  // const searchedEmails = () => {
  //   // filter through the emails to get the eamil we searched for
  //   return searchInput
  //     ? filteredEmails.filter(
  //         email => searchInput.toLowerCase() === email.sender.toLowerCase()
  //       )
  //     : filteredEmails
  // }

  // option two
  const searchedEmails = () => {
    // filter through the emails to get the eamil we searched for
    return searchInput
      ? filteredEmails.filter(
          email => email.sender.toLowerCase().indexOf(searchInput) !== -1
        )
      : filteredEmails
  }

  return (
    <div className="app">
      <Header handleChange={handleChange} searchInput={searchInput} />
      <LeftNav
        setCurrentTab={setCurrentTab}
        setHideRead={setHideRead}
        currentTab={currentTab}
        starredEmails={starredEmails}
        unreadEmails={unreadEmails}
        hideRead={hideRead}
      />
      {/* <nav className="left-menu">
        <ul className="inbox-list">
          <li
            className={`item ${currentTab === 'inbox' ? 'active' : ''}`}
            onClick={() => setCurrentTab('inbox')}
          >
            <span className="label">Inbox</span>
            <span className="count">{unreadEmails.length}</span>
          </li>
          <li
            className={`item ${currentTab === 'starred' ? 'active' : ''}`}
            onClick={() => setCurrentTab('starred')}
          >
            <span className="label">Starred</span>
            <span className="count">{starredEmails.length}</span>
          </li>

          <li className="item toggle">
            <label htmlFor="hide-read">Hide read</label>
            <input
              id="hide-read"
              type="checkbox"
              checked={hideRead}
              onChange={e => setHideRead(e.target.checked)}
            />
          </li>
        </ul>
      </nav> */}

      <Emails
        searchedEmails={searchedEmails}
        toggleRead={toggleRead}
        toggleStar={toggleStar}
      />
      {/* <ul>
          {searchedEmails().map((email, index) => (
            <li
              key={index}
              className={`email ${email.read ? 'read' : 'unread'}`}
            >
              <div className="select">
                <input
                  className="select-checkbox"
                  type="checkbox"
                  checked={email.read}
                  onChange={() => toggleRead(email)}
                />
              </div>
              <div className="star">
                <input
                  className="star-checkbox"
                  type="checkbox"
                  checked={email.starred}
                  onChange={() => toggleStar(email)}
                />
              </div>
              <div className="sender">{email.sender}</div>
              <div className="title">{email.title}</div>
            </li>
          ))}
        </ul> */}
    </div>
  )
}

export default App
