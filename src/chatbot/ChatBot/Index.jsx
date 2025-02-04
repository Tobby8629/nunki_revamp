import Chatbot from 'react-chatbot-kit'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import MessageParser from '../../chatbot/MessageParser'
import ActionProvider from '../../chatbot/ActionProvider'
import Config from '../../chatbot/Config'
import { headset } from '../../../public/images/Nunki/nunkiImages'
import styled from 'styled-components'


const Index = () => {
  const [chatpop, setchatpop] = useState(false)
  const openChat = () => setchatpop(true)
  const closeChat = () => setchatpop(false)
  const Times = styled.div`
    background: white;
    width: 50px;
    height: 50px;
    line-height:35px;
    margin-bottom: .5rem;
    text-align: center;
    padding: 10px;
    border-radius: 50%;
  `
  return (
    <div className='chatbot'>
      <div className='chatbot-icons'>
        {
          chatpop ? 
          <Times>
              <FontAwesomeIcon icon={faTimes} onClick={closeChat}/>
          </Times>: 
          <div className='chatopen' onClick={openChat}>
              <img src={headset} alt='nunki bot' />
          </div> 
        }
      </div>
      {
        chatpop? 
        <ActionProvider>
          <Chatbot 
          config={ Config }
          messageParser={MessageParser} 
          actionProvider={(props) => <ActionProvider {...props} closeChat = {closeChat}/> } />
        </ActionProvider>
         : null
      }
     </div>
  )
}

export default Index
