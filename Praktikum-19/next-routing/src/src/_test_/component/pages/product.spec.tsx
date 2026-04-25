import { render, screen } from "@testing-library/react"
import TampilanProduk from "@/pages/produk"
import { createMockRouter } from "@/_test_/mocks/router"

jest.mock("next/router", () => ({
  useRouter: () =>
    createMockRouter({
      route: "/produk",
      pathname: "/produk",
      query: {},
      asPath: "/produk",
    }),
}))

describe("Product Page", () => {
  it("renders product page correctly", () => {
    const page = render(<TampilanProduk />)
    expect(page).toMatchSnapshot()
  })
})
