jest.mock("firebase/app", () => ({
  initializeApp: jest.fn(() => ({ name: "test-app" })),
}))

import app from "@/utils/db/firebase"

describe("Firebase Configuration", () => {
  it("initializes firebase app", () => {
    expect(app).toBeDefined()
  })

  it("returns app instance", () => {
    expect(app.name).toBe("test-app")
  })

  it("firebase module loads correctly", () => {
    expect(typeof app).toBe("object")
  })
})
