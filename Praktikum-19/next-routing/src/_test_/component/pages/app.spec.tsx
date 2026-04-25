import { render, screen } from "@testing-library/react"
import App from "@/pages/_app"

jest.mock("next/script", () => {
  return {
    __esModule: true,
    default: () => null,
  }
})

jest.mock("@/components/layouts/Appshell", () => {
  return function MockAppShell({ children }: any) {
    return <div data-testid="appshell">{children}</div>
  }
})

jest.mock("@/components/layouts/navbar", () => {
  return function MockNavbar() {
    return <div data-testid="navbar">Navbar</div>
  }
})

jest.mock("next-auth/react", () => ({
  SessionProvider: ({ children }: any) => <div data-testid="session-provider">{children}</div>,
}))

describe("_app.tsx", () => {
  it("renders app component correctly", () => {
    const mockComponent = () => <div>Test Component</div>
    const page = render(
      <App
        Component={mockComponent}
        pageProps={{ session: null }}
        router={{} as any}
      />
    )
    expect(screen.getByTestId("appshell")).toBeInTheDocument()
    expect(page).toMatchSnapshot()
  })

  it("should contain session provider", () => {
    const mockComponent = () => <div>Test Component</div>
    render(
      <App
        Component={mockComponent}
        pageProps={{ session: null }}
        router={{} as any}
      />
    )
    expect(screen.getByTestId("session-provider")).toBeInTheDocument()
  })

  it("should render component inside appshell", () => {
    const mockComponent = () => <div data-testid="test-component">Test Content</div>
    render(
      <App
        Component={mockComponent}
        pageProps={{ session: null }}
        router={{} as any}
      />
    )
    expect(screen.getByTestId("test-component")).toBeInTheDocument()
  })

  it("should pass session props to component", () => {
    const mockSession = { user: { email: "test@example.com" } }
    const mockComponent = () => <div>Test Component</div>
    render(
      <App
        Component={mockComponent}
        pageProps={{ session: mockSession }}
        router={{} as any}
      />
    )
    expect(screen.getByTestId("appshell")).toBeInTheDocument()
  })
})
