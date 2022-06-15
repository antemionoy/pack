const Icon = (props) => {
    const myIcon = require('@assets/icons/' + props.name + '.svg').default

    return(
        <svg>
            <use href={myIcon} />
        </svg>
    )
}

export default Icon;