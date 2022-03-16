const TheirMessage = ({ lastMessage, message }) => {
  const isFirstMessageByUser =
    !lastMessage || lastMessage.sender.username !== message.sender.username;

  console.log(message);

  return (
    <div className="message-row">
      {/* Adding the avatar to the message if avatar exists */}
      {isFirstMessageByUser && (
        <div
          className="message-avatar"
          style={{ backgroundImage: `url(${message?.sender?.avatar})` }}
        />
      )}

      {/* Checking whether the message is a image or a text then adding that to the chatfeed */}
      {message?.attachments?.length > 0 ? (
        <img
          src={message.attachments[0].file}
          alt="message-attachments"
          className="message-image"
          style={{ marginLeft: isFirstMessageByUser ? "4px" : "48px" }}
        />
      ) : (
        <div
          className="message"
          style={{
            float: "left",
            backgroundColor: "#CABCDC",
            marginLeft: isFirstMessageByUser ? "4px" : "48px",
          }}
        >
          {message.text}
        </div>
      )}
    </div>
  );
};

export default TheirMessage;
