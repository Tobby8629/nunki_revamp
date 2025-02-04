import React from 'react';

const MessageParser = ({ children, actions }) => {
  console.log(children.props.state)
  const {state} = children.props
  const parse = (message) => {

  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;




  // if (state.checker === "options"){
    //   const { option } = children.props.state
    //   if(option === "nunki_product"){
    //     console.log("nunki pro")
    //   }
    //   else if (option === "what_we_do") {
    //     console.log("what we do")
    //   }
    //   else if (option === "insurance") {
    //     console.log("insurance")
    //   }
    // }