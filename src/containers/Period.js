import { connect } from 'react-redux'
import moment from 'moment'
import Period from '../components/Period'
import { removePeriod } from '../actions/period'


const mapStateToProps = (state, ownProps) => {
	
	function mapRecipe(recipeId, index, startDate) {
		
		let recipe = state.recipes.filter(recipe => recipe.id === recipeId)[0]		
		let date = startDate.clone().add(index, 'days').startOf('day')
		let today = moment().startOf('day')
		let isFuture = date.isAfter(today)
		let isToday = date.isSame(today)
		let isPast = date.isBefore(today)
		
		recipe = Object.assign({}, recipe, { 
			date, isFuture, isToday, isPast
		 })
		
		return recipe
	}
	
	const id = ownProps.period.id
	const startDate = moment(new Date(ownProps.period.startDate))
	const startDateFormatted = moment(startDate).format('Do MMMM')
	const endDate = startDate.clone().add(27, 'days')
	const endDateFormatted = moment(endDate).format('Do MMMM')
	const recipes = ownProps.period.recipes.map((recipeId, index) => { return mapRecipe(recipeId, index, startDate) })
	
	return {
		id,
		startDateFormatted,
		endDateFormatted,
		recipes
	}
}

const mapDispatchToProps = dispatch => {
	return {
		removePeriod: (id) => dispatch(removePeriod(id))
	}
}

const PeriodContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Period)

export default PeriodContainer