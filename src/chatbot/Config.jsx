import { createChatBotMessage } from 'react-chatbot-kit';
import StartedBtn from './components/StartedBtn';
import BotAvatar from './ChatBot/BotAvatar';
import ClientOptions from './components/ClientOptions';
import NunkiProducts from './components/NunkiProducts';
import Details from './components/Details';

const config = {
  initialMessages: [
    createChatBotMessage("Hello i'm Nunki, How may i help you today", {
      widget: "getStarted",
    }),
  ],
  botName: 'NunkiBot',
  customComponents: {
    botAvatar: (props) => <BotAvatar {...props} />,
  },
  
  widgets: [
    {
      widgetName: "getStarted",
      widgetFunc: (props) => <StartedBtn {...props} />,
    },
    {
      widgetName: "clientOptions",
      widgetFunc: (props) => <ClientOptions {...props}/>,
    },
    {
      widgetName: "NunkiProducts",
      widgetFunc: (props) => <NunkiProducts {...props} />,
    },

    {
      widgetName: "productsDetails",
      widgetFunc: (props) => <Details {...props} />,
    },
    
    {
      widgetName: "shack",
      widgetFunc: (props) => <ShackMessage {...props} />
    }

  ],
  state: {
    checker: null,
    user: {name: "",}, 
    product:""
  }
};

export default config;


