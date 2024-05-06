import React from 'react'

interface LogoTypes {
    size?: 'large' | 'small'
};

const Logo = ({ size }: LogoTypes) => {
    return (
        <div className={size === 'large' ? 'fs-xl' : 'fs-sm'}>
            Logo
        </div>
    )
};

export default Logo