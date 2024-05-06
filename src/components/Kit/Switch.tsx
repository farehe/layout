import React from 'react'

interface SwitchProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    labelPosition?: 'left' | 'right';
    className?: string;
    id: string;
    vertical?: boolean;
    text?: string;
}
const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
    ({ label, id, text, vertical, className, labelPosition = "left", ...props }, ref) => {
        return (
            <label htmlFor={id} className={`xr-switch ${vertical ? '-vertical' : ''} ${className}`}>
                {labelPosition === 'left' ? <div className='flex column'>
                    <span className={`fs-lg`}>{label}</span>
                    {text ? <span className='textSecondary mt1 fs-md' style={{maxWidth: '50ch'}}>{text}</span> : ''}
                </div> : ''}
                <input type="checkbox" role="switch" id={id} ref={ref} {...props} />
                {labelPosition === 'right' ? <div className='flex column'>
                    <span>{label}</span>
                    {text ? <span className='text-muted'>{text}</span> : ''}
                </div> : ''}

            </label>
        )
    }
)

Switch.displayName = 'XeromSwitch'
export default Switch