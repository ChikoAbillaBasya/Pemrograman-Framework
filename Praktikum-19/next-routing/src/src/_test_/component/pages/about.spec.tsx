import { render, screen } from "@testing-library/react"
import About from "@/pages/about"

describe("About Page", () => {
  it("renders about page correctly", () => {
    const page = render(<About />)
    expect(screen.getByTestId("title")).toBeInTheDocument()
    expect(page).toMatchSnapshot()
  })

  it("should display about page title", () => {
    render(<About />)
    expect(screen.getByText(/Ini Halaman About/i)).toBeInTheDocument()
  })

  it("should have correct title text content", () => {
    render(<About />)
    const title = screen.getByTestId("title")
    expect(title.textContent).toBe("Ini Halaman About")
  })
})
import { render, screen } from "@testing-library/react"
import AboutPage from "@/pages/about"

describe("About Page", () => {
  it("renders about page correctly", () => {
    const page = render(<AboutPage />)
    // expect(screen.getByTestId("title").textContent).toBe("About")
    expect(page).toMatchSnapshot()
  })
})
