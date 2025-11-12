import {createContext, useState } from "react";



export const FilterContext = createContext('all');

interface FilterProviderProps {
    children: React.ReactNode
}

export function FilterProvider({children}: FilterProviderProps) {
    const [filter, setFilter] = useState<'all' | 'active'| 'completed'>('all');

    return (
        <FilterContext.Provider value={{filter, setFilter}}>
            {children}
        </FilterContext.Provider>
    )
}