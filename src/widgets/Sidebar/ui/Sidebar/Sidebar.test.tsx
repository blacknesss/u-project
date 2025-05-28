import { fireEvent, screen } from "@testing-library/react"
import { RenderWithTranslation } from "shared/lib/tests/renderWithTranslation/RenderWithTranslation"
import { Sidebar } from "widgets/Sidebar"

describe ('Sidebar', () => {
    test ('', () => {
        RenderWithTranslation(<Sidebar/>)
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    })
    test ('test toggle', () => {
        RenderWithTranslation(<Sidebar/>)
        const toggleButton = screen.getByTestId('sidebar-toggle')
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
        fireEvent.click(toggleButton)
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
    })
})
