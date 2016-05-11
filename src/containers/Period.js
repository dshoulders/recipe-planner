import { connect } from 'react-redux'
import moment from 'moment'
import Period from '../components/Period'


const mapStateToProps = (state, ownProps) => {
	
	function mapRecipe(recipeId, index, startDate) {
		
		let recipe = state.recipes.filter(recipe => recipe.id === recipeId)[0]		
		let date = startDate.clone().add(index, 'days')
		
		recipe = Object.assign({}, recipe, { date })
		
		return recipe
	}
	
	const startDate = moment(new Date(ownProps.period.startDate))
	const startDateFormatted = moment(startDate).format('Do MMMM')
	const endDate = startDate.clone().add(27, 'days')
	const endDateFormatted = moment(endDate).format('Do MMMM')
	const recipes = ownProps.period.recipes.map((recipeId, index) => { return mapRecipe(recipeId, index, startDate) })
	const dayRows = recipes.reduce((accumulator, currentRecipe, index) =>{
		accumulator[index % 7].push(currentRecipe)
		return accumulator
	}, [[], [], [], [], [], [], []])
	
	return {
		startDateFormatted,
		endDateFormatted,
		dayRows
	}
}

const PeriodContainer = connect(
  mapStateToProps
)(Period)

export default PeriodContainer