import {useState,useEffect} from 'react'
import {storage,firestore,timestamp} from '../firebase/config'
const useStorage= (file) =>{
	const [progress,setProgress] = useState(0)
	const [error,setError]=useState(0)
	const [url,setUrl] = useState(null)
	useEffect(()=>{
			// set references
			// storage ref where the file will be stored
			// collection ref where the file will be stored
			const storageRef = storage.ref(file.name)
			const collectionRef = firestore.collection('images')
			storageRef.put(file).on('state_changed',(snap)=>{
				// set percentage bar
				let percentageTranferred = snap.bytesTransferred/snap.totalBytes*100;
				setProgress(percentageTranferred);
			},(error)=>{
				// error is the next parameter of storageRef
				setError('failed to upload image')
			}, async ()=>{
				// get url in third parameter
				const url = await storageRef.getDownloadURL()
				// add url to firestore database
				// created at timestamp
				let createdAt=timestamp();
				collectionRef.add({url,createdAt})
				setUrl(url)
			})
	},[file])
	return {progress, error , url}
}
export default useStorage
