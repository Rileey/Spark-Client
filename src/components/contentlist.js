import ContentlistItem from './Contentlistitem'
import '../css/contentlist.modules.css'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const Contentlist = () => {
    const history = useNavigate();

    const [featured, setFeatured] = useState([])

    useEffect(() => {
        const getFeatured = async () => {
            const {data}= await axios.get('/movies/featured', {
                headers: {
                    token: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYzQ1ZGJhNWQ5ZGY1NmEzMzhhNTFmNCIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NDA2MzIyMjYsImV4cCI6MTY0MzIyNDIyNn0.FliBS9psdYuSEbr2OHwGf4iurw4ZjDYUJlbDggfnv1M'
                }
                
            })
            setFeatured(data)
        }
        getFeatured()
    }, [history])



    return (
        <div className='content-list'>
            <span className="contentlistTitle">Recommended Films</span>
            <div className="content-wrapper" >
                <div className="content-container" >
                    {featured.map((card) => (
                        <Link to={`/content/${card._id}`} key={card._id} style={{textDecoration: 'none'}} >
                            <ContentlistItem card={card} />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Contentlist
