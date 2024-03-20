import React, {useEffect, useState} from 'react';
import {VIDEO_API_LINK} from '../Utils/configs.js';
import VideoCard from './VideoCard.js';
import { Link } from 'react-router-dom';

const VideoContainer = ()=>{
    const [videos, setVideos] = useState([])

    useEffect(()=>{
        getVideos()
    },[])

    async function getVideos(){
        const videoData = await fetch(VIDEO_API_LINK);
        const json = await videoData.json();
        setVideos(json.items) 
    }
    return(
        <div className='flex flex-wrap'>
            {
                videos.map((video)=>{
                   return <Link key={video.id} to={"/watch?v=" + video.id}><VideoCard info = {video}/></Link> 
                })
            }
        </div>
    )
}

export default VideoContainer;