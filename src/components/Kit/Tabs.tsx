import { Button } from "."

const Tabs = ({
    options,
    activeTab,
    onChange,
    className = '',
    buttonClassName = '',
    buttonSize = 'small',
}: {
    options: {
        label: string,
        value: string,
        icon?: any
    }[],
    className?: string,
    buttonClassName?: string,
    buttonSize?: 'small' | 'medium' | 'medium-2' | 'large',
    activeTab: string | undefined,
    onChange: (tab: string) => void
}) => {
    return (
        <div className={`tabs-wrapper ${className}`}>
            {
                options.map((tab, index) => (
                    <Button
                        key={index}
                        className={`xr-tab outlined ${buttonSize} ${activeTab === tab.value ? 'active' : ''} ${buttonClassName}`}
                        onClick={() => onChange(tab.value)}
                    >
                        {tab.icon && <div className="flex mr2">{tab.icon}</div>}
                        {tab.label}
                    </Button>
                ))
            }
        </div>
    )
}

export default Tabs