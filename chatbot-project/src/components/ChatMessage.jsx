    import RobotProfileImage from '../assets/robot.png'
    import UserProfileImage from '../assets/profile-1.jpg'
    import './ChatMessage.css'
    import dayjs from 'dayjs';
    
    function ChatMessage(props) {
        // const message = props.message;
        // const sender = props.sender;
        const {message, sender, time} = props;

        // if (sender === 'robot') {
        //   return (
        //     <div>
        //       <img src= "robot.png" width="50"></img>
        //       {message} 
              
        //     </div>
        //   )
        // }
        
        
        return (
          <div className={sender === 'user' ? 'chat-message-user' : 'chat-message-robot'}>
            {sender === 'robot' && <img src= {RobotProfileImage} className="chat-message-profile"></img>}
            <div className="chat-message-text">
              {message} 
              {/* The "time && (" check is optional. I added it just to be safe. */}
              {time && (
                <div className='chat-message-time'>
                  {dayjs(time).format('h:mma')}
                </div>
              )}
            </div>
            {sender ==='user' && <img src= {UserProfileImage} className="chat-message-profile"></img>}
          </div>
        );
      }

      export default ChatMessage