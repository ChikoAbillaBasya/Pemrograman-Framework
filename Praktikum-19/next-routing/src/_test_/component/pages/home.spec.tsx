import { render, screen } from "@testing-library/react"
import Home from "@/pages/index"

describe("Home Page", () => {
  it("renders home page correctly", () => {
    const page = render(<Home />)
    expect(screen.getByText("Praktikum Next.js Pages Routes")).toBeInTheDocument()
    expect(page).toMatchSnapshot()
  })

  it("should display the subtitle", () => {
    render(<Home />)
    expect(screen.getByText("Mahasiswa D4 Pengembangan Web")).toBeInTheDocument()
  })

  it("should render heading element", () => {
    render(<Home />)
    const heading = screen.getByRole("heading", { name: /Praktikum Next.js Pages Routes/i })
    expect(heading).toBeInTheDocument()
  })
})
