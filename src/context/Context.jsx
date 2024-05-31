import { createContext ,useState} from "react";
import run from "../config/gemini";


export const Context = createContext();




const ContextProvider = (props)=>{
const [input ,setInput] = useState("");
const [recentprompt, setRecentPrompt] = useState("");
const [prevPrompts, setPrevPrompts] = useState([]);
const [showResult, setShowResult] = useState(false);
const [loading, setLoading] = useState(false);
const [resultData, setResultData] = useState("");

    const onSent = async (prompt) => {
        await run(prompt);
    }
   
    const contextValue={
       prevPrompts,
         setPrevPrompts,
         onSent,
         setRecentPrompt,
         recentprompt,
         resultData,
         input,
         setInput,
        showResult,
        loading
    }
    return(
        
                <Context.Provider value={contextValue}>
                    {props.children}
                </Context.Provider>
            )
        

    
}

export default ContextProvider;