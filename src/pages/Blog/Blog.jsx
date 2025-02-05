import { blogs } from '../../assets/data'
import blogStyle from './Blog.module.css'
import { Link } from 'react-router-dom'
const Brief = () => {
  const poster = blogs[0]
  const bloog = blogs?.slice(1)

  return (
    <div className='wrapper'>
      <main className='main_section'>
        <section className={blogStyle.header}>
          <div className={blogStyle.header_img}>
            <img src={poster?.img} alt={poster?.name}/>
          </div>
          <div className={blogStyle.header_text}>
            <h2>{poster?.name}</h2>
            <p>{poster?.summary}</p>
            <div className={blogStyle.btn}>
              <button style={{backgroundColor: "#1271b8"}}>
                <Link to={`/blogs/${poster?.name}`}>Read more</Link>
              </button>
            </div>
          </div>
        </section>
        <section className={blogStyle.blogs}>
          {bloog?.map((e)=>(
          <div key={e?.id} className={blogStyle.blogs_wrapper}>
            <h3>{e?.name}</h3>
            <div className={blogStyle.blogs_img}>
              <img src={e?.img} alt={e?.name}/>
            </div>
            <div className={blogStyle.blogs_btn}>
              <button>
                <Link to={`/blogs/${e?.name}`}>Read more</Link>
              </button>
            </div>
          </div> 
          ))}
        </section>
      </main>
    </div>
    
  )
}

export default Brief