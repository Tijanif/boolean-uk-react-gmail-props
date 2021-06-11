import Email from './Email'

const Emails = props => {
  return (
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
  )
}

export default Emails
