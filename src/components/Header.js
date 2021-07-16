import React from "react";
import "./../img/TarotReading.jpeg";

function Header() {
  return (
      <div>
        <container>
          <h1>🌙 🔮 ✨ Welcome to Moonstone Tarot! 🌙 🔮 ✨</h1>
          <h3>✨Gain insight into your past, present and future✨</h3>

          <img src={require("./../img/TarotReading.jpeg")} />
        </container>
      </div>
  );
}

export default Header;
