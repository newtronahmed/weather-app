import React from 'react';
import useFireStore from '../hooks/useFireStore'

const ImageGrid = ({setSelected}) => {
	const {docs} = useFireStore('images')
	
	console.log({docs})
  return (
    <div className="grid grid-cols-3 gap-4">
    	{docs&& docs.map(doc=>(
    		<div className="overflow-hidden relative h-0 opacity-75" key={doc.id} onClick={()=>setSelected(doc.url)} style={{padding:'50% 0'}}>
    			<img className="min-h-full max-w-full absolute top-0 left-0" src={doc.url} alt="image" />
    		</div>
    	))}
    </div>
  )
}

export default ImageGrid;