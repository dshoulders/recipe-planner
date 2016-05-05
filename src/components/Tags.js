import React from 'react'
import '../css/tags.css'

const Tags = ({ tags, addTag, removeTag, handleTextChange }) => {
	return (
		<div className={'tags'}>
			<button className={'button add-tag'} onClick={addTag}>Add Tag</button>
			{ 
				tags.map(tag => {
					return (
						<div className={'tag-editor'} key={tag.id}>
							<input type={'text'} className={'text-field'} value={tag.text} onChange={e => handleTextChange(tag.id, e.target.value)} />
							<button className={'button tag-remove'} onClick={() => removeTag(tag.id)}>X</button>
						</div>
					)
				})
			}
		</div>
	)
}

export default Tags