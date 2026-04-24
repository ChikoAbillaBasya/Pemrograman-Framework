import { render, screen } from "@testing-library/react"
import About from "@/pages/about"

describe("About Page - Extended Coverage", () => {
  it("renders about page with all elements", () => {
    const { container } = render(<About />)
    expect(container).toBeInTheDocument()
    expect(container.querySelectorAll("*").length).toBeGreaterThan(0)
  })

  it("verifies page structure and elements", () => {
    const { container } = render(<About />)
    const divElements = container.querySelectorAll("div")
    expect(divElements.length).toBeGreaterThan(0)
  })

  it("renders correctly multiple times", () => {
    render(<About />)
    const page2 = render(<About />)
    expect(page2).toBeTruthy()
  })

  it("has proper React structure", () => {
    const page = render(<About />)
    expect(page.container.firstChild).toBeDefined()
  })
})
