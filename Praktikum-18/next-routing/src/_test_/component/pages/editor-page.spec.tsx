import { render, screen } from "@testing-library/react"

// Mock the withAuth HOC to prevent authentication checks during testing
jest.mock("@/utils/withAuth", () => {
  return {
    withAuth: (Component: any) => Component,
  }
})

import HalamanEditor from "@/pages/editor"

describe("Editor Page", () => {
  it("renders editor page correctly", () => {
    const page = render(<HalamanEditor />)
    expect(screen.getByText("Halaman Editor")).toBeInTheDocument()
    expect(page).toMatchSnapshot()
  })

  it("should display editor heading", () => {
    render(<HalamanEditor />)
    const heading = screen.getByRole("heading", { name: /Halaman Editor/i })
    expect(heading).toBeInTheDocument()
  })

  it("should display welcome message", () => {
    render(<HalamanEditor />)
    expect(screen.getByText(/Selamat datang di halaman editor/i)).toBeInTheDocument()
  })

  it("should display access information", () => {
    render(<HalamanEditor />)
    expect(screen.getByText(/Anda memiliki akses untuk mengeola/i)).toBeInTheDocument()
  })
})
