import React from 'react'
import PropTypes from 'prop-types'

const Details = (props) => {
    return (
        <>
            <p className="mt-4 text-center text-xl text-white">
                Podatci:
            </p>
            <div className="pt-5 text-white">
                <img src={props.podaci?.avatar_url} />
                <p className="pt-5">LOGIN: {props.podaci?.login}</p>
                <p className="pt-5">NAME: {props.podaci?.name}</p>
                <p className="pt-5">BIO: {props.podaci?.bio}</p>
                <p className="pt-5">LOCATION: {props.podaci?.location}</p>
            </div>
        </>
    )
}

Details.propTypes = {
    login: PropTypes.string,
    name: PropTypes.string,
    bio: PropTypes.string,
    location: PropTypes.string
}

export default Details