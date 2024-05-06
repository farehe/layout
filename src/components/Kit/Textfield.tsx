import React from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
    loading?: boolean;
    label?: React.ReactNode | string;
    parentStyle?: React.CSSProperties;
    wrapperStyle?: React.CSSProperties;
    inputClassName?: string;
    inputWrapperClassName?: string;
    variant?: 'underline' | 'outlined' | 'filled' | 'contained' | 'filled-1' | 'filled-2' | 'filled-3' | 'filled-4';
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
    inputSize?: 'small' | 'medium-1' | 'medium' | 'large'
    shape?: 'rounded' | 'normal',
    textArea?: boolean,
    rows?: number
}
const Textfield = React.forwardRef<HTMLInputElement | HTMLTextAreaElement, InputProps>(
    ({
        startIcon,
        endIcon,
        className = "",
        inputClassName = "",
        inputWrapperClassName = "",
        loading,
        label,
        parentStyle = {},
        wrapperStyle = {},
        variant = 'outlined',
        children,
        inputSize = 'medium-1',
        shape = 'rounded',
        textArea = false,
        ...other
    }, ref) => {
        const Comp = textArea ? 'textarea' : 'input'
        return (
            <div className={`xr-textfield-holder ${textArea ? 'itIsTextArea' : ''} flex column ${shape} ${className}`} style={parentStyle}>
                {label && <label className='mb2 input-label ml4'>{label}</label>}
                <div className={`xr-textfield-wrapper ${variant} ${inputSize} ${shape} ${inputWrapperClassName}`} style={{
                    ...wrapperStyle,
                    gridTemplateColumns: startIcon && endIcon
                        ? 'auto 1fr auto'
                        : startIcon
                            ? 'auto 1fr'
                            : endIcon
                                ? '1fr auto'
                                : '1fr'
                }}>
                    {startIcon && <div className='xr-textfield-startIcon flex alignCenter'>{startIcon}</div>}
                    <Comp className={`xr-textfield ${inputClassName}`} ref={ref as any} {...other} />
                    {endIcon && <div className='xr-textfield-endIcon flex alignCenter'>{endIcon}</div>}
                </div>
            </div>
        )
    }
)

Textfield.displayName = 'XeromTextfield'
export default Textfield