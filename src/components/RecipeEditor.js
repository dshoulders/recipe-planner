import React from 'react'
import RecipeTagList from '../containers/RecipeTagList'

const RecipeEditor = ({ 
	recipe, 
	handleTextChange,
	remove
}) => {
	return (
		<div className={'recipe-editor'}>
			<div className={'recipe-fields'}>
				<input className="text-field name" type={'text'} placeholder={'Name'} value={recipe.name} onChange={e => handleTextChange(recipe.id, 'name', e.target.value)} />
				<input className="text-field" type={'text'} placeholder={'Book'} value={recipe.book} onChange={e => handleTextChange(recipe.id, 'book', e.target.value)} />
				<input className="text-field" type={'text'} placeholder={'Page'} value={recipe.page} onChange={e => handleTextChange(recipe.id, 'page', e.target.value)} />
				<input className="text-field" type={'text'} placeholder={'Url'} value={recipe.url} onChange={e => handleTextChange(recipe.id, 'url', e.target.value)} />
				<RecipeTagList recipeId={recipe.id} selectedTags={recipe.tags} />
			</div>
			<button className={'recipe-remove button'} onClick={() => remove(recipe.id)}>X</button>
		</div>
	)
}

export default RecipeEditor