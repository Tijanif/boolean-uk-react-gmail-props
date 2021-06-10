import Email from './Email'

const Emails = props => {
  return (
    <ul>
      {props.searchedEmails().map((email, index) => (
        <Email
          toggleRead={props.toggleRead}
          toggleStar={props.toggleStar}
          email={email}
          index={index}
        />
      ))}
    </ul>
  )
}

export default Emails
