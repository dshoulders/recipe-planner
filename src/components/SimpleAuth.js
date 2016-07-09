import React from 'react'

const SimpleAuth = ({ isAuthenticated, pwdValue, showLogin, revealLogin, logoutClick, pwdChange, pwdKeyUp }) => {

	return (
		<div className={'auth'}>
			{isAuthenticated === false &&
				<button className={'login'} onClick={revealLogin}></button>					
            }

            {isAuthenticated === true &&
				<button className={'logout'} onClick={logoutClick}></button>
            }
			
			{showLogin &&
				<input 
					type={'text'} 
					className={'pwd'}
					placeholder={'password'} 
					value={pwdValue} 
					onChange={e => pwdChange(e.target.value)} 
					onKeyUp={e => pwdKeyUp(e.keyCode, e.target.value)} />
			}
		</div>
	)
}

export default SimpleAuth