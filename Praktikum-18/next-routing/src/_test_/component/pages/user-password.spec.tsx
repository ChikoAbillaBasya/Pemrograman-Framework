import { render, screen } from "@testing-library/react"
import PasswordUserPage from "@/pages/user/password"

jest.mock("next/router", () => ({
  useRouter() {
    return {
      route: "/user/password",
      pathname: "/user/password",
      query: {},
      asPath: "/user/password",
      push: jest.fn(),
      event: {
        on: jest.fn(),
        off: jest.fn(),
      },
      isReady: true,
    }
  },
}))

describe("User Password Page", () => {
  it("renders user password page correctly", () => {
    const page = render(<PasswordUserPage />)
    expect(screen.getByText("Password User Page")).toBeInTheDocument()
    expect(page).toMatchSnapshot()
  })

  it("should display password page content", () => {
    render(<PasswordUserPage />)
    const content = screen.getByText("Password User Page")
    expect(content).toBeInTheDocument()
  })

  it("should render without errors", () => {
    const { container } = render(<PasswordUserPage />)
    expect(container).toBeInTheDocument()
  })
})
