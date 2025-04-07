import React from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const Collapsible = ({
    title,
    children,
    initialOpen = false,
    className = '',
    headerClassName = '',
    contentClassName = ''
}) => {

    const [isOpen, setIsOpen] = React.useState(initialOpen)
    return (
        <div>
            <section className={`mb-6 border-b border-gray-300 pb-4 ${className}`}>
                <div
                    className={`flex items-center cursor-pointer p-3 rounded-lg transition-colors ${headerClassName}`}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <h2 className="text-2xl font-semibold flex-grow">{title}</h2>
                    {isOpen ? (
                        <ChevronUp className="text-gray-600" />
                    ) : (
                        <ChevronDown className="text-gray-600" />
                    )}
                </div>

                {isOpen && (
                    <div className={`mt-4 pl-3 pr-3 ${contentClassName}`}>
                        {children}
                    </div>
                )}
            </section>
        </div>
    )
}

export default Collapsible
