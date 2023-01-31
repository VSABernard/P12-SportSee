import React from "react"
import PropTypes from 'prop-types'
import '../HeaderDashboard/HeaderDashboard.css'

const HeaderDashboard = ({userInfos}) => {
  const {firstName} = userInfos
  
  return (
    <div className="userGreeting">
      <h1>
        Bonjour <span>{firstName}</span>
      </h1>
      <h2>Félicitation ! Vous avez explosé vos objectifs hier 👏</h2>
    </div>
  )
}

HeaderDashboard.propTypes = {
  userInfos : PropTypes.object,
}

export default HeaderDashboard