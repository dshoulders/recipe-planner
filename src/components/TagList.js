import React from 'react'

const TagList = ({ tags, selectedTags, onClick }) => {
	return (
		<div className={'tag-list'}>
			{
				tags.map((tag, index) => {
					
					const isChecked = selectedTags.indexOf(tag.id) >= 0
					
					return (
						<div className={'tag-editor'} key={index}>
							<label className={'tag-label'}>
								<input className={'checkbox'} type={'checkbox'} value={tag.id} defaultChecked={isChecked} onClick={() => onClick(tag.id, !isChecked)} />
								{ tag.text }
							</label>
						</div>
					)
				})
			}
			
		</div>
	)
}

export default TagList