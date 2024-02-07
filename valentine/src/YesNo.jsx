import React, { useState } from "react";

const yesImg =
  "https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif";
const noImg =
  "https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif";

const rejectImg =
  "https://media1.tenor.com/m/VPESDNjcoygAAAAC/go-die-go-die-in-a-fire.gif";

const phrases = [
  "No 😫",
  "Are you Sure? 😫",
  "Really Sure? 😫💖",
  "Dont do this to me 😔",
  "I'm gonna cry.... 😭",
  "You are breaking my heart :( 💔",
  "Ok I will Stop 🥺",
  "Stop Pressing No 🥺😫",
];

const AnimePhrases = [
  "Nande 😫",
  "Maji de? 😫",
  "Hontou ni? 😫💖",
  "Yamete kudasai 😔",
  "Naku yo....😭",
  "Kimi wa boku no kokoro o kowasu :( 💔",
  "Wakarimasu 🥺",
  "No o osanaide kudasai 🥺😫",
];

const YesNo = () => {
  const [noCount, setNoCount] = useState(0);

  const [yesPress, setYesPress] = useState(false);

  const [rejectPress, setRejectPress] = useState(false);

  const [Phrases, setPhrases] = useState(phrases);

  const [language, setLanguage] = useState(false);

  const yesButtonSize = noCount * 20 + 16;

  const getNoButtonText = () => {
    return Phrases[Math.min(noCount, Phrases.length - 1)];
  };

  return (
    <>
      <div className="relative flex flex-col items-center p-6 w-90 rounded-xl bg-opacity-5 backdrop-blur-sm border border-gray-300 shadow-md">
        {rejectPress ? (
          <>
            <img
              src={rejectImg}
              alt="Teddy jumping"
              className="rounded-md"
              width={"250px"}
            />
            <button
              className="bg-pink-400 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded my-3"
              style={{ fontSize: `20px` }}
              onClick={() => {
                setRejectPress(false);
                setNoCount(0);
              }}
            >
              Changed my mind 💖
            </button>
          </>
        ) : (
          <>
            <img
              src={yesPress ? yesImg : noImg}
              alt="Teddy jumping"
              className="rounded-md"
              width={"150px"}
            />

            <h1 className="text-2xl font-bold align-middle text-white shadow-text ">
              {yesPress ? <></> : "Will you be my Valentine?"}
            </h1>

            {yesPress ? (
              <h1 className="text-2xl font-bold align-middle text-white bg-gradient-to-tr from-pink-500 via-red-500 to-purple-500">
                <a href="#web">Ok yay!!!</a>
              </h1>
            ) : (
              <div className="flex flex-wrap flex-col bg-opacity-0 backdrop-blur-none md:flex-row gap-4 items-center justify-center">
                <button
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                  style={{ fontSize: `${yesButtonSize}px` }}
                  onClick={() => {
                    setYesPress(true);
                  }}
                >
                  Yes
                </button>
                <button
                  className=" bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => {
                    console.log("noCount: ", noCount);
                    if (noCount <= Phrases.length - 1) setNoCount(noCount + 1);
                    else setRejectPress(true);
                  }}
                >
                  {getNoButtonText()}
                </button>
              </div>
            )}
          </>
        )}
      </div>

      {yesPress ? (
        <div id="web" className="absolute -bottom-3/4 bg-white p-2 rounded-md">
          <a href="https://soumyaswaroopsootar.vercel.app/" target="_blank">
            🌐
          </a>
        </div>
      ) : (
        <div
          className="absolute -bottom-3/4 bg-pink-500 px-5 py-1 rounded-md"
          onClick={() => {
            setLanguage(!language);
            if (language) setPhrases(phrases);
            else setPhrases(AnimePhrases);
          }}
        >
          {language ? "🎌" : "🏴󠁧󠁢󠁥󠁮󠁧󠁿"}
        </div>
      )}
    </>
  );
};

export default YesNo;
