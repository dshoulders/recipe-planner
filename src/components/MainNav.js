import React from 'react'
import { Link, IndexLink } from 'react-router'
import '../css/main-nav.css'

const MainNav = () => {
	return (
		<div className={'main-nav'}>
			<IndexLink className={'main-nav-item'} activeClassName="active" to="/">
				Calendar
			</IndexLink>
			<Link className={'main-nav-item'} activeClassName="active" to={'recipes'}>
				Recipes
			</Link>
			<Link className={'main-nav-item'} activeClassName="active" to={'tags'}>
				Tags
			</Link>
			<Link className={'main-nav-item'} activeClassName="active" to={'days'}>
				Days
			</Link>
		</div>
	)
}

export default MainNav