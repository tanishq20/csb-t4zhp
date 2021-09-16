import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "🍇": "Grapes",
  "🍈": "Melon",
  "🍉": "Watermelon",
  "🍊": "Tangerine",
  "🍋": "Lemon",
  "🍌": "Banana",
  "🍍": "Pineapple",
  "🥭": "Mango"
};
var trending = {
  "❤️": "Red Heart",
  "✨": "Sparkles",
  "🥺": "Pleading Face",
  "🔥": "Fire",
  "😂": "Face with Tears of Joy",
  "😊": "Smiling Face with Smiling Eyes",
  "✔️": "Check Mark",
  "🥰": "Smiling Face with Heart"
};

// How to convert object to arrays in react
// console.log(Object.keys(emojiDictionary));

var emojisWeKnow = Object.keys(emojiDictionary);
const trendingEmoji = Object.keys(trending);

export default function App() {
  const [meaning, setMeaning] = useState("");
  const [trendMeaning, setTrendMeaning] = useState("");

  function emojiInputHandler(event) {
    const userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    var trendMeaning = trending[userInput];

    if (meaning === undefined && trendMeaning === undefined) {
      meaning = "This emoji is not in our database";
    }
    setMeaning(meaning);
    setTrendMeaning(trendMeaning);
  }

  function clickedEmoji(emojiList) {
    const meaning = emojiDictionary[emojiList];
    setMeaning(meaning);
    const trendMeaning = trending[emojiList];
    setTrendMeaning(trendMeaning);
  }

  return (
    <div className="heading">
      <h1>Emoji finder</h1>
      <input
        className="input-tag"
        placeholder="Please enter your emoji here!!"
        onChange={emojiInputHandler}
      ></input>
      <div className="display">
        {meaning} {trendMeaning}
      </div>

      <hr />
      <h2
        style={{
          maxWidth: "15%"
        }}
        className="head-tag"
      >
        Emojis we knew
      </h2>
      <br />
      {emojisWeKnow.map(function (emojiList) {
        return (
          <span
            className="emoji"
            key={emojiList}
            onClick={() => clickedEmoji(emojiList)}
          >
            {emojiList}
          </span>
        );
      })}

      <hr />

      <h2
        style={{
          maxWidth: "10%"
        }}
        className="head-tag"
      >
        Trending
      </h2>

      <br />

      {trendingEmoji.map((trending) => {
        return (
          <span
            className="emoji"
            key={trending}
            onClick={() => clickedEmoji(trending)}
          >
            {trending}
          </span>
        );
      })}
    </div>
  );
}
