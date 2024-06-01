import { assets } from "../../assets/assets";
import "./Main.css";
import { useContext } from "react";
import { Context } from "../../context/Context";
import toast, { Toaster } from 'react-hot-toast';


const Main = () => {
    const notify = () => toast('This option will available soon....');
  const {
    onSent,
    recentPrompt,
    showResult,
    resultData,
    loading,
    input,
    setInput,
  } = useContext(Context);
  console.log("recent prompt" + recentPrompt);
  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p>
                <span>Hello, Vivek.</span>
                <p>How can I help you today?</p>
              </p>
            </div>
            <div className="cards">
              <button
                className="card"
                onClick={() =>
                  setInput("See beautiful places to see on an upcoming trip")
                }
              >
                <p>See beautiful places to see on an upcoming trip</p>
                <img src={assets.compass_icon} alt="" />
              </button>
              <button
                className="card"
                onClick={() =>
                  setInput("Briefly summarize the concept: urban planning")
                }
              >
                <p>Briefly summarize the concept: urban planning</p>
                <img src={assets.bulb_icon} alt="" />
              </button>
              <button
                className="card"
                onClick={() =>
                  setInput("See beautiful places to see on an upcoming trip")
                }
              >
                <p>See beautiful places to see on an upcoming trip</p>
                <img src={assets.message_icon} alt="" />
              </button>
              <button
                className="card"
                onClick={() =>
                  setInput(
                    "Brainstorm team bonding activities for out work retreat"
                  )
                }
              >
                <p>Brainstorm team bonding activities for out work retreat</p>
                <img src={assets.code_icon} alt="" />
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="result">
              <div className="result-title">
                <img src={assets.user_icon} alt="" />
                <p>{recentPrompt}</p>
              </div>
              <div className="result-data">
                <img src={assets.gemini_icon} alt="" />
                {loading ? (
                  <div className="loader">
                    <hr />
                    <hr />
                    <hr />
                  </div>
                ) : (
                  <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
                )}
              </div>
            </div>
          </>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder="Enter a prompt here"
            />
            <div>
              <img src={assets.gallery_icon} onClick={notify} alt="" />
         
              <img src={assets.mic_icon} alt="" onClick={notify}/>
              <Toaster 
              position="top-center"
              reverseOrder={false}
              gutter={8}
              toastOptions={{
                duration: 5000,
                style: {
                  background: '#363636',
                  color: '#fff',
                },
            
                
                success: {
                  duration: 3000,
                  theme: {
                    primary: 'green',
                    secondary: 'black',
                  },
                },
              }}/>
              {input?<img src={assets.send_icon} alt=""  onClick={() => onSent()} />:null}
            </div>
          </div>
          <p className="bottom-info">
            Gemini may display iaccurate info , including about people, so
            double-check its responses. Your privacy and Gemini Apps
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
