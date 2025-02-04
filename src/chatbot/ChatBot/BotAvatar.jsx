import styled from 'styled-components'
import { headset } from '/public/images/Nunki/nunkiImages'

const BotAvatar = () => {
  const Avatar = styled.div `
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    margin-right: 10px;
    justify-content: center;
  `
  return (
    <Avatar>
      <img src={headset} alt='nunki' style={{width: "100%"}}/>
    </Avatar>
  )
}

export default BotAvatar
