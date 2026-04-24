import { render, screen } from "@testing-library/react"

jest.mock("@/views/produk", () => {
  return function MockProduk() {
    return <div>Product View Mock</div>
  }
})

import halamanProdukServer from "@/pages/produk/server"

describe("Product Server Page", () => {
  const mockProducts = [
    { id: "1", name: "Product 1", price: 100000 },
  ]

  it("renders server product page correctly", () => {
    const { container } = render(<halamanProdukServer products={mockProducts} />)
    expect(container).toBeInTheDocument()
  })

  it("should render without crashing", () => {
    const page = render(<halamanProdukServer products={[]} />)
    expect(page).toMatchSnapshot()
  })
})
