import React from 'react'
import RSelect, { Props as RSelectProps } from 'react-select';

interface SelectProps extends RSelectProps {
    loading?: boolean;
    label?: React.ReactNode | string;
    variant?: 'underline' | 'outlined' | 'filled'
    shape?: 'rounded' | 'normal'
}
const Select = React.forwardRef<RSelectProps, SelectProps>(
    ({ className = "", loading, label, shape="rounded", variant = 'outlined', ...other }, _ref) => {
        return (
            <div className={`xr-select-wrapper ${variant} ${shape} flex column ${className}`}>
                {label && <label className='mb2 input-label ml4'>{label}</label>}
                <RSelect
                    // menuIsOpen
                    classNamePrefix={`xr`}
                    // components={{
                    //     MultiValue: ({ children, ...props }) => {
                    //         console.log('props', props)
                    //         return <components.MultiValue {...props}>{children}</components.MultiValue>
                    //     }
                    // }}
                    {...other}
                />
                {/* <input className={`xr-textfield ${variant}`} ref={ref} {...other} /> */}
            </div>
        )
    }
)

Select.displayName = 'XeromSelect'
export default Select