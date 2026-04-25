import { render, screen } from "@testing-library/react"
import Appsetting from "@/pages/setting/app"

describe("App Setting Page", () => {
  it("renders setting app page correctly", () => {
    const page = render(<Appsetting />)
    expect(screen.getByText("App Setting Page")).toBeInTheDocument()
    expect(page).toMatchSnapshot()
  })

  it("should display setting page content", () => {
    render(<Appsetting />)
    const content = screen.getByText("App Setting Page")
    expect(content).toBeInTheDocument()
  })

  it("should render without errors", () => {
    const { container } = render(<Appsetting />)
    expect(container).toBeTruthy()
  })

  it("should have correct structure", () => {
    const { container } = render(<Appsetting />)
    const divElement = container.querySelector("div")
    expect(divElement).toBeInTheDocument()
  })
})
