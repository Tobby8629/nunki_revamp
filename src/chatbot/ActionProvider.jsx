import React from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children, closeChat }) => {
  const shack = `Shack Insurance safeguards informal homes from fire, storm, wind, and flooding,
   recognizing the importance of every home.`

  const init = () => {
    const message = createChatBotMessage("Can you please enter your name to serve you better?");
    updateState(message, "name");
  };

  const invalidInput = (name, option) => {
    const message = createChatBotMessage(`Invalid ${option} input, try using a valid name`);
    updateState(message, name);
  }

  const clientOptions = () => {
    const name = children.props.children.props.state.user.name
    const message = createChatBotMessage(`what would you like to learn more about today `, {
      widget: "clientOptions"
    })
    updateState(message, 'options')
  }

  const nunki_product = () => {
    const message = createChatBotMessage("Please choose one of the options below",
      {
        widget: "NunkiProducts"
      }
    );
    updateState(message, "options", "nunki_product");
  }

  const product_details = () => {
    const message = createChatBotMessage("what product would you like to learn more about today ?",
      {
        widget: "productsDetails"
      }
    );
    updateState(message, "options", "nunki_product");
  }

  const what_we_do = () => {
    const message = createChatBotMessage("This is what we do at Nunki");
    updateState(message, "options", "what_we_do");
  }

  const insurance = () => {
    const message = createChatBotMessage("Here are the steps to insure");
    updateState(message, "options", "insurance");
  }

  const shackInsurance = () => {
    const message = createChatBotMessage(shack,{
      widget: "shack"
    })
    updateState(message, "options", "product");
  }

  const close = () => {
    closeChat()
  }



  const updateState = (message, checker, product ) => {
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
      checker,
      product 
    }));
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            init,
            clientOptions,
            invalidInput,
            nunki_product,
            insurance,
            what_we_do,
            shackInsurance,
            product_details,
            close,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
