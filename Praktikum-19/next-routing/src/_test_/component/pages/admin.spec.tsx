import { render, screen } from "@testing-library/react"
import HalamanAdmin from "@/pages/admin"

describe("Admin Page", () => {
  it("renders admin page correctly", () => {
    const page = render(<HalamanAdmin />)
    expect(screen.getByText("Halaman Admin")).toBeInTheDocument()
    expect(page).toMatchSnapshot()
  })

  it("should display admin heading", () => {
    render(<HalamanAdmin />)
    const heading = screen.getByRole("heading", { name: /Halaman Admin/i })
    expect(heading).toBeInTheDocument()
  })

  it("should display admin description", () => {
    render(<HalamanAdmin />)
    expect(screen.getByText(/Selamat datang di halaman admin/i)).toBeInTheDocument()
  })

  it("should contain admin access message", () => {
    render(<HalamanAdmin />)
    expect(screen.getByText(/Anda memiliki akses penuh/i)).toBeInTheDocument()
  })

  it("should mention data management capabilities", () => {
    render(<HalamanAdmin />)
    expect(screen.getByText(/Anda dapat mengelola pengguna/i)).toBeInTheDocument()
  })
})
