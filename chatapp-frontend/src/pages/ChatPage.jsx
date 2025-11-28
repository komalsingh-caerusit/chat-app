import React, { useRef, useState } from "react";
import { MdAttachFile, MdSend } from "react-icons/md";

const ChatPage = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const inputRef = useRef(null)
  const chatBoxRef=useRef(null)
  const [stompClient, setStompClient]=useState(null)
  const [roomId, setRoomId] = useState("");
  return (
    <div>
      {/* header */}
      <header className="dark:border-gray-700 fixed w-full h-20 dark:bg-gray-900 py-5 flex justify-around items-center">
        <div>
          <h1 className="text-xl font-semibold">
            Room: <span>Family Room</span>
          </h1>
        </div>
        <div>
          <h1 className="text-xl font-semibold">
            <span> Komal</span>
          </h1>
        </div>
        <div>
          <button className="px-3 py-2 dark:bg-red-500 hover:dark:bg-red-700 cursor-pointer rounded-full">
            Leave Room
          </button>
        </div>
      </header>

      <main className="py-20 w-2/3 dark:bg-slate-700 mx-auto h-screen overflow-auto">
        <div className="message_container"></div>
      </main>

      {/* input message container */}
      <div className="fixed bottom-4 w-full h-16">
        <div className="h-full pr-10 gap-4 flex items-center justify-between rounded w-2/3 mx-auto dark:bg-gray-900">
          <input
            type="text"
            placeholder="Type your message here..."
            className="dark:border-gray-700 w-full dark:bg-gray-800 px-5 py-2 rounded-full h-full focus:outline-none"
          />
          <div className="flex gap-2">
            <button className="dark:bg-purple-700 h-10 w-10 flex justify-center items-center rounded-full cursor-pointer">
              <MdAttachFile size={20} />
            </button>
            <button className="dark:bg-green-700 h-10 w-10 flex justify-center items-center rounded-full cursor-pointer">
              <MdSend size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
