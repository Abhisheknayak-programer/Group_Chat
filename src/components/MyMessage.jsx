const MyMessage = ({ message }) => {
  // Checking message is a image or a text
  if (message?.attachments?.length > 0) {
    return (
      <img
        src={message.attachments[0].file}
        alt="message-attachments"
        className="message-image"
        style={{ float: "right" }}
      />
    );
  }

  // Returning the message if that is a text message
  return (
    <div
      className="message"
      style={{
        float: "right",
        marginRight: "18px",
        color: "white",
        backgroundColor: "#3B2A50",
      }}
    >
      {message.text}
    </div>
  );
};

export default MyMessage;
