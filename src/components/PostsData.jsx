import { useEffect, useState } from "react"
import { DeletePost, getPost } from "../api/PostApi"

const PostsData = () => {

    const [data , setData]=useState([]);
    // const [deletedata, setDelete]=useState('')
    
  const getPostdata = async ()=>{
    const response = await getPost()
    setData(response)  //updating the state with the received data from API call
    console.log(response)
  }
  useEffect(()=>{
    getPostdata()
  },[])

  const handleDelete = async(id)=>{
    console.log("delete button clicked")
    try {
       const deletepost = await DeletePost(id)
      if (deletepost.status === 200) {
      const deleteData = data.filter((curtElmt)=>{
          return curtElmt.id != id
        })
        setData(deleteData)
      }
     } catch (error) {
      console.log(error)
     }

  }


  return (
    <>
        <section className="section-post">
        <ol>
            {data.map((curElemt)=>{
                const {id , title , body}=curElemt
                return(
                    <li key={id}>
                      <p>{id}</p>
                        <h3>Title: {title}</h3>
                        <p>Body: {body}</p>
                        <button>Edit</button>
                        <button className="btn-delete" onClick={()=>handleDelete(id)} >Delete</button>
                    </li>
                )
            })}
        </ol>
        </section>
    </>
  )
}

export default PostsData