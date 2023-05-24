import "./mailList.css"

const MailList = () => {
  return (
    <div className="mail">
      <h1 className="mailTitle">Exclusive deals inside!</h1>
      <span className="mailDesc">
        Unlock secret deals and enjoy exclusive savings by signing up today.
      </span>
      <div className="mailInputContainer">
        <input type="text" placeholder="Your Email" />
        <button>Subscribe</button>
      </div>
    </div>
  );
}

export default MailList