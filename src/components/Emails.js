import Email from './Email'

const Emails = props => {
  return (
    <main className="emails">
      <ul>
        {props.searchedEmails().map((email, index) => (
          <Email
            key={index}
            toggleRead={props.toggleRead}
            toggleStar={props.toggleStar}
            email={email}
          />
        ))}
      </ul>
    </main>
  )
}

export default Emails
