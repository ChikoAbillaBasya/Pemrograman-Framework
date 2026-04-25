import { render, screen } from "@testing-library/react"
import AppShell from "@/components/layouts/Appshell"

jest.mock("next/router", () => ({
  useRouter() {
    return {
      route: "/",
      pathname: "/",
      query: {},
      asPath: "/",
      push: jest.fn(),
      isReady: true,
    }
  },
}))

jest.mock("@/components/layouts/navbar", () => {
  return function MockNavbar() {
    return <div data-testid="navbar">Navbar Component</div>
  }
})

jest.mock("next/font/google", () => ({
  Roboto: jest.fn(() => ({
    className: "roboto-font",
  })),
}))

describe("AppShell Component", () => {
  it("renders children correctly", () => {
    render(
      <AppShell>
        <div data-testid="test-child">Test Child</div>
      </AppShell>
    )
    expect(screen.getByTestId("test-child")).toBeInTheDocument()
  })

  it("displays navbar for non-auth routes", () => {
    render(
      <AppShell>
        <div>Content</div>
      </AppShell>
    )
    expect(screen.getByTestId("navbar")).toBeInTheDocument()
  })

  it("renders main element", () => {
    const { container } = render(
      <AppShell>
        <div>Content</div>
      </AppShell>
    )
    const mainElement = container.querySelector("main")
    expect(mainElement).toBeInTheDocument()
  })

  it("applies roboto font class", () => {
    const { container } = render(
      <AppShell>
        <div>Content</div>
      </AppShell>
    )
    const mainElement = container.querySelector("main")
    expect(mainElement).toHaveClass("roboto-font")
  })
})
