import React from 'react';

const SidebarItem = (props) => {
    const {name,handleClick,active}=props
    return (
        <button 
        className={`sidebar-item {${(active) ? 'active' : ''}}`}
        onClick={handleClick}
        >
            {name}
        </button>
    );
}

export default SidebarItem;
