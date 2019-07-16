import React from 'react'

export default props => (
    <li>
        <a href>
            <i className={`fa fa-${props.icon}`}></i><span>{props.label}</span>
            <i className={`fa fa-agle-left pull-right`}></i>
        </a>
        <ul className='treeview-menu'>
            {props.children}
        </ul>
    </li>
)