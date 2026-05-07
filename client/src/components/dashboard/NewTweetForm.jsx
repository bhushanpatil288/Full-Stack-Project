import { useState } from "react"
import { useSelector } from 'react-redux'
import { newTweet } from "../../api/api";

const NewTweetForm = () => {
  const { userData } = useSelector(state => state.auth);
  const [tweetData, setTweetData] = useState({
    title: "",
    description: "",
    // author: userData._id
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await newTweet(tweetData)
    if(res.status === 201){
      alert("tweet created")
    }
    console.log(res);
  }

  const handleChange = (e) => {
    setTweetData({...tweetData, [e.target.name]: e.target.value})
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2 className='text-2xl font-bold text-center'>Create New Tweet</h2>
      <div className='flex flex-col gap-3 mt-10'>
        {/* <input type="text" value={userData._id} /> */}
        <input 
          onChange={handleChange}
          type="text"
          placeholder='Title'
          name="title"
          value={tweetData.title}
          className='w-full bg-neon-cyan p-3 outline-0 rounded-xl'
        />
        <textarea
          onChange={handleChange}
          placeholder='Description'
          name="description"
          value={tweetData.description}
          className='w-full min-h-50 bg-neon-cyan p-3 outline-0 rounded-xl'
        />
        <div className='text-center'>
          <button className='px-8 py-2 rounded-xl bg-neon-magenta text-white hover:scale-110 duration-200 transition-all active:scale-98 cursor-pointer'>Create</button>
        </div>
      </div>
    </form>
  )
}

export default NewTweetForm