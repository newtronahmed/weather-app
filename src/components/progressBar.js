import React,{useEffect} from 'react';
import useStorage from '../hooks/useStorage'
const ProgressBar = ({setFile,file}) => {
	const {progress,url} = useStorage(file)
	console.log({progress,url})
	useEffect(()=>{
		if(url){
			setFile(null)
		}
	},[url,setFile])
  return (
    <div className="bg-red-200 h-1" style={{width:progress+'%'}}></div>
  )
}

export default ProgressBar;