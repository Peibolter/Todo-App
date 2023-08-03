import { type FILTER_VALUE } from "../types/Todo"
import { FILTERS_BUTTONS } from "../types/consts"

interface Props{
    filterSelected: FILTER_VALUE
    onFilterSelected: (filter: FILTER_VALUE) => void
}
export const Filters =({filterSelected,onFilterSelected} : Props) =>{

    return(
        <ul className="filters">

            {
                Object.entries(FILTERS_BUTTONS).map(([key,{ href, literal }]) => {
                    const isSelected = key===filterSelected

                    const className= isSelected ? 'selected' : ''
                    return (
                        <li key={key}>
                          <a
                            href={href}
                            className={className}
                            onClick={(event) => {
                                event.preventDefault()
                                onFilterSelected(key as FILTER_VALUE)
                            }}
                            >
                             {literal}
                        </a>
                        </li>
                    )

                })
            }

        </ul>

    )

}