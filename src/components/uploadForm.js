import React,{useState} from 'react';
import ProgressBar from '../components/progressBar'

const UploadForm = (props) => {
	const [ file, setFile] = useState(null);
	const [error,setError]=useState(null)
	const submitHandler =(e)=>{
			const selected = e.target.files[0];
			const types = ['image/png','image/jpeg']
			if(selected && types.includes(selected.type)){
				setFile(selected)
				setError('')
			}else {
				setError('please choose an image file type (png or jpeg)')
			}
			console.log(selected);
	}
  return (
    <form className="bg-white rounded px-8 pt-6 pb-8 mb-4" >
    	<input  type="file" onChange={submitHandler} />
    	{error&& <div class="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4" role="alert">
	  	<p>{error}</p>
	</div>}
	{file && <ProgressBar file={file} setFile={setFile} />}
    </form>
  )
}

export default UploadForm;