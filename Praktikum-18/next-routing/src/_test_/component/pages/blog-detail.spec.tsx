import { render, screen } from "@testing-library/react"
import BlogDetailPage from "@/pages/blog/[slug]"
import { routerScenarios } from "@/_test_/mocks/router"

jest.mock("next/router", () => ({
  useRouter: () => routerScenarios.blog("test-blog"),
}))

describe("Blog Detail Page", () => {
  it("renders blog detail page correctly", () => {
    const page = render(<BlogDetailPage />)
    expect(screen.getByText("Halaman Blog")).toBeInTheDocument()
    expect(page).toMatchSnapshot()
  })

  it("should display blog heading", () => {
    render(<BlogDetailPage />)
    const heading = screen.getByRole("heading", { name: /Halaman Blog/i })
    expect(heading).toBeInTheDocument()
  })

  it("should display slug from router", () => {
    render(<BlogDetailPage />)
    expect(screen.getByText("Slug: test-blog")).toBeInTheDocument()
  })

  it("should render without errors", () => {
    const { container } = render(<BlogDetailPage />)
    expect(container).toBeInTheDocument()
  })
})
